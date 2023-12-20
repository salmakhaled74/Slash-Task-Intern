# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Online Shopping Website

This project is an online shopping website built with React and Vite. It allows users to explore and filter products and view product details.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository to your local machine:


   ```bash
   git clone https://github.com/salmakhaled74/Slash-Task-Intern.git

2. Navigate to the project directory:
   

   ```bash
   cd cd Slash-Task-Intern


4. Install dependencies:


   ```bash
   npm install
   
5. Start the development server:


   ```bash
   npm run dev


6. Open your browser and visit localhost to view the application.


### Project Structure

-src/components: Contains React components used in the project.  
-src/styles: Includes CSS styles for the components.  
-src/contexts: Manages global state using React context.  
-src/pages: Includes pages of the website.  

#### Design Decisions:

-React and Vite: Chose React for building the user interface and Vite for its fast development server and optimized build process.
-Global State Management: Utilized React context for managing global state, making it accessible to various components.
-Component Structure: Organized components into a modular structure for better maintainability and reusability.
-Responsive Design: Ensured a responsive design to provide a seamless experience across different devices.


#### Implementation Strategies:

-Data Fetching: Used the fetch API to retrieve product data from a backend server.  
-Filtering: Implemented filtering functionality based on price and rating, allowing users to refine product listings.  
-Routing: Utilized React Router for navigation, enabling smooth transitions between different views.  
-Styling: Applied CSS styles to create a visually appealing and user-friendly interface.  
-Asynchronous Operations: Handled asynchronous operations using async/await for a smoother user experience.

Feel free to explore the codebase for more details on the implementation.

