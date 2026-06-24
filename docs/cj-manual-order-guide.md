# CJ Dropshipping 手动下单操作指南

## 为什么手动下单？

**初期（日单 < 10 单）完全没必要搞复杂的 API 对接！**

```
手动下单优势：
✅ 零技术成本，注册即用
✅ 灵活可控，每单都能检查
✅ 不用绑定店铺也能发货
✅ 出问题好处理

什么时候上自动：
→ 日均 15 单以上再考虑 API/ERP 对接
```

---

## 一、前期准备（只需做一次）

### Step 1: 注册 CJ 账户

```
1. 打开 https://cjdropshipping.com
2. 右上角 Sign Up
3. 填写：
   - Email: 你的工作邮箱
   - Password: 设一个强密码
   - Store Name: MysticEast
4. 邮箱验证 → 登录
```

### Step 2: 完善收货地址模板

```
My CJ → Address → Add New Address

填一个默认退货地址（可以是你的国内地址）：
- 收货人：你的名字
- 电话：你的手机号
- 地址：国内地址（用于退货）
```

### Step 3: 充值（可选）

```
My CJ → Wallet → Recharge
- 支持 PayPal / 信用卡
- 建议首充 $50-100 测试
- 后续按单量充
```

---

## 二、产品上架流程

### 找产品 & 添加到我的产品库

```
1. 首页搜索框输入关键词（英文）
   例：obsidian bracelet, amethyst bracelet, crystal tree

2. 筛选条件：
   ☑️ Supplier Rating: 4.0+
   ☑️ Shipping: CJ Packet available
   ☑️ Price: 按预算

3. 点进产品详情页，检查：
   □ 图片清晰度（≥5张）
   □ 产品规格（尺寸/材质/重量）
   □ 变体选项（尺寸/颜色）
   □ 发货时效（Processing Time）
   □ 物流方式和运费
   □ 买家评价（看差评）

4. 点 "Add to My Products" → 选分类 → 确认
```

### 记录产品信息表（重要！）

| 产品名 | CJ产品ID | SKU | 成本 | 物流费 | 总到货成本 | 建议售价 |
|-------|---------|-----|------|--------|-----------|---------|
| Black Obsidian 8mm | xxx | OBS-8MM | $2.8 | $2.5 | $5.3 | $29.99 |
| ... | ... | ... | ... | ... | ... | ... |

**存到 Google Sheet / Excel 里，以后对账用。**

---

## 三、收到订单后怎么手动下单（核心）

### 下单流程（5分钟/单）

```
┌─────────────────────────────────────────────┐
│  1. 收到订单通知（PayPal/邮件）              │
│     ↓                                       │
│  2. 打开 CJ，搜索产品                        │
│     ↓                                       │
│  3. 选择正确的变体 → 点 "Buy Now"            │
│     ↓                                       │
│  4. 填写客户收货地址（复制粘贴）              │
│     ↓                                       │
│  5. 选择物流方式 → 确认付款                  │
│     ↓                                       │
│  6. 记录 CJ 订单号 → 等发货                  │
│     ↓                                       │
│  7. 发货后复制物流号 → 发邮件通知客户         │
└─────────────────────────────────────────────┘
```

### Step by Step 详细操作

#### 第1步：收到订单
```
支付成功后，你会收到：
- PayPal 收款邮件
- 网站的订单通知（如果配了）

从邮件/后台复制：
  客户姓名、地址、电话、产品名、变体
```

#### 第2步：去 CJ 下单
```
1. 登录 CJ → 搜索对应的产品
2. 选择正确的变体（尺寸/颜色/数量）
3. 点击 "Buy Now"（不是 List）
4. 进入结算页
```

#### 第3步：填写收货地址
```
Shipping Address → Add New Address

逐项复制粘贴客户地址：
- First Name: 客户名
- Last Name: 客户姓
- Phone: 客户电话
- Country: 选国家
- State/Province: 州/省
- City: 城市
- Address Line 1: 街道地址
- Address Line 2: 公寓号（可选）
- Zip/Postal Code: 邮编
- Company: （留空）

保存地址 → 选中这个地址
```

#### 第4步：选择物流
```
Shipping Method 选择：
├── CJ Packet Standard  ($2-3, 7-15天)  ← 推荐默认
├── CJ Packet Sensitive ($3-4, 7-12天)
├── USPS              ($4-6, 7-10天)
└── DHL Express       ($10-15, 3-5天)

规则：
- 普通订单：CJ Packet Standard
- 客户加钱选了快递：对应选
- 高价值订单(>$100)：选快一点的
```

#### 第5步：确认付款
```
1. 核对订单信息：
   □ 产品+变体对不对
   □ 数量对不对
   □ 地址对不对
   □ 物流方式对不对
   □ 总金额（产品+运费）

2. 选择支付方式：
   - CJ Wallet（有钱就用这个，最快）
   - PayPal
   - Credit Card

3. 点 "Pay Now" → 完成付款
```

#### 第6步：记录订单
```
付款成功后，记录到你的订单表：
- 网站订单号: ME-XXXXXX
- CJ订单号: CJXXXXXX
- 客户邮箱: xxx@email.com
- 产品: Black Obsidian 8mm
- 金额: $29.99
- CJ成本: $5.3
- 利润: $24.69
- 下单日期: 2026-06-24
- 状态: 待发货
```

#### 第7步：发货后通知客户
```
等 1-3 天后，去 CJ 看订单状态：
My CJ → Orders → 找到对应订单

状态变为 "Shipped" 后：
1. 复制 Tracking Number
2. 复制物流查询链接
3. 给客户发邮件（模板见下文）
4. 更新订单状态为"已发货"
```

---

## 四、订单邮件模板

### 订单确认邮件（刚下单自动发）

```
Subject: Your MysticEast Order #ME-XXXXXX

Hi [Customer Name],

Thank you for your order! We're so excited for you to begin your crystal journey.

Order Details:
- Order #ME-XXXXXX
- Date: June 24, 2026
- Items:
  • Black Obsidian Protection Bracelet (8mm) x1 - $29.99

Subtotal: $29.99
Shipping: FREE
Total: $29.99

Your order is being prepared with intention and care. We'll send you another email with tracking information as soon as it ships.

Shipping typically takes 7-15 business days.

If you have any questions, reply to this email anytime.

With crystal blessings,
The MysticEast Team
```

### 发货通知邮件（CJ发货后发）

```
Subject: Your Order Has Shipped! ✦ #ME-XXXXXX

Hi [Customer Name],

Great news! Your order has shipped and is on its way to you.

📦 Tracking Information:
- Carrier: CJ Packet
- Tracking Number: [XXXXXXXXXXXX]
- Track here: https://t.17track.net/en?nums=[XXXXXXXXXXXX]

Estimated delivery: 7-15 business days from ship date.

Your order contains:
• Black Obsidian Protection Bracelet (8mm) x1

💡 Pro tip: Upon arrival, cleanse your crystal under running water and set your intention to activate its energy.

If you have any questions about your delivery, just reply to this email.

Enjoy your new crystal companion!

With crystal blessings,
The MysticEast Team
```

---

## 五、物流查询方式

### 给客户的查询方式
```
17Track（推荐）：https://www.17track.net
  → 输入追踪号即可查
  → 支持中文/英文

AfterShip：https://www.aftership.com
  → 界面更友好
  → 可以邮件通知更新
```

### 你自己查的方式
```
CJ 后台：
  My CJ → Orders → 点订单详情 → Tracking

直接查：
  复制运单号去 17Track.net 查
```

---

## 六、常见问题处理

### Q1: 客户问怎么还没发货？
```
先去 CJ 看状态：
- Processing（处理中）：告诉客户 24-48h 内发
- Shipped 但没物流信息：可能还没扫单，让客户等1-2天
- 超过 5 天还没发：联系 CJ 客服催单

回复模板：
"Hi [Name], thanks for checking in!
I've looked up your order and it's currently being prepared at our fulfillment center.
It should ship within the next 24 hours, and you'll receive a tracking number as soon as it does.
Thanks for your patience!
Best,
MysticEast Team"
```

### Q2: 物流显示签收了但客户说没收到？
```
1. 先让客户检查：
   - 门口/信箱
   - 邻居代收
   - 公寓管理处

2. 等 2-3 天（有时候物流提前扫签收）

3. 还是没收到：
   - 联系 CJ 客服开调查
   - 如果确认丢件，给客户重发或退款
   - 初期建议直接重发/退款，损失小钱换口碑
```

### Q3: 客户要退货/退款？
```
未发货：
  → 直接全额退款
  → CJ 那边取消订单（如果还没发）

已发货但未收到：
  → 让客户再等等
  → 如果超过 30 天，全额退款（算坏账）

已收到但不想要：
  → 30天无理由退换
  → 让客户寄回（运费客户出，或者你承担看情况）
  → 收到退货后退款
  → 初期建议：价值 < $20 的直接退，不用寄回了，省麻烦
```

### Q4: 产品质量问题？
```
1. 让客户发照片/视频
2. 确认是质量问题 → 道歉
3. 解决方案二选一：
   a. 重发一个（成本低的话推荐）
   b. 全额退款（不用退货）
4. 同时联系 CJ 客服，申请售后索赔
```

---

## 七、对账 & 成本核算

### 每周对账一次
```
每周日晚上花 30 分钟：
1. 导出网站订单（PayPal交易记录）
2. 导出 CJ 订单（My CJ → Orders → Export）
3. 一一对应
4. 计算本周利润：
   总收入 - CJ总成本 - 其他费用 = 净利润
```

### 每月复盘
```
月度数据：
- 总订单数
- 总营收
- 总成本（产品+物流）
- 退款率
- 利润率
- 爆款产品Top3
- 广告花费

根据数据调整：
- 砍销量差的产品
- 加推爆款
- 优化价格
```

---

## 八、什么时候升级成自动化？

### 触发条件（满足任意一个）
```
✅ 日均订单 > 15 单
✅ 你觉得手动下单太费时间了
✅ 想花更多时间在选品/推广上
```

### 升级方案
```
方案 A：CJ + Shopify 插件（最简单）
  → 把网站迁移到 Shopify
  → 装 CJ Dropshipping 官方插件
  → 产品、订单、物流全自动同步
  → 成本：$29/月 Shopify + CJ免费

方案 B：CJ API + 自建站（灵活）
  → 用 CJ API 对接你的网站
  → 需要开发，成本高
  → 适合单量大、想自定义的

方案 C：ERP系统（中等）
  → 店小秘 / 马帮 / 积加
  → 对接多平台+多供应商
  → 成本：¥99-399/月
```

---

## 九、每日操作清单（初期）

```
【早上 9:00】
□ 检查新订单（邮箱/PayPal）
□ 给昨晚的订单去 CJ 下单
□ 回复客户邮件

【下午 16:00】
□ 检查有没有新订单
□ 查看 CJ 待发货订单状态
□ 发已经发货的物流通知邮件

【晚上 21:00】
□ 最后查一次新订单
□ 记录今天的订单数据
```

---

## 十、CJ 客服联系方式

```
在线客服：
  网站右下角 → Live Chat
  响应时间：通常几分钟

工单系统：
  My CJ → Support → Submit Ticket
  响应时间：24小时内

邮箱：
  service@cjdropshipping.com

中文客服也有，沟通更方便
```

---

**文档版本**：v1.0  
**最后更新**：2026-06-24  
**适用阶段**：0-50单/月，手动操作阶段
