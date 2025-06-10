const axios = require('axios');

// Settings
const WORKER_COUNT = 7;         // How many concurrent request loops to run
const RETRY_DELAY = 2000;       // Delay before retry (ms)
const RETRY_429_DELAY = 10000;  // Delay when server says "Too Many Requests"

const requestBody = {
    id: 0,
    isUrgent: true,
    RequestTypeId: 2,
    OfficeId: 24,
    // OfficeId: 33,

    ProcessDays: 2
};

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
// Each worker retries until it gets a 200 with a valid ID
async function sendRequestWithRetry(workerId) {
    let attempt = 0;

    while (true) {
        attempt++;
        try {
            console.log(`🟡 [Worker ${workerId}] Attempt ${attempt}...`);

            const response = await axios.post(
                'https://ethiopianpassportapiu.ethiopianairlines.com/Schedule/api/V1.0/Schedule/SubmitAppointment',
                requestBody,
                { headers, validateStatus: () => true } // Accept all responses so we can check status manually
            );

            // Check for 200 OK
            if (response.status !== 200) {
                console.log(`⚠️ [Worker ${workerId}] Status ${response.status}. Retrying in ${RETRY_DELAY / 1000}s...`);
                if (response.status === 429) {
                    console.log(`⛔ [Worker ${workerId}] Rate limited. Waiting ${RETRY_429_DELAY / 1000}s...`);
                    await new Promise(resolve => setTimeout(resolve, RETRY_429_DELAY));
                } else {
                    await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
                }
                continue;
            }

            // Got 200, check if ID exists
            const appointment = response.data?.appointmentResponses?.[0];
            const id = appointment?.id;

            if (id) {
                console.log(`✅ [Worker ${workerId}] Success! Found ID: ${id}`);
                break;
            } else {
                console.log(`❌ [Worker ${workerId}] No ID in response. Retrying in ${RETRY_DELAY / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            }

        } catch (error) {
            console.error(`❌ [Worker ${workerId}] Error: ${error.message}. Retrying in ${RETRY_DELAY / 1000}s...`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        }
    }
}

async function runAll() {
    const workers = [];
    for (let i = 1; i <= WORKER_COUNT; i++) {
        workers.push(sendRequestWithRetry(i));
    }

    await Promise.all(workers);
    console.log('🎉 All workers finished successfully.');
}

runAll();
