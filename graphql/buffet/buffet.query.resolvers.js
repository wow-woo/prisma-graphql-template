import client from "../../prismaClient";

export default {
  Query: {
    dishes: () => client.buffet.findMany(),
  },
};
