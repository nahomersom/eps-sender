const axios = require('axios');

// Applicant Data
const applicantsList = [
  {
    firstName: "AMAN",
    middleName: "JARSO",
    lastName: "MUDI",
    geezFirstName: "አማን",
    geezMiddleName: "ጃርሶ",
    geezLastName: "ሙዲ",
    dateOfBirth: "1999-09-21",
    phoneNumber: "+251925494902",
    birthPlace: "Arsi",
    gender: 1
  },
 {
    firstName: "HUSEN",
    middleName: "DALU",
    lastName: "SHEKA",
    geezFirstName: "ሁሴን",
    geezMiddleName: "ዳሉ",
    geezLastName: "ሼካ",
    dateOfBirth: "1999-01-18",
    phoneNumber: "+251953778222",
    birthPlace: "Arsi",
    gender: 1
  },
 {
    firstName: "WUBYE",
    middleName: "ESHETU",
    lastName: "LETYIBELU",
    geezFirstName: "ውብዪ",
    geezMiddleName: "እሸቴ",
    geezLastName: "ለዋይበሉ",
    dateOfBirth: "2000-05-27",
    phoneNumber: "+251950090607",
    birthPlace: "Amhara",
    gender: 1
  },
   {
    firstName: "ABABU",
    middleName: "MOGES",
    lastName: "NEGESE",
    geezFirstName: "አባቡ",
    geezMiddleName: "ሞገስ",
    geezLastName: "ነገሰ",
    dateOfBirth: "2002-06-17",
    phoneNumber: "+251950090607",
    birthPlace: "Amhara",
    gender: 1
  },
  {
    firstName: "SHUKURELE",
    middleName: "AMAN",
    lastName: "MOHAMMED",
    geezFirstName: "ሹኩረለ",
    geezMiddleName: "አማን",
    geezLastName: "መሐመድ",
    dateOfBirth: "1999-04-20",
    phoneNumber: "+251911361177",
    birthPlace: "Hadiya",
    gender: 1
  },
  {
    firstName: "JEMILA",
    middleName: "YASEN",
    lastName: "EBRAHEM",
    geezFirstName: "ጀሚላ",
    geezMiddleName: "ያስን",
    geezLastName: "እብራህም",
    dateOfBirth: "1999-08-23",
    phoneNumber: "+251911361177",
    birthPlace: "Tigray",
    gender: 0
  },
   {
    firstName: "DANIEL",
    middleName: "ADANE",
    lastName: "GEBRESELASSIE",
    geezFirstName: "ዳንኤል",
    geezMiddleName: "አዳነ",
    geezLastName: "ገብረስላሴ",
    dateOfBirth: "1996-06-26",
    phoneNumber: "+251955137876",
    birthPlace: "Amhara",
    gender: 1
  },
   {
    firstName: "ABDEREZAK",
    middleName: "WERAKE",
    lastName: "ABDELA",
    geezFirstName: "አብድረዛቅ",
    geezMiddleName: "ወራቄ",
    geezLastName: "አብደላ",
    dateOfBirth: "2002-09-22",
    phoneNumber: "+251911361177",
    birthPlace: "Central Ethiopia",
    gender: 1
  },
     {
    firstName: "YISMALEM",
    middleName: "WONDAFEREW",
    lastName: "SIME",
    geezFirstName: "ይስማአለም",
    geezMiddleName: "ወንዳፍራው",
    geezLastName: "ስሜ",
    dateOfBirth: "2002-08-01",
    phoneNumber: "+251920912103",
    birthPlace: "Amhara",
    gender: 0
  },
    {
    firstName: "EBRAHIM",
    middleName: "YESUF",
    lastName: "SEYID",
    geezFirstName: "እብራሂም",
    geezMiddleName: "የሱፍ",
    geezLastName: "ሰይድ",
    dateOfBirth: "1978-10-22",
    phoneNumber: "+251911361177",
    birthPlace: "Amhara",
    gender: 1
  },
      {
    firstName: "EYEBERU",
    middleName: "GETNET",
    lastName: "ABEBE",
    geezFirstName: "እየበሩ",
    geezMiddleName: "ጌትነት",
    geezLastName: "አበበ",
    dateOfBirth: "1997-10-29",
    phoneNumber: "+251928361886",
    birthPlace: "Amhara",
    gender: 1
  },
    {
    firstName: "AMIR",
    middleName: "SURUR",
    lastName: "GASHAW",
    geezFirstName: "አሚር",
    geezMiddleName: "ሱሩር",
    geezLastName: "ጋሻው",
    dateOfBirth: "1994-11-25",
    phoneNumber: "+251911361177",
    birthPlace: "Amhara",
    gender: 1
  },
   {
    firstName: "SEADA",
    middleName: "FEKE",
    lastName: "MOHAMMED",
    geezFirstName: "ሰአዳ",
    geezMiddleName: "ፈቄ",
    geezLastName: "መሀመድ",
    dateOfBirth: "2001-10-04",
    phoneNumber: "+251903358424",
    birthPlace: "Amhara",
    gender: 0
  },
    {
    firstName: "FILAGOT",
    middleName: "ALEMAYEHU",
    lastName: "ZEWUDE",
    geezFirstName: "ፍላጎት",
    geezMiddleName: "አለማየሁ",
    geezLastName: "ዘውዴ",
    dateOfBirth: "2002-01-25",
    phoneNumber: "+251954695760",
    birthPlace: "Amhara",
    gender: 0
  },
   {
    firstName: "BIRUK",
    middleName: "TSEGAYE",
    lastName: "ASEFA",
    geezFirstName: "ብሩክ",
    geezMiddleName: "ጸጋዬ",
    geezLastName: "አሰፋ",
    dateOfBirth: "2001-12-29",
    phoneNumber: "+251967401399",
    birthPlace: "Amhara",
    gender: 1
  },
   {
    firstName: "SEMINEW",
    middleName: "SHEMELES",
    lastName: "KEBRET",
    geezFirstName: "ሰሚነው",
    geezMiddleName: "ሽመልስ",
    geezLastName: "ክብረት",
    dateOfBirth: "1999-03-05",
    phoneNumber: "+251944464545",
    birthPlace: "Amhara",
    gender: 1
  },
  {
    firstName: "JHOR",
    middleName: "SULTAN",
    lastName: "JHOR",
    geezFirstName: "ጅሆር",
    geezMiddleName: "ሱልጣን",
    geezLastName: "ጅሆር",
    dateOfBirth: "1998-12-26",
    phoneNumber: "+251967401399",
    birthPlace: "Afar",
    gender: 1
  },
   {
    firstName: "SUALIH",
    middleName: "ALIYE",
    lastName: "ABEGAZ",
    geezFirstName: "ሷሊህ",
    geezMiddleName: "አልዬ",
    geezLastName: "አበጋዝ",
    dateOfBirth: "2003-15-03",
    phoneNumber: "+251953041903",
    birthPlace: "Amhara",
    gender: 1
  },
     {
    firstName: "MEDINA",
    middleName: "ABDELA",
    lastName: "ENDRIS",
    geezFirstName: "መዲና",
    geezMiddleName: "አብደላ",
    geezLastName: "እንድሪስ",
    dateOfBirth: "2002-09-13",
    phoneNumber: "+251966720889",
    birthPlace: "Amhara",
    gender: 0
  },
];

const RETRY_DELAY = 2000;
const RETRY_429_DELAY = 10000;
const MAX_ID_ATTEMPTS = 10;
const MAX_TOTAL_RETRIES = 20;

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
     const requestPersonId = submitRes.data.serviceResponseList[0].requestPersonId;

      console.log(`🎯 [SUCCESS - ${fullName}] Reserved ID: ${reservedId} Request ID: ${reqId} Request person ID: ${requestPersonId}`);
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
