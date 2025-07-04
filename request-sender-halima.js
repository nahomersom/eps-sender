const axios = require('axios');

// Applicant Data
const applicantsList = [
  {
    firstName: "TESFAYE",
    middleName: "MENGISTIE",
    lastName: "TEGEGNE",
    geezFirstName: "ተስፋዬ",
    geezMiddleName: "መንግስቴ",
    geezLastName: "ተገኘ",
    dateOfBirth: "1999-06-02",
    phoneNumber: "+251947184048", // Used from next available
    birthPlace: "Mekdela",
    gender: 1
  },
  {
    firstName: "ADANECH",
    middleName: "TEMESGEN",
    lastName: "MULETA",
    geezFirstName: "አዳነች",
    geezMiddleName: "ተመስገን",
    geezLastName: "ሙለታ",
    dateOfBirth: "2004-10-10",
    phoneNumber: "+251947184048", // Used from next available
    birthPlace: "Asosa",
    gender: 0
  },
  {
    firstName: "FATUMA",
    middleName: "HUSEN",
    lastName: "AHMED",
    geezFirstName: "ፋጡማ",
    geezMiddleName: "ሁሴን",
    geezLastName: "አህመድ",
    dateOfBirth: "1999-04-11",
    phoneNumber: "+251947184048", // Used from next available
    birthPlace: "Oromiya",
    gender: 0
  },
  {
    firstName: "HASNA",
    middleName: "ABDU",
    lastName: "ABAGARO",
    geezFirstName: "ሀስና",
    geezMiddleName: "አብዱ",
    geezLastName: "አባጋሮ",
    dateOfBirth: "1999-01-26",
    phoneNumber: "+251947184048", // Used from next available
    birthPlace: "Gurage",
    gender: 0
  },
  {
    firstName: "BIRUK",
    middleName: "KETEMA",
    lastName: "JEMANEH",
    geezFirstName: "ብሩክ",
    geezMiddleName: "ከተማ",
    geezLastName: "��ማነህ",
    dateOfBirth: "2003-01-22",
    phoneNumber: "+251947184048",
    birthPlace: "Addis Ababa",
    gender: 1
  },
  {
    firstName: "YORDANOS",
    middleName: "BEZABEH",
    lastName: "DESEYE",
    geezFirstName: "ዮርዳኖስ",
    geezMiddleName: "በዛብህ",
    geezLastName: "ደስየ",
    dateOfBirth: "2004-11-06",
    phoneNumber: "+251922857749",
    birthPlace: "Wolo",
    gender: 0
  },
  {
    firstName: "HALIMA",
    middleName: "MOHAMMED",
    lastName: "DAMETEW",
    geezFirstName: "ሀሊማ",
    geezMiddleName: "መሀመድ",
    geezLastName: "ዳምጠው",
    dateOfBirth: "1983-07-10",
    phoneNumber: "+251940664840",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "SEMERIYA",
    middleName: "JEMAL",
    lastName: "HASSEN",
    geezFirstName: "ሰመሪያ",
    geezMiddleName: "ጀማል",
    geezLastName: "ሀሰን",
    dateOfBirth: "1999-07-31",
    phoneNumber: "+251900095238",
    birthPlace: "Kibet",
    gender: 0
  },
  {
    firstName: "SAMUEL",
    middleName: "SISAY",
    lastName: "ASEFA",
    geezFirstName: "ሳሙኤል",
    geezMiddleName: "ሲሳይ",
    geezLastName: "አሰፋ",
    dateOfBirth: "2001-06-17",
    phoneNumber: "+251969163636",
    birthPlace: "Oromiya",
    gender: 1
  },
  {
    firstName: "MELKAMU",
    middleName: "ZEMINA",
    lastName: "AYALA",
    geezFirstName: "መልካሙ",
    geezMiddleName: "ዘሚና",
    geezLastName: "አያሌ",
    dateOfBirth: "2002-03-12",
    phoneNumber: "+251910533259",
    birthPlace: "Wolayta",
    gender: 1
  },
  {
    firstName: "KIDANU",
    middleName: "GEB MEDHN",
    lastName: "SYFE",
    geezFirstName: "ኪዳኑ",
    geezMiddleName: "ገብር መድህን",
    geezLastName: "ሰይፍ",
    dateOfBirth: "2000-11-12",
    phoneNumber: "+251907233132",
    birthPlace: "Welayta",
    gender: 1
  },
  {
    firstName: "SEMIRA",
    middleName: "MENUR",
    lastName: "SANO",
    geezFirstName: "ሰሚራ",
    geezMiddleName: "መኑር",
    geezLastName: "ሳኖ",
    dateOfBirth: "2001-05-16",
    phoneNumber: "+251949416050",
    birthPlace: "Oromiya, Addis Ababa",
    gender: 0
  },
  {
    firstName: "ANWAR",
    middleName: "MENUR",
    lastName: "SANO",
    geezFirstName: "አንዋር",
    geezMiddleName: "መኑር",
    geezLastName: "ሳኖ",
    dateOfBirth: "1996-05-17",
    phoneNumber: "+251920270245",
    birthPlace: "Debub, Addis Ababa",
    gender: 1
  },
  {
    firstName: "ZAHARA",
    middleName: "MOHAMMED",
    lastName: "SEID",
    geezFirstName: "ዘሀራ",
    geezMiddleName: "መሀመድ",
    geezLastName: "ሰይድ",
    dateOfBirth: "", // Missing date
    phoneNumber: "+251912181168",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "SEADA",
    middleName: "MUHYE",
    lastName: "SIRAJ",
    geezFirstName: "ሰአዳ",
    geezMiddleName: "ሙሄ",
    geezLastName: "ሲራጅ",
    dateOfBirth: "1998-12-13",
    phoneNumber: "+251969943479",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "ZUMERA",
    middleName: "YESUF",
    lastName: "ADEM",
    geezFirstName: "ዙምራ",
    geezMiddleName: "የሱፍ",
    geezLastName: "አደም",
    dateOfBirth: "1999-11-14",
    phoneNumber: "+251914039510",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "MERHAMU",
    middleName: "AHMED",
    lastName: "BASHIR",
    geezFirstName: "መርሀሙ",
    geezMiddleName: "አህመድ",
    geezLastName: "በሽር",
    dateOfBirth: "1991-09-12",
    phoneNumber: "+251919050607",
    birthPlace: "Oromiya",
    gender: 1
  },
  {
    firstName: "MOHAMMED",
    middleName: "ALIY",
    lastName: "HASSEN",
    geezFirstName: "መሀመድ",
    geezMiddleName: "አልይ",
    geezLastName: "ሁሴን",
    dateOfBirth: "1997-04-18",
    phoneNumber: "+2518979798930", // Invalid number, needs verification
    birthPlace: "Amhara",
    gender: 1
  },
  {
    firstName: "WUDE",
    middleName: "NEWAY",
    lastName: "ABERA",
    geezFirstName: "ውዴ",
    geezMiddleName: "ነዋይ",
    geezLastName: "አበራ",
    dateOfBirth: "2002-01-13",
    phoneNumber: "+251912129168",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "BETELHEM",
    middleName: "BISRAT",
    lastName: "SAHLE",
    geezFirstName: "ቤተልሄም",
    geezMiddleName: "ብስራት",
    geezLastName: "ሳህሌ",
    dateOfBirth: "1997-03-01",
    phoneNumber: "+251943154623",
    birthPlace: "Addis Ababa",
    gender: 0
  },
  {
    firstName: "WENDIMAGEGN",
    middleName: "SHANKO",
    lastName: "SADIK",
    geezFirstName: "ወንድማገኝ",
    geezMiddleName: "ሻንቆ",
    geezLastName: "ሳድቃ",
    dateOfBirth: "1988-02-25",
    phoneNumber: "+251916345145",
    birthPlace: "Gamo",
    gender: 1
  },
  {
    firstName: "SINTAYEHU",
    middleName: "GETACHEW",
    lastName: "ABEBE",
    geezFirstName: "ስንታየሁ",
    geezMiddleName: "ጌታቸዉ",
    geezLastName: "አበበ",
    dateOfBirth: "1989-07-21",
    phoneNumber: "+251943154623", // Reused from Betelhem
    birthPlace: "Addis Ababa",
    gender: 1
  },
  {
    firstName: "HAYAT",
    middleName: "ADEM",
    lastName: "NEGA",
    geezFirstName: "ሀያት",
    geezMiddleName: "አደም",
    geezLastName: "ነጋ",
    dateOfBirth: "1999-04-04",
    phoneNumber: "+251961627465",
    birthPlace: "Amhara",
    gender: 0
  },
  {
    firstName: "ALIYII",
    middleName: "HUSSEN",
    lastName: "MOHAMMED",
    geezFirstName: "አሊይ",
    geezMiddleName: "ሁሴን",
    geezLastName: "ሙሀመድ",
    dateOfBirth: "2001-05-23",
    phoneNumber: "+251915548690",
    birthPlace: "Amhara",
    gender: 1
  },
  {
    firstName: "AMINA",
    middleName: "FIKADU",
    lastName: "SEFU",
    geezFirstName: "አሚና",
    geezMiddleName: "ፍቃዱ",
    geezLastName: "ሴፉ",
    dateOfBirth: "1999-12-29",
    phoneNumber: "+251911280319",
    birthPlace: "Shashmene",
    gender: 0
  },
  {
    firstName: "ABDURAHMAN",
    middleName: "ADEM",
    lastName: "GELETO",
    geezFirstName: "አብዱራህማን",
    geezMiddleName: "አደም",
    geezLastName: "ገለቶ",
    dateOfBirth: "2007-03-03",
    phoneNumber: "+251962085742",
    birthPlace: "Shashemene",
    gender: 1
  }
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
