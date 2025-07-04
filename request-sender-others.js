const axios = require('axios');

const WORKERS_PER_APPLICANT = 2;
const MAX_ID_ATTEMPTS = 50;
const MAX_TOTAL_RETRIES = 200;
const RETRY_DELAY = 2000;
const RETRY_429_DELAY = 15000;

const fetchURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment';
const submitURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest';
const paymentURL = 'https://ethiopianpassportapi.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest';

// ... your applicantsList and mobileProfiles remain unchanged ...
const applicantsList = [
  {
    firstName: "MADINA",
    middleName: "SEYID",
    lastName: "BELAY",
    geezFirstName: "መድና",
    geezMiddleName: "ሰይድ",
    geezLastName: "በላይ",
    dateOfBirth: "2001-05-18",
    phoneNumber: "+251968304623",
    birthPlace: "oromia",
    gender: 0
  },
    {
    firstName: "DEGIMAWIT",
    middleName: "WOLDE",
    lastName: "GIBORE",
    geezFirstName: "ደግማዊት",
    geezMiddleName: "ወልዴ",
    geezLastName: "ግቦሬ",
    dateOfBirth: "2001-11-18",
    phoneNumber: "+251968304623",
    birthPlace: "MUDULA",
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
    phoneNumber: "+251968304623",
    birthPlace: "Debub",
    gender: 0
  },
  {
    firstName: "EYERUSALEM",
    middleName: "URJAKO",
    lastName: "WAKO",
    geezFirstName: "እየሩሳሌም",
    geezMiddleName: "ኡርጃኮ",
    geezLastName: "ዋኮ",
    dateOfBirth: "2002-07-19",
    phoneNumber: "+251968304623",
    birthPlace: "Debub",
    gender: 0
  },
  {
    firstName: "SARA",
    middleName: "TADESSE",
    lastName: "SODENO",
    geezFirstName: "ሣራ",
    geezMiddleName: "ታደሰ",
    geezLastName: "ሶደኖ",
    dateOfBirth: "2003-09-20",
    phoneNumber: "+251929129150",
    birthPlace: "KARARA",
    gender: 0
  },
  {
    firstName: "DEGIMAWIT",
    middleName: "WOLDE",
    lastName: "GIBORE",
    geezFirstName: "ደግማዊት",
    geezMiddleName: "ወልዴ",
    geezLastName: "ግቦሬ",
    dateOfBirth: "2001-11-18",
    phoneNumber: "+251968304623",
    birthPlace: "MUDULA",
    gender: 0
  },
  {
    firstName: "ABDU",
    middleName: "MUHAMMAD",
    lastName: "YESUF",
    geezFirstName: "አብዱ",
    geezMiddleName: "መሐመድ",
    geezLastName: "የሱፍ",
    dateOfBirth: "1999-09-22",
    phoneNumber: "+251919192137",
    birthPlace: "Oromiya",
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
    firstName: "DEGIMAWIT",
    middleName: "WOLDE",
    lastName: "GIBORE",
    geezFirstName: "ደግማዊት",
    geezMiddleName: "ወልዴ",
    geezLastName: "ግቦሬ",
    dateOfBirth: "2001-11-18",
    phoneNumber: "+251968304623",
    birthPlace: "MUDULA",
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
    birthPlace: "gorosole",
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
    birthPlace: "E/Wallega",
    gender: 0
  },
  {
    firstName: "ADMASU",
    middleName: "ASHA",
    lastName: "AYANO",
    geezFirstName: "አደማሱ",
    geezMiddleName: "አሻ",
    geezLastName: "አያኖ",
    dateOfBirth: "2001-01-14",
    phoneNumber: "+251926904861",
    birthPlace: "South Ethiopia (wolaita)",
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
    phoneNumber: "+251968304623",
    birthPlace: "Central Ethiopia",
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
    phoneNumber: "+251968304623",
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
    phoneNumber: "+251968304623",
    birthPlace: "Oromiya",
    gender: 0
  },
  {
    firstName: "TEREFA",
    middleName: "BEKELE",
    lastName: "GETA",
    geezFirstName: "ተረፋ",
    geezMiddleName: "በቀለ",
    geezLastName: "ጌታ",
    dateOfBirth: "2005-11-29",
    phoneNumber: "+251968304623",
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "HIRUT",
    middleName: "ERASHO",
    lastName: "FOLA",
    geezFirstName: "ህሩት",
    geezMiddleName: "እራሾ",
    geezLastName: "ፎላ",
    dateOfBirth: "2003-07-13",
    phoneNumber: "+251941045706",
    birthPlace: "WOLAYITA",
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
    birthPlace: "WOLAYITA",
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
    birthPlace: "WOLAYITA",
    gender: 0
  },
  {
    firstName: "JAFAR",
    middleName: "SHERIF",
    lastName: "SULTAN",
    geezFirstName: "ጃፋር",
    geezMiddleName: "ሸሪፍ",
    geezLastName: "ሱልጣን",
    dateOfBirth: "1999-01-14",
    phoneNumber: "+251934158324",
    birthPlace: "Berehet",
    gender: 1
  },
  {
    firstName: "KEDIJA",
    middleName: "WAYU",
    lastName: "YACHIO",
    geezFirstName: "ከዲጃ",
    geezMiddleName: "ዋዩ",
    geezLastName: "ያቺዮ",
    dateOfBirth: "1992-05-05",
    phoneNumber: "+251956327017",
    birthPlace: "OROMIYA",
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
    birthPlace: "Misrak Gojam",
    gender: 0
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
    birthPlace: "wolayita",
    gender: 1
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
    firstName: "HAYATU",
    middleName: "JEMAL",
    lastName: "SERGICHO",
    geezFirstName: "ሀያቱ",
    geezMiddleName: "ጀማል",
    geezLastName: "ሰርጊቾ",
    dateOfBirth: "2000-02-28",
    phoneNumber: "+251990378236",
    birthPlace: "SELTIE",
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
    birthPlace: "FREWEYNI CITY",
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
    firstName: "MIHRET",
    middleName: "YOHANIS",
    lastName: "FOLA",
    geezFirstName: "ምህረት",
    geezMiddleName: "ዮሃንስ",
    geezLastName: "ፎላ",
    dateOfBirth: "2001-01-13",
    phoneNumber: "+251968304623",
    birthPlace: "Ethiopia",
    gender: 0
  }
];
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

async function runInBatches(tasks, batchSize = 10, delayBetweenBatches = 300) {
  const results = [];
  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize);
    const batchResults = await Promise.allSettled(batch);
    results.push(...batchResults);
    if (i + batchSize < tasks.length) {
      await new Promise(res => setTimeout(res, delayBetweenBatches));
    }
  }
  return results;
}

async function sendRequestWithRetry(workerId, applicant) {
  let attempt = 0;
  const fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`;
  const profile = getMobileProfile(workerId);

  const buildHeaders = () => ({
    'Content-Type': 'application/json',
    'Origin': 'https://www.ethiopianpassportservices.gov.et',
    'User-Agent': profile.userAgent,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.ethiopianpassportservices.gov.et/',
    'Sec-Ch-Ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': profile.secChUaPlatform
  });

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
      }, { headers: buildHeaders(), validateStatus: () => true });

      if (fetchRes.status === 429) {
        console.warn(`⛔ [Worker ${workerId}] 429 Rate limit. Waiting ${RETRY_429_DELAY / 1000}s`);
        await new Promise(res => setTimeout(res, RETRY_429_DELAY + Math.random() * 2000));
        continue;
      }

      if (fetchRes.status !== 200) {
        await new Promise(res => setTimeout(res, RETRY_DELAY + Math.random() * 1000));
        continue;
      }

      const baseId = fetchRes.data?.appointmentResponses?.[0]?.id;
      if (!baseId) {
        await new Promise(res => setTimeout(res, RETRY_DELAY + Math.random() * 1000));
        continue;
      }

      const offsets = Array.from({ length: MAX_ID_ATTEMPTS }, (_, i) => i);
      for (let i = offsets.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [offsets[i], offsets[j]] = [offsets[j], offsets[i]];
      }

      const submitTasks = offsets.map(offset => {
        const tryId = baseId + offset;
        const body = buildRequestBody(tryId, applicant);
        return axios.post(submitURL, body, { headers: buildHeaders(), validateStatus: () => true })
          .then(res => ({ id: tryId, res }))
          .catch(err => ({ id: tryId, error: err }));
      });

      const settled = await runInBatches(submitTasks, 10, 300);
      const successful = settled.find(r => r.status === 'fulfilled' && r.value?.res?.status === 200 &&
        r.value.res.data?.serviceResponseList?.[0]?.requestId);

      if (!successful) {
        await new Promise(res => setTimeout(res, RETRY_DELAY + Math.random() * 1000));
        continue;
      }

      const { id: reservedId, res: submitRes } = successful.value;
      const reqId = submitRes.data.serviceResponseList[0].requestId;
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
      console.error(`💥 [${fullName}] Error: ${err.message}`);
      await new Promise(res => setTimeout(res, RETRY_DELAY + Math.random() * 1000));
    }
  }

  if (attempt >= MAX_TOTAL_RETRIES) {
    console.warn(`❌ [${fullName}] Max retries reached.`);
  }
}

async function runAll() {
  const tasks = [];

  applicantsList.forEach((applicant, i) => {
    for (let w = 0; w < WORKERS_PER_APPLICANT; w++) {
      const workerId = i * WORKERS_PER_APPLICANT + w + 1;
      tasks.push(
        new Promise(res => setTimeout(res, i * 500 + w * 500)) // staggered
          .then(() => sendRequestWithRetry(workerId, applicant))
      );
    }
  });

  await Promise.all(tasks);
  console.log('🎉 All workers finished.');
}

runAll();
