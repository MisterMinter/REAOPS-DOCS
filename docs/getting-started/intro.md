# Introduction to REAOPS

**REAOPS** is an AI-powered real estate brokerage assistant built for brokers and agents. It provides natural language access to property management, marketing generation, calendar scheduling, follow-up drafting, and portfolio analysis.

## How It Works

The agent chains tool calls autonomously. For example:

> "Look up listing 123 Main St, pull its photos from Drive, generate a marketing pack, and save as a Doc"

The agent completes the entire workflow in a single message.

## Access Methods

### Telegram Bot (Primary)
Send natural language commands and the agent executes the appropriate tools.

### Web Chat (Fallback)
Access via web interface if Telegram isn't available.

## Architecture

```
Telegram ──webhook──▸ AgentCore ──▸ ToolRegistry
Web Chat ──fetch────▸             │
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                  Drive      Listings      Calendar
                  Zillow     Marketing     Follow-up
```
