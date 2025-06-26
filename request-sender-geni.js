const axios = require('axios');

// Applicant Data
const applicantsList = [
  {
    firstName: "SUFIYO",
    middleName: "SALO",
    lastName: "ABAWEL",
    geezFirstName: "ሱፊዮ",
    geezMiddleName: "ሳሎ",
    geezLastName: "አባወል",
    dateOfBirth: "1999-10-17",
    phoneNumber: "+251903356204",
    birthPlace: "Oromia",
    gender: 0
  },
  {
    firstName: "SAMUEL",
    middleName: "TSEGAYE",
    lastName: "WELDE",
    geezFirstName: "ሳሙኤል",
    geezMiddleName: "ፀጋዬ",
    geezLastName: "ወልደ",
    dateOfBirth: "1982-11-27",
    phoneNumber: "+251903356204",
    birthPlace: "Amara",
    gender: 1
  },
  {
    firstName: "DESALGN",
    middleName: "DEMISE",
    lastName: "TORA",
    geezFirstName: "ደሳሌን",
    geezMiddleName: "ደምሴ",
    geezLastName: "ቶራ",
    dateOfBirth: "1993-02-19",
    phoneNumber: "+251903356204",
    birthPlace: "Wolaita",
    gender: 1
  },
  {
    firstName: "YAIKOB",
    middleName: "MERKENE",
    lastName: "TAMADE",
    geezFirstName: "ያዕቆብ",
    geezMiddleName: "መርከኔ",
    geezLastName: "ታማደ",
    dateOfBirth: "2000-07-28",
    phoneNumber: "+251903356204",
    birthPlace: "Wolaita",
    gender: 1
  },
  {
    firstName: "REMEDAN",
    middleName: "AHMED",
    lastName: "SUGETO",
    geezFirstName: "ረመዳን",
    geezMiddleName: "አህመድ",
    geezLastName: "ሱገቶ",
    dateOfBirth: "2000-04-23",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Central Ethiopia",
    gender: 1
  },
   {
    firstName: "ABAYNESH",
    middleName: "BULCHE",
    lastName: "BUCHE",
    geezFirstName: "አባይነሽ",
    geezMiddleName: "ቡልቼ",
    geezLastName: "ቡቼ",
    dateOfBirth: "2001-07-19",
    phoneNumber: "+251920515428",
    birthPlace: "Wolaita",
    gender: 0
  },
    {
    firstName: "ALI",
    middleName: "SAYID",
    lastName: "AYALEW",
    geezFirstName: "አሊ",
    geezMiddleName: "ሰይድ",
    geezLastName: "አያሌው",
    dateOfBirth: "1995-01-28",
    phoneNumber: "+251920515428",
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "NETSANET",
    middleName: "ZEWDENEH",
    lastName: "ZEBDIYOS",
    geezFirstName: "ነጻነት",
    geezMiddleName: "ዘውድነህ",
    geezLastName: "ዘብድዮስ",
    dateOfBirth: "2001-12-09",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "HELEN",
    middleName: "FITALA",
    lastName: "BIRMAJI",
    geezFirstName: "ሄለን",
    geezMiddleName: "ፍታለ",
    geezLastName: "ብርመጂ",
    dateOfBirth: "2002-05-12",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Oromiya",
    gender: 0
  },
  {
    firstName: "TEREF",
    middleName: "BEKELE",
    lastName: "GETA",
    geezFirstName: "ተረፋ",
    geezMiddleName: "በቀለ",
    geezLastName: "ጌታ",
    dateOfBirth: "2005-11-29",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "EYERUSALEM",
    middleName: "URJAKO",
    lastName: "WAKO",
    geezFirstName: "እየሩሳሌም",
    geezMiddleName: "ኡርጃኮ",
    geezLastName: "ዋኮ",
    dateOfBirth: "2002-07-19",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Debub",
    gender: 0
  },
  {
    firstName: "SAMIRA",
    middleName: "SHANKA",
    lastName: "ALARA",
    geezFirstName: "ሰሚራ",
    geezMiddleName: "ሻንቃ",
    geezLastName: "አላራ",
    dateOfBirth: "2002-07-19",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Debub",
    gender: 0
  },
  {
    firstName: "MULUNESH",
    middleName: "SANKURA",
    lastName: "TIKA",
    geezFirstName: "ሙሉነሽ",
    geezMiddleName: "ሳንኩራ",
    geezLastName: "ትካ",
    dateOfBirth: "2002-11-19",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "TESHIME",
    middleName: "CHEMISO",
    lastName: "CHEMA",
    geezFirstName: "ተሽሚ",
    geezMiddleName: "ጨምሶ",
    geezLastName: "ጨመአ",
    dateOfBirth: "2000-03-29",
    phoneNumber: "+251903356204", // Used from previous as none provided
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "TSION",
    middleName: "ABADISA",
    lastName: "OCHE",
    geezFirstName: "ፃዮን",
    geezMiddleName: "አባድሡ",
    geezLastName: "ኦቼ",
    dateOfBirth: "2000-02-15",
    phoneNumber: "+251914867859",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "MABIRATU",
    middleName: "DESTA",
    lastName: "GELO",
    geezFirstName: "ማብሪቱ",
    geezMiddleName: "ደስታ",
    geezLastName: "ጌኤሎ",
    dateOfBirth: "1998-06-01",
    phoneNumber: "+251934421088",
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "NETSANET",
    middleName: "TAFESE",
    lastName: "KURKA",
    geezFirstName: "ነፃነት",
    geezMiddleName: "ታፈሰ",
    geezLastName: "ኩሪካ",
    dateOfBirth: "1999-09-19",
    phoneNumber: "+251932363790",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "JAFAR",
    middleName: "SHERIF",
    lastName: "SULTAN",
    geezFirstName: "ጃፋር",
    geezMiddleName: "ሸሪፋ",
    geezLastName: "ሱልጣን",
    dateOfBirth: "1999-01-14",
    phoneNumber: "+251934158324",
    birthPlace: "Wolkete",
    gender: 1
  },
  {
    firstName: "TESFU",
    middleName: "GEBIREMARIYAM",
    lastName: "TEKLEHAYMANOT",
    geezFirstName: "ተስፉ",
    geezMiddleName: "ገብረማርያም",
    geezLastName: "ተክለሃይማኖት",
    dateOfBirth: "1982-10-05",
    phoneNumber: "+251921144072",
    birthPlace: "Freweyni City",
    gender: 1
  },
  {
    firstName: "SUMAYA",
    middleName: "MUSTEFA",
    lastName: "FEKEDE",
    geezFirstName: "ሱመያ",
    geezMiddleName: "ሙስጠፋ",
    geezLastName: "ከበደ",
    dateOfBirth: "1999-10-01",
    phoneNumber: "+251903042143",
    birthPlace: "Saki",
    gender: 0
  },
  {
    firstName: "ABDURAMAN",
    middleName: "AMANO",
    lastName: "BURKA",
    geezFirstName: "አብዱረማን",
    geezMiddleName: "አማኖ",
    geezLastName: "ቡርቃ",
    dateOfBirth: "2000-04-09",
    phoneNumber: "+251965120319",
    birthPlace: "Arsi",
    gender: 1
  },
  {
    firstName: "ASHEBIR",
    middleName: "WOLTAMO",
    lastName: "WOTNGO",
    geezFirstName: "አሸብር",
    geezMiddleName: "ወልታሞ",
    geezLastName: "ወታንጎ",
    dateOfBirth: "2000-06-25",
    phoneNumber: "+251969758013",
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "WOYINSHET",
    middleName: "YIGERMAL",
    lastName: "ATALAY",
    geezFirstName: "ወይንሸት",
    geezMiddleName: "ይገርማል",
    geezLastName: "አታላይ",
    dateOfBirth: "1997-10-04",
    phoneNumber: "+251997239190",
    birthPlace: "Amhara, Misrak Gojam",
    gender: 0
  },
  {
    firstName: "DAJANE",
    middleName: "TOLOSA",
    lastName: "BARAKA",
    geezFirstName: "ደጀኔ",
    geezMiddleName: "ቶሎሳ",
    geezLastName: "በረካ",
    dateOfBirth: "1999-12-02",
    phoneNumber: "+251974260495",
    birthPlace: "Oromiya, Arsi",
    gender: 1
  },
  {
    firstName: "DERARTU",
    middleName: "GIRMA",
    lastName: "WAKUMA",
    geezFirstName: "ደራርቱ",
    geezMiddleName: "ግርማ",
    geezLastName: "ዋኩማ",
    dateOfBirth: "1994-08-20",
    phoneNumber: "+251919762485",
    birthPlace: "East Wallega",
    gender: 0
  },
  {
    firstName: "TESFAYE",
    middleName: "DAMTO",
    lastName: "ABDETA",
    geezFirstName: "ተስፋዬ",
    geezMiddleName: "ዳምጦ",
    geezLastName: "አብደታ",
    dateOfBirth: "1981-08-23",
    phoneNumber: "+251911388665",
    birthPlace: "Gorosole",
    gender: 1
  },
  {
    firstName: "HABITAM",
    middleName: "HUSSEN",
    lastName: "ALE",
    geezFirstName: "ሃብታም",
    geezMiddleName: "ሁሠን",
    geezLastName: "አለ",
    dateOfBirth: "2001-11-15",
    phoneNumber: "+251940075914",
    birthPlace: "Amhara (South Wollo)",
    gender: 0
  },
  {
    firstName: "ABUSH",
    middleName: "MELAKU",
    lastName: "DINKU",
    geezFirstName: "አቡሽ",
    geezMiddleName: "መላኩ",
    geezLastName: "ድንኩ",
    dateOfBirth: "2000-01-20",
    phoneNumber: "+251916282919",
    birthPlace: "South Ethiopia (Wolaita)",
    gender: 1
  },
   {
    firstName: "ESTEFANOS",
    middleName: "AMANUEL",
    lastName: "JARSA",
    geezFirstName: "እሲጣፋኖስ",
    geezMiddleName: "አማኑኤል",
    geezLastName: "ጃርሳ",
    dateOfBirth: "2003-05-16",
    phoneNumber: "+251916282919",
    birthPlace: "South Ethiopia (Wolaita)",
    gender: 1
  },
   {
    firstName: "AMRIYYA",
    middleName: "SURUR",
    lastName: "MOHAMMAD",
    geezFirstName: "አሚሪያ",
    geezMiddleName: "ሱሩር",
    geezLastName: "ሙሀመድ",
    dateOfBirth: "1999-26-16",
    phoneNumber: "+251916282919",
    birthPlace: "Oromia",
    gender: 0
  },
     {
    firstName: "HENOK",
    middleName: "ADDISE",
    lastName: "GERESO",
    geezFirstName: "ሄኖክ",
    geezMiddleName: "አድሴ",
    geezLastName: "ገሬሶ",
    dateOfBirth: "2005-11-22",
    phoneNumber: "+251916282919",
    birthPlace: "Sidama",
    gender: 1
  },
];
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
