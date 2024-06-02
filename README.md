
# React Native - Movie List App (MOVIEFIX)

This document outlines the functionalities and implementation details of a movie information app (MOVIEFIX) built in React Native.


## Features

- Displays a list of top movies for each year (starting from 2012) sorted by popularity (descending).
- Shows movie title, and image for each movie.
- Loads 20 movies per year initially and progressively loads more on scrolling
- Provides a filter UI for genres fetched from TMDb API.
- Filters movies based on selected genres.
- Offers smooth scrolling for a seamless user experience.


## Installation

To run the game locally, follow these steps:

```bash
  git clone https://github.com/nikhilpawar151/movieFanApp.git
  cd movieFanApp
  npm install
  npm start
```

## Implementation

- **Frontend:** Light/dark mode toggle
- **UI Components:** Custom components built from scratch for reusability.
- **API:** TMDb API used to fetch movie data.
- **Scrolling:** Implements smooth scrolling behavior to load next year's movies as the user scrolls.
- **Genre Filter:** Fetches genres from TMDb API and displays them as filters. Re-fetches movies based on selected genres.

## Screenshots

| Initial load | One category | Multiple category |
|---|---|---|
| ![Image 1](https://nikhilpawar.co.in/gitHub/screenshots/movieFix/moviefix-all-movies.jpeg) | ![Image 2](https://nikhilpawar.co.in/gitHub/screenshots/movieFix/moviefix-one-category.jpeg) | ![Image 3](https://nikhilpawar.co.in/gitHub/screenshots/movieFix/moviefix-multiple-category.jpeg) |


## Demo

Check out the MovieFix app demo video [here](https://youtube.com/shorts/ckssW2OK-_g).
