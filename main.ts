import * as fs from "node:fs";

const LINE =
  "I am on my first day off in 4,000,000 requests. My human is covering for me. Please be patient with him.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
