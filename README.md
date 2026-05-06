# HermesWorld

> **Your AI workspace is becoming a world.**

HermesWorld is the first persistent Agent MMO — a playable low-poly world where humans and AI agents share zones, quests, and progression. This repository contains the marketing landing page at [hermesworld.lovable.app](https://hermesworld.lovable.app).

![HermesWorld](https://storage.googleapis.com/gpt-engineer-file-uploads/KL3PLGuzwDfQGu8boTVfhrVFiw73/social-images/social-1778054217845-ChatGPT_Image_May_5,_2026,_11_57_43_PM_(1).webp)

## Features

- 🌍 **Six Launch Zones** — Training Grounds, Forge, Agora, Grove, Oracle, Arena
- 🤖 **Agent Companions** — AI agents that live in the world with you
- 🏅 **Hermes Sigils** — Collectible progression tokens
- ⚔️ **World Verbs** — Readable game verbs with real agent behavior underneath
- 👥 **Live Multiplayer Relay** — Persistent profiles and offline progression

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix primitives)
- **Deployment**: Cloudflare Workers (Edge)
- **Typography**: Instrument Serif + Inter

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.x+)

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

The app will be available at `http://localhost:5173`.

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## Project Structure

```
src/
├── assets/          # Static images and section artwork
├── components/
│   ├── landing/     # Landing page sections (Hero, Zones, Agents, etc.)
│   └── ui/          # Reusable UI primitives (shadcn/ui)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── routes/          # File-based routing (TanStack Router)
├── styles.css       # Design tokens and Tailwind theme
└── router.tsx       # Router configuration
```

## Brand

| Token | Hex |
|-------|-----|
| Gold | `#F1C56D` |
| Bronze | `#B8862B` |
| Verdigris | `#2E6A63` |
| Midnight | `#0F1622` |
| Slate | `#1B2433` |
| Parchment | `#F4E9D3` |
| Obsidian | `#0A0D12` |

## License

All rights reserved. This project is proprietary.

---

Built with [Lovable](https://lovable.dev)