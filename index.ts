require('dotenv/config');

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const PORT = process.env.SERVER_PORT || 4000;

// Apollo/GraphQL
import { ApolloServer } from 'apollo-server';
const { typeDefs, resolvers } = require('./graphQL');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: PORT })
  .then(({ url }) => console.log({
    SERVER_STATUS: 'Running',
    SERVER_URL: url,
    DATE_TIME: Date()
  }));