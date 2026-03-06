/**
 * data/content.ts
 *
 * Single source of truth for every piece of text, number, and card data
 * shown on the AutoCart landing page.
 *
 * To update any content — just edit this file. No component changes needed.
 */

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_SECTIONS = [
  { id: "market",     label: "Market"     },
  { id: "mindset",    label: "Mindset"    },
  { id: "problem",    label: "Problem"    },
  { id: "solution",   label: "Solution"   },
  { id: "logistics",  label: "Logistics"  },
  { id: "economics",  label: "Economics"  },
  { id: "vision",     label: "Vision"     },
  { id: "network",    label: "Network"    },
  { id: "experience", label: "Experience" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { num: "$10T",  label: "Global Essentials Market" },
  { num: "$700B", label: "India Market Size"        },
  { num: "25%",   label: "Annual Growth Rate"       },
  { num: "156h",  label: "Hours Saved Per Year"     },
];

export const MARQUEE_ITEMS = [
  "Consumption Prediction",
  "Automated Replenishment",
  "Route Optimization",
  "Zero Mental Load",
  "8–10× Delivery Efficiency",
  "Network Moat",
  "₹520 Net Profit Per Order",
  "The House That Runs Itself",
];

// ─── 01 Market ───────────────────────────────────────────────────────────────

export const MARKET_CARDS = [
  {
    icon: "🌍",
    num: "$9–10T",
    title: "Global Essentials Market",
    body: "The world's essentials market represents one of the most fundamental consumer industries — touching every household, every day.",
  },
  {
    icon: "🇮🇳",
    num: "$600–700B",
    title: "India Market Size",
    body: "India's total grocery and household consumption market — representing approximately <strong>60% of the entire retail market</strong>.",
  },
  {
    icon: "📱",
    num: "<3%",
    title: "Current Online Penetration",
    body: "Online essentials is less than 3% of the total market. <strong>The majority is still waiting to be digitally transformed.</strong>",
  },
  {
    icon: "🚀",
    num: "25% CAGR",
    title: "Growth Rate",
    body: "The online essentials sector is among the fastest-growing segments in e-commerce — expected to grow 8–9× within a decade.",
  },
];

export const GROWTH_TABLE = [
  { year: "2024",      market: "~$11–12 Billion",  status: "current"   },
  { year: "2030–2033", market: "~$90–100 Billion", status: "projected" },
];

// ─── 02 Mindset ───────────────────────────────────────────────────────────────

export const SHIFT_CARDS = [
  {
    icon: "💳",
    title: "Money Moves Itself",
    points: [
      "No more bank visits or manual transfers",
      "UPI & auto-debits handle it instantly",
      "Payments happen silently in the background",
    ],
    accent: false,
  },
  {
    icon: "⚡",
    title: "Bills Pay Themselves",
    points: [
      "Set up once, forgotten forever",
      "Electricity, internet & insurance — all auto-paid",
      "Zero reminders, zero missed due dates",
    ],
    accent: false,
  },
  {
    icon: "🔧",
    title: "Utilities Just Flow",
    points: [
      "Water, gas & power arrive without any action",
      "No procurement, no planning, no shortage anxiety",
      "Simply available — always",
    ],
    accent: false,
  },
  {
    icon: "🚗",
    title: "Transport on Demand",
    points: [
      "A car at your door in minutes, no phone calls",
      "No fixed schedule, no negotiation",
      "Ride-hailing made commuting frictionless",
    ],
    accent: false,
  },
  {
    icon: "🎬",
    title: "Entertainment on Your Terms",
    points: [
      "No TV schedules, no missed shows",
      "Watch anything, anytime, at your own pace",
      "Content comes to you — not the other way around",
    ],
    accent: false,
  },
  {
    icon: "🛒",
    title: "Essentials — Still Manual",
    points: [
      "Same list written every single week",
      "Same items ordered, forgotten, or wasted",
      "The last daily routine convenience hasn't fixed — until now",
    ],
    accent: true,
  },
];

// ─── 03 Problem ───────────────────────────────────────────────────────────────

export const PROBLEM_CARDS = [
  {
    variant: "danger" as const,
    icon: "🧠",
    title: "The Hidden Cognitive Load",
    body: "Every day, your brain quietly keeps track — is the milk running low? Do we have enough detergent? Did I forget to add rice to the list? These are <strong>100+ small decisions every week</strong> that quietly drain your focus and mental energy.",
    stat: "100+ micro-decisions per week",
  },
  {
    variant: "warn" as const,
    icon: "⏰",
    title: "Hours Spent, Every Single Week",
    body: "Between writing lists, scrolling apps, comparing prices, waiting for deliveries, and making last-minute runs — households spend a significant amount of time every week just managing essentials.",
    stat: "Hundreds of hours quietly lost every year",
  },
  {
    variant: "gold" as const,
    icon: "🛒",
    title: "The Cost of Running Out",
    body: "An emergency store run at 10 PM. Vegetables gone bad before you could use them. Buying two bottles of something you already had. These aren't rare mistakes — they're the everyday reality of managing household supply without a system.",
    stat: "₹1000+ slipping away every month",
  },
];

export const QUICK_COMMERCE_METRICS = [
  { label: "Average Order Size",      value: "₹300–₹500"  },
  { label: "Items Per Order",         value: "2–3 items"   },
  { label: "Delivery Cost",           value: "₹40–₹80"    },
  { label: "Platform Loss Per Order", value: "₹5–₹20"     },
  { label: "Rider Capacity",          value: "30 kg"       },
  { label: "Avg Load Carried",        value: "0.5–1.5 kg"  },
];

export const CAPACITY_BARS = [
  { label: "Quick Commerce Utilization (0.5–1.5 kg avg)", value: "~2–5%",       width: 4,  type: "bad"   as const },
  { label: "AutoCart 2-Wheeler Utilization",               value: "77–100%",    width: 88, type: "good"  as const },
  { label: "AutoCart Depot Van Utilization",               value: "80–90%",     width: 85, type: "depot" as const },
  { label: "Trips for 30 kg (Quick Commerce)",             value: "20–60 trips", width: 98, type: "bad"   as const },
  { label: "Trips for 30 kg (AutoCart Rider)",             value: "1 trip",     width: 5,  type: "good"  as const },
];

export const PROBLEM_IMPACT = [
  {
    colorVar: "--danger",
    title: "👤 Human Resource Waste",
    items: [
      "Delivery partners travel long distances",
      "Carrying extremely small loads of 500g–1kg",
      "Spending excessive time per order",
      "Reduced productivity and earnings potential",
    ],
  },
  {
    colorVar: "--accent3",
    title: "🚛 Vehicle Underutilization",
    items: [
      "Vehicle capacity: 30 kg",
      "Actual load: 0.5–1.5 kg per trip",
      "95–98% of carrying capacity goes unused",
      "20–60 trips needed to move what AutoCart does in 1",
    ],
  },
  {
    colorVar: "--gold",
    title: "🌿 Environmental Impact",
    items: [
      "20 separate trips to deliver 20 kg of goods",
      "20 sets of packaging per neighbourhood",
      "Excess fuel consumption per delivery area",
      "Significantly higher carbon emissions",
    ],
  },
];

// ─── 04 Solution ─────────────────────────────────────────────────────────────

export const SOLUTION_CARDS = [
  { step: "01", icon: "🤖", title: "Learns Your Home",       body: "AutoCart understands how products are used within your household. It learns your consumption patterns without you needing to track anything manually." },
  { step: "02", icon: "🔮", title: "Predicts Requirements",   body: "The system predicts future demand automatically. Items are ordered and scheduled to arrive before you run out — zero last-minute runs." },
  { step: "03", icon: "📅", title: "Intelligent Scheduling",  body: "Deliveries are scheduled based on household demand, neighbourhood demand, and dynamic route optimization — creating maximum efficiency." },
  { step: "04", icon: "🗺️", title: "Aggregated Routes",      body: "AutoCart combines deliveries for multiple households in the same route — typically serving 8–10 households per delivery trip." },
];

// ─── 05 Logistics ─────────────────────────────────────────────────────────────

export const EFFICIENCY_MODELS = [
  {
    variant: "bad" as const,
    title: "❌ Hyperlocal Current Models",
    tag: "Blinkit · Zepto · Instamart · 10-min Delivery",
    rows: [
      { label: "Load capacity",       value: "30 kg",       highlight: false },
      { label: "Avg order weight",    value: "0.5–1.5 kg",  highlight: false },
      { label: "Capacity used",       value: "~3–5%",       highlight: true  },
      { label: "Trips to move 30 kg", value: "20–60 trips", highlight: false },
      { label: "Orders per route",    value: "1",           highlight: false },
      { label: "Delivery cost/order", value: "₹40–₹80",    highlight: false },
    ],
    verdict: "95%+ capacity wasted · 60× more trips than needed",
  },
  {
    variant: "good" as const,
    title: "✅ AutoCart Rider",
    tag: "2-Wheeler · Scheduled Routes",
    rows: [
      { label: "Load capacity",       value: "30 kg",     highlight: false },
      { label: "Avg load carried",    value: "23–30 kg",  highlight: false },
      { label: "Capacity used",       value: "77–100%",   highlight: true  },
      { label: "Trips to move 30 kg", value: "1 trip",    highlight: false },
      { label: "Orders per route",    value: "10–15",     highlight: false },
      { label: "Delivery cost/order", value: "₹15–₹25",  highlight: false },
    ],
    verdict: "Up to 20× more efficient",
  },
  {
    variant: "depot" as const,
    title: "🚐 AutoCart Depot Van",
    tag: "4-Wheeler · High-Density Routes",
    rows: [
      { label: "Load capacity",        value: "300–500 kg", highlight: false },
      { label: "Avg load carried",     value: "250–450 kg", highlight: false },
      { label: "Capacity used",        value: "80–90%",     highlight: true  },
      { label: "Trips to serve area",  value: "1 depot run",highlight: false },
      { label: "Households per route", value: "40–80",      highlight: false },
      { label: "Delivery cost/order",  value: "₹8–₹14",    highlight: false },
    ],
    verdict: "Lowest cost per kg delivered",
  },
];

export const DEPOT_STEPS = [
  "Identifies top-density routes with 40+ households",
  "Orders consolidated at fulfilment hub the evening before",
  "Depot van loaded to 80–90% capacity (250–450 kg)",
  "Single optimized morning route covers all 40–80 households",
  "Delivery cost drops to ₹8–₹14 per order — 5× cheaper than quick-commerce",
];

export const LOGISTICS_IMPACT = [
  {
    colorVar: "--accent",
    title: "🌿 Environmental Benefits",
    items: [
      "Fewer trips per neighbourhood area",
      "Significantly reduced fuel consumption",
      "Lower carbon emissions per kg delivered",
      "Consolidated packaging reduces plastic waste",
    ],
  },
  {
    colorVar: "--accent2",
    title: "👤 Better for Delivery Partners",
    items: [
      "Higher delivery productivity per trip",
      "Better income potential through bulk routes",
      "Reduced total travel time and distance",
      "Up to 3× more earnings per route",
    ],
  },
  {
    colorVar: "--gold",
    title: "📦 Aggregated Order Metrics",
    items: [
      "Average order size: ₹4,000–₹8,000",
      "2-Wheeler delivery cost: ₹15–₹25 per order",
      "4-Wheeler depot cost: ₹8–₹14 per order",
      "10–15 households served per 2-wheeler route",
      "40–80 households served per depot van run",
      "Vehicle capacity utilization: 77–100%",
    ],
  },
];

// ─── 06 Economics ─────────────────────────────────────────────────────────────

export const ECON_CARDS = [
  {
    variant: "bad" as const,
    title: "❌ Hyperlocal Quick Commerce",
    rows: [
      { label: "Average Order Value", value: "₹400",      cls: ""           },
      { label: "Delivery Cost",       value: "-₹60",      cls: "negative"   },
      { label: "Platform Commission", value: "-₹72",      cls: "negative"   },
      { label: "Product Margin",      value: "+₹60",      cls: "positive"   },
      { label: "Net Per Order",       value: "-₹72 Loss", cls: "net-loss"   },
    ],
  },
  {
    variant: "good" as const,
    title: "✅ AutoCart Model",
    rows: [
      { label: "Average Order Value", value: "₹4,500",       cls: ""           },
      { label: "Delivery Cost",       value: "-₹20",         cls: "negative"   },
      { label: "Platform Commission", value: "-₹270",        cls: "negative"   },
      { label: "Product Margin",      value: "+₹810",        cls: "positive"   },
      { label: "Net Per Order",       value: "+₹520 Profit", cls: "net-profit" },
    ],
  },
];

export const ECON_STATS = [
  { icon: "📊", num: "10×",      title: "Higher Order Value",  body: "AutoCart orders average ₹4,000–₹8,000 vs ₹300–₹500 — driving a massive improvement in per-order economics." },
  { icon: "💸", num: "₹15–₹25", title: "Delivery Cost",       body: "Compared to ₹40–₹80 per quick-commerce delivery. Aggregated routes make delivery dramatically more cost-effective." },
  { icon: "⏱️", num: "150h+",   title: "Annual Time Savings", body: "AutoCart eliminates essentials planning, list creation, and repetitive ordering — saving every household over 150 hours annually." },
];

// ─── 08 Network ───────────────────────────────────────────────────────────────

export const NETWORK_CARDS = [
  { icon: "🤖", title: "Intelligent Learning",   body: "Every new household improves AutoCart's consumption prediction models, making the entire network smarter and more accurate." },
  { icon: "📦", title: "Logistics Optimization", body: "More customers in a neighbourhood enable better route efficiency — driving delivery costs lower and service quality higher." },
  { icon: "💚", title: "Partner Economics",      body: "Delivery partners earn up to 3× more per route through bulk deliveries — attracting top talent and reducing turnover." },
  { icon: "🎯", title: "Predictable Demand",     body: "FMCG suppliers gain consistent bulk demand, improved inventory planning, and significantly reduced supply uncertainty." },
  { icon: "🏆", title: "Network Moat",           body: "Every new customer makes the system more efficient and harder to replicate — creating a defensible competitive advantage over time." },
  { icon: "🔒", title: "90%+ Retention",         body: "Once households experience zero-effort supply management, switching back to manual ordering becomes almost unthinkable." },
];

// ─── 09 Experience ────────────────────────────────────────────────────────────

export const EXPERIENCE_CARDS = [
  { icon: "🏠", title: "Automated Replenishment", body: "Essentials arrive before you run out. You never have to think about rice, oil, soap, or detergent again. The system simply handles it." },
  { icon: "🧘", title: "Zero Mental Burden",      body: "No lists. No reminders. No decisions. Your mental bandwidth is freed for what actually matters in your life." },
  { icon: "📬", title: "No Repeated Ordering",    body: "Stop placing the same orders week after week. AutoCart handles repetitive supply automatically." },
  { icon: "✨", title: "Professionally Managed",  body: "It feels like a professional household manager is quietly running your supply system in the background — without any extra cost." },
];
