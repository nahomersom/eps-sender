const axios = require('axios');

// Applicant Data
const applicantsList = [
  {
    firstName: "DINKNEH",
    middleName: "MEGERSA",
    lastName: "NEGERA",
    geezFirstName: "ድንቅነህ",
    geezMiddleName: "መገርሳ",
    geezLastName: "ነገራ",
    dateOfBirth: "2003-07-28",
    phoneNumber: "+251966792787",
    birthPlace: "Oromiya",
    gender: 1
  },
  {
    firstName: "BICHAKA",
    middleName: "TEMESGEN",
    lastName: "ITAFA",
    geezFirstName: "ብጫቃ",
    geezMiddleName: "ተመስገን",
    geezLastName: "ኢታፋ",
    dateOfBirth: "2000-02-28",
    phoneNumber: "+251972495077",
    birthPlace: "Oromiya",
    gender: 0
  },
  {
    firstName: "ABDULWAHID",
    middleName: "MUHAMED",
    lastName: "UMER",
    geezFirstName: "አብዱልዋሂድ",
    geezMiddleName: "ሙሀመድ",
    geezLastName: "ዑመር",
    dateOfBirth: "1999-02-22",
    phoneNumber: "+251909688403",
    birthPlace: "Oromiya",
    gender: 1
  },
  {
    firstName: "TERHAS",
    middleName: "HAILE",
    lastName: "GEBREKIDEN",
    geezFirstName: "ትርሀስ",
    geezMiddleName: "ሀይለ",
    geezLastName: "ገብረኪደን",
    dateOfBirth: "1999-07-30",
    phoneNumber: "+251949708565",
    birthPlace: "Tigray",
    gender: 0  // Corrected from "frmal" to female (0)
  },
  {
    firstName: "HABIB",
    middleName: "NURU",
    lastName: "ABDALJEIL",
    geezFirstName: "ሐቢብ",
    geezMiddleName: "ኑሩ",
    geezLastName: "አብደልጀሊል",
    dateOfBirth: "1991-01-24",
    phoneNumber: "+251949723709",
    birthPlace: "Tigray",
    gender: 1
  },
    {
    firstName: "FATIYA",
    middleName: "ANOSE",
    lastName: "ARFICHO",
    geezFirstName: "ፋቲያ",
    geezMiddleName: "አኖሴ",
    geezLastName: "አርፋጮ",
    dateOfBirth: "1998-07-21",
    phoneNumber: "+251933999177",
    birthPlace: "Oromiya",
    gender: 0  // Corrected from "FEMAL" to female (0)
  },
  {
    firstName: "TEUM",
    middleName: "AMARE",
    lastName: "GEBRE",
    geezFirstName: "ጥዑም",
    geezMiddleName: "አማረ",
    geezLastName: "ገብረ",
    dateOfBirth: "2001-03-30",
    phoneNumber: "+251912292219",
    birthPlace: "Tigray",
    gender: 1
  },
  {
  firstName: "MUKTAAR",
  middleName: "NAASIR",
  lastName: "ABBADIGGAA",
  geezFirstName: "ሙክታር", // Added Geez name
  geezMiddleName: "ናሲር", // Added Geez name
  geezLastName: "አባዲጋ", // Added Geez name
  dateOfBirth: "2019-05-15", // Standardized date format (assuming 2019 as it's most recent)
  phoneNumber: "+251913084217", // Formatted with +251
  birthPlace: "Oromiya",
  gender: 1 // Male = 1
},
  {
    firstName: "DANIEL",
    middleName: "ERMENO",
    lastName: "MADISO",
    geezFirstName: "ዳንኤል",
    geezMiddleName: "ኤርመኖ",
    geezLastName: "ማድሶ",
    dateOfBirth: "1999-12-25",
    phoneNumber: "+251912864119",
    birthPlace: "Hadiya",
    gender: 1 // Assuming male based on name
  },
  {
    firstName: "DANIEL",
    middleName: "ALEMAYEHU",
    lastName: "TUMORO",
    geezFirstName: "ዳንኤል",
    geezMiddleName: "አለማየሁ",
    geezLastName: "ጡሞሮ",
    dateOfBirth: "1998-05-18",
    phoneNumber: "+251926615193",
    birthPlace: "Bonosha",
    gender: 1 // Assuming male based on name
  },
  {
    firstName: "ALEMNESH",
    middleName: "ELIAS",
    lastName: "MOHAMMED",
    geezFirstName: "አለምነሽ",
    geezMiddleName: "ኤልያስ",
    geezLastName: "መሐመድ",
    dateOfBirth: "2002-04-18",
    phoneNumber: "+251912765058",
    birthPlace: "Shashogo",
    gender: 0 // Female (name ends with "esh" typically female)
  },
  {
    firstName: "SAMSON",
    middleName: "KEBEDE",
    lastName: "LEGESSE",
    geezFirstName: "ሳምሶን",
    geezMiddleName: "ከበደ",
    geezLastName: "ለገሰ",
    dateOfBirth: "1979-09-12",
    phoneNumber: "+251911437832", // Used from sender's number
    birthPlace: "Ethiopia", // Missing in original
    gender: 1 // Male (Samson)
  },
  {
    firstName: "KEDER",
    middleName: "JEMAL",
    lastName: "MUZA",
    geezFirstName: "ከድር",
    geezMiddleName: "ጀማል",
    geezLastName: "ሙዜ",
    dateOfBirth: "1997-07-19",
    phoneNumber: "+251929187078",
    birthPlace: "Selta, Maride",
    gender: 1 // Male (Keder)
  },
  {
    firstName: "HAYAT",
    middleName: "MELKINEW",
    lastName: "ZENB",
    geezFirstName: "ሀያት",
    geezMiddleName: "መልኪነው",
    geezLastName: "ዘነበ",
    dateOfBirth: "1993-04-01",
    phoneNumber: "+251911437832", // Used from sender's number
    birthPlace: "Amhara",
    gender: 0 // Female (Hayat)
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
