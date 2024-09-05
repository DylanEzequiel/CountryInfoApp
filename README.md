# My Project

This project consists of a frontend and a backend. Below are the instructions for setting up and configuring both.

## Table of Contents

- [Backend Installation](#backend-installation)
- [Frontend Installation](#frontend-installation)
- [Usage](#usage)

## Backend Installation

To get started with the backend, clone the repository and navigate to the backend directory:

```bash
git clone <https://github.com/DylanEzequiel/CountryInfoApp>
cd BackEnd
```

Install the required dependencies:
```bash
npm install
```


Configure environment variables by creating a .env file in the root directory of the backend. Replace the placeholders with your own values:

### env
```bash
POPULATION_API=https://countriesnow.space/api/v0.1/countries/population
FLAG_API=https://countriesnow.space/api/v0.1/countries/flag/images
BORDER_COUNTRIES=https://date.nager.at/api/v3/CountryInfo
COUNTRIES_API=https://date.nager.at/api/v3/AvailableCountries
```


Start the server:
```bash
npm run dev
```

The server should now be running at http://localhost:3000.

## Frontend Installation


For the frontend, navigate to the frontend directory:

```bash
cd FrontEnd
cd my-project
```


Install the necessary dependencies:

```bash
npm install
```

Configure environment variables by creating a .env.local file in the root directory of the frontend. Replace the placeholders with your own values:

### env
Create a .env.local file in the root directory with the following content:
```bash
VITE_URL_BACKEND=http://localhost:3000
```


Start the application:

```bash
npm run dev
```
The application should be running at http://localhost:5173.

Ensure that you create the appropriate environment files for both the backend and frontend. These environment variables are used to configure the application without hardcoding sensitive values.




Usage
Once both the backend and frontend are set up and running, you can access the application at http://localhost:5173.
Make sure both servers are running for the application to function correctly.
Click on the flag at the bottom of the component to see the info about that specific country!

I hope you enjoy this app! <3
