# E-Commerce Product Listing App

## Project Overview
This project is a simple E-Commerce Product Listing App built using React. It demonstrates the use of React components, props, and state management to create a dynamic product listing interface.

## Learning Objectives
By completing this project, you will learn to:
- Organize code using React components.
- Manage state using the `useState` hook.
- Pass and manage data through props between components.
- Structure a React application with a parent-child component hierarchy.

## Project Setup Instructions

### 1. Set up the React app
To set up the project, follow these steps:

1. Open the terminal and create a new React project:
   ```
   npx create-react-app ecom-product-app
   ```

2. Navigate into the project folder:
   ```
   cd ecom-product-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

### 2. Project Structure
The project consists of the following main components:
- **App Component (Parent)**: Manages the state for the list of products and passes data as props to child components.
- **ProductList Component (Child of App)**: Receives the list of products from App via props and maps through them to display each product.
- **ProductItem Component (Child of ProductList)**: Represents a single product, receiving individual product data via props.

## Component Breakdown
1. **App Component**
   - Manages the state that holds an array of products.
   - Passes the list of products as a prop to the ProductList component.

2. **ProductList Component**
   - Receives the product list from App as a prop.
   - Maps through the product list and renders each product using ProductItem.

3. **ProductItem Component**
   - Represents one product with its name, price, and description.
   - Receives individual product data from ProductList via props.

## Testing Your App
Before submission, ensure that:
- The list of products is displayed on the page.
- State and props are used correctly between components.
- The layout and styling look polished and consistent.

## Optional Features
If you feel confident, consider adding:
- **Category Filtering**: Allow users to filter products based on categories.
- **Product Images**: Include images for each product and display them in ProductItem.

## Final Checklist Before Submission
- A list of products is displayed on the page.
- React components are structured properly with state and props.
- CSS is applied for a well-styled, responsive UI.

## Submission Instructions
- Push the project to GitHub.
- Submit the GitHub repository link in the assignment portal.

## Grading Criteria
- State Management: 5 Points
- Props Implementation: 5 Points
- Component Structure: 5 Points
- Styling & Layout: 5 Points
- Functionality & Testing: 5 Points

## Tips for Success
- Keep your components modular and organized.
- Use props efficiently to pass data between components.
- Test your app frequently to catch errors early.
- Ensure your CSS provides a consistent and appealing UI.