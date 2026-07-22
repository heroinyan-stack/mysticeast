# MysticEast Worker - Deployment Guide

## Overview
Cloudflare Worker that handles:
- PayPal + CJ Dropshipping auto-fulfillment
- Weekly trending product discovery from CJ
- Product management (KV storage)
- Pinterest auto-publishing

## Setup

### 1. Create KV Namespace
```bash
wrangler kv:namespace create "KV"
```
Copy the ID to `wrangler.toml`

### 2. Set Secrets
```bash
wrangler secret put CJ_API_KEY
wrangler secret put PAYPAL_CLIENT_ID
wrangler secret put PAYPAL_CLIENT_SECRET
wrangler secret put EMAIL_API_KEY
```

### 3. Deploy
```bash
wrangler deploy
```

## Cron Jobs
- `0 3 * * 1` - Every Monday 3 AM UTC: Discover trending products from CJ, add up to 3 new products

## API Endpoints

### Products
- `GET /api/products` - Get all products from KV
- `POST /api/products/cj-search` - Search CJ for products (body: `{ keyword, page, pageSize }`)
- `POST /api/products/add-cj` - Add CJ product to store (body: `{ cjPid, vid, category }`)
- `POST /api/products/discover` - Manually trigger weekly discovery

### Orders
- `POST /api/order/create` - Create CJ order after PayPal payment
- `GET /api/order/status` - Get CJ order status

### Other
- `GET /api/health` - Health check
- `POST /api/cj/webhook` - CJ logistics webhook
- `POST /api/notify` - Send notification email
- `GET /api/pinterest/boards` - Get Pinterest boards
- `POST /api/pinterest/publish` - Publish Pinterest pin
- `POST /api/pinterest/publish-random` - Publish random product pin
