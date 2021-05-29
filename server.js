const { gql, ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "world";
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = 5000;
apolloServer
  .listen({ port: PORT })
  .then(() => console.log("server is running on " + PORT));
