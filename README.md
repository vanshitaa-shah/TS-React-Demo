# TS-React-Demo

- This project is a shopping cart application built using TypeScript and React.js.
- It incorporates advanced TypeScript and React features, including generics, custom hooks, and context management.

### Technologies used:

- Reactjs
- Typescript
- Bootstrap

### Folder Structure :

    .
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
    │   ├── App.css
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
    │   ├── utilities
    │   │   └── formatCurrency.ts
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

- Note: The "home" and "about" pages were created for practice purposes(Routing).
- Local storage is utilized for data persistence.
- Indian Rupees (INR) are used for currency formatting..

### Git Strategy

**Branches** :

- Main
- Dev
- Feature
