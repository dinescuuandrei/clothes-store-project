# URBANVIBE - A Modern Full Stack E-Commerce Platform

A premium, responsive e-commerce web application developed as an extensive internship project. The platform simulates a complete, real-world shopping experience, featuring a feature-rich backend, a dynamic H2 database, and a stunning "glassmorphism" frontend with dynamic data rendering.

## Overview

URBANVIBE is a Single Page Application (SPA) designed to redefine online fashion retail. It demonstrates a complete end-to-end integration of Java Spring Boot, H2 database persistence, and modern, asynchronous JavaScript to provide a seamless and visually impactful user experience.

![URBANVIBE Homepage](assets/Screenshot%202026-04-16%20164627.png)

## Tech Stack

* **Backend:** Java 17, Spring Boot (Web, JDBC)
* **Database:** H2 In-Memory Database, Spring JDBC Template
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API, Async/Await)
* **Build Tool:** Maven

## Project Structure

* `src/main/java/com/internship/store/`: Contains the Java Backend logic (Controllers, Models).
* `src/main/resources/schema.sql`: Contains the database schema and initial data seeds for automatic database population.
* `src/main/resources/application.properties`: Configuration for the H2 database, server port, and console.
* `src/main/resources/static/`: Contains all Frontend assets (`index.html`, `style.css`, `app.js`, `fundal.jpg`).

## Implemented Features & Benefits

### 1. Dynamic Product Rendering

The application leverages a RESTful API provided by Spring Boot to serve product data from an H2 in-memory database. On the frontend, vanilla JavaScript utilizes the Fetch API with async/await to request this data and dynamically build the user interface.

**Features:**
* Backend REST API (`/haine`) that returns a JSON array of products from the `products` table.
* Frontend `incarcaProduse` function that asynchronous fetches the JSON and generates product cards.
* Use of `JdbcTemplate` and `BeanPropertyRowMapper` for clean and efficient database-to-Java object mapping.

**Benefits:**
* **Real-time Data:** The product list is always up-to-date and reflects the current state of the database.
* **Maintainability:** New products can be added to the database (`schema.sql`) without making any changes to the Java or HTML/CSS code.
* **Performance:** Asynchronous fetching prevents full-page reloads, providing a smooth and fast user experience.

![Product Grid](assets/Screenshot%202026-04-16%20164636.png)

### 2. Modern UI/UX with Glassmorphism

The frontend is a masterpiece of modern design, utilizing the popular "glassmorphism" aesthetic.

**Features:**
* **Glassmorphism Effects:** Transparent elements with pronounced `backdrop-filter: blur()`, soft shadows (`box-shadow`), and a linear-gradient hero section provide a premium, visually impactful appearance.
* **Responsive Grid:** A product grid that uses CSS `display: grid` with `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` to automatically adapt to all screen sizes, from desktop to mobile.
* **Custom Background:** A fixed full-screen background image (`#site-background`) with fixed attachment (`background-attachment: fixed`) adds depth.
* **Modern Typography:** Uses the clean and professional `Inter` font from Google Fonts.
* **Interactive Hover Effects:** Elements like product cards and buttons have smooth CSS transitions and hover effects for a more tactile feel.

**Benefits:**
* **Enhanced Engagement:** A stunning, visual-first design captures user attention and keeps them engaged with the content.
* **Accessibility:** A responsive design ensures the application is fully functional and beautiful on any device.
* **Professional Image:** Glassmorphism provides a high-end, premium feel that builds user trust.

### 3. Interactive Shopping Cart System

A complete client-side cart system that simulates a real checkout process.

**Features:**
* **Reactive Cart Icon:** The cart icon in the navbar (`Coș (0)`) dynamically updates to reflect the number of items added.
* **Cart Modal:** A custom modal window that displays the cart's contents, showing the item list (with size) and the total price.
* **Item List and Total:** The `afiseazaContinutCos` function calculates and displays the total price and a list of items.
* **Simulated Checkout:** A "Finalizează Comanda" button that provides a success message and can be extended to integrate a payment gateway.

**Benefits:**
* **Seamless Experience:** Users can manage their cart without leaving the product page, reducing friction.
* **Transparency:** A clear view of added items and the total price helps users make informed purchasing decisions.
* **Developer Flexibility:** The client-side logic provides a perfect foundation for building a production-ready cart system with a backend component.

![Product Detail View](assets/Screenshot%202026-04-16%20164709.png)

### 4. Comprehensive Product Detail View

A dedicated, feature-rich product detail view that opens dynamic when a product is selected.

**Features:**
* **Feature-Packed Detail View:** Displays a large product image, a "category-badge-large", "product-price-large", and a detailed "product-description".
* **Dynamic Size Selection:** An interactive size selector with buttons (`S`, `M`, `L`) allows users to select their preferred size. It can even show unavailable sizes as disabled.
* **Real-time Stock Tracking:** Displays the current available stock directly from the database (`Stoc disponibil: ... bucăți`).
* **Easy Navigation:** A "← Înapoi la colecție" button makes it easy to return to the main product list.

**Benefits:**
* **Informed Decisions:** The detailed information, stock status, and size selector help users make quick and confident decisions.
* **Higher Conversion Rates:** A comprehensive detail view reduces user doubt and increases the likelihood of a purchase.
* **Rich Data Presentation:** This view demonstrates the capability to handle and display complex product data.

![Shopping Cart Modal](assets/Screenshot%202026-04-16%20164714.png)

### 5. Single Page Application (SPA) Experience

The application is built to provide a modern, Single Page Application experience.

**Features:**
* Uses smooth CSS scrolling (`scrollIntoView({behavior: 'smooth'})`) for navigating between sections.
* Implements dynamic view switching (hiding/showing home and product detail views) for dynamic content loading.
* All core features, including cart modal and product detail view, are loaded dynamically over the home page without a single full-page reload.

**Benefits:**
* **Continuous Journey:** Users can explore the entire magazin without their experience being broken by page reloads.
* **Lower Data Usage:** Only necessary data and content are loaded, reducing bandwidth consumption for the user.
* **Increased Conversions:** By reducing friction and page load times, users are more likely to complete their purchase.

### 6. Automatic Database Setup and Data Seeding

The application is designed for developer convenience.

**Features:**
* **H2 In-Memory Database:** Uses an in-memory H2 database, eliminating the need to install or configure an external database server.
* **Automatic Schema and Seeding:** Spring Boot automatically executes `src/main/resources/schema.sql` at startup to create the database schema and populate the tables with initial product data.
* **Custom Configuration:** The `application.properties` file is configured with the correct H2 settings and port for a clean startup.

**Benefits:**
* **Zero Configuration:** Developers can get the project up and running in minutes without complex environment setup.
* **Portability:** The in-memory database ensures the application behaves consistently across different development environments.
* **Easy Development:** The seed data makes it easy to test and extend the application's features.

## How to Run the Project

1.  Clone the repository to your local machine.
2.  Open the project in your preferred IDE (e.g., IntelliJ IDEA).
3.  Open a terminal in the project root directory and run the following command to start the Spring Boot application:

    `.\mvnw spring-boot:run`

4.  Wait for the application to start and the tables to be seeded.
5.  Open your web browser and navigate to:

    `http://localhost:9090/`

## Database Access

The H2 database console can be accessed to view the raw tables and data:
* **URL:** `http://localhost:9090/h2-console`
* **JDBC URL:** `jdbc:h2:mem:storedb`
* **Username:** `sa`
* **Password:** [Leave Blank]