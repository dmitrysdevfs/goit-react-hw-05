# Homework Assignment 5

## Overview

This project is part of the **React 2.0** course in the **FSON-112** group and
demonstrates the development of a movies search and browsing platform. It
showcases advanced React features such as dynamic route splitting, asynchronous
loading of components, and integration with an external API for movie data. The
project built using **Vite** and deployed on **Vercel**.

### Tech Stack

- **React** – Frontend library
- **Vite** – Fast development and build tool
- **React Router** – For route management and navigation
- **Formik** – For handling form validation and management
- **TMDB API** – For fetching movie data and metadata
- **React.lazy** and **Suspense** – For code splitting and asynchronous
  component loading
- **Vercel** – Deployment platform

### Features

- **Movies List Integration**: Fetch and display trending movies on the homepage
  using TMDB API
- **Search Functionality**: Implemented with Formik for searching movies by
  query
- **Movie Details Page**: Includes main movie info, cast, and reviews
- **Back Navigation**: Added back link for easier navigation across pages using
  `useLocation`
- **Code Splitting**: Optimized routes with `React.lazy` and `Suspense` for
  better perforance
