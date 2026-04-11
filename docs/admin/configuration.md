# Admin Configuration

## User Management

| Role | View Own | Manage Own | View All | Manage Users |
|------|:--------:|:----------:|:--------:|:-----------:|
| Agent | ✅ | ✅ | ❌ | ❌ |
| Admin | ✅ | ✅ | ✅ | ✅ |

## Environment Variables

### Database
```
DATABASE_URL=postgresql://user:pass@host:5432/reaops
```

### Google Cloud
Enable in Google Cloud Console:
- Drive API
- Calendar API
- Gmail API

### AI Providers
| Provider | Variable |
|----------|----------|
| Gemini (recommended) | `GEMINI_API_KEY` |
| Claude | `ANTHROPIC_API_KEY` |
| GPT-4o-mini | `OPENAI_API_KEY` |

### Telegram
```
TELEGRAM_BOT_TOKEN=<token>
TELEGRAM_WEBHOOK_SECRET=<secret>
```
