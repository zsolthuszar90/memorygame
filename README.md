# Memory game with cats
To start:
1. clone the repository
2. yarn install
3. yarn start
4. Open http://localhost:3000

# Stack
- React
- React router
- Typescript

# Issues
- CAT API is not reliable, sometimes it returns with 10 items regardless the limit I set in the query. It is fixed on the frontend side by sliceing the response array to the limit number I need.

# Approach
- For the purpuse of this assignment, I have used fast, easy to read and simple approaches. The performance, scaleability and test coverage would be improved in a real-world project.

- Following SOLID principles:
  - the code is modular, components mainly have single responsibility
  - useState hook is used carefully (useRef is used if rerender not needed)
  - instead of states, props are used wherever possible
  - no unused props are passed to components

- State management:
  - no global state management was used
  - can be improved (Redux, Context API)

# Structure
- Individual components have their own folder with the .tsx, .test.tsx, .css files

# Design
- no css pre/postprocessor was used
- responsive design (flexbox)
- easy to read, using BEM naming conventions

# Features
- 4 paths available: Home, Scoreboard, About, NotFound (for invalid path)
- 3 available board sizes
- single/multiplayer (up to 4 players)
- input validation for empty names or same names
- loading animation, time counter and pairs counter during the game
- scoreboard
- etc...

# Scoreboard
- only single player scores are added
- data is stored in localStorage as JSON
- can be cleared with a button at the bottom (with a warning modal)

# Tests
- a few unit & component tests were written
- test coverage can be improved

# Limitations
- Scoreboard is only available for single-player, and only stored in localhost
- There is no global statemanagement, therefore game status and other infos are not distributed across the app
- The design is responsive, however the layout may not be perfect on some mobile devices

# Next steps, improvements
- Add API key to CAT API (store as env var) for more features
- Add global state management --> Context API is sufficient for this project
- Add Multiplayer feature with other browsers (Websocket)
- Refactor plain CSS by using SCSS
- Add media queries for proper mobile design
- Add authentication, so the user can track the progress
- Store user and scores data in a dedicated DB
- Increase test coverage
