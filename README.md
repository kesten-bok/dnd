# DND

A Dungeons and Dragons 5e helper that enables tracking your party, as they go through a fantasy world.

## Structure

This repository is a monorepo, containing multiple microservices. It utilises [lerna](https://lerna.js.org/) for build management.

## Repositories

- [characters](./packages/characters/)

## Setup

1. Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
2. Pull down all project dependencies: `$ yarn`
3. Copy and populate the `.env` file: `$ cp .env.example .env`
4. Run the projects: `$ yarn start:dev`

Note: Different projects will have different requirements in order to run. If encountering any errors check out the specific projects' documentation.
