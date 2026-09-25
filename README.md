# Legend RolePlay

Next.js website starter for Legend RolePlay.

## Run
1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Fill Discord credentials.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Important
The website UI, pages, rules, role IDs, application forms and Discord submission endpoints are included.

The Accept/Denied interaction bot and Discord OAuth2 session layer are intentionally separated in `discord-bot/` so secrets are not hard-coded. Add your Discord bot token and configure the review/result channels in `.env` before using the application workflow in production.

Gallery channel:
1552414400894210149

Whitelist review/result:
1552413863880818779 / 1552413852313067602

Staff review/result:
1553161152337551450 / 1552414631585255444

## Discord Staff + Connect to Discord
Set these variables in the root `.env`:
- `DISCORD_BOT_TOKEN` = your Discord bot token (keep secret)
- `DISCORD_GUILD_ID` = your Legend RolePlay server ID
- `DISCORD_CLIENT_ID` = Discord application client ID
- `DISCORD_CLIENT_SECRET` = Discord OAuth2 client secret (keep secret)
- `DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback`
- `SESSION_SECRET` = long random secret

The Staff page reads current Discord guild members using the bot token and displays members who have one of the configured staff role IDs. The Staff page also includes a Connect to Discord OAuth2 button.
In the Discord Developer Portal, add the exact redirect URL above under OAuth2 Redirects and make sure the bot is in the guild. For member listing, enable the Server Members Intent for the bot if Discord requires it for your guild/member access.
