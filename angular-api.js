const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const RETRY_DELAY = 2000;
const RETRY_429_DELAY = 10000;
const MAX_ID_ATTEMPTS = 5;
const MAX_APPLICANTS = 5;

const fetchURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment';
const submitURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest';
const paymentURL = 'https://ethiopianpassportapi.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest';

const headers = {
   'Content-Type': 'application/json',
  'Origin': 'https://www.ethiopianpassportservices.gov.et',
  'User-Agent':   'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1',
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

app.use(cors());
app.use(express.json());

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
  requestId: requestId
});

app.post('/submit-applicants', async (req, res) => {
  const applicants = req.body;

  if (!Array.isArray(applicants) || applicants.length > MAX_APPLICANTS) {
    return res.status(400).json({ error: 'Invalid applicant data (max 5 allowed)' });
  }

  const results = [];

  for (let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    const fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`;
    let attempt = 0;
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
    console.log(`📋 Processing ${fullName}`);

    while (true) {
      attempt++;
      console.log(`🟡 Attempt ${attempt} - Fetching appointment for ${fullName}...`);

      try {
        const fetchRes = await axios.post(fetchURL, {
          id: 0,
          isUrgent: true,
          RequestTypeId: 2,
          OfficeId: 24,
          ProcessDays: 2
        }, { headers: buildHeaders(), });

        if (fetchRes.status !== 200) {
          const wait = fetchRes.status === 429 ? RETRY_429_DELAY : RETRY_DELAY;
          console.log(`⛔ ${fullName} - ${fetchRes.status} Error: ${fetchRes.data?.message || 'Unknown'} | Retrying in ${wait / 1000}s...`);
          await new Promise(res => setTimeout(res, wait));
          continue;
        }

        const baseId = fetchRes.data?.appointmentResponses?.[0]?.id;
        if (!baseId) {
          console.log(`❌ No appointment ID found for ${fullName}. Retrying...`);
          await new Promise(res => setTimeout(res, RETRY_DELAY));
          continue;
        }

        console.log(`🆔 Appointment ID fetched for ${fullName}: ${baseId}`);

     const submitPromises = [];

for (let offset = 0; offset < MAX_ID_ATTEMPTS; offset++) {
  const tryId = baseId + offset;
  const submitBody = buildRequestBody(tryId, applicant);

  submitPromises.push(
    axios.post(submitURL, submitBody, { headers: buildHeaders(), }).then(submitRes => {
      const msg = submitRes.data?.message || '';
      const reqId = submitRes.data?.serviceResponseList?.[0]?.requestId;

      if (submitRes.status === 200 && reqId) {
        return { success: true, tryId, submitRes, reqId };
      } else {
        return { success: false, tryId, msg };
      }
    }).catch(err => ({ success: false, tryId, msg: err.message }))
  );
}

const resultsSet = await Promise.allSettled(submitPromises);

const successful = resultsSet.find(r => r.status === 'fulfilled' && r.value.success);

if (successful) {
  const { tryId, submitRes, reqId } = successful.value;
  console.log(`✅ Successfully reserved ID ${tryId} for ${fullName}`);

  const paymentBody = buildPaymentBody(applicant, reqId);
  const paymentRes = await axios.post(paymentURL, paymentBody, { headers: buildHeaders(), });

  results.push({
    fullName,
    appointmentId: tryId,
    submitResponse: submitRes.data,
    paymentResponse: paymentRes.data,
    traceNumber: paymentRes.data?.traceNumber
  });
} else {
  console.log(`❌ All appointment IDs taken for ${fullName}`);
}


        break;

      } catch (err) {
        console.log(`💥 ${fullName} error: ${err.message}`);
        await new Promise(res => setTimeout(res, RETRY_DELAY));
      }
    }

    console.log(`✅ Done processing ${fullName}\n`);
  }

  res.json({ results });
});

app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});


