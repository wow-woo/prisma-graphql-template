import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema.js";

const apolloServer = new ApolloServer({
  schema,
});

const PORT = 5000;
apolloServer
  .listen({ port: PORT })
  .then(() => console.log("server is running on " + PORT));
