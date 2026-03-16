"use client";

import { AppProvider, Page, Layout, Card, Text, BlockStack, List, InlineStack, Badge, Button } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

export default function Home() {
  return (
    <AppProvider i18n={translations}>
      <Page title="Merrachi Virtual Try On">
        <BlockStack gap="500">
          <Layout>
            <Layout.Section>
              <Card>
                <BlockStack gap="400">
                  <Text as="h2" variant="headingMd">
                    Virtual Try On — Setup Guide
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    This app powers the Virtual Try On feature on your Merrachi storefront.
                    Follow the steps below to activate it.
                  </Text>
                  <List type="number">
                    <List.Item>
                      Make sure you have set the <strong>App Proxy</strong> in Shopify Admin:
                      <br />Subpath: <code>apps/try-on</code> → Proxy URL: your Vercel URL + <code>/api/try-on</code>
                    </List.Item>
                    <List.Item>
                      Click the button below to inject the <strong>Try On button</strong> into your storefront automatically.
                      This only needs to be done <strong>once</strong>.
                    </List.Item>
                    <List.Item>
                      Go to your store and open any product page — you should see the <strong>Try On</strong> button below the Add to Cart button.
                    </List.Item>
                  </List>
                  <Button
                    url="/api/setup/register-script"
                    external
                    variant="primary"
                  >
                    Activate Try On Button on Storefront
                  </Button>
                </BlockStack>
              </Card>
            </Layout.Section>

            <Layout.Section variant="oneThird">
              <BlockStack gap="400">
                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingMd">
                      App Status
                    </Text>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Supabase Storage</Text>
                      <Badge tone="success">Connected</Badge>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">AI (Nano Banana 2)</Text>
                      <Badge tone="success">Connected</Badge>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Shopify Store</Text>
                      <Badge tone="success">uk-merrachi</Badge>
                    </InlineStack>
                  </BlockStack>
                </Card>

                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingMd">
                      How It Works
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      1. Customer clicks <strong>Try On</strong> on a product page.
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      2. They upload a close-up and full-body photo.
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      3. Nano Banana 2 (Gemini AI) generates a realistic photo of them wearing the garment.
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      4. Photos are saved to Supabase and linked to their account for next time.
                    </Text>
                  </BlockStack>
                </Card>
              </BlockStack>
            </Layout.Section>
          </Layout>
        </BlockStack>
      </Page>
    </AppProvider>
  );
}
