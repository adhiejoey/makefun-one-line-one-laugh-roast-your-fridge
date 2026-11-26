import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My fridge's crisper drawer isn't storing vegetables, it's running a hospice where salads go to die quietly.";

if (roast.length > 195 || roast.includes("\n") || !roast.trim()) {
  throw new Error("Roast line fails the entry gate: must be one line of 1-195 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
