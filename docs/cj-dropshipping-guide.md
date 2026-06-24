# CJ Dropshipping 对接指南

## 一、CJ Dropshipping 简介

CJ Dropshipping 是一个专业的跨境电商一件代发平台，提供：
- 丰富的产品库（水晶、饰品、家居用品等）
- 自动化订单处理
- 物流追踪同步
- 美国海外仓（3-5天送达）
- API对接支持

**官网**：https://cjdropshipping.com

---

## 二、注册与设置

### Step 1：注册账户

1. 访问 https://cjdropshipping.com
2. 点击 "Sign Up" 注册
3. 填写信息：
   - Email（建议用企业邮箱）
   - Password
   - Store Name（MysticEast）
4. 完成邮箱验证

### Step 2：绑定店铺

**Shopify绑定**：
1. 登录 CJ Dropshipping
2. 进入 "My CJ" → "Authorization"
3. 点击 "Add Store"
4. 选择 "Shopify"
5. 输入店铺URL
6. 授权API访问

**WordPress/WooCommerce绑定**：
1. 安装 CJ Dropshipping 插件
2. 在 WooCommerce → 设置 → 集成
3. 输入 CJ API Key

### Step 3：获取API密钥

1. 进入 "My CJ" → "API"
2. 生成 API Key 和 Secret
3. 保存密钥（用于后续对接）

---

## 三、产品上架流程

### 方法A：手动上架（推荐新手）

```
1. 在 CJ 产品库搜索产品
   - 搜索关键词：obsidian bracelet, crystal bracelet, feng shui
   
2. 查看产品详情
   - 检查产品质量评分
   - 查看供应商信息
   - 确认发货时效
   
3. 添加到店铺
   - 点击 "List" 按钮
   - 编辑产品信息：
     * 标题（SEO优化）
     * 描述（使用模板）
     * 价格（建议 2.5-3x 加价）
     * 图片（可替换）
   
4. 发布产品
```

### 方法B：批量导入

```
1. 导出产品CSV文件
2. 批量编辑：
   - 价格计算公式：成本 × 2.5
   - 标题优化
   - 分类设置
3. 导入到店铺
```

### 方法C：API对接（高级）

```javascript
// CJ API 产品同步示例
const CJ_API_URL = 'https://api.cjdropshipping.com/v1';
const CJ_API_KEY = 'your_api_key';

// 获取产品列表
async function fetchCJProducts(category = 'jewelry') {
  const response = await fetch(`${CJ_API_URL}/products?category=${category}`, {
    headers: {
      'Authorization': `Bearer ${CJ_API_KEY}`
    }
  });
  return response.json();
}

// 转换产品格式
function transformCJProduct(cjProduct) {
  return {
    id: cjProduct.sku,
    name: cjProduct.name,
    price: cjProduct.price * 2.5, // 加价2.5倍
    originalPrice: cjProduct.price * 3.5,
    images: cjProduct.images,
    description: cjProduct.description,
    cjProductId: cjProduct.id,
    cjCost: cjProduct.price
  };
}
```

---

## 四、订单自动化流程

### 自动发货设置

```
店铺设置：
1. 进入 CJ Dropshipping → "Order Settings"
2. 启用 "Auto-fulfillment"
3. 设置规则：
   - 支付成功后自动创建订单
   - 自动同步物流追踪
   - 自动发送发货通知
   
4. 配置物流方式：
   - CJPacket（7-15天，$2-3）
   - USPS（7-12天，$3-4）
   - DHL Express（5-7天，$8-15）
```

### 订单处理流程

```
用户下单 → Shopify/WooCommerce接收
    ↓
支付确认 → 自动触发
    ↓
CJ接收订单 → 自动创建采购单
    ↓
供应商发货 → 物流号生成
    ↓
物流号回传 → 店铺更新状态
    ↓
客户收到通知 → 物流追踪链接
```

### API订单提交示例

```javascript
// 提交订单到 CJ
async function submitOrderToCJ(orderData) {
  const cjOrder = {
    order_number: orderData.orderId,
    shipping_address: {
      name: orderData.customerName,
      address: orderData.address,
      city: orderData.city,
      state: orderData.state,
      country: orderData.country,
      zip: orderData.zipCode,
      phone: orderData.phone
    },
    products: orderData.items.map(item => ({
      sku: item.sku,
      quantity: item.quantity
    })),
    shipping_method: 'CJPacket' // 或 'USPS', 'DHL'
  };

  const response = await fetch(`${CJ_API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${CJ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cjOrder)
  });

  return response.json();
}
```

---

## 五、推荐产品清单

### MysticEast 首批产品（CJ SKU）

| 产品 | CJ搜索关键词 | 成本范围 | 建议售价 | CJ评分 |
|-----|-------------|---------|---------|--------|
| 黑曜石手串 | "obsidian bracelet" | $2-4 | $29-35 | 4.5+ |
| 紫水晶手串 | "amethyst bracelet" | $3-5 | $39-45 | 4.5+ |
| 黄水晶手串 | "citrine bracelet" | $3-5 | $35-42 | 4.5+ |
| 水晶树摆件 | "crystal tree" / "gemstone tree" | $4-7 | $49-59 | 4.3+ |
| 桃木符咒 | "peach wood charm" / "chinese talisman" | $1-3 | $19-25 | 4.0+ |

### 选品标准

```
✅ CJ评分 ≥ 4.0
✅ 供应商响应时间 < 24小时
✅ 发货时效 ≤ 15天
✅ 产品有实拍图
✅ 支持美国海外仓（可选）
✅ 利润率 ≥ 80%
```

---

## 六、物流方案

### 物流方式对比

| 方式 | 时效 | 成本 | 适合产品 | 推荐度 |
|-----|------|------|---------|--------|
| CJPacket | 7-15天 | $2-3 | 低价产品 | ⭐⭐⭐⭐⭐ |
| USPS ePacket | 7-12天 | $3-4 | 主流产品 | ⭐⭐⭐⭐⭐ |
| CJ美国仓 | 3-5天 | $5-8 | 爆款产品 | ⭐⭐⭐⭐ |
| DHL Express | 5-7天 | $8-15 | 高端订单 | ⭐⭐⭐ |

### 物流设置建议

```
店铺物流配置：
- 免邮门槛：$49
- 标准物流：CJPacket（免费或$4.99）
- 快递物流：DHL（$12.99）
- 美国仓产品：标注"Fast Shipping"
```

---

## 七、质量控制

### 产品检查清单

```
上架前检查：
□ 产品图片清晰（≥5张）
□ 描述详细准确
□ 价格合理（对比竞品）
□ 供应商评分 ≥ 4.0
□ 发货时效明确
□ 有真实买家评价

定期检查：
□ 每周检查库存状态
□ 每月检查供应商评分
□ 监控客户反馈
□ 更新产品信息
```

### 供应商沟通模板

```
询价模板：
"Hi, I'm interested in your [product name]. 
Can you provide:
1. Wholesale price for quantity 50+
2. Shipping time to US
3. Product quality photos
4. Custom packaging options

Thank you,
MysticEast Team"
```

---

## 八、常见问题解决

### 问题1：订单未自动同步

**解决方案**：
1. 检查 API 授权状态
2. 确认订单状态为"已支付"
3. 手动触发同步按钮
4. 联系 CJ客服

### 问题2：物流信息未更新

**解决方案**：
1. 检查物流追踪设置
2. 等待24-48小时（物流扫描延迟）
3. 联系供应商查询
4. 主动通知客户

### 问题3：产品质量问题

**解决方案**：
1. 收集客户反馈和图片
2. 联系 CJ客服申请退款
3. 更换供应商
4. 下架问题产品

### 问题4：发货延迟

**解决方案**：
1. 检查供应商发货时效
2. 选择海外仓产品
3. 提前设置发货预期
4. 主动沟通客户

---

## 九、成本计算

### 单品成本结构

```
产品成本 = CJ采购价 + 物流费 + 包装费

示例：黑曜石手串
- CJ采购价：$3
- CJPacket物流：$2
- 包装材料：$0.5
- 总成本：$5.5

售价：$29
利润：$23.5
利润率：81%
```

### 月度成本预算

```
固定成本：
- CJ账户：免费
- Shopify：$29/月（或WordPress免费）

变动成本：
- 产品采购：按订单
- 物流费用：按订单
- 广告投放：$300-500/月

建议：
- 首月预算：$500（测试）
- 稳定后预算：$2000-3000/月
```

---

## 十、对接代码示例

### WooCommerce 对接代码

```php
// wp-content/plugins/mysticeast-cj/class-cj-api.php

class CJ_API {
    private $api_key;
    private $api_url = 'https://api.cjdropshipping.com/v1';

    public function __construct($api_key) {
        $this->api_key = $api_key;
    }

    // 获取产品
    public function get_products($category = 'jewelry', $page = 1) {
        $response = wp_remote_get(
            $this->api_url . '/products?category=' . $category . '&page=' . $page,
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->api_key
                ]
            ]
        );
        return json_decode(wp_remote_retrieve_body($response));
    }

    // 创建订单
    public function create_order($order_data) {
        $response = wp_remote_post(
            $this->api_url . '/orders',
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->api_key,
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode($order_data)
            ]
        );
        return json_decode(wp_remote_retrieve_body($response));
    }

    // 获取物流信息
    public function get_tracking($order_id) {
        $response = wp_remote_get(
            $this->api_url . '/orders/' . $order_id . '/tracking',
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->api_key
                ]
            ]
        );
        return json_decode(wp_remote_retrieve_body($response));
    }
}

// WooCommerce订单钩子
add_action('woocommerce_payment_complete', 'send_order_to_cj');

function send_order_to_cj($order_id) {
    $order = wc_get_order($order_id);
    $cj_api = new CJ_API(get_option('cj_api_key'));

    $order_data = [
        'order_number' => $order->get_order_number(),
        'shipping_address' => [
            'name' => $order->get_shipping_first_name() . ' ' . $order->get_shipping_last_name(),
            'address' => $order->get_shipping_address_1(),
            'city' => $order->get_shipping_city(),
            'state' => $order->get_shipping_state(),
            'country' => $order->get_shipping_country(),
            'zip' => $order->get_shipping_postcode(),
            'phone' => $order->get_billing_phone()
        ],
        'products' => [],
        'shipping_method' => 'CJPacket'
    ];

    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        $cj_sku = get_post_meta($product->get_id(), 'cj_sku', true);
        
        if ($cj_sku) {
            $order_data['products'][] = [
                'sku' => $cj_sku,
                'quantity' => $item->get_quantity()
            ];
        }
    }

    $cj_api->create_order($order_data);
}
```

---

## 十一、备选供应商

如果 CJ Dropshipping 不满足需求，可考虑以下备选：

| 平台 | 优势 | 劣势 | 适合 |
|-----|------|------|------|
| **Spocket** | 欧美供应商、发货快 | 价格较高 | 高端产品 |
| **AliExpress** | 产品丰富、价格低 | 时效慢 | 测试产品 |
| **Modalyst** | 品牌产品 | 佣金高 | 品牌定位 |
| **Printful** | 定制产品 | 仅定制 | 定制需求 |

---

## 十二、下一步行动

### 立即执行

```
□ 注册 CJ Dropshipping 账户
□ 完成店铺绑定
□ 搜索并上架首批5个产品
□ 设置自动发货规则
□ 测试下单流程
□ 配置物流追踪同步
```

### 一周内完成

```
□ 上架10-15个产品
□ 设置美国海外仓产品
□ 配置邮件通知模板
□ 建立供应商沟通渠道
□ 测试完整订单流程
□ 优化产品描述和图片
```

---

## 附录：产品上架检查表

```
产品上架前确认：

□ 产品标题（SEO优化）
□ 产品描述（完整详细）
□ 产品图片（≥5张高质量）
□ 价格设置（成本×2.5）
□ 分类设置（正确分类）
□ 标签设置（便于搜索）
□ CJ SKU记录（便于对接）
□ 供应商信息（评分≥4.0）
□ 发货时效确认
□ 库存状态确认

上架后检查：

□ 前端显示正常
□ 购买流程顺畅
□ 购物车功能正常
□ 价格显示正确
□ 图片加载正常
□ 移动端适配正常
```

---

**文档版本**：v1.0
**更新日期**：2024-06-22
**适用平台**：Shopify / WooCommerce / 自建站