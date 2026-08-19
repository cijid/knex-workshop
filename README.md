# Knex Workshop

The purpose of this is to build a PostgreSQL database that can can be connected to using an Express server.

## Demonstrate These Abilities:

Build schemas and entity relationship diagrams using data definition language (DDL)
Create and connect to databases using connection strings
Compose sql queries using data modification language (DML) in order to insert, delete, modify, and update data
Connect an express API to an existing database

## Project Specs

- API must contain endpoints that cover all CRUD functionality
  - Must contain parameterized endpoints or endpoints that handle query parameters
- Your repo should contain your ERD in some form - including it as an image that you can show in the README.md is a superb way to achieve this!
  - Feel free to use any schema design tool to come up with your ERD - here's one lightweight tool you might use
- PostgreSQL database must be maintained and interacted with using Knex.js
  - Must seed initial data into database using Knex
  - Must retrieve data from the database using the join method of Knex

# Bikes

My theme for this database is bikes.
I thought it easier to start off by creating an ontology before I create my ERD. Define what makes up all the things and then map out a schema.

## Project Progress

### My Goals

- [x] Create Ontology
  - Bikes
  - Bike Make
  - Bike Model
  - Bike Components
  - Riders

- [x] Create ERD

Express

- [x] API endpoints covering CRUD functionality

- [x] Parameterized endpoints

Knex

- [x] Seed initial data into database using Knex

- [x] Retrieve data from the database using the join method of Knex

### Stretch Goals

[X] Increase seed data amount by an exponential scale

[X] Create front-end to display the data coming back from my API

[ ] Send an HTTP request to a 3rd part API to seed dtabase

[ ] Transform data into format I want for my database prior to insertion
