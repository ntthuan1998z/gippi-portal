### Example for folder structure

src/
├── pages/                          # 📄 Pages (UI Components)
│   ├── home/
│   │   ├── index.tsx              # HomePage Component
│   │   ├── components/            # Components riêng cho Home
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   └── Testimonials.tsx
│   │   └── home.module.css        # Styles riêng cho Home
│   │
│   ├── products/
│   │   ├── index.tsx              # ProductsLayout (Outlet)
│   │   ├── ProductList.tsx        # /products
│   │   ├── ProductDetail.tsx      # /products/: id
│   │   ├── ProductEdit.tsx        # /products/:id/edit
│   │   ├── components/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductFilter.tsx
│   │   │   └── ProductForm.tsx
│   │   └── products.module.css
│   │
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── ForgotPassword.tsx
│   │
│   ├── dashboard/
│   │   ├── index.tsx              # DashboardLayout
│   │   ├── Overview.tsx
│   │   ├── Analytics.tsx
│   │   └── Settings.tsx
│   │
│   └── error/
│       ├── NotFound.tsx           # 404 page
│       └── ErrorBoundary.tsx      # Global error
│
├── routes/                         # 🛣️ Route Definitions (Data Layer)
│   ├── index.ts                   # Export tất cả routes
│   ├── home.route.tsx             # Home route config
│   ├── products. route.tsx         # Products routes config
│   ├── auth. route.tsx             # Auth routes config
│   └── dashboard.route.tsx        # Dashboard routes config
│
├── api/                            # 🌐 API Services
│   ├── client.ts                  # Axios/Fetch instance
│   ├── products. api.ts            # Products API calls
│   ├── auth.api.ts                # Auth API calls
│   └── users.api.ts               # Users API calls
│
├── components/                     # 🧩 Shared Components
│   ├── ui/                        # UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── layout/                    # Layout components
│   │   ├── Header. tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── RootLayout.tsx
│   └── shared/                    # Business components
│       ├── LoadingSpinner.tsx
│       ├── ErrorMessage.tsx
│       └── Pagination.tsx
│
├── hooks/                          # 🪝 Custom Hooks
│   ├── useAuth.ts
│   ├── useDebounce.ts
│   └── useLocalStorage.ts
│
├── utils/                          # 🛠️ Utilities
│   ├── format.ts
│   ├── validation.ts
│   └── constants.ts
│
├── types/                          # 📝 TypeScript Types
│   ├── product.types.ts
│   ├── user.types.ts
│   └── api.types.ts
│
├── router. tsx                      # 🚦 Router Configuration
└── main.tsx                        # ⚡ Entry Point