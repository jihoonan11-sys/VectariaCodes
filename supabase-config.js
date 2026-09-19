/*
  VectariaCodes authentication + cloud configuration

  Discord-only authentication.
  1) Keep Discord enabled in Supabase Authentication → Sign In / Providers.
  2) Disable Email and other sign-in providers if you want Discord to be the only login method.
  3) Paste the browser-safe Publishable key below.

  IMPORTANT: use the browser-safe Publishable key only.
  NEVER put a secret/service_role key in this file.
*/
window.VC_SUPABASE_CONFIG = {
  url: "https://effwfqieshopekifduvr.supabase.co",
  publishableKey: "sb_publishable_L_roHcYZmGiJSGO1xOh1lw_QCVZzNXt"
};
