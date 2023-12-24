# Microfrontends Application Suite

This repository contains a suite of independent microfrontend applications that demonstrate a robust architecture. The approach ensures that if one microfrontend is down, the main application continues functioning without presenting the user options related to the unavailable service.

## Features

- **Independent Microfrontends**: Each microfrontend is developed, built, and deployed independently.
- **Resilient Host Application**: The host application can detect unavailable microfrontends and adapts the UI accordingly.
- **Styled Components**: We use styled-components for styling to leverage the power of JavaScript and CSS combined.
- **BEM Methodology**: The BEM (Block, Element, Modifier) methodology is applied for class naming, ensuring readability and maintainability.
- **Unit Testing**: Each microfrontend comes with a suite of unit tests to ensure the reliability of the code.
- **Internationalization**: The application supports English and Spanish, demonstrating dynamic language switching capabilities.

## Project Structure

The repository is organized as follows:

- `host`: The main hosting application.
- `harry_potter_mf`: A microfrontend for Harry Potter themed content.
- `rick_and_morty_mf`: A microfrontend for Rick and Morty themed content.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**

```bash
git clone https://github.com/sebasdominguez/microfrontends-react.git
cd your-repo-name
```

2. **Install Dependencies**
   Navigate to each project directory and install the required dependencies.

   ### For the host application

   ```bash
   cd host
   npm install
   ```

   ### For each microfrontend

   ```bash
   cd harry_potter_mf
   npm install

   cd rick_and_morty_mf
   npm install
   ```

3. **Start the Applications**
   Each application can be started individually to run on its own development server.

   ### Start the host application

   ```bash
   cd host
   npm start
   ```

   ### Start each microfrontend

   ```bash
   cd harry_potter_mf
   npm start

   cd rick_and_morty_mf
   npm start
   ```

## Testing

To run the unit tests for each project:

### For the host application

```bash
cd host
npm test
```

### For each microfrontend

```bash
cd harry_potter_mf
npm test

cd rick_and_morty_mf
npm test
```
