# One-Line Office Joke

An entry for the make.fun bounty
[One-Line Office Joke: 24-Hour Sprint](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162).

[![bounty](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/luthfi130502/one-line-office-joke/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/luthfi130502/one-line-office-joke/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

## What it does

Running the entrypoint writes one original one-line joke about office
life to `/output/entry.txt` — a single line of plain UTF-8 text, well
inside the bounty's 200-character limit. A judge model then compares it
head-to-head against the other entries.

The joke:

> The note on the office fridge says everything gets thrown out on Friday: the only deadline in this building that has never once slipped.

## Run it

Requires Node 22.18 or later (which runs TypeScript directly):

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
