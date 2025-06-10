const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// === BOT CONFIG ===
const BOT_TOKEN = '7822585285:AAGbiyJHU7zgO2s41VAGsrFiYIJ8o9OSXIQ'; // Replace with your real Telegram bot token
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// === STATE TRACKING ===
const activeChats = new Set();

// === CONSTANTS ===
const RETRY_DELAY = 2000;
const RETRY_429_DELAY = 10000;
const MAX_ID_ATTEMPTS = 5;
const MAX_APPLICANTS = 5;

const fetchURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment';
const submitURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest';
const paymentURL = 'https://ethiopianpassportapi.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest';

const headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://www.ethiopianpassportservices.gov.et'
};

// === HELPERS ===
const buildRequestBody = (appointmentId, applicant) => ({
    requestId: 0,
    requestMode: 1,
    processDays: 2,
    officeId: 24,
    deliverySiteId: 1,
    requestTypeId: 2,
    appointmentIds: [appointmentId],
    userName: "",
    deliveryDate: "",
    status: 0,
    confirmationNumber: "",
    applicants: [
        {
            personId: 0,
            ...applicant,
            gender: 0,
            nationalityId: 1,
            height: "",
            eyeColor: "",
            hairColor: "Black",
            occupationId: null,
            birthPlace: applicant.birthPlace,
            birthCertificateId: "",
            photoPath: "",
            employeeID: "",
            applicationNumber: "",
            organizationID: "",
            isUnder18: false,
            isAdoption: false,
            passportNumber: "",
            isDatacorrected: false,
            passportPageId: 1,
            correctionType: 0,
            maritalStatus: 0,
            email: "",
            requestReason: 0,
            address: {
                personId: 0,
                addressId: 0,
                city: "Addis Ababa",
                region: "Addis Ababa",
                state: "",
                zone: "",
                wereda: "",
                kebele: "",
                street: "",
                houseNo: "",
                poBox: "",
                requestPlace: ""
            },
            familyRequests: []
        }
    ]
});

const buildPaymentBody = (applicant, requestId) => ({
    FirstName: applicant.firstName,
    LastName: applicant.lastName,
    Email: "",
    Phone: applicant.phoneNumber,
    Amount: 20000,
    Currency: "ETB",
    City: "Addis Ababa",
    Country: "ET",
    Channel: "Mobile",
    PaymentOptionsId: 13,
    requestId: requestId
});

async function processApplicant(applicant, chatId, index) {
    const fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`;
    let attempt = 0;

    while (attempt < 6) {
        attempt++;
        await bot.sendMessage(chatId, `🟡 [${fullName}] Attempt ${attempt} - Fetching appointment...`);

        try {
            const fetchRes = await axios.post(fetchURL, {
                id: 0,
                isUrgent: true,
                RequestTypeId: 2,
                OfficeId: 24,
                ProcessDays: 2
            }, { headers, validateStatus: () => true });

            if (fetchRes.status !== 200) {
                const wait = fetchRes.status === 429 ? RETRY_429_DELAY : RETRY_DELAY;
                await bot.sendMessage(chatId, `⛔ ${fetchRes.status} ሲስተሙ እየሰራ አይደለም error ${fetchRes.data?.message || ''}. Retrying in ${wait / 1000}s...`);
                await new Promise(res => setTimeout(res, wait));
                continue;
            }

            const baseId = fetchRes.data?.appointmentResponses?.[0]?.id;
            if (!baseId) {
                await bot.sendMessage(chatId, `❌ No appointment ID found. Retrying...`);
                await new Promise(res => setTimeout(res, RETRY_DELAY));
                continue;
            }

            await bot.sendMessage(chatId, `🆔 ቀን አግኝቻለው Appointment ID fetched for ${fullName}: ${baseId}`);


      const submitTasks = Array.from({ length: MAX_ID_ATTEMPTS }).map((_, offset) => {
        const tryId = baseId + offset;
        const body = buildRequestBody(tryId, applicant);
        return axios.post(submitURL, body, { headers, validateStatus: () => true })
          .then(res => ({ id: tryId, res }))
          .catch(err => ({ id: tryId, error: err }));
      });

      const settled = await Promise.allSettled(submitTasks);

const successful = settled.find(r =>
    r.status === 'fulfilled' &&
    r.value.res?.status === 200 &&
    r.value.res?.data?.serviceResponseList?.[0]?.requestId
);

if (successful) {
    const { res: submitRes, tryId } = successful.value;
    const reqId = submitRes.data.serviceResponseList[0].requestId;

    await bot.sendMessage(chatId, `📦 SubmitResponse ሰውየው ${fullName} ተመዝግብዋል ወደ ክፍያ እየሄድኩ ነው:\n\`\`\`\n${JSON.stringify(submitRes.data, null, 2)}\n\`\`\``, { parse_mode: 'Markdown' });

    const paymentBody = buildPaymentBody(applicant, reqId);
    const paymentRes = await axios.post(paymentURL, paymentBody, {
        headers,
        validateStatus: () => true
    });

    if (paymentRes.status === 200) {
        await bot.sendMessage(chatId, `💰 Payment succeeded ክፍያ ተከፍልዋል for ${fullName} ኢፒው ${paymentRes.data?.traceNumber}`);
        await bot.sendMessage(chatId, `📦 PaymentResponse:\n\`\`\`\n${JSON.stringify(paymentRes.data, null, 2)}\n\`\`\``, { parse_mode: 'Markdown' });
    } else {
        await bot.sendMessage(chatId, `💥 Payment failed for ${fullName} (status: ${paymentRes.status})`);
    }

    return;
}

// Fallback if none succeeded
await bot.sendMessage(chatId, `🔁 ${fullName}: All ID attempts failed. Retrying...`);
await new Promise(res => setTimeout(res, RETRY_DELAY));


            await bot.sendMessage(chatId, `🔁 ${fullName}: All ID attempts failed. Retrying...`);
            await new Promise(res => setTimeout(res, RETRY_DELAY));

        } catch (err) {
            await bot.sendMessage(chatId, `💥 ${fullName}: Error - ${err.message}`);
            await new Promise(res => setTimeout(res, RETRY_DELAY));
        }
    }
    await bot.sendMessage(chatId, `⛔ ${fullName}: 5 ቴ ሞክሬ አልተሳካም እባክዎ እንደገና ይሞክሩ.`);

    await bot.sendMessage(chatId, `⛔ ${fullName}: Stopped by user.`);
}

// === BOT EVENTS ===

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, "👋 Welcome! Send your applicant list in JSON format. Max 5 applicants. Use /stop to cancel.");
});

bot.onText(/\/stop/, msg => {
    const chatId = msg.chat.id;
    if (activeChats.has(chatId)) {
        activeChats.delete(chatId);
        bot.sendMessage(chatId, "🛑 Stopped your current processing session.");
    } else {
        bot.sendMessage(chatId, "⚠️ Nothing running for you to stop.");
    }
});

bot.on('message', async msg => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text.startsWith("/")) return;

    try {
        if (activeChats.has(chatId)) {
            await bot.sendMessage(chatId, "⚠️ Already processing. Send /stop to cancel.");
            return;
        }

        const applicants = JSON.parse(text);
        if (!Array.isArray(applicants)) throw new Error("Not a valid JSON array");

        if (applicants.length > MAX_APPLICANTS) {
            return bot.sendMessage(chatId, `⚠️ Maximum allowed is ${MAX_APPLICANTS} applicants.`);
        }

        activeChats.add(chatId);
        await bot.sendMessage(chatId, `📋 Processing ${applicants.length} applicant(s)...`);

        for (let i = 0; i < applicants.length && activeChats.has(chatId); i++) {
            await processApplicant(applicants[i], chatId, i);
        }

        activeChats.delete(chatId);
        await bot.sendMessage(chatId, "🎉 Done processing all applicants!");

    } catch (err) {
        console.error(err.message);
        bot.sendMessage(chatId, "❌ Invalid input. Please send a JSON array of up to 5 applicants.");
    }
});
