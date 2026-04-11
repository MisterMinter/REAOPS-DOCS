---
id: configuration
title: Admin Configuration
sidebar_label: Configuration
---

# Admin Configuration

## User Management

### Adding Users

1. Go to **Admin → Users**
2. Click **Add User**
3. Enter the user's Google email address
4. Assign their role:
   - **Agent** — Can manage their own listings and use all features
   - **Admin** — Full access including user management and settings

### Removing Users

1. Go to **Admin → Users**
2. Find the user and click **Remove**
3. Confirm the action

:::warning
Removing a user does not delete their data. Their listings and history remain accessible to admins.
:::

## Role Permissions

| Feature | Agent | Admin |
|---------|:-----:|:-----:|
| View own listings | ✅ | ✅ |
| Manage own listings | ✅ | ✅ |
| View all listings | ❌ | ✅ |
| Manage users | ❌ | ✅ |
| Configure settings | ❌ | ✅ |
| View analytics | ✅ | ✅ |

## System Requirements

The following services must be configured for REAOPS to function:

### PostgreSQL Database

REAOPS requires PostgreSQL for data storage. Configure the connection string:

```bash
DATABASE_URL=postgresql://user:password@host:5432/reaops
```

### Google Cloud Platform

Set up OAuth credentials in Google Cloud Console:

1. Create a new project or select existing
2. Enable APIs:
   - Drive API
   - Calendar API
   - Gmail API
3. Create OAuth 2.0 credentials
4. Set authorized redirect URI: `https://your-domain.com/api/auth/callback/google`

Required scopes:
- `openid`
- `email`
- `profile`
- `drive` (full access)
- `calendar`
- `gmail.compose`

### AI Providers

Configure at least one AI provider:

| Provider | Environment Variable |
|----------|---------------------|
| Gemini 2.0 Flash (recommended) | `GEMINI_API_KEY` |
| Claude | `ANTHROPIC_API_KEY` |
| GPT-4o-mini | `OPENAI_API_KEY` |

Set `AI_PROVIDER` to specify which to use: `gemini`, `anthropic`, or `openai`.

### Telegram Bot

1. Create a bot via [@BotFather](https://t.me/BotFather)
2. Get your bot token
3. Set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_WEBHOOK_SECRET`

Register the webhook:
```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://your-domain.com/api/agent/telegram?secret=<SECRET>
```
