const axios = require('axios');

// Applicant Data
const applicantsList = [

  {
    firstName: "ZETUNA",
    middleName: "ABASIMAL",
    lastName: "KETI",
    geezFirstName: "ዘቱና",
    geezMiddleName: "አብስማል",
    geezLastName: "ኬቲ",
    dateOfBirth: "2000-03-02",
    phoneNumber: "+251970787329",
    birthPlace: "GESHA",
    gender: 0
  },
  {
    firstName: "ABDUSEBUR",
    middleName: "MUKTER",
    lastName: "HASEN",
    geezFirstName: "አዘድስቡሪ",
    geezMiddleName: "ሙከታሪ",
    geezLastName: "ሀስን",
    dateOfBirth: "1999-02-25",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "BUNGULE",
    middleName: "TARIKU",
    lastName: "WEDAJO",
    geezFirstName: "ቡንጉሌ",
    geezMiddleName: "ታሪኩ",
    geezLastName: "ወዳጆ",
    dateOfBirth: "1998-11-25",
    phoneNumber: "+251908984951",
    birthPlace: "WOLLEGA",
    gender: 0
  },
  {
    firstName: "WARKINA",
    middleName: "DABALO",
    lastName: "DUBISA",
    geezFirstName: "ወርቅና",
    geezMiddleName: "ደበሎ",
    geezLastName: "ዱብሳ",
    dateOfBirth: "1999-09-26",
    phoneNumber: "+251970787329",
    birthPlace: "CHOMAN GUDURU",
    gender: 1
  },
  {
    firstName: "HUSSEN",
    middleName: "TUQAR",
    lastName: "AYALEW",
    geezFirstName: "ሁሴን",
    geezMiddleName: "ጡቃር",
    geezLastName: "አያሌው",
    dateOfBirth: "2000-11-21",
    phoneNumber: "+251913542386",
    birthPlace: "OROMIYA",
    gender: 1
  },
  {
    firstName: "GIRMA",
    middleName: "SIDA",
    lastName: "GURMU",
    geezFirstName: "ግርማ",
    geezMiddleName: "ሲዳ",
    geezLastName: "ጉርሙ",
    dateOfBirth: "1995-04-07",
    phoneNumber: "+251970787329",
    birthPlace: "WELMARA",
    gender: 1
  },
  {
    firstName: "ABDI",
    middleName: "JEMAL",
    lastName: "MAMADA",
    geezFirstName: "አብዲ",
    geezMiddleName: "ጀማል",
    geezLastName: "ማሀመድ",
    dateOfBirth: "1999-11-19",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "SHIMALIS",
    middleName: "TADESE",
    lastName: "MOKONIN",
    geezFirstName: "ሽመልስ",
    geezMiddleName: "ታደሰ",
    geezLastName: "ሞኮንን",
    dateOfBirth: "2002-01-17",
    phoneNumber: "+251970787329",
    birthPlace: "BAKO",
    gender: 1
  },
  {
    firstName: "SULTAN",
    middleName: "MOHAMMED",
    lastName: "GEMECHU",
    geezFirstName: "ሱልጣን",
    geezMiddleName: "መሀመድ",
    geezLastName: "ገመቹ",
    dateOfBirth: "2001-12-19",
    phoneNumber: "+251930805034",
    birthPlace: "GEDEMSA",
    gender: 1
  },
  {
    firstName: "KAMILA",
    middleName: "JEMAL",
    lastName: "BORISHA",
    geezFirstName: "ካሚላ",
    geezMiddleName: "ጀማል",
    geezLastName: "ቦሪሻ",
    dateOfBirth: "1999-06-08",
    phoneNumber: "+251970787329",
    birthPlace: "JIMMA",
    gender: 0
  },
  {
    firstName: "YASIN",
    middleName: "DAREGE",
    lastName: "NIGUS",
    geezFirstName: "ያሲን",
    geezMiddleName: "ዳርጌ",
    geezLastName: "ንጉስ",
    dateOfBirth: "1989-06-30",
    phoneNumber: "+251920211004",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "YOSEF",
    middleName: "FIKRE",
    lastName: "GETACHEW",
    geezFirstName: "ዮሴፍ",
    geezMiddleName: "ፍቅሬ",
    geezLastName: "ጌታቸው",
    dateOfBirth: "2001-09-16",
    phoneNumber: "+251983901544",
    birthPlace: "HADIYA",
    gender: 1
  },
  {
    firstName: "ABDULWAHID",
    middleName: "SIRAAJ",
    lastName: "HASA",
    geezFirstName: "አብድልዋሐሂድ",
    geezMiddleName: "ሴራጂ",
    geezLastName: "ሀስን",
    dateOfBirth: "1997-05-16",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "TAMIRU",
    middleName: "LEMA",
    lastName: "KEDIDA",
    geezFirstName: "ታምሩ",
    geezMiddleName: "ለማ",
    geezLastName: "ቀዲዳ",
    dateOfBirth: "2000-11-23",
    phoneNumber: "+251970787329",
    birthPlace: "CHOBI",
    gender: 1
  },
  {
    firstName: "ZETUNA",
    middleName: "ABASIMAL",
    lastName: "KETI",
    geezFirstName: "ዘቱና",
    geezMiddleName: "አብስማል",
    geezLastName: "ኬቲ",
    dateOfBirth: "2000-03-02",
    phoneNumber: "+251970787329",
    birthPlace: "GESHA",
    gender: 0
  },
  {
    firstName: "ABDUSEBUR",
    middleName: "MUKTER",
    lastName: "HASEN",
    geezFirstName: "አዘድስቡሪ",
    geezMiddleName: "ሙከታሪ",
    geezLastName: "ሀስን",
    dateOfBirth: "1999-02-25",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "BUNGULE",
    middleName: "TARIKU",
    lastName: "WEDAJO",
    geezFirstName: "ቡንጉሌ",
    geezMiddleName: "ታሪኩ",
    geezLastName: "ወዳጆ",
    dateOfBirth: "1998-11-25",
    phoneNumber: "+251908984951",
    birthPlace: "WOLLEGA",
    gender: 0
  },
  {
    firstName: "WARKINA",
    middleName: "DABALO",
    lastName: "DUBISA",
    geezFirstName: "ወርቅና",
    geezMiddleName: "ደበሎ",
    geezLastName: "ዱብሳ",
    dateOfBirth: "1999-09-26",
    phoneNumber: "+251970787329",
    birthPlace: "CHOMAN GUDURU",
    gender: 1
  },
  {
    firstName: "HUSSEN",
    middleName: "TUQAR",
    lastName: "AYALEW",
    geezFirstName: "ሁሴን",
    geezMiddleName: "ጡቃር",
    geezLastName: "አያሌው",
    dateOfBirth: "2000-11-21",
    phoneNumber: "+251913542386",
    birthPlace: "OROMIYA",
    gender: 1
  },
  {
    firstName: "GIRMA",
    middleName: "SIDA",
    lastName: "GURMU",
    geezFirstName: "ግርማ",
    geezMiddleName: "ሲዳ",
    geezLastName: "ጉርሙ",
    dateOfBirth: "1995-04-07",
    phoneNumber: "+251970787329",
    birthPlace: "WELMARA",
    gender: 1
  },
  {
    firstName: "ABDI",
    middleName: "JEMAL",
    lastName: "MAMADA",
    geezFirstName: "አብዲ",
    geezMiddleName: "ጀማል",
    geezLastName: "ማሀመድ",
    dateOfBirth: "1999-11-19",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "SHIMALIS",
    middleName: "TADESE",
    lastName: "MOKONIN",
    geezFirstName: "ሽመልስ",
    geezMiddleName: "ታደሰ",
    geezLastName: "ሞኮንን",
    dateOfBirth: "2002-01-17",
    phoneNumber: "+251970787329",
    birthPlace: "BAKO",
    gender: 1
  },
  {
    firstName: "SULTAN",
    middleName: "MOHAMMED",
    lastName: "GEMECHU",
    geezFirstName: "ሱልጣን",
    geezMiddleName: "መሀመድ",
    geezLastName: "ገመቹ",
    dateOfBirth: "2001-12-19",
    phoneNumber: "+251930805034",
    birthPlace: "GEDEMSA",
    gender: 1
  },
  {
    firstName: "KAMILA",
    middleName: "JEMAL",
    lastName: "BORISHA",
    geezFirstName: "ካሚላ",
    geezMiddleName: "ጀማል",
    geezLastName: "ቦሪሻ",
    dateOfBirth: "1999-06-08",
    phoneNumber: "+251970787329",
    birthPlace: "JIMMA",
    gender: 0
  },
  {
    firstName: "YASIN",
    middleName: "DAREGE",
    lastName: "NIGUS",
    geezFirstName: "ያሲን",
    geezMiddleName: "ዳርጌ",
    geezLastName: "ንጉስ",
    dateOfBirth: "1989-06-30",
    phoneNumber: "+251920211004",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "YOSEF",
    middleName: "FIKRE",
    lastName: "GETACHEW",
    geezFirstName: "ዮሴፍ",
    geezMiddleName: "ፍቅሬ",
    geezLastName: "ጌታቸው",
    dateOfBirth: "2001-09-16",
    phoneNumber: "+251983901544",
    birthPlace: "HADIYA",
    gender: 1
  },
  {
    firstName: "ABDULWAHID",
    middleName: "SIRAAJ",
    lastName: "HASA",
    geezFirstName: "አብድልዋሐሂድ",
    geezMiddleName: "ሴራጂ",
    geezLastName: "ሀስን",
    dateOfBirth: "1997-05-16",
    phoneNumber: "+251970787329",
    birthPlace: "BALE",
    gender: 1
  },
  {
    firstName: "TAMIRU",
    middleName: "LEMA",
    lastName: "KEDIDA",
    geezFirstName: "ታምሩ",
    geezMiddleName: "ለማ",
    geezLastName: "ቀዲዳ",
    dateOfBirth: "2000-11-23",
    phoneNumber: "+251970787329",
    birthPlace: "CHOBI",
    gender: 1
  },

  {
    firstName: "EMEBET",
    middleName: "SHENKUTE",
    lastName: "GETAHUN",
    geezFirstName: "እመቤት",
    geezMiddleName: "ሸንቁጤ",
    geezLastName: "ጌታሁን",
    dateOfBirth: "2001-01-11",
    phoneNumber: "+251972075683",
    birthPlace: "NORTHERN SHEWA",
    gender: 0
  },
  {
    firstName: "BAYUSH",
    middleName: "ASEFAW",
    lastName: "INDASHAW",
    geezFirstName: "ባዩሽ",
    geezMiddleName: "አስፋው",
    geezLastName: "እንዳሻው",
    dateOfBirth: "1960-01-19",
    phoneNumber: "+251970354344",
    birthPlace: "WOLLO",
    gender: 0
  },
  {
    firstName: "TADESSE",
    middleName: "DAMTEW",
    lastName: "CHECOL",
    geezFirstName: "ታደሰ",
    geezMiddleName: "ዳምጠው",
    geezLastName: "ቸኮል",
    dateOfBirth: "1998-09-30",
    phoneNumber: "+251919934376",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "NEJAT",
    middleName: "SEYFEDIN",
    lastName: "NURI",
    geezFirstName: "ነጃት",
    geezMiddleName: "ሰይፈዲን",
    geezLastName: "ኑሪ",
    dateOfBirth: "2001-09-28",
    phoneNumber: "+251926270591",
    birthPlace: "SELTE",
    gender: 0
  },
  {
    firstName: "AUMR",
    middleName: "AHMED",
    lastName: "MEHEYA",
    geezFirstName: "ኡመር",
    geezMiddleName: "አህመድ",
    geezLastName: "መህያ",
    dateOfBirth: "1999-10-21",
    phoneNumber: "+251953013114",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "SEFINA",
    middleName: "BEKERE",
    lastName: "IDIRIS",
    geezFirstName: "ሰፊና",
    geezMiddleName: "በከሬ",
    geezLastName: "እድሪስ",
    dateOfBirth: "2000-01-12",
    phoneNumber: "+251946955243",
    birthPlace: "OROMIYA",
    gender: 0
  },
  {
    firstName: "ZERIHUN",
    middleName: "ADEFRS",
    lastName: "BELETE",
    geezFirstName: "ዘሪሁን",
    geezMiddleName: "አደፍርስ",
    geezLastName: "በለጠ",
    dateOfBirth: "1996-12-11",
    phoneNumber: "+251910288015",
    birthPlace: "AMHARA",
    gender: 1
  },
  {
    firstName: "RIYAD",
    middleName: "ABE",
    lastName: "MUHAMMED",
    geezFirstName: "ሪያድ",
    geezMiddleName: "አቤ",
    geezLastName: "ሙሀመድ",
    dateOfBirth: "2000-09-26",
    phoneNumber: "+251949520123",
    birthPlace: "ARSI",
    gender: 1
  },
  {
    firstName: "WOLETETSADIK",
    middleName: "TESFAYE",
    lastName: "WOLDEMARIAM",
    geezFirstName: "ወለተፃዲቅ",
    geezMiddleName: "ተስፋዬ",
    geezLastName: "ወልደማርያም",
    dateOfBirth: "2003-07-31",
    phoneNumber: "+251934502284",
    birthPlace: "MOLALE",
    gender: 0
  },
  {
    firstName: "ABAS",
    middleName: "KASIM",
    lastName: "GEDA",
    geezFirstName: "አባስ",
    geezMiddleName: "ቃሲም",
    geezLastName: "ገዳ",
    dateOfBirth: "1988-11-12",
    phoneNumber: "+251933466094",
    birthPlace: "ARSI",
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
