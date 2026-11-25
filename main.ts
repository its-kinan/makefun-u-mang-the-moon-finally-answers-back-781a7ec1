// The Moon Finally Answers Back — make.fun entry (program/v1).
// Writes the Moon's one-line comeback to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// First draft — the Moon, finally fed up after four billion years of
// wishes, howls and 2 a.m. promises, answers all of humanity at once.
// REVISION: the first draft ran 245 characters, 5 over the 240 gate, and
// the middle sagged ("I won't make you famous" repeats the ex joke's
// beat). Cut the setup to a single breath and the refusal to one joke
// plus the closing turn — same voice, same three hooks, tighter landing.
const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises — and my answer is: no, I'm not bringing back your ex, and tonight I'm closed. Try the streetlight.";

mkdirSync(dirname("/output/entry.txt"), { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
