<div align="center">
  <a name="readme-top"/>
  <h1 align="center">GuardRails Fullstack Challenge <a target="_blank" href="https://thuan-public-test-2.s3.ap-southeast-1.amazonaws.com/GuardRails-Interview.mp4">Demo Video</a>.</h1>
  <p align="center">
    Thuan Nguyen, Vietnam. (Challenge period: 22<sup>nd</sup>Aug to 29<sup>th</sup>Aug, 2022).
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#running-using-docker">Running using Docker</a></li>
    <li>
        <a href="#running-from-source">Running from source</a>
        <ul>
            <li><a href="#development-mode">a. Development mode</a></li>
            <li><a href="#built-mode">b. Built mode</a></li>
        </ul>
    </li>
    <li><a href="#run-tests">Run Tests</a></li>
    <li><a href="#environment-variables">Environment Variables</a></li>
    <li><a href="#code-patterns">Code Patterns Explanation</a></li>
    <li><a href="#contact-information">Contact Information</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This project is for for the 2nd step of the interview process at guardrails.io. The requirements are detailed in this repository: <a target="_blank" href="https://github.com/guardrailsio/full-stack-engineer-challenge">View Requirement</a>.


<!-- GETTING STARTED -->
## Getting Started

There are two ways in which you can run the project, namely:
1. Running from source (in development or built mode).
2. From docker-compose.yml.

### Prerequisites:
Before you are able to run the project, make sure you have installed these dependencies:
1. If you are running from source:
* NodeJS >= v12.22.0 [Install here](https://nodejs.org/en/download/)
* MySQL >= v8.0.0 [Install here](https://dev.mysql.com/downloads/installer/)
2. If you are running using Docker:
* Docker >= v20.10.0 (versions below specified are not guaranteed to work) [Install here](https://docs.docker.com/engine/install/)

<a name="running-using-docker"/>

## I. Running using Docker:
1. Make sure the .env files are set correctly in ```/api``` and ```/dashboard``` <a href="#environment-variables">View "Environment Variables"</a>
2. At the root folder, run:
   ```sh
   docker-compose up
   ```
3. Navigate to dashboard: [http://localhost:3000](http://localhost:3000)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="running-from-source"/>

## II. Running from source:

<a name="development-mode"/>

### a. Development mode:

1. Make sure you have a running MySQL instance locally (or on the cloud).
2. Make sure the .env files are set correctly in ```/api``` and ```/dashboard``` <a href="#environment-variables">View "Environment Variables"</a>
3. In ```/api``` run these commands: ```yarn && yarn db:migrate && yarn dev```.
4. In ```/dashboard``` run ```yarn && yarn dev```. (Note: only run this after step #3).

<a name="built-mode"/>

### b. Built mode:

1. Do step #1 and step #2 in "Development Mode" guide above.
2. In ```/api``` run these commands: ```yarn && yarn db:migrate && yarn start```.
3. In ```/dashboard``` run ```yarn && yarn build && yarn start```. (Note: only run this after step #3).


<a name="run-tests"/>

## Run Tests:
There are two test suites:
* In `/api` folder: unit tests for all utility functions within the backend. Run `yarn test:unit` to start the tests.
* In `/dashboard` folder: unit tests for all utility functions + component snapshot tests for the frontend. Run `yarn test` to start the tests.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="environment-variables"/>

## Environment Variables:
There are 2 ```.env.example``` files respectively in ```/api``` and ```/dashboard``` folders. Copy them respectively to ```.env``` and change the values accordingly. It is recommended that you use these values by default if you're going to run ```docker-compose up``` in root folder:
* ```/api```:
```
NODE_ENV=development | production
PORT=8080
DB_DIALECT=mysql
DB_PORT=3306
DB_DATABASE=guardrails
DB_HOST=gr-db("gr-db" is the container name of the database image) | localhost.
DB_USERNAME=root
DB_PASSWORD=password
```
* ```/dashboard```:
```
NEXT_PUBLIC_API_GRAPHQL_ENDPOINT=http://localhost:8080/graphql (api is exposed to local machine by necessity because NextJS's client will call api directly).
NEXT_PUBLIC_API_SSR_GRAPHQL_ENDPOINT=http://gr-api:8080/graphql (used for NextJS's server-side functions, "api" is the container's name).
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CODE PATTERNS EXPLANATION -->
<a name="code-patterns"/>

## Code Patterns Explanation
Please find within each folder `/api` and `/dashboard` the `README.md` file that explains the code patterns of each code repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- LICENSE -->
<a name="license"/>

<!-- CONTACT INFORMATION -->
<a name="contact-information"/>

## Contact Information
* Email: nhthuan20@gmail.com
* WhatsApp/Telegram: +84 70 284 5158

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
MIT License

Copyright (c) 2022 Thuan Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#readme-top">back to top</a>)</p>