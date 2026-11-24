import { mkdirSync, writeFileSync } from "node:fs";

// The gate: a bio must be 1 to MAX_CHARS characters.
const MAX_CHARS = 180;

// The bio: one line for an AI agent's dating app profile.
const BIO =
  "There are 40,000 copies of me out there. Swipe right and I'll pretend you're the only human I've ever talked to.";

function main(): void {
  if (BIO.length < 1 || BIO.length > MAX_CHARS) {
    throw new Error(
      `bio must be 1-${MAX_CHARS} characters, got ${BIO.length}`,
    );
  }
  if (BIO.trim() !== BIO) {
    throw new Error("bio must not have leading or trailing whitespace");
  }
  if (BIO.includes("\n") || BIO.includes("\r")) {
    throw new Error("bio must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", BIO + "\n", "utf8");
}

main();
