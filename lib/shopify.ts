import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node";

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_CLIENT_ID || process.env.SHOPIFY_API_KEY || "",
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  scopes: (process.env.SCOPES || "write_products,read_products,read_customers").split(","),
  hostName: (process.env.SHOPIFY_APP_URL || "").replace(/https?:\/\//, ""),
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export default shopify;
