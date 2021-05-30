import { PrismaClient } from ".prisma/client/index.js";
import { gql, ApolloServer } from "apollo-server";

const client = new PrismaClient();

const typeDefs = gql`
  type Buffet {
    id: Int
    appetite: String
    main: String
    price: Int
    createdAt: String
    updatedAt: String
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

    receipt: () => [client.buffet.findMany()],
  },

  Mutation: {
    changeDinner: (_, { menu }) => {
      return { main: menu.name, ...client.buffet };
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
