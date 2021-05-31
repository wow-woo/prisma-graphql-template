import client from "../../prismaClient";

export default {
  Mutation: {
    // createDish(dish: Dish): buffet
    createDish: (_, { price }) => {
      return client.buffet.create({
        data: {
          price,
          main: "common",
          appetite: "skip",
        },
      });
    },
  },
};
