### CryptoNite is a CryptoCurrency Financial Reporting App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

#### `Settings`

  - Greeting the user on first visit, asking them to choose their favorite coins.
  - Provides a complete list of all available cryptocurrency coins throught the CryptoCompare API.
  - Search for coins with fuzzy search.
  - Hovering and Selecting coins.
  - Adding/Removing coins from the list of favorite coins.
  - Chosen coins are disabled.
  - Confirm Favorite Coin:
    - Remembers those values for the user.
    - Generates dashboard prices & historical data.


#### `Dashboard`

- Data initializes from remembered favorites, or forwards to Settings page.
- Displays 5 major Cards for first 5 favorites and compact Cards for next 5.
- Renders a line chart for the 10 historical points on current favorite symbol.
- Select coin changes and re-fetch data, remembers current favorite.
- Select to render historical points on Date: Days Weeks Months.
- Display name and image of coin next to chart.


#### `Themes`

- Easily configurable dark and light themes.

## Libraries and Frameworks used
- React & React Context API for state management
- Styled-components: Dynamic CSS-in-JS
- HighCharts: Graphing historical price data
- CSS Grid: Responsive layouts
- CryptoCompare API: Fetch real-time crypto pricing data
- Moment: Date manipulation
- Lodash: Functional programming
- Create-React-App: Boilerplate Quickly
- localStorage: Storing preferences locally

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
