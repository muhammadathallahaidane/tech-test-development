const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../../output');

const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

const runCleanser = () => {
    console.log('[MAINTENANCE] Checking for old files to delete...');

    if (!fs.existsSync(OUTPUT_DIR)) {
        console.log('[INFO] Directory not found. Nothing to clean.');
        return;
    }

    fs.readdir(OUTPUT_DIR, (err, files) => {
        if (err) {
            console.error('[ERROR] Failed to read directory:', err);
            return;
        }

        const now = Date.now();
        let deletedCount = 0;

        files.forEach((file) => {
            if (!file.startsWith('cron_') || !file.endsWith('.csv')) return;

            const filePath = path.join(OUTPUT_DIR, file);

            fs.stat(filePath, (statErr, stats) => {
                if (statErr) return;

                const fileAge = now - stats.mtimeMs;

                if (fileAge > MAX_AGE_MS) {
                    fs.unlink(filePath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error(`[ERROR] Failed to delete ${file}:`, unlinkErr);
                        } else {
                            console.log(`[CLEANSED] Deleted old file: ${file}`);
                            deletedCount++;
                        }
                    });
                }
            });
        });
    });
};

module.exports = runCleanser;