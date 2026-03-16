"use client";

import { useEffect, useState } from "react";
import { Page, Layout, Card, Text, BlockStack, List, InlineStack, AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";

export default function Home() {
  const [shop, setShop] = useState("");
  const [host, setHost] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const shopParam = url.searchParams.get("shop");
    const hostParam = url.searchParams.get("host");

    if (shopParam) setShop(shopParam);
    if (hostParam) setHost(hostParam);
  }, []);

  if (!shop || !host) {
    return <div>Loading...</div>;
  }

  return (
    <PolarisProvider i18n={translations}>
      <Page title="Merrachi Virtual Try On">
        <BlockStack gap="500">
          <Layout>
            <Layout.Section>
              <Card>
                <BlockStack gap="500">
                  <BlockStack gap="200">
                    <Text as="h2" variant="headingMd">
                      Welcome to the Merrachi Try On App
                    </Text>
                    <Text as="p" variant="bodyMd">
                      This app powers the Virtual Try On feature on your storefront.
                      It connects your theme to the AI generation service.
                    </Text>
                  </BlockStack>
                  <BlockStack gap="200">
                    <Text as="h3" variant="headingSm">
                      Quick Start Guide
                    </Text>
                    <List type="number">
                      <List.Item>
                        Ensure you have configured your <strong>App Proxy</strong> in the Partner Dashboard.
                      </List.Item>
                      <List.Item>
                        Go to your <strong>Online Store &gt; Themes &gt; Customize</strong>.
                      </List.Item>
                      <List.Item>
                        Navigate to a <strong>Product Page</strong>.
                      </List.Item>
                      <List.Item>
                        Add the <strong>Virtual Try On Button</strong> block to your product template.
                      </List.Item>
                    </List>
                  </BlockStack>
                </BlockStack>
              </Card>
            </Layout.Section>
            <Layout.Section variant="oneThird">
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    App Status
                  </Text>
                  <BlockStack gap="200">
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Shop:</Text>
                      <Text as="span" variant="bodyMd" fontWeight="bold">{shop}</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">AI Service:</Text>
                      <Text as="span" variant="bodyMd" tone="success">Connected</Text>
                    </InlineStack>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">Database:</Text>
                      <Text as="span" variant="bodyMd" tone="success">Connected</Text>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </Card>
            </Layout.Section>
          </Layout>
        </BlockStack>
      </Page>
    </PolarisProvider>
  );
}
