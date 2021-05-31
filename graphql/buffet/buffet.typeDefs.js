import { gql } from "apollo-server-core";

export default gql`
  type Buffet {
    id: Int
    appetite: String
    main: String
    price: Int
    createdAt: String
    updatedAt: String
  }
  type Query {
    dishes: [Buffet]
  }

  type Mutation {
    createDish(price: Int): Buffet
  }
`;
