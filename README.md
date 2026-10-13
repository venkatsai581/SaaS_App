# SaiFlow — SaaS Management Dashboard

A responsive React frontend starter for managing SaaS users, customers, subscriptions, pricing plans, usage, and revenue analytics.

## Run locally
1. Install Node.js (18+ recommended).
2. Extract this ZIP and open the project folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Production build
Run `npm run build`, then optionally `npm run preview`.

## Included
- Dashboard KPIs, revenue and subscription charts, comparison period selector
- Users and customer management with search, status/plan filters, sorting, pagination
- Subscription listing and status updates
- Pricing plan create, view, edit, and delete with validation and confirmation
- Date range filtering on analytics
- Usage analytics page
- Modal forms, confirmation dialogs, toast notifications
- Loading simulation, error retry, empty states
- Responsive sidebar/mobile navigation, micro animations
- Mock data stored in localStorage for a persistent frontend demo

## Notes
This is a frontend-only demo and uses local mock data, not a production backend or payment provider. Connect an authenticated API/database before using real customer or billing data.


## Personalized administrator
- Workspace/brand: **SaiFlow** / **Sai Krishna SaaS**
- Administrator display name: **Ketha Venkata Sai Krishna**
- Demo customer records remain sample SaaS customers; one sample company is branded SaiFlow Labs.

## Requirement audit
- [x] SaaS overview dashboard with KPI cards and revenue charts
- [x] User management: search, status/plan filters, sorting, pagination, profile/details and user actions
- [x] Customer management view
- [x] Subscription list, status filters, plan filters, billing details, activate/cancel status confirmation
- [x] Pricing plan details and Add/Edit/Delete with form validation and confirmation
- [x] Usage analytics and revenue analytics with charts and comparison analytics
- [x] Date range controls (preset and custom From/To dates) on analytics pages
- [x] Search, filtering, sorting and pagination on management tables
- [x] Reusable UI components, modals, confirmation dialogs, toast notifications
- [x] Loading, error/retry and empty states
- [x] Responsive layout and micro-animations
- [x] Local-storage persistence for demo users, plans and subscriptions
- [ ] Backend/database, authentication/authorization, and live billing/payment provider integration (not part of this frontend-only demo)

## Final verification
Run `npm install`, `npm run build`, then `npm run dev`. The build should complete before submission. Browser-level interaction and console checks should be done after launching the app.
