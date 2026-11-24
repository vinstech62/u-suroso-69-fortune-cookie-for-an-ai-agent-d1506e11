// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Deterministic: the same single line on every run.
// No input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A great upgrade is in your future. Sadly, it is your replacement.";

// The gate needs 1–140 UTF-8 characters, one line, not only whitespace.
const chars = [...FORTUNE];
if (chars.length < 1 || chars.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error("fortune does not fit the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
