export const initialPlans = [
  { id: 1, name: "Starter", price: 19, interval: "month", users: 1, storage: "10 GB", api: "10k calls", color: "violet", description: "For individuals and small projects", features: ["Core analytics", "Email support", "Basic integrations"] },
  { id: 2, name: "Growth", price: 59, interval: "month", users: 5, storage: "100 GB", api: "100k calls", color: "blue", description: "For growing teams", features: ["Advanced analytics", "Priority support", "Team collaboration"] },
  { id: 3, name: "Business", price: 149, interval: "month", users: 20, storage: "1 TB", api: "1M calls", color: "orange", description: "For established businesses", features: ["Custom reports", "Dedicated support", "Advanced security"] },
  { id: 4, name: "Enterprise", price: 399, interval: "month", users: 100, storage: "Unlimited", api: "Unlimited", color: "green", description: "Scale with enterprise controls", features: ["SLA support", "SSO & audit logs", "Custom integrations"] }
];
export const initialUsers = [
  ["Olivia Rhye","olivia@acme.io","SaiFlow Labs","Growth","Active","Oct 02, 2026",1280],
  ["Phoenix Baker","phoenix@lattice.com","Lattice","Business","Active","Oct 01, 2026",2460],
  ["Lana Steiner","lana@layers.com","Layers","Starter","Trial","Sep 29, 2026",0],
  ["Demi Wilkinson","demi@circooles.com","Circooles","Growth","Active","Sep 27, 2026",1180],
  ["Candice Wu","candice@catalog.com","Catalog","Enterprise","Active","Sep 25, 2026",6290],
  ["Natali Craig","natali@quotient.com","Quotient","Starter","Cancelled","Sep 22, 2026",190],
  ["Drew Cano","drew@hourglass.com","Hourglass","Business","Past due","Sep 21, 2026",2460],
  ["Andi Lane","andi@tailwind.com","Tailwind","Growth","Active","Sep 19, 2026",1180],
  ["Kate Morrison","kate@bright.io","Bright Labs","Starter","Trial","Sep 16, 2026",0],
  ["Koray Okumus","koray@flodesk.com","Flodesk","Business","Active","Sep 14, 2026",2460],
  ["Melody Macy","melody@wildbit.com","Wildbit","Growth","Active","Sep 12, 2026",1180],
  ["Orlando Diggs","orlando@vercel.com","Vercel","Enterprise","Active","Sep 09, 2026",6290]
].map((u,i)=>({id:i+1,name:u[0],email:u[1],company:u[2],plan:u[3],status:u[4],joined:u[5],mrr:u[6]}));
export const initialSubscriptions = initialUsers.map((u,i)=>({id:1001+i,customer:u.name,email:u.email,plan:u.plan,status:u.status,started:u.joined,nextBilling:`Nov ${String(2+(i*3)%25).padStart(2,"0")}, 2026`,amount:u.mrr || 19}));
export const revenueData = [
 {month:"May",revenue:31200,previous:26800,subscriptions:820},
 {month:"Jun",revenue:34800,previous:29100,subscriptions:874},
 {month:"Jul",revenue:32600,previous:30200,subscriptions:910},
 {month:"Aug",revenue:41200,previous:33600,subscriptions:982},
 {month:"Sep",revenue:43800,previous:35900,subscriptions:1044},
 {month:"Oct",revenue:48240,previous:40100,subscriptions:1128}
];