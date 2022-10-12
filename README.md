# 🎯 Bullseye

Bullseye is a mobile application to replace the paper-based system for recording ABA outdoor and indoor archery rounds. Bullseye will also enable archers to see their progression, track goals and identify areas of improvement in their rounds.

The project will be broken down into three areas:

1. the API,
2. the mobile application, and
3. the marketing website

## 🛣️ Roadmap

### v0.1.0

- [ ] Create a ERD for the database structure.
- [ ] Install and setup Prisma with PlanetScale, create the initial migration.
- [ ] Write Jest tests for the CRUD API routes to store round information.
- [ ] Write the CRUD API route functions to satisfy the written tests.
- [ ] ...

### Future 

- [ ] ...

## Technology Decisions

### API

The API will be built using the [Serverless Framework](https://serverless.com/), published using Amazon Web Services.

Functions will be written in [TypeScript](https://www.typescriptlang.org/), and the project will be developed using the [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) practise to ensure safety while iterating rapidly. Unit tests, feature tests and integration tests will be written using [Jest](https://jestjs.io/).

### Mobile Application

The mobile application will be developed using [Flutter](https://flutter.dev/), and the [Dart](https://dart.dev/) language.

... Flutter packages will be added here as the mobile development of the application starts and are deemed necessary.

### Marketing Website

The marketing website will be developed using the [Astro](https://astro.build/) framework. As there will be no need to serve any dynamic frontend features, nor any project-based user functionality, this project is not a good candidate for larger frameworks like NextJS or Laravel.

ReactJS and TypeScript will be used on the frontend, where Astro components do not suffice; however this will be extremely limited and I do not forsee much JavaScript needing to be served to the client other than the default Astro bundle.

As I am concerned about privacy, I will use [Fathom Analytics](https://usefathom.com/) as our website analytics tracker over Google Analytics.