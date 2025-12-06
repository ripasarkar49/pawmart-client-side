## Project Name:

Pawmart – Pet Care & Product Marketplace

## Project Overview:

Pawmart is a modern web application built using **React + Firebase + MongoDB**, designed for pet lovers. Users can browse pets, pet care products, and accessories, view detailed listings, register/login, and manage their own listings. The project emphasizes user experience with authentication, protected routes, server-side data management, and a mobile-responsive design.

## Live Demo:

## Purpose:

=> Pawmart provides a seamless platform for adopting pets and buying pet-related products:
=> Browse pets and products with detailed information fetched from a MongoDB database
=> Register and login using email/password
=> Login via Google authentication
=> Reset password via email
=> Add, update, and delete personal listings
=> Access profile image in Navbar after login
=> Navigate easily across pages: Home, Add Listing, My Listings, Login, Register
=> Fully responsive UI with dark mode support.

## Key Features:

=> Authentication – Email & Password login/registration (Firebase)
=> Firebase Auth – Google Sign-in, Logout, Protected Routes
=> Protected Routes – Certain pages accessible only after login
=> Password Reset – Send reset email via Firebase
=> Dark Mode – Automatic dark/light theme based on data-theme
=> Mobile Responsive – Drawer menu and responsive layout
=> Profile Display – User photo and display name in Navbar
=> CRUD for Listings – Add, update, and delete pet/product listings stored in MongoDB via server-side API
=> SweetAlert2/Toastify – Beautiful toast notifications and alerts
=> Loading Spinner – Displays while checking authentication state
=> Context API – Global state for user authentication
=> Server-Side Data Management – All listings and orders are fetched from MongoDB through REST API endpoints

## Tech Stack:

=> Frontend: React, TailwindCSS, DaisyUI, Framer Motion
=> Backend / Server: Node.js + Express.js (REST API to interact with MongoDB)
=> Database: MongoDB (Atlas or local instance)
=> Authentication: Firebase Authentication (Email/Password & Google)
=> Notifications & Alerts: SweetAlert2/Toastify
=> PDF Reports: jsPDF & jsPDF-AutoTable.

## NPM Packages Used:

=> firebase – Authentication & user management
=> axios – HTTP requests to server-side API
=> sweetalert2/Toastify – Alerts and notifications
=> react-icons – UI icons
=> daisyui – Pre-styled components & themes
=> tailwindcss – Styling & responsiveness
=> framer-motion/Tooltip – Animations and UI transitions
=> jspdf & jspdf-autotable – PDF report generation
=> react – Core library for building UI
