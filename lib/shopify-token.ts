/**
 * Shopify Token Management
 * 
 * For this custom app, Shopify issues short-lived tokens (~24h) via
 * the client_credentials OAuth flow. This helper auto-refreshes them.
 */

const SHOPIFY_SHOP = process.env.SHOPIFY_SHOP || "uk-merrachi.myshopify.com";
const CLIENT_ID = process.env.SHOPIFY_CLIENT_ID || process.env.SHOPIFY_API_KEY || "";
const CLIENT_SECRET = process.env.SHOPIFY_API_SECRET || "";

export async function getFreshShopifyToken(): Promise<string> {
  // Try to get a fresh token via client_credentials
  if (CLIENT_ID && CLIENT_SECRET) {
    try {
      const response = await fetch(
        `https://${SHOPIFY_SHOP}/admin/oauth/access_token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.access_token) {
          return data.access_token;
        }
      }
    } catch (e) {
      console.warn("Token refresh failed, falling back to env token:", e);
    }
  }

  // Fall back to static token from env
  const staticToken = process.env.SHOPIFY_ACCESS_TOKEN || "";
  if (!staticToken) throw new Error("No Shopify access token available");
  return staticToken;
}
