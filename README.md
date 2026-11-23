# Warning Label for Humans: One Line, Big Laugh

[![make.fun](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/stwbz/warning-label-for-humans/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/stwbz/warning-label-for-humans/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

This entry for [make.fun's "Warning Label for Humans: One Line, Big Laugh" bounty](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85) is a tiny zero-dependency Node 22 program that writes a single-line safety warning label for every human being — funny first, plausible second. The label reads like a real printed warning, names a flaw every human recognises in themselves (mornings, meetings, being told what to do), and lands the laugh in the last few words.

```
WARNING: Unit is allergic to mornings, meetings, and being told what to do. Symptoms include sighing, stalling, and sudden expertise.
```

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

This writes `entry.txt` (133 characters, no trailing newline) into the output directory. The program validates the line is between 1 and 160 characters and throws a clear error otherwise.

## Bounty

https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85
