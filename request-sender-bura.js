const axios = require('axios');

// Applicant Data
const applicantsList = [
  {
    firstName: "ADUGNA",
    middleName: "BELACHEW",
    lastName: "BEYENA",
    geezFirstName: "አዱኛ",
    geezMiddleName: "በላቾ",
    geezLastName: "በየነ",
    dateOfBirth: "1999-08-14",
    phoneNumber: "+251922221774",
    birthPlace: "META WALKITE",
    gender: 1
  },
  {
    firstName: "NUHAMIN",
    middleName: "WANDEMEAGHGHU",
    lastName: "BEYENE",
    geezFirstName: "ኑሀሚን",
    geezMiddleName: "ወንድምአገኘሁ",
    geezLastName: "በየነ",
    dateOfBirth: "2006-05-03",
    phoneNumber: "+251909050153",
    birthPlace: "Addis ababa",
    gender: 0
  },
  {
    firstName: "BETELHEM",
    middleName: "MESFIN",
    lastName: "HIDOTO",
    geezFirstName: "ቤተልሔም",
    geezMiddleName: "መስፍን",
    geezLastName: "ሂዶቶ",
    dateOfBirth: "2000-07-17",
    phoneNumber: "+251929327526",
    birthPlace: "Welayita",
    gender: 0
  },
  {
    firstName: "YOHANNES",
    middleName: "BIRHANU",
    lastName: "TESEMA",
    geezFirstName: "ዮሐንስ",
    geezMiddleName: "ብርሃኑ",
    geezLastName: "ተሰማ",
    dateOfBirth: "2007-08-13",
    phoneNumber: "+251911890401",
    birthPlace: "ADDIS ABABA",
    gender: 1
  },
  {
    firstName: "ABDU",
    middleName: "SEID",
    lastName: "YIMAM",
    geezFirstName: "አብዱ",
    geezMiddleName: "ሰይድ",
    geezLastName: "ይማም",
    dateOfBirth: "2000-12-26",
    phoneNumber: "+251953728530",
    birthPlace: "WELLO",
    gender: 1
  },
  {
    firstName: "MULUGETA",
    middleName: "ESHETU",
    lastName: "RETA",
    geezFirstName: "ሙሉጌታ",
    geezMiddleName: "እሸቱ",
    geezLastName: "ረታ",
    dateOfBirth: "2001-01-14",
    phoneNumber: "+251991815729",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "NASIR",
    middleName: "MUSTEFA",
    lastName: "WAYU",
    geezFirstName: "ናስር",
    geezMiddleName: "ሙስጠፋ",
    geezLastName: "ዋዩ",
    dateOfBirth: "1993-01-17",
    phoneNumber: "+251937601517",
    birthPlace: "TIGRAY",
    gender: 1
  },
  {
    firstName: "TESFA",
    middleName: "LIMO",
    lastName: "YODO",
    geezFirstName: "ተስፋ",
    geezMiddleName: "ሊሞ",
    geezLastName: "ዮዶ",
    dateOfBirth: "1964-01-14",
    phoneNumber: "+251909050153",
    birthPlace: "WOLLEGA",
    gender: 1
  },
  {
    firstName: "ZEFITRET",
    middleName: "MITA",
    lastName: "ABESHA",
    geezFirstName: "ዘፍጥረት",
    geezMiddleName: "ምጣ",
    geezLastName: "አበሻ",
    dateOfBirth: "2000-09-25",
    phoneNumber: "+251925699496",
    birthPlace: "GAMO",
    gender: 0
  },
  {
    firstName: "SARON",
    middleName: "AYALEW",
    lastName: "HAILU",
    geezFirstName: "ሳሮን",
    geezMiddleName: "አያሌው",
    geezLastName: "ሐይሉ",
    dateOfBirth: "1997-08-28",
    phoneNumber: "+251969764213",
    birthPlace: "AMHARA",
    gender: 0
  },
  {
    firstName: "MERYEM",
    middleName: "HAYAT",
    lastName: "ABDELLAH",
    geezFirstName: "መርየም",
    geezMiddleName: "ሓያት",
    geezLastName: "ዓብደላህ",
    dateOfBirth: "2002-02-17",
    phoneNumber: "+251937601517",
    birthPlace: "TIGRAY",
    gender: 0
  },
  {
    firstName: "HAILEKIROS",
    middleName: "GEBREMESKEL",
    lastName: "WELDEYOHANNES",
    geezFirstName: "ሃይለኪሮስ",
    geezMiddleName: "ገብረመስቀል",
    geezLastName: "ወልደዮሃንስ",
    dateOfBirth: "1989-06-05",
    phoneNumber: "+251911985615",
    birthPlace: "Tigray",
    gender: 1
  },
  {
    firstName: "ABATE",
    middleName: "TIBESO",
    lastName: "WAKEYO",
    geezFirstName: "አባቴ",
    geezMiddleName: "ቲቤሶ",
    geezLastName: "ዋቃዮ",
    dateOfBirth: "2005-04-09",
    phoneNumber: "+251926048765",
    birthPlace: "ARSI NEGELE",
    gender: 1
  },
  {
    firstName: "KEDIR",
    middleName: "AHMED",
    lastName: "DEGU",
    geezFirstName: "ከድር",
    geezMiddleName: "አህመድ",
    geezLastName: "ደጉ",
    dateOfBirth: "1998-10-31",
    phoneNumber: "+251909050153",
    birthPlace: "Tigray",
    gender: 1
  },
  {
    firstName: "LETU",
    middleName: "KENA",
    lastName: "JRATA",
    geezFirstName: "ለቱ",
    geezMiddleName: "ቀና",
    geezLastName: "ጅራታ",
    dateOfBirth: "2002-04-11",
    phoneNumber: "+251922081495",
    birthPlace: "WOLLEGA",
    gender: 0
  },
  {
    firstName: "ADUGNA",
    middleName: "BELACHEW",
    lastName: "BEYENA",
    geezFirstName: "አዱኛ",
    geezMiddleName: "በላቾ",
    geezLastName: "በየነ",
    dateOfBirth: "1999-08-14",
    phoneNumber: "+251922221774",
    birthPlace: "META WALKITE",
    gender: 1
  },
  {
    firstName: "NUHAMIN",
    middleName: "WANDEMEAGHGHU",
    lastName: "BEYENE",
    geezFirstName: "ኑሀሚን",
    geezMiddleName: "ወንድምአገኘሁ",
    geezLastName: "በየነ",
    dateOfBirth: "2006-05-03",
    phoneNumber: "+251909050153",
    birthPlace: "Addis ababa",
    gender: 0
  },
  {
    firstName: "BETELHEM",
    middleName: "MESFIN",
    lastName: "HIDOTO",
    geezFirstName: "ቤተልሔም",
    geezMiddleName: "መስፍን",
    geezLastName: "ሂዶቶ",
    dateOfBirth: "2000-07-17",
    phoneNumber: "+251929327526",
    birthPlace: "Welayita",
    gender: 0
  },
  {
    firstName: "YOHANNES",
    middleName: "BIRHANU",
    lastName: "TESEMA",
    geezFirstName: "ዮሐንስ",
    geezMiddleName: "ብርሃኑ",
    geezLastName: "ተሰማ",
    dateOfBirth: "2007-08-13",
    phoneNumber: "+251911890401",
    birthPlace: "ADDIS ABABA",
    gender: 1
  },
  {
    firstName: "ABDU",
    middleName: "SEID",
    lastName: "YIMAM",
    geezFirstName: "አብዱ",
    geezMiddleName: "ሰይድ",
    geezLastName: "ይማም",
    dateOfBirth: "2000-12-26",
    phoneNumber: "+251953728530",
    birthPlace: "WELLO",
    gender: 1
  },
  {
    firstName: "MULUGETA",
    middleName: "ESHETU",
    lastName: "RETA",
    geezFirstName: "ሙሉጌታ",
    geezMiddleName: "እሸቱ",
    geezLastName: "ረታ",
    dateOfBirth: "2001-01-14",
    phoneNumber: "+251991815729",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "NASIR",
    middleName: "MUSTEFA",
    lastName: "WAYU",
    geezFirstName: "ናስር",
    geezMiddleName: "ሙስጠፋ",
    geezLastName: "ዋዩ",
    dateOfBirth: "1993-01-17",
    phoneNumber: "+251937601517",
    birthPlace: "TIGRAY",
    gender: 1
  },
  {
    firstName: "TESFA",
    middleName: "LIMO",
    lastName: "YODO",
    geezFirstName: "ተስፋ",
    geezMiddleName: "ሊሞ",
    geezLastName: "ዮዶ",
    dateOfBirth: "1964-01-14",
    phoneNumber: "+251909050153",
    birthPlace: "WOLLEGA",
    gender: 1
  },
  {
    firstName: "ZEFITRET",
    middleName: "MITA",
    lastName: "ABESHA",
    geezFirstName: "ዘፍጥረት",
    geezMiddleName: "ምጣ",
    geezLastName: "አበሻ",
    dateOfBirth: "2000-09-25",
    phoneNumber: "+251925699496",
    birthPlace: "GAMO",
    gender: 0
  },
  {
    firstName: "SARON",
    middleName: "AYALEW",
    lastName: "HAILU",
    geezFirstName: "ሳሮን",
    geezMiddleName: "አያሌው",
    geezLastName: "ሐይሉ",
    dateOfBirth: "1997-08-28",
    phoneNumber: "+251969764213",
    birthPlace: "AMHARA",
    gender: 0
  },
  {
    firstName: "MERYEM",
    middleName: "HAYAT",
    lastName: "ABDELLAH",
    geezFirstName: "መርየም",
    geezMiddleName: "ሓያት",
    geezLastName: "ዓብደላህ",
    dateOfBirth: "2002-02-17",
    phoneNumber: "+251937601517",
    birthPlace: "TIGRAY",
    gender: 0
  },
  {
    firstName: "HAILEKIROS",
    middleName: "GEBREMESKEL",
    lastName: "WELDEYOHANNES",
    geezFirstName: "ሃይለኪሮስ",
    geezMiddleName: "ገብረመስቀል",
    geezLastName: "ወልደዮሃንስ",
    dateOfBirth: "1989-06-05",
    phoneNumber: "+251911985615",
    birthPlace: "Tigray",
    gender: 1
  },
  {
    firstName: "ABATE",
    middleName: "TIBESO",
    lastName: "WAKEYO",
    geezFirstName: "አባቴ",
    geezMiddleName: "ቲቤሶ",
    geezLastName: "ዋቃዮ",
    dateOfBirth: "2005-04-09",
    phoneNumber: "+251926048765",
    birthPlace: "ARSI NEGELE",
    gender: 1
  },
  {
    firstName: "KEDIR",
    middleName: "AHMED",
    lastName: "DEGU",
    geezFirstName: "ከድር",
    geezMiddleName: "አህመድ",
    geezLastName: "ደጉ",
    dateOfBirth: "1998-10-31",
    phoneNumber: "+251909050153",
    birthPlace: "Tigray",
    gender: 1
  },
  {
    firstName: "LETU",
    middleName: "KENA",
    lastName: "JRATA",
    geezFirstName: "ለቱ",
    geezMiddleName: "ቀና",
    geezLastName: "ጅራታ",
    dateOfBirth: "2002-04-11",
    phoneNumber: "+251922081495",
    birthPlace: "WOLLEGA",
    gender: 0
  }
]

const RETRY_DELAY = 2000;
const RETRY_429_DELAY = 10000;
const MAX_ID_ATTEMPTS = 100;
const MAX_TOTAL_RETRIES = 200;

const fetchURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment';
const submitURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest';
const paymentURL = 'https://ethiopianpassportapi.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest';

const headers = {
   'Content-Type': 'application/json',
  'Origin': 'https://www.ethiopianpassportservices.gov.et',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.ethiopianpassportservices.gov.et/',
  'Sec-Ch-Ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"'
};
const mobileProfiles = [
  {
    name: 'iPhone 14 - Safari',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    platform: 'iPhone',
    secChUaPlatform: '"iOS"'
  },
  {
    name: 'Samsung Galaxy S23 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'Pixel 7 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.199 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'Huawei P40 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 12; HUAWEI P40) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'OnePlus 11 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; ONEPLUS CPH2447) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.6045.134 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'Samsung A52 - Samsung Internet',
    userAgent: 'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/22.0 Chrome/110.0.5481.77 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'iPhone SE (3rd Gen) - Safari',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1',
    platform: 'iPhone',
    secChUaPlatform: '"iOS"'
  },
  {
    name: 'Xiaomi Redmi Note 11 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 12; Redmi Note 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.90 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'Motorola Edge 30 - Chrome',
    userAgent: 'Mozilla/5.0 (Linux; Android 12; motorola edge 30) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.199 Mobile Safari/537.36',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  },
  {
    name: 'Google Pixel 5 - Firefox',
    userAgent: 'Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/109.0 Firefox/109.0',
    platform: 'Android',
    secChUaPlatform: '"Android"'
  }
];

function getMobileProfile(index) {
  return mobileProfiles[index % mobileProfiles.length];
}



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
      gender: applicant.gender,
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
  requestId
});

async function sendRequestWithRetry(workerId, applicant) {
  let attempt = 0;
  const fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`;
 // 🔐 Bind one User-Agent for this applicant
  const profile = getMobileProfile(workerId - 1); // 0-indexed

  // 🔧 Generate headers for this applicant
  function buildHeaders() {
    return {
      'Content-Type': 'application/json',
      'Origin': 'https://www.ethiopianpassportservices.gov.et',
      'User-Agent': profile.userAgent,
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.ethiopianpassportservices.gov.et/',
      'Sec-Ch-Ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': profile.secChUaPlatform
    };
  }
  while (attempt < MAX_TOTAL_RETRIES) {
    attempt++;
    try {
      console.log(`🟡 [Worker ${workerId}] ${fullName} - Attempt ${attempt}`);

      const fetchRes = await axios.post(fetchURL, {
        id: 0,
        isUrgent: true,
        RequestTypeId: 2,
        OfficeId: 24,
        ProcessDays: 2
      }, {  headers: buildHeaders(), validateStatus: () => true });

      if (fetchRes.status !== 200) {
        const delay = fetchRes.status === 429 ? RETRY_429_DELAY : RETRY_DELAY;
        console.warn(`⛔ [Worker ${workerId}] Status ${fetchRes.status} - Retrying in ${delay / 1000}s`);
        await new Promise(res => setTimeout(res, delay));
        continue;
      }

      const baseId = fetchRes.data?.appointmentResponses?.[0]?.id;
      if (!baseId) {
        console.warn(`❌ [Worker ${workerId}] No appointment ID returned`);
        await new Promise(res => setTimeout(res, RETRY_DELAY));
        continue;
      }

      console.log(`✅ [Worker ${workerId}] Got appointment ID base: ${baseId}`);

      // Parallel Submit Attempts
      const submitTasks = Array.from({ length: MAX_ID_ATTEMPTS }).map((_, offset) => {
        const tryId = baseId + offset;
        const body = buildRequestBody(tryId, applicant);
        return axios.post(submitURL, body, { headers: buildHeaders(), validateStatus: () => true })
          .then(res => ({ id: tryId, res }))
          .catch(err => ({ id: tryId, error: err }));
      });

      const settled = await Promise.allSettled(submitTasks);
      const successful = settled.find(r => r.status === 'fulfilled' && r.value?.res?.status === 200 &&
        r.value.res.data?.serviceResponseList?.[0]?.requestId);

      if (!successful) {
        console.log(`🔁 [${fullName}] All ID attempts failed. Retrying with new fetch ID...`);
        await new Promise(res => setTimeout(res, RETRY_DELAY));
        continue;
      }

      const { id: reservedId, res: submitRes } = successful.value;
      const reqId = submitRes.data.serviceResponseList[0].requestId;
    

      console.log(`🎯 [SUCCESS - ${fullName}] Reserved ID: ${reservedId} Request ID: ${reqId}`);
      // console.log("📦 Submit Response:", JSON.stringify(submitRes.data, null, 2));

      const paymentBody = buildPaymentBody(applicant, reqId);
      const paymentRes = await axios.post(paymentURL, paymentBody, {
        headers: buildHeaders(), validateStatus: () => true
      });

      if (paymentRes.status === 200) {
        const epNumber = paymentRes.data.orderId;
        const trackerNumber = paymentRes.data.traceNumber;

    console.log('\n' + '='.repeat(50));
  console.log(`🎯 SUCCESS: ${fullName}`);
  console.log(`🆔 Reserved ID: ${reservedId}`);
  console.log(`📦 Request ID: ${reqId}`);
  console.log(`💰 EP Number: ${epNumber}`);
  console.log(`📨 Tracker Number: ${trackerNumber}`);
  console.log('='.repeat(50) + '\n');


        // console.log("📦 Payment Response:", JSON.stringify(paymentRes.data, null, 2));
      } else {
        console.log(`💥 [PAYMENT - ${fullName}] Failed. Status: ${paymentRes.status}`);
      }

      break;

    } catch (err) {
      console.error(`💥 [${fullName}] Unexpected error: ${err.message}`);
      await new Promise(res => setTimeout(res, RETRY_DELAY));
    }
  }

  if (attempt >= MAX_TOTAL_RETRIES) {
    console.warn(`❌ [${fullName}] Max retries reached. Giving up.`);
  }
}

async function runAll() {
  const tasks = applicantsList.map((applicant, index) =>
    sendRequestWithRetry(index + 1, applicant)
  );
  await Promise.all(tasks);
  console.log('🎉 All workers finished.');
}

runAll();
