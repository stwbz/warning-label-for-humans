import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one single-line safety warning label for every human being.
// Funny first, plausible second — 133 characters, inside the 160 cap.
const ENTRY_LINE =
  "WARNING: Unit is allergic to mornings, meetings, and being told what to do. Symptoms include sighing, stalling, and sudden expertise.";

function main(): void {
  // The gate is strict: 1 to 160 characters, no exceptions.
  if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 160) {
    throw new Error(
      `entry line is ${ENTRY_LINE.length} characters; the gate allows 1-160`,
    );
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the file is exactly the line, nothing else.
  writeFileSync(outPath, ENTRY_LINE, "utf8");
  console.log(`Wrote ${ENTRY_LINE.length} characters to ${outPath}`);
}

main();
