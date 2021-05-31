import {
  makeExecutableSchema,
  loadFilesSync,
  mergeResolvers,
  mergeTypeDefs,
} from "graphql-tools";

const loadedTypeDefs = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{query,mutation}.resolvers.js`
);

const typeDefs = mergeTypeDefs(loadedTypeDefs);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
