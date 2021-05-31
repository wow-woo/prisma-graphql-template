require("dotenv").config();
import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema.js";

const apolloServer = new ApolloServer({
  schema,
});

apolloServer
  .listen({ port: process.env.PORT })
  .then(() => console.log("server is running on " + process.env.PORT));
