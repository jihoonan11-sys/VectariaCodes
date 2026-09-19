# VectariaCodes v1.5.2 — Authentication Ready

STEP 7 now has the real Supabase Auth wiring for:
- Email + password sign up
- Email + password sign in
- Google OAuth
- Discord OAuth
- Persistent sessions
- Sign out
- Guest restrictions

## One-time setup

The code cannot create the project's Supabase account for you. Connect your own Supabase project once:

1. Open your Supabase project dashboard.
2. Copy the **Project URL** and browser-safe **Publishable key**.
3. Put them in `supabase-config.js`.
4. In Supabase Authentication → URL Configuration, set your production Site URL to your VectariaCodes URL and add the same URL to the allowed Redirect URLs.
5. For Google or Discord, enable that provider in Authentication → Sign In / Providers and configure its OAuth application.

The app uses the current page origin/path as its OAuth redirect target. Supabase requires redirect targets to be present in the allowed Redirect URLs list.

## GitHub Pages example

If your repository is `jihoonan11-sys/VectariaCodes`, the production URL is:
`https://jihoonan11-sys.github.io/VectariaCodes/`

Add that exact URL as the Site URL / allowed redirect URL in Supabase.

## Security

Only the Supabase Project URL and Publishable key belong in the browser config. Never put a Supabase secret/service_role key in `supabase-config.js`.

After configuration, open the site, click the top-right avatar → Sign in, and test email/password first. Then test Google and Discord after enabling those providers.

## Authentication mode
VectariaCodes is configured for Discord-only sign-in. Enable Discord in Supabase Auth and keep other sign-in providers disabled. The client calls `supabase.auth.signInWithOAuth({ provider: "discord" })`.
