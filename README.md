# Anime App

Welcome to Anime App, your ultimate destination for exploring your favorite anime series.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Screenshots](#screenshots)
- [Code Structure](#code-structure)
- [Design Patterns](#design-patterns)
- [Libraries Used](#libraries-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Anime App is a mobile application that allows users to explore a curated collection of anime series. With a user-friendly interface and comprehensive information about each anime, Anime App provides an immersive experience for anime enthusiasts.

## Installation

To run Anime App on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   https://github.com/vjtaisun/AnimeExpoRNApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AnimeExpoRNApp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Follow the instructions to run the app on your preferred platform (iOS or Android) using Expo.

## Usage

Once the app is installed and running, you can:

- View a list of anime series.
- Tap on an anime to view detailed information.
- Favorite/unfavorite an anime.
- Search for a specific anime.
- Explore various features and functionalities offered by the app.

## Features

Anime App offers the following features:

- Browse a curated collection of anime series.
- View detailed information about each anime, including title, season, year, episodes, and rating.
- Favorite/unfavorite an anime for quick access.
- Search for a specific anime by title.
- Enjoy a user-friendly and intuitive interface for seamless navigation.

## Screenshots

![Introduction Screen](/screenshots/introduction.jpeg)
![Anime List Screen](/screenshots/anime_list.jpeg)
![Anime Detail Screen](/screenshots/anime_detail.jpeg)


## Code Structure

The codebase of Anime App follows a modular and organized structure to promote readability, maintainability, and scalability. Here's an overview of the main directories and files:

- **components**: Contains reusable React components used throughout the app.
- **navigation**: Manages navigation within the app using React Navigation.
- **screens**: Contains individual screen components representing different screens of the app, such as the introduction screen, anime list screen, and anime detail screen.
- **assets**: Stores static assets, such as images and fonts, used in the app.
- **redux**: Manages application state using Redux, including actions, reducers, and store configuration.
- **utils**: Houses utility functions and helper modules used across the app.
- **App.js**: Entry point of the application, responsible for setting up the navigation and Redux store.

## Design Patterns

Anime App incorporates several design patterns to enhance code quality, maintainability, and performance:

- **Component-based Architecture**: The app follows a component-based architecture, where UI elements are encapsulated into reusable and composable components. This promotes code reuse and modularity.
- **Redux for State Management**: Redux is used for managing application state, ensuring a single source of truth and predictable state changes across the app.
- **Container-Component Pattern**: Screen components act as container components, responsible for connecting to the Redux store and passing state and actions to presentational components.
- **Theming and Styling**: Consistent theming and styling are maintained throughout the app using a combination of React Native's StyleSheet API and global theme variables.

## Libraries Used

Anime App utilizes several third-party libraries to extend functionality and streamline development:

- **React Navigation**: Provides routing and navigation functionality for navigating between different screens in the app.
- **Redux**: Manages application state and enables predictable state management using a global store.
- **Axios**: Handles HTTP requests and simplifies data fetching from external APIs.
- **Expo**: Simplifies React Native development by providing tools and libraries for building, testing, and deploying apps.
- **React Native Elements**: Offers a library of customizable UI components to enhance the visual appeal and usability of the app.

These libraries were chosen based on their popularity, reliability, and suitability for the requirements of the Anime App.

## If I had more time
- **Splash Screen**: Would have worked on splash screen.
- **Other Changes**:
   1. Search button inside header instead to make it more UI/UX friednly
   2. Show Favourite in list for each show.
   3. Design UI/UX of Show details page.
   4. Pagination in List Screen

## Contributing

We welcome contributions from the community! If you'd like to contribute to Anime App, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure that they adhere to the project's coding standards.
3. Write tests for your changes (if applicable) and ensure that all existing tests pass.
4. Submit a pull request with a clear description of your changes and any related issues.

## License

This project is licensed under the [MIT License](LICENSE).