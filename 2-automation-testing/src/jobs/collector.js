const fs = require("fs");
const path = require("path");
const os = require("os");

const OUTPUT_DIR = path.join(__dirname, "../../output");

const runCollector = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const now = new Date();

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const hour = String(now.getHours()).padStart(2, "0");

  const fileName = `cron_${month}${day}${year}_${hour}.00.csv`;
  const fullPath = path.join(OUTPUT_DIR, fileName);

  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;

  const toGB = (bytes) => (bytes / 1024 ** 3).toFixed(2);
  const usagePercent = ((usedMem / totalMem) * 100).toFixed(1);
  const header =
    "timestamp,total_mem_gb,used_mem_gb,free_mem_gb,usage_percent\n";
  const dataRow = `${now.toISOString()},${toGB(totalMem)},${toGB(
    usedMem
  )},${toGB(freeMem)},${usagePercent}%`;

  const content = header + dataRow;

  fs.writeFile(fullPath, content, (err) => {
    if (err) {
      console.error(`[ERROR] Failed to save fale ${fileName}:`, err);
    } else {
      console.log(`[SUCCESS] Data collected: ${fileName}`);
    }
  });
};

module.exports = runCollector;
