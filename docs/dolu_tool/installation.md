---
sidebar_position: 1
description: How to download, install and configure Dolu Tool on your FiveM server.
---

import DownloadCta from '@site/src/components/DownloadCta';
import { LinkCard, LinkCardGrid } from '@site/src/components/LinkCard';

# Installation

Get Dolu Tool up and running on your server in a few minutes.

<DownloadCta showInstallLink={false} />

## Prerequisites

<LinkCardGrid>
  <LinkCard
    href="https://github.com/overextended/ox_lib/releases/latest"
    icon="📦"
    title="ox_lib"
    badge="Required"
    description="Library used for the UI, locales and callbacks. Must be started before dolu_tool."
  />
  <LinkCard
    href="https://github.com/overextended/ox_target/releases/latest"
    icon="🎯"
    title="ox_target"
    badge="Optional"
    badgeVariant="neutral"
    description="Only needed to target objects to copy coords, delete or move them with the gizmo."
  />
</LinkCardGrid>

## Install

1. Unzip the `dolu_tool.zip` and `ox_lib.zip` files (and `ox_target.zip` if you want it)
2. Put the `dolu_tool` and `ox_lib` folders into your `resources` folder
3. Add this to your `server.cfg` file:

```yaml
ensure ox_lib    # must be started before dolu_tool
ensure ox_target # optional

ensure dolu_tool
```

## Permissions

By default, **everyone** can use all the features of the tool. You can change this in the `config.lua` file:

1. Set `Config.usePermission` to `true` to enable the permission system
2. Set the permission groups in the `Config.permissions` table

More information about ACE permissions can be found in the [Cfx.re ACE permissions guide](https://forum.cfx.re/t/basic-aces-principals-overview-guide/90917).

## Next steps

- Discover everything the tool can do in **[Features](./features.md)**
- Want the latest experimental features? Build it yourself with the **[Development](./development.md)** guide
- Something not working? Ask on the **[Discord](https://discord.gg/ZQn2m2A)**
