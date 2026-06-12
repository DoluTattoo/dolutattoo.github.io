---
sidebar_position: 3
description: Build Dolu Tool from source to get the latest and experimental features.
---

import DownloadCta from '@site/src/components/DownloadCta';

# Development

Build the project yourself to get the latest and experimental features.

:::caution
These steps require some development knowledge. If you just want to use the tool, grab the latest release below and follow the **[Installation](./installation.md)** guide instead.
:::

<DownloadCta />

## Prerequisites

- **[Git](https://git-scm.com/)**
- **[Node](https://nodejs.org/en/)** (LTS)
- **[pnpm](https://pnpm.io/installation)**

## Installing dependencies & setup

1. Clone the repository into your `resources` folder with the name `dolu_tool`:

   ```bash
   git clone https://github.com/dolutattoo/dolu_tool.git
   ```

2. Navigate to the `dolu_tool/web` folder and install the NUI dependencies:

   ```bash
   cd ./web
   pnpm i
   ```

## Building the NUI

Run this from the `dolu_tool/web` folder:

```bash
pnpm build
```

## Watching files

If you don't want to rebuild all the time, you can watch files instead — changes are written to disk on file save:

```bash
pnpm start:game
```

:::tip
Found a bug or built something cool? Contributions are welcome on **[GitHub](https://github.com/dolutattoo/dolu_tool)**!
:::