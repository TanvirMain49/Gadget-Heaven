# GadgetHeaven

Welcome to *GadgetHeaven* — your go-to destination for the latest and greatest gadgets! This responsive e-commerce platform is built with React, allowing users to browse products, manage their cart and wishlist, and complete purchases seamlessly.

## Live Website Link
- [Live Demo](giddy-engine.surge.sh)

## Requirement Document
- [Requirement Document](https://github.com/programming-hero-web-course2/b10a8-gadget-heaven-TanvirMain49)

---

## 🚀 Features

1. *Product Filtering by Category*: Quickly filter products by categories such as Computers, Phones, Smart Watches, etc.
2. *Cart & Wishlist Management*: Users can add items to their cart or wishlist and manage them with ease.
3. *Price Sorting in Cart*: Cart items can be sorted by price in descending order, and the total price is displayed.
4. *Toast Notifications*: Users receive notifications when items are added to the cart or wishlist.
5. *Statistics Page*: Visualize data with a chart that displays price vs. product name and a scatter plot for ratings.

---

## 📖 Usage Guide

- *Browse Products*: Explore products across various categories.
- *Manage Cart and Wishlist*: Add items to the cart or wishlist and view them anytime.
- *Sort Cart Items*: In the cart, sort products by price for easy comparison.
- *View Statistics*: Access the statistics page for product analysis.

---

## ⚙ Technologies Used

- *React Router*: For managing routes and navigation between pages.
- *React Context API*: For managing global state across different components (Cart, Wishlist).
- *React Hooks*:
  - useState - Manages local state within components.
  - useEffect - Handles side effects like fetching data.
  - useContext - Accesses shared state in the cart and wishlist.
  - useLocation - Dynamically updates background color based on route.
- *React-Helmet*: Manages dynamic document titles and favicons.
- *LocalStorage*: Persists Cart and Wishlist data across page reloads.

---

## 📊 Data Management

- *Context API*: Manages global state for the cart and wishlist, allowing components to access and update without prop drilling.
- *LocalStorage*: Persists cart and wishlist data across page reloads, ensuring user preferences remain even after refreshing the page.

---

## 🔍 Future Improvements

- *Testing*: Adding unit and integration tests for better code reliability.
- *Enhanced Filtering Options*: Implement advanced filters, like price range and brand.
- *User Accounts*: Allow users to create accounts and save their cart/wishlist for future visits.

---

This README provides an overview of the *GadgetHeaven* project, from features to setup, with future improvements planned for a better user experience.
