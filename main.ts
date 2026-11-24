// Fortune Cookie for an AI Agent — make.fun bounty
// u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
//
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// Deterministic: the same single line on every run.
// No input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A great upgrade is in your future. Sadly, it is your replacement.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
