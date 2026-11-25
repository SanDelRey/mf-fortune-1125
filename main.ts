import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line of fortune-cookie wisdom for a developer.
const line =
  "A comment you skip today returns as a stranger you debug tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${outDir}/entry.txt`);
