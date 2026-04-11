---
id: intro
title: Introduction to REAOPS
sidebar_label: Introduction
---

# REAOPS

**REAOPS** is an AI-powered real estate brokerage assistant built for brokers and agents. It provides natural language access to property management, marketing generation, calendar scheduling, follow-up drafting, and portfolio analysis — all through a Telegram bot or web chat.

## Key Features

- **Google Drive Integration** — List, search, move files, and create Google Docs across a shared Drive folder tree organized by listing address
- **Property Listings** — Search and inspect cached listings sourced from Drive folders, HubSpot sync, or Zillow profile scraping
- **Marketing Generation** — Generate MLS descriptions, Instagram captions, email subject lines, and social card copy from listing facts and hero photos
- **Google Calendar** — List upcoming events, create showings/open houses, and add attendees
- **Follow-ups** — Draft email and SMS follow-up copy for leads and contacts; create calendar reminders for outreach
- **Portfolio Analysis** — Summarize active listings by status, flag high days-on-market properties, suggest priority actions, and generate a daily brief
- **Zillow Integration** — Scrape public Zillow profile pages to import listing links

## How It Works

The agent runs a multi-step loop using the Vercel AI SDK, allowing it to chain tool calls autonomously. For example, you can ask it to:

> "Look up listing 123 Main St, pull its photos from Drive, generate a marketing pack, and save the result back as a Doc"

And it will complete the entire workflow in a single message.

## Access Methods

### Telegram Bot (Primary)
The main way to interact with REAOPS. Send natural language commands and the agent will execute the appropriate tools.

### Web Chat (Fallback)
Access REAOPS through a web interface if Telegram isn't available.

## Architecture Overview

```
Telegram ──webhook──▸ /api/agent/telegram ──▸ AgentCore
Web Chat ──fetch───▸ /api/agent/chat ──▸ AgentCore
                                              │
                                          ToolRegistry
                                              │
                    ┌───────┬───────┬──────┬────────┼────────┬──────────┬────────┐
                    │ Drive │Listings│Zillow│Marketing│ Buffer │ Calendar │Follow-up│Analysis
```
