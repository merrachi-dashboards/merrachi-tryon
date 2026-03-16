import { NextRequest, NextResponse } from "next/server";
import { getFreshShopifyToken } from "@/lib/shopify-token";

// Force this route to run as a serverless function on every request
export const dynamic = "force-dynamic";

// This route is called ONCE during setup to register the Script Tag with Shopify.
// The script tag tells Shopify to inject your try-on JS into every storefront page.
export async function GET(req: NextRequest) {
  const shop = (process.env.SHOPIFY_SHOP || "").trim();
  const appUrl = (process.env.SHOPIFY_APP_URL || "").trim().replace(/\/$/, "");

  if (!shop || !appUrl) {
    return NextResponse.json({ error: "Missing env vars (SHOPIFY_SHOP or SHOPIFY_APP_URL)" }, { status: 500 });
  }

  let accessToken: string;
  try {
    accessToken = await getFreshShopifyToken();
  } catch (e) {
    return NextResponse.json({ error: "Could not obtain Shopify access token" }, { status: 500 });
  }

  // Hardcode the production URL to avoid any env var whitespace/formatting issues
  const scriptSrc = "https://merrachitryonapp.vercel.app/try-on.js";

  console.log("Registering script tag:", scriptSrc, "| shop:", shop);

  try {
    // First, check if script tag already exists
    const listRes = await fetch(`https://${shop}/admin/api/2024-01/script_tags.json`, {
      method: "GET",
      headers: {
        "X-Shopify-Access-Token": accessToken,
        "Content-Type": "application/json",
      },
    });

    const listData = await listRes.json();
    const allMatching = listData.script_tags?.filter((s: any) => s.src === scriptSrc) || [];

    // Delete any duplicates, keeping none (we'll register a clean one below)
    if (allMatching.length > 0) {
      for (const tag of allMatching) {
        await fetch(`https://${shop}/admin/api/2024-01/script_tags/${tag.id}.json`, {
          method: "DELETE",
          headers: { "X-Shopify-Access-Token": accessToken },
        });
      }
    }

    // Register one clean script tag with caching enabled
    const res = await fetch(`https://${shop}/admin/api/2024-01/script_tags.json`, {
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        script_tag: {
          event: "onload",
          src: scriptSrc,
          display_scope: "online_store",
          cache: true,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      return NextResponse.json({ error: err, attempted_src: scriptSrc }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ message: "Script tag registered successfully!", script_tag: data.script_tag });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to register script tag" }, { status: 500 });
  }
}
