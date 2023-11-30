# TS-React-Demo

- [Demo Link](https://ts-react-demo-shopping-cart.netlify.app/)
- This project is a shopping cart application built using TypeScript and React.js.
- It incorporates advanced TypeScript and React features, including generics, custom hooks, and context management.

---

## Technologies used:

- Reactjs
- Typescript
- Bootstrap

## Folder Structure :

    .
    ├── dist
    │   ├── assets
    │   │   ├── index-4e5c0698.css
    │   │   └── index-5f3fbfcc.js
    │   ├── imgs
    │   │   ├── banana.jpg
    │   │   ├── book.jpg
    │   │   ├── car.jpg
    │   │   └── computer.jpg
    │   └── index.html
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── public
    │   └── imgs
    │       ├── banana.jpg
    │       ├── book.jpg
    │       ├── car.jpg
    │       └── computer.jpg
    ├── README.md
    ├── src
    │   ├── App.tsx
    │   ├── components
    │   │   ├── CartItem.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── ShoppingCart.tsx
    │   │   └── StoreItem.tsx
    │   ├── context
    │   │   └── ShoppingCartContext.tsx
    │   ├── data
    │   │   └── items.json
    │   ├── hooks
    │   │   └── useLocalStorage.ts
    │   ├── main.tsx
    │   ├── pages
    │   │   ├── About.tsx
    │   │   ├── Home.tsx
    │   │   └── Store.tsx
    │   ├── types
    │   │   └── types.ts
    │   ├── utilities
    │   │   └── formatCurrency.ts
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

- Note: The "home" and "about" pages were created for practice purposes(Routing).
- Local storage is utilized for data persistence.
- Indian Rupees (INR) are used for currency formatting..

---

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vanshitaa-shah/TS-React-Demo.git
   ```

2. For charts : Navigate to the Charts directory and install dependencies:

   ```bash
   cd TS-React-Demo
   npm install
   npm run dev
   ```

---

## Learn more

Explore the documentation to deepen your understanding

[React](https://react.dev/learn)

[Typescript](https://www.typescriptlang.org/docs/)

---

## Git Strategy

**Branches** :

- Main
- Dev
- Feature
