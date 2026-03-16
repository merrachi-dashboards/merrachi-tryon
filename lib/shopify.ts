import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";

// Tijdens de build op Vercel zijn env vars soms niet beschikbaar.
// We gebruiken dummy waarden om te voorkomen dat de build crasht.
const apiKey = process.env.SHOPIFY_CLIENT_ID || process.env.SHOPIFY_API_KEY || "dummy_key";
const apiSecretKey = process.env.SHOPIFY_API_SECRET || "dummy_secret";
const appUrl = process.env.SHOPIFY_APP_URL || "https://dummy.com";

const shopify = shopifyApi({
  apiKey: apiKey,
  apiSecretKey: apiSecretKey,
  scopes: (process.env.SCOPES || "read_products,read_customers,read_script_tags,write_script_tags").split(","),
  hostName: appUrl.replace(/https?:\/\//, ""),
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export default shopify;
