---
sidebar_position: 2
description: Overview of every feature available in Dolu Tool, organized by menu tab.
toc_max_heading_level: 2
---

import DownloadCta from '@site/src/components/DownloadCta';

# Features

Dolu Tool packs a lot of features into a single in-game menu. Here is everything it can do, organized by tab.

## General

- Locale system from ox_lib
- Automatically checks for updates and displays a notice in the header when an update is available ([screenshot](https://user-images.githubusercontent.com/47056777/213062611-3397e226-8996-40a3-8da7-9fc072a84aa3.jpg))
- Target objects to copy coords, delete or move them using the gizmo (requires [ox_target](https://github.com/overextended/ox_target))
- Permission system (see [Installation → Permissions](./installation.md#permissions))

## Home

- Display coords
- Copy coords
- Set coords
- Save coords as location
- Go to the last location
- Display basic interior information
- Quick action buttons

## World

- Set time
- Freeze time
- Set weather
- Freeze weather

## Interior (MLO)

- Display interior information
- Portals debugging
- Check portal flags with descriptions
- Set portal flags by checking boxes
- Room from/to infos

## Object spawner

- Spawn objects and move them using a nice gizmo
- Select world entities by clicking on them
- See all spawned objects in a list
- Various options available for spawned entities

## Locations

- Browse all vanilla interiors
- Copy coords/teleport
- Create custom locations, saved in server cache (KVP)
- Delete/rename custom locations
- Filter search to show/hide custom/vanilla locations

## Peds

- Browse all vanilla peds
- Preview images
- Set peds
- Copy name/hash

## Vehicles

- Browse all vanilla vehicles
- Preview images
- Spawn vehicle
- Copy name/hash

## Weapons

- Browse all vanilla weapons
- Preview images
- Give weapons (with ox_inventory support)
- Copy name/hash

## Audio

- Draw near vanilla Static Emitters
- Set draw distance
- Get info from closest vanilla Static Emitter
- Set radio station, play or stop closest vanilla Static Emitter

## Ready to try it?

<DownloadCta />

- Want to contribute or test experimental features? See **[Development](./development.md)**