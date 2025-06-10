const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// ⬇️ Replace with your bot token from @BotFather
const bot = new TelegramBot('7554096515:AAHE_o88AJQ6929_dAnsrLhVnOD_7vD6bMA', { polling: true });

// 👂 Handle /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Welcome! Please send your birth certificate or ID.\nInclude the application number in the caption like: \n\n"applicationNumber: 1234567, type: birth"`);
});
// bot.on('message', (msg) => {
//   console.log('🧪 Message received:', msg);
// });

// bot.on('document', async (msg) => {
//   console.log('📄 Document received');
//   console.log(msg.document);
// });

// bot.on('photo', async (msg) => {
//   console.log('📸 Photo received');
//   console.log(msg.photo);
// });

// bot.on('message', (msg) => {
//   console.log('📬 Message received:', JSON.stringify(msg, null, 2));
// });
// 👂 Handle document (PDF, JPEG, etc.)
bot.on('document', async (msg) => {
  console.log('📄 Document received');
  console.log(msg.document);

  try {
    const caption = msg.caption || '';
    const match = caption.match(/applicationNumber:\s*(\d+).*type:\s*(birth|id)/i);

    if (!match) {
      return bot.sendMessage(msg.chat.id, '❗ Caption must include: applicationNumber and type (birth or id).');
    }

    const [, applicationNumber, typeRaw] = match;
    const type = typeRaw.toLowerCase() === 'birth' ? '10' : '11';

    const fileId = msg.document.file_id;
    const file = await bot.getFile(fileId);
    const fileUrl = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
    const filePath = path.join(__dirname, 'temp', `${file.file_unique_id}-${msg.document.file_name}`);

    // Ensure temp folder exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Download the file
    const writer = fs.createWriteStream(filePath);
    const response = await axios.get(fileUrl, { responseType: 'stream' });
    response.data.pipe(writer);

    writer.on('finish', async () => {
      try {
        await uploadAttachment(applicationNumber, type, filePath);
        await bot.sendMessage(
          msg.chat.id,
          `✅ ${type === '10' ? 'Birth certificate' : 'ID'} uploaded for application ${applicationNumber}`
        );
      } catch (uploadErr) {
        console.error('Upload failed:', uploadErr);
        await bot.sendMessage(msg.chat.id, '❌ Upload failed.');
      } finally {
        fs.unlinkSync(filePath);
      }
    });

    writer.on('error', (err) => {
      console.error('File write failed:', err);
      bot.sendMessage(msg.chat.id, '❌ Failed to save file');
    });
  } catch (err) {
    console.error('❌ Bot error:', err);
    bot.sendMessage(msg.chat.id, '❌ Something went wrong.');
  }
});

async function uploadAttachment(personRequestId, type, filePath) {
  const form = new FormData();

  form.append('personRequestId', String(personRequestId));
  form.append(type.toString(), fs.createReadStream(filePath), {
    filename: type === '10' ? 'birth.jpg' : 'id.jpg',
    contentType: 'image/jpeg',
  });

  try {
    const response = await axios.post(
      'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/RequestAttachments/UploadAttachment',
      form,
      {
        headers: {
          ...form.getHeaders(),
          'Origin': 'https://www.ethiopianpassportservices.gov.et',
          'Referer': 'https://www.ethiopianpassportservices.gov.et/',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );

    console.log(`✅ Uploaded type ${type}:`, response.data);
  } catch (err) {
    console.error(`❌ Upload failed for type ${type}:`, err.response?.data || err.message);
  }
}
