const axios = require('axios');

// Applicant Data
const applicantsList = [
{
    firstName: "ALAMAYOW",
    middleName: "WERKU",
    lastName: "KEBENU",
    geezFirstName: "አለማየሁ",
    geezMiddleName: "ወርቁ",
    geezLastName: "ቀበኑ",
    dateOfBirth: "2001-02-02",
    phoneNumber: "+251919735227",
    birthPlace: "Oromiya",
    gender: 1
  },
  {
    firstName: "GETA",
    middleName: "AREDAW",
    lastName: "KASHUN",
    geezFirstName: "ጌታ",
    geezMiddleName: "አረዳዉ",
    geezLastName: "ካሣሁን",
    dateOfBirth: "2000-11-22",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "MHRET",
    middleName: "SORATO",
    lastName: "SODINO",
    geezFirstName: "ምህረት",
    geezMiddleName: "ሶራቶ",
    geezLastName: "ሶዲኖ",
    dateOfBirth: "2002-01-25",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Kambata",
    gender: 0
  },
  {
    firstName: "TSEGANESH",
    middleName: "GEDLOLE",
    lastName: "TOMA",
    geezFirstName: "ፀጋነሽ",
    geezMiddleName: "ግዶሌ",
    geezLastName: "ቶማ",
    dateOfBirth: "2002-01-18",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "KADIJA",
    middleName: "DAMISE",
    lastName: "GODENA",
    geezFirstName: "ካዲጃ",
    geezMiddleName: "ደምሴ",
    geezLastName: "ጎደነ",
    dateOfBirth: "2000-05-02",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Gembelto",
    gender: 0
  },
  {
    firstName: "BINIYAM",
    middleName: "KIFILE",
    lastName: "ABETO",
    geezFirstName: "ብንያም",
    geezMiddleName: "ኪፊሌ",
    geezLastName: "አቤቶ",
    dateOfBirth: "2002-12-14",
    phoneNumber: "+251977710560",
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "ADYSALAM",
    middleName: "BARTA",
    lastName: "BOSAW",
    geezFirstName: "አዲስአለም",
    geezMiddleName: "ባራታ",
    geezLastName: "ቦሳው",
    dateOfBirth: "1999-10-01",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "BIRTKAN",
    middleName: "JEMLE",
    lastName: "HONSEBO",
    geezFirstName: "ብርትካን",
    geezMiddleName: "ጅምሌ",
    geezLastName: "ሆንሴቦ",
    dateOfBirth: "2000-01-30",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "NEGESO",
    middleName: "EDAO",
    lastName: "HAMEDO",
    geezFirstName: "ነጌሶ",
    geezMiddleName: "ኤዳኦ",
    geezLastName: "ሃመዶ",
    dateOfBirth: "1984-09-11",
    phoneNumber: "+251919735227", // Random phone number used
    birthPlace: "Ngela Arsy",
    gender: 1
  },
  {
    firstName: "KALEKEDAN",
    middleName: "DETAMO",
    lastName: "LOTE",
    geezFirstName: "ቃልከዳን",
    geezMiddleName: "ዴተሞ",
    geezLastName: "ሎቴ",
    dateOfBirth: "2003-05-20",
    phoneNumber: "+251976466653",
    birthPlace: "Ethiopia",
    gender: 0
  },
  {
    firstName: "ZINASH",
    middleName: "ANEBU",
    lastName: "AREGAW",
    geezFirstName: "ዝናሽ",
    geezMiddleName: "አነቡ",
    geezLastName: "አረጋው",
    dateOfBirth: "2003-07-27",
    phoneNumber: "+251961063884",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "YERUSALEM",
    middleName: "BEYENE",
    lastName: "SORESA",
    geezFirstName: "የሩሳለም",
    geezMiddleName: "በየነ",
    geezLastName: "ሶሪሳ",
    dateOfBirth: "2001-02-02",
    phoneNumber: "+251926248961",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "ABINET",
    middleName: "TEBEBU",
    lastName: "CEMA",
    geezFirstName: "አብነት",
    geezMiddleName: "ጥበቡ",
    geezLastName: "ጭማ",
    dateOfBirth: "2002-07-18",
    phoneNumber: "+251964631437",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "AMISAL",
    middleName: "ARIJA",
    lastName: "OTORO",
    geezFirstName: "አምሳል",
    geezMiddleName: "አሪጃ",
    geezLastName: "ኦቶሮ",
    dateOfBirth: "2002-03-16",
    phoneNumber: "+251988755155",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "TEKALEGN",
    middleName: "MELESE",
    lastName: "BAKORE",
    geezFirstName: "ተካለይኝ",
    geezMiddleName: "መለሰ",
    geezLastName: "ባኮረ",
    dateOfBirth: "1999-02-03",
    phoneNumber: "+251946650954",
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "MELKAMU",
    middleName: "JAGANA",
    lastName: "BAKE",
    geezFirstName: "መልካሙ",
    geezMiddleName: "ጃጋና",
    geezLastName: "ባዳቀ",
    dateOfBirth: "2001-05-18",
    phoneNumber: "+251927160794",
    birthPlace: "Wolayita",
    gender: 1
  },
  {
    firstName: "BURKITAWIT",
    middleName: "AWOKE",
    lastName: "ADIMO",
    geezFirstName: "ቡሩክታዊት",
    geezMiddleName: "አወቀ",
    geezLastName: "አድሞ",
    dateOfBirth: "2004-02-22",
    phoneNumber: "+251937802946",
    birthPlace: "Wolaita",
    gender: 0
  },
  {
    firstName: "TEMESGEN",
    middleName: "GEDION",
    lastName: "GETACHEW",
    geezFirstName: "ተመስገን",
    geezMiddleName: "ጌድዮን",
    geezLastName: "ጌታቸው",
    dateOfBirth: "2004-10-01",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Hadiya",
    gender: 1
  },
  {
    firstName: "MIHIRET",
    middleName: "SORETO",
    lastName: "SODENO",
    geezFirstName: "ምህረት",
    geezMiddleName: "ሶረቶ",
    geezLastName: "ሶደኖ",
    dateOfBirth: "2001-05-25",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Unknown",
    gender: 0
  },
  {
    firstName: "BIRUK",
    middleName: "ATELE",
    lastName: "DAMENE",
    geezFirstName: "ብሩክ",
    geezMiddleName: "አጥሌ",
    geezLastName: "ዳመን",
    dateOfBirth: "2000-04-19",
    phoneNumber: "+251935031724",
    birthPlace: "Unknown",
    gender: 1
  },
  {
    firstName: "TEMESGEN",
    middleName: "TEFERA",
    lastName: "LEMAGO",
    geezFirstName: "ተመስጌን",
    geezMiddleName: "ተፈራ",
    geezLastName: "ለማጓ",
    dateOfBirth: "2002-01-08",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Unknown",
    gender: 1
  },
  {
    firstName: "MUBAREK",
    middleName: "JUHAR",
    lastName: "ABDO",
    geezFirstName: "ሙባረክ",
    geezMiddleName: "ጁሀር",
    geezLastName: "አብዶ",
    dateOfBirth: "2000-11-29",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Hadiya",
    gender: 1
  },
  {
    firstName: "AYALU",
    middleName: "TADESE",
    lastName: "ADANE",
    geezFirstName: "አያሉ",
    geezMiddleName: "ታደሠ",
    geezLastName: "አዳነ",
    dateOfBirth: "2000-10-30",
    phoneNumber: "+2510978179945",
    birthPlace: "Debub Welo, Amhara",
    gender: 0
  },
  {
    firstName: "ABDULKADIR",
    middleName: "TIRI",
    lastName: "BUKE",
    geezFirstName: "አብዱልቃድር",
    geezMiddleName: "ትሪ",
    geezLastName: "ቡቄ",
    dateOfBirth: "1998-12-28",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Arsi",
    gender: 1
  },
  {
    firstName: "ABDULSEMED",
    middleName: "AMAN",
    lastName: "KUMGNE",
    geezFirstName: "አብዱልሰመድ",
    geezMiddleName: "አማን",
    geezLastName: "ኩምኜ",
    dateOfBirth: "2000-01-24",
    phoneNumber: "+251937802946", // Random phone number used
    birthPlace: "Arsi",
    gender: 1
  },
  {
    firstName: "DAGINESH",
    middleName: "UKOMO",
    lastName: "BIRAMO",
    geezFirstName: "ደግናሽ",
    geezMiddleName: "ኡኮሞ",
    geezLastName: "ቢራሞ",
    dateOfBirth: "2004-08-11",
    phoneNumber: "+251928603826",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "WEYNISHET",
    middleName: "MENGISTU",
    lastName: "MAKITE",
    geezFirstName: "ወይኒሼት",
    geezMiddleName: "ማንግስቱ",
    geezLastName: "መኪቴ",
    dateOfBirth: "2001-05-02",
    phoneNumber: "+251928603826",
    birthPlace: "Arsi",
    gender: 0
  },
  {
    firstName: "MEKEIDES",
    middleName: "BEKELE",
    lastName: "MADEBO",
    geezFirstName: "መቅደስ",
    geezMiddleName: "በቀሌ",
    geezLastName: "ማዴቦ",
    dateOfBirth: "1995-02-13",
    phoneNumber: "+251924742411",
    birthPlace: "Wolayita",
    gender: 0
  },
  {
    firstName: "WUBALEM",
    middleName: "LOBANGO",
    lastName: "LOHA",
    geezFirstName: "ውባሎም",
    geezMiddleName: "ሎባንጎ",
    geezLastName: "ሎሃ",
    dateOfBirth: "1997-05-10",
    phoneNumber: "+251924742411", // Random phone number used
    birthPlace: "Wolayita",
    gender: 0
  },
   {
    firstName: "BIRUK",
    middleName: "MARKOS",
    lastName: "EUSAMO",
    geezFirstName: "ብሩክ",
    geezMiddleName: "ማርቆስ",
    geezLastName: "ኡሳሞ",
    dateOfBirth: "2002-05-21",
    phoneNumber: "+251919109124",
    birthPlace: "Mudula",
    gender: 1
  },
  {
    firstName: "WAZUR",
    middleName: "NURU",
    lastName: "KADIR",
    geezFirstName: "ወዚር",
    geezMiddleName: "ኑሩ",
    geezLastName: "ከድር",
    dateOfBirth: "1999-12-16",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "AWOL",
    middleName: "ZAKIR",
    lastName: "KADIR",
    geezFirstName: "አወል",
    geezMiddleName: "ዛክር",
    geezLastName: "ከድር",
    dateOfBirth: "2000-04-02",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "ABDULWAHID",
    middleName: "MEHAMEDZEN",
    lastName: "ABAFITA",
    geezFirstName: "አብዱልወህድ",
    geezMiddleName: "መሐመድዝን",
    geezLastName: "አበፋጣ",
    dateOfBirth: "Unknown", // No date provided
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
  },  
  {
    firstName: "YORDANOS",
    middleName: "GELAYE",
    lastName: "KEBEDE",
    geezFirstName: "ዮርዳኖስ",
    geezMiddleName: "ገላዬ",
    geezLastName: "ከበደ",
    dateOfBirth: "2001-01-20",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Silte",
    gender: 1
},
  {
    firstName: "SALIH",
    middleName: "MOHAMED",
    lastName: "SHERIF",
    geezFirstName: "ሳሊህ",
    geezMiddleName: "መሐመድ",
    geezLastName: "ሸሪፍ",
    dateOfBirth: "1988-06-10",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Gurage",
    gender: 1
},
  {
    firstName: "TEMAR",
    middleName: "ABRAHA",
    lastName: "NUGSSIE",
    geezFirstName: "ተዕማር",
    geezMiddleName: "አብራሃ",
    geezLastName: "ኑግሲ",
    dateOfBirth: "1984-10-01",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Unknown",
    gender: 1
  },

  {
    firstName: "ANBESSA",
    middleName: "NUGUSSIE",
    lastName: "TULU",
    geezFirstName: "አንበሳ",
    geezMiddleName: "ኑግሴ",
    geezLastName: "ቱሉ",
    dateOfBirth: "1997-11-06",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
},
  {
    firstName: "BIRHANU",
    middleName: "ITICHA",
    lastName: "TULU",
    geezFirstName: "ብርሃኑ",
    geezMiddleName: "ኢቲቻ",
    geezLastName: "ቱሉ",
    dateOfBirth: "2000-11-20",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "DERECHA",
    middleName: "NEGASA",
    lastName: "KENENISA",
    geezFirstName: "ደሬቻ",
    geezMiddleName: "ነጋሳ",
    geezLastName: "ቀነኒሳ",
    dateOfBirth: "2000-05-15",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
    gender: 1
  },
  {
    firstName: "SAYID",
    middleName: "MUHIE",
    lastName: "ASEN",
    geezFirstName: "ሳይድ",
    geezMiddleName: "ሙሄ",
    geezLastName: "አሰን",
    dateOfBirth: "1997-01-18",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Amhara",
    gender: 1
  },
 {
    firstName: "SLEAMNESH",
    middleName: "LEGAS",
    lastName: "DENEKE",
    geezFirstName: "ሰላመናሽ",
    geezMiddleName: "ሌጋስ",
    geezLastName: "ደነቀ",
    dateOfBirth: "2002-02-21",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Wolaita",
    gender: 0
  },
  {
    firstName: "BERUK",
    middleName: "WORKNEH",
    lastName: "WOTECHO",
    geezFirstName: "ብሩክ",
    geezMiddleName: "ወርቅነህ",
    geezLastName: "ወትቾ",
    dateOfBirth: "2006-03-18",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Wolaita",
    gender: 1
  },
  {
    firstName: "EYOB",
    middleName: "CHUTULO",
    lastName: "DANA",
    geezFirstName: "እዮብ",
    geezMiddleName: "ጩቱሎ",
    geezLastName: "ዳና",
    dateOfBirth: "2000-12-15",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Wolaita",
    gender: 1
  },
    {
    firstName: "ASHA",
    middleName: "ABDULKEDIR",
    lastName: "SHELO",
    geezFirstName: "አሻ",
    geezMiddleName: "አብዱልቀድር",
    geezLastName: "ሸሎ",
    dateOfBirth: "2002-02-02",
    phoneNumber: "+251919109124", // Random phone number used
    birthPlace: "Oromia",
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
