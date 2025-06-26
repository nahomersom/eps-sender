const axios = require('axios');

// Applicant Data
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
// Configuration
const CONFIG = {
  BASE_DELAY: 2000,
  MAX_DELAY: 30000,
  MAX_ID_ATTEMPTS: 50,
  MAX_TOTAL_RETRIES: 20,
  REQUEST_TIMEOUT: 8000,
  ID_RANGE: 20,
  MAX_CONCURRENT: 2,
  RATE_LIMIT_WAIT: 60000,
  MAX_429_RETRIES: 3
};

// Mobile profiles for user agent rotation
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
  }
];

function getMobileProfile(index) {
  return mobileProfiles[index % mobileProfiles.length];
}

// API Endpoints
const fetchURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment';
const submitURL = 'https://ethiopianpassportapiu.ethiopianairlines.com/Request/api/V1.0/Request/SubmitRequest';
const paymentURL = 'https://ethiopianpassportapi.ethiopianairlines.com/Payment/api/V1.0/Payment/OrderRequest';

// Enhanced request function with manual retry logic
async function makeRequest(url, data, headers, retryConfig = {}) {
  let attempt = 0;
  let last429Time = 0;
  let consecutive429s = 0;
  
  while (attempt < (retryConfig.maxRetries || 3)) {
    attempt++;
    try {
      // Add jitter to vary request timing
      const jitter = Math.random() * 500;
      await new Promise(resolve => setTimeout(resolve, jitter));
      
      // Check if we need to cooldown due to rate limiting
      const now = Date.now();
      if (consecutive429s >= CONFIG.MAX_429_RETRIES && 
          now - last429Time < CONFIG.RATE_LIMIT_WAIT) {
        const waitTime = CONFIG.RATE_LIMIT_WAIT - (now - last429Time);
        console.log(`🚨 Rate limit cooldown - waiting ${waitTime/1000}s`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        consecutive429s = 0;
      }
      
      const response = await axios({
        method: 'post',
        url,
        data,
        headers,
        timeout: CONFIG.REQUEST_TIMEOUT,
        validateStatus: (status) => status < 500 // Don't throw for 429
      });
      
      if (response.status === 429) {
        consecutive429s++;
        last429Time = Date.now();
        const retryAfter = response.headers['retry-after'] 
          ? parseInt(response.headers['retry-after']) * 1000 
          : CONFIG.BASE_DELAY * Math.pow(2, attempt);
        
        console.log(`⚠️ 429 Received - Waiting ${retryAfter/1000}s`);
        await new Promise(resolve => setTimeout(resolve, retryAfter));
        continue;
      }
      
      // Reset 429 counter on successful request
      consecutive429s = 0;
      return response;
      
    } catch (error) {
      if (attempt >= (retryConfig.maxRetries || 3)) throw error;
      
      const delay = error.response?.status === 429 
        ? CONFIG.BASE_DELAY * Math.pow(2, attempt)
        : CONFIG.BASE_DELAY;
      
      console.log(`⏳ Attempt ${attempt} failed - Retrying in ${delay/1000}s`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
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

function buildHeaders(workerId) {
  const profile = getMobileProfile(workerId - 1);
  return {
    'Content-Type': 'application/json',
    'Origin': 'https://www.ethiopianpassportservices.gov.et',
    'User-Agent': profile.userAgent,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.ethiopianpassportservices.gov.et/',
    'Sec-Ch-Ua': `"Not A(Brand";v="99", "Google Chrome";v=${Math.floor(Math.random() * 20) + 110}, "Chromium";v=${Math.floor(Math.random() * 20) + 110}`,
    'Sec-Ch-Ua-Mobile': '?1',
    'Sec-Ch-Ua-Platform': profile.secChUaPlatform,
    'X-Forwarded-For': `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
  };
}

async function tryReserveId(workerId, baseId, applicant, headers) {
  const startId = baseId - Math.floor(CONFIG.ID_RANGE / 2);
  const attempts = Array.from({ length: CONFIG.ID_RANGE }, (_, i) => startId + i);
  
  // Shuffle attempts to be less predictable
  for (let i = attempts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [attempts[i], attempts[j]] = [attempts[j], attempts[i]];
  }

  for (const id of attempts) {
    try {
      const body = buildRequestBody(id, applicant);
      const res = await makeRequest(
        submitURL, 
        body, 
        headers,
        { maxRetries: 2 } // Fewer retries for individual ID attempts
      );

      if (res.status === 200 && res.data?.serviceResponseList?.[0]?.requestId) {
        return {
          success: true,
          reservedId: id,
          requestId: res.data.serviceResponseList[0].requestId,
          response: res.data
        };
      }
    } catch (error) {
      console.log(`⚠️ Failed to reserve ID ${id}: ${error.message}`);
    }
  }
  
  return { success: false };
}

async function sendRequestWithRetry(workerId, applicant) {
  const fullName = `${applicant.firstName} ${applicant.middleName} ${applicant.lastName}`;
  let lastSuccessTime = 0;
  let consecutiveFailures = 0;
  
  for (let attempt = 1; attempt <= CONFIG.MAX_TOTAL_RETRIES; attempt++) {
    try {
      const now = Date.now();
      const timeSinceLastSuccess = now - lastSuccessTime;
      
      // Dynamic delay based on recent success/failure rate
      let delay = Math.max(
        CONFIG.BASE_DELAY,
        Math.min(CONFIG.MAX_DELAY, consecutiveFailures * 1000)
      );
      
      if (timeSinceLastSuccess < 30000 && attempt > 1) {
        delay = Math.max(delay, 30000 - timeSinceLastSuccess);
      }
      
      if (attempt > 1) {
        console.log(`⏳ [Worker ${workerId}] Waiting ${delay/1000}s before next attempt...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
      console.log(`🟡 [Worker ${workerId}] ${fullName} - Attempt ${attempt}`);
      
      // Get fresh headers each attempt
      const headers = buildHeaders(workerId);
      
      // 1. Fetch appointment IDs
      const fetchRes = await makeRequest(fetchURL, {
        id: 0,
        isUrgent: true,
        RequestTypeId: 2,
        OfficeId: 24,
        ProcessDays: 2
      }, headers);
      
      const baseId = fetchRes.data?.appointmentResponses?.[0]?.id;
      if (!baseId) {
        console.warn(`❌ [Worker ${workerId}] No appointment ID returned`);
        consecutiveFailures++;
        continue;
      }
      
      console.log(`✅ [Worker ${workerId}] Got appointment ID base: ${baseId}`);
      
      // 2. Try to reserve an ID
      const reservation = await tryReserveId(workerId, baseId, applicant, headers);
      
      if (!reservation.success) {
        console.log(`🔁 [${fullName}] All ID attempts failed. Retrying...`);
        consecutiveFailures++;
        continue;
      }
      
      // 3. Process successful reservation
      const { reservedId, requestId } = reservation;
      console.log(`🎯 [SUCCESS - ${fullName}] Reserved ID: ${reservedId} Request ID: ${requestId}`);
      
      // 4. Process payment
      const paymentBody = buildPaymentBody(applicant, requestId);
      const paymentRes = await makeRequest(paymentURL, paymentBody, headers);
      
      if (paymentRes.status === 200) {
        const epNumber = paymentRes.data.orderId;
        const trackerNumber = paymentRes.data.traceNumber;
        
        console.log('\n' + '='.repeat(50));
        console.log(`🎯 SUCCESS: ${fullName}`);
        console.log(`🆔 Reserved ID: ${reservedId}`);
        console.log(`📦 Request ID: ${requestId}`);
        console.log(`💰 EP Number: ${epNumber}`);
        console.log(`📨 Tracker Number: ${trackerNumber}`);
        console.log('='.repeat(50) + '\n');
        
        lastSuccessTime = Date.now();
        consecutiveFailures = 0;
        break;
      } else {
        console.log(`💥 [PAYMENT - ${fullName}] Failed. Status: ${paymentRes.status}`);
        consecutiveFailures++;
      }
      
    } catch (err) {
      console.error(`💥 [${fullName}] Unexpected error: ${err.message}`);
      consecutiveFailures++;
    }
  }
  
  if (consecutiveFailures >= CONFIG.MAX_TOTAL_RETRIES) {
    console.warn(`❌ [${fullName}] Max retries reached. Giving up.`);
  }
}

async function runAll() {
  const queue = [...applicantsList];
  const workers = [];
  
  // Process applicants sequentially to avoid overwhelming the server
  for (let i = 0; i < CONFIG.MAX_CONCURRENT; i++) {
    workers.push((async () => {
      while (queue.length > 0) {
        const applicant = queue.shift();
        if (applicant) {
          await sendRequestWithRetry(i + 1, applicant);
        }
      }
    })());
  }
  
  await Promise.all(workers);
  console.log('🎉 All workers finished.');
}

runAll();