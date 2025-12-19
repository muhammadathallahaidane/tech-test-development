const cron = require('node-cron');
const runCollector = require('./jobs/collector');
const runCleanser = require('./jobs/cleanser');

console.log('=================================================');
console.log('   CRON AUTOMATED SCRIPT    ');
console.log('=================================================');
console.log('Target Folder  : /output (Simulated /home/cron)');
console.log('Timezone       : Asia/Jakarta (WIB)');
console.log('Schedules:');
console.log('  1. Data Collection : 08:00 WIB, 12:00 WIB, 15:00 WIB daily');
console.log('  2. Data Cleansing  : 00:00 daily (delete > 30 days)');
console.log('-------------------------------------------------');

cron.schedule('0 8,12,15 * * *', () => {
    console.log(`\n[CRON JOB] Running Data Collection at ${new Date().toLocaleString()}`);
    runCollector();
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
});

cron.schedule('0 0 * * *', () => {
    console.log(`\n[CRON JOB] Running Daily Maintenance at ${new Date().toLocaleString()}`);
    runCleanser();
}, {
    scheduled: true,
    timezone: "Asia/Jakarta"
});