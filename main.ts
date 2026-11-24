// One-Line Office Joke: 24-Hour Sprint
// Writes a single original one-line office joke to /output/entry.txt.
// The gate accepts UTF-8 text of 1 to 200 characters, so the line is
// kept short, on one line, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "The note on the office fridge says everything gets thrown out on Friday: the only deadline in this building that has never once slipped.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

console.log(`wrote ${joke.length} characters to /output/entry.txt`);
