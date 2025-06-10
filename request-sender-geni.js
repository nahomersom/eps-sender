const axios = require('axios');

// Applicant Data
const applicantsList = [
       {
    firstName: "BELAYNESH",
    middleName: "MENGISTU",
    lastName: "DEKO",
    geezFirstName: "በላይነሽ",
    geezMiddleName: "መንግስቱ",
    geezLastName: "ዱኮ",
    dateOfBirth: "1999-01-18",
    phoneNumber: "+251945519203",
    birthPlace: "Wolaita",
    gender: 0
  },
  {
    firstName: "ENDALE",
    middleName: "SISAYE",
    lastName: "BANCA",
    geezFirstName: "ኢንዳለ",
    geezMiddleName: "ስሳይ",
    geezLastName: "ባንጫ",
    dateOfBirth: "2000-01-20",
    phoneNumber: "+251916548448",
    birthPlace: "Wolaita",
    gender: 1
  }, 
     {
    firstName: "ALOSHE",
    middleName: "OLOLO",
    lastName: "DEGEBO",
    geezFirstName: "አሎሽ",
    geezMiddleName: "ኦሎሎ",
    geezLastName: "ደጌቦ",
    dateOfBirth: "2001-12-24",
    phoneNumber: "+251988755255",
    birthPlace: "Wolaita",
    gender: 1
  },
        {
    firstName: "GUGUSA",
    middleName: "AKALU",
    lastName: "ZEMA",
    geezFirstName: "ጉጉሳ",
    geezMiddleName: "አካሉ",
    geezLastName: "ዘማ",
    dateOfBirth: "1999-03-20",
    phoneNumber: "+251932363790",
    birthPlace: "Wolaita",
    gender: 1
  },
  {
    firstName: "EYOB",
    middleName: "KALORE",
    lastName: "ABECHE",
    geezFirstName: "እዮብ",
    geezMiddleName: "ቃሎሬ",
    geezLastName: "አቡቼ",
    dateOfBirth: "1998-05-06",
    phoneNumber: "+251907090862",
    birthPlace: "K1mbata",
    gender: 1
  }, 
       {
    firstName: "TENSAE",
    middleName: "YOSEF",
    lastName: "ERIMIYAS",
    geezFirstName: "ትንሳኤ",
    geezMiddleName: "ዮሰፋ",
    geezLastName: "ኤርሚያስ",
    dateOfBirth: "1996-05-06",
    phoneNumber: "+251976466653",
    birthPlace: "Kambata",
    gender: 1
  },
    {
    firstName: "NEBIYAT",
    middleName: "HAFTU",
    lastName: "ATSEBAH",
    geezFirstName: "ነብያት",
    geezMiddleName: "ሃፍቱ",
    geezLastName: "አፅባሃ",
    dateOfBirth: "1996-07-14",
    phoneNumber: "+251951069841",
    birthPlace: "Ethiopia",
    gender: 0
  },
    {
    firstName: "ELISA",
    middleName: "MOLA",
    lastName: "KASAW",
    geezFirstName: "ኤልሳ",
    geezMiddleName: "ምላ",
    geezLastName: "ካሳው",
    dateOfBirth: "1992-05-10",
    phoneNumber: "+251951069841",
    birthPlace: "Wollo",
    gender: 0
  },
    {
    firstName: "HANA",
    middleName: "SHIFERE",
    lastName: "ATENAFU",
    geezFirstName: "ሀና",
    geezMiddleName: "ሽፈሪ",
    geezLastName: "አጥናፉ",
    dateOfBirth: "1992-05-20",
    phoneNumber: "+251951069841",
    birthPlace: "Wollo",
    gender: 0
  },
  {
    firstName: "TESFATSION",
    middleName: "TEFERI",
    lastName: "TANTASA",
    geezFirstName: "ተስፋጽዮን",
    geezMiddleName: "ተፈሪ",
    geezLastName: "ታንታሳ",
    dateOfBirth: "1989-10-21",
    phoneNumber: "+251930759654",
    birthPlace: "Wolaita",
    gender: 1
  },
    {
    firstName: "BATISA",
    middleName: "BEGEJO",
    lastName: "BALA",
    geezFirstName: "ባቲሳ",
    geezMiddleName: "ባጋጆ",
    geezLastName: "ባለ",
    dateOfBirth: "1992-11-04",
    phoneNumber: "+251951069841",
    birthPlace: "DAWRO",
    gender: 0
  },
  {
    firstName: "SLEAMAWIT",
    middleName: "BINIYAM",
    lastName: "TOMA",
    geezFirstName: "ሰላማዊት",
    geezMiddleName: "ቢንያም",
    geezLastName: "ቶማ",
    dateOfBirth: "2000-01-07",
    phoneNumber: "+251910306648",
    birthPlace: "Wolaita",
    gender: 0
  }, 
   
    {
    firstName: "HAFIZ",
    middleName: "MOHAMMED",
    lastName: "BELAY",
    geezFirstName: "ሀፊዝ",
    geezMiddleName: "መሀመድ",
    geezLastName: "በላይ",
    dateOfBirth: "2003-01-22",
    phoneNumber: "+251929713957",
    birthPlace: "Wollo",
    gender: 1
  }, 
 
   
    {
    firstName: "DESTA",
    middleName: "GUTU",
    lastName: "NEGASA",
    geezFirstName: "ደስታ",
    geezMiddleName: "ጉቱ",
    geezLastName: "ነጋሳአ",
    dateOfBirth: "2001-10-30",
    phoneNumber: "+251940169883",
    birthPlace: "Oromia",
    gender: 1
  }, 
   {
    firstName: "ASHEBIR",
    middleName: "HAYILU",
    lastName: "HANKEBO",
    geezFirstName: "አሸብር",
    geezMiddleName: "ሀይሉ",
    geezLastName: "ሐንቀቦ",
    dateOfBirth: "2001-10-18",
    phoneNumber: "+251988333222",
    birthPlace: "Wolaita",
    gender: 1
  }, 
     {
    firstName: "AMANUEL",
    middleName: "BEREGENE",
    lastName: "KASSA",
    geezFirstName: "አማኑኤል",
    geezMiddleName: "በርገነ",
    geezLastName: "ካሳ",
    dateOfBirth: "1994-09-11",
    phoneNumber: "+251988333222",
    birthPlace: "Wolaita",
    gender: 1
  }, 
  {
    firstName: "MELKAM",
    middleName: "ENIY",
    lastName: "ADDIS",
    geezFirstName: "መልካም",
    geezMiddleName: "እንይ",
    geezLastName: "አዲስ",
    dateOfBirth: "2002-05-06",
    phoneNumber: "+251910306648",
    birthPlace: "Addis Ababa",
    gender: 0
  }, 
   
    {
    firstName: "ESHETU",
    middleName: "ISRAEL",
    lastName: "ESAYAK",
    geezFirstName: "እሸቱ",
    geezMiddleName: "ኢስራኤል",
    geezLastName: "እስያቅ",
    dateOfBirth: "1998-12-15",
    phoneNumber: "+251900444545",
    birthPlace: "Wolaita",
    gender: 1
  },
      {
    firstName: "RAISA",
    middleName: "HUSEN",
    lastName: "YASIN",
    geezFirstName: "ራዕሣ",
    geezMiddleName: "ሁሴን",
    geezLastName: "ያስን",
    dateOfBirth: "2002-12-30",
    phoneNumber: "+251900444545",
    birthPlace: "Oromia",
    gender: 0
  },
  {
    firstName: "BOEZ",
    middleName: "MESKELE",
    lastName: "ASALE",
    geezFirstName: "ቦኤዜ",
    geezMiddleName: "መስቀሌ",
    geezLastName: "አሳሌ",
    dateOfBirth: "2004-23-01",
    phoneNumber: "+251900444545",
    birthPlace: "Wolaita",
    gender: 1
  },
     {
    firstName: "MESERET",
    middleName: "ABASHA",
    lastName: "WIZA",
    geezFirstName: "መሠረት",
    geezMiddleName: "አባሻ",
    geezLastName: "ዊዛ",
    dateOfBirth: "1999-05-18",
    phoneNumber: "+251900444545",
    birthPlace: "Gamo",
    gender: 0
  },
       {
    firstName: "USO",
    middleName: "KASIM",
    lastName: "AME",
    geezFirstName: "ኡሶ",
    geezMiddleName: "ቃሲም",
    geezLastName: "አሚ",
    dateOfBirth: "1995-02-20",
    phoneNumber: "+251900444545",
    birthPlace: "Oromia",
    gender: 1
  },
      {
    firstName: "HENOK",
    middleName: "HAFTE",
    lastName: "NABA",
    geezFirstName: "ሄኖክ",
    geezMiddleName: "ህፍቴ",
    geezLastName: "ናባ",
    dateOfBirth: "2001-10-27",
    phoneNumber: "+251900444545",
    birthPlace: "Wolatia",
    gender: 1
  },
     {
    firstName: "ABDELLA",
    middleName: "HUSO",
    lastName: "MOHAMMED",
    geezFirstName: "አብደላ",
    geezMiddleName: "ሁሶ",
    geezLastName: "መሀመድ",
    dateOfBirth: "1988-02-22",
    phoneNumber: "+251900444545",
    birthPlace: "Oromia",
    gender: 1
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
    

      console.log(`🎯 [SUCCESS - ${fullName}] Reserved ID: ${reservedId} Request ID: ${reqId}`);
      // console.log("📦 Submit Response:", JSON.stringify(submitRes.data, null, 2));

      const paymentBody = buildPaymentBody(applicant, reqId);
      const paymentRes = await axios.post(paymentURL, paymentBody, {
        headers: buildHeaders(), validateStatus: () => true
      });

      if (paymentRes.status === 200) {
        const epNumber = paymentRes.data.orderId;
        const trackerNumber = paymentRes.data.traceNumber;

        console.log(`💰 [PAYMENT - ${fullName}] Success`);
        console.log(`💰 [EP Number - ${epNumber}] Success`);
        console.log(`💰 [Tracker Number - ${trackerNumber}] Success`);


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
