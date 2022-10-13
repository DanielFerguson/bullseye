# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2022-10-13
### Added
- Created database seeder.
- Added failing api tests for basic routes.
- Added prisma.
- Created prisma migration from ERD diagram.
- Added link to ERD diagram.
- Added faker.
- Added feature and unit test folders.
- Added `clubs-api.test.ts` file for future testing.
- Added `games-api.test.ts` file for future testing.
- Added helper file for global functions.

### Changed
- Updated serverless definition file to include api routes.
- Renamed api test file from `example.test.ts` to `archer-api.test.ts`.
- Moved `archer-api.test.ts` into feature test folder.

### Removed
- Removed the .build file from git, added it to the .gitignore.

## [0.1.0] - 2022-10-12
### Added
- Added CHANGELOG.
- Added license.
- Created Serverless Framework `api` project.
- Added TypeScript support for the `api` project.
- Added basic Jest tests for the `api` project.
- Added project information to the `README.md` file.
- Added Github Actions pipeline job to run `api` tests.