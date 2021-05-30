import { gql, ApolloServer } from "apollo-server";

const typeDefs = gql`
  type Buffet {
    appetite: String
    main: String
  }
  type Query {
    morning: String
    launch: String
    dinner: Buffet
    receipt: [Buffet]
  }

  input Din {
    name: String
    price: Int
  }

  type Mutation {
    changeDinner(menu: Din): Buffet
  }
`;

const resolvers = {
  Query: {
    dinner: () => ({
      appetite: "soup",
      main: "chicken",
    }),

    receipt: () => [
      { appetite: "01", main: "01main" },
      { appetite: "02", main: "02main" },
      { appetite: "03", main: "03main" },
    ],
  },

  Mutation: {
    changeDinner: (_, { menu }) => {
      return { appetite: null, main: menu.name };
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
