# Instagram clone coding

### Following a lecture and learn from it.

### Stop learning theory and war-gaming in my brain,

### Start coding

### Nodemon : execute and watch on a file

- 1. nodemon --exec node server.js
- nodemon exec "node server.js" script
- 2. nodemon server.js
- second way is more efficient i believe.

### ES Module or commonjs Module

- specify module for type in package.json for ES Module usage

### graphQL

- GraphQL services can be written in any language. Since we can't rely on a specific programming language syntax, like JavaScript, to talk about GraphQL schemas, we'll define our own simple language. We'll use the "GraphQL schema language" - it's similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way
- type statement defines graphQL object types.
- The most basic components of a GraphQL schema are GraphQL object types
- String is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query.
- All arguments are named. Unlike languages like JavaScript and Python where functions take a list of ordered arguments, all arguments in GraphQL are passed by name specifically.

- typeDefs (graphQL type object with graphQL schema langue)
- resolvers

#### graphQL objects

- type

type Orange{

}

type Query{

}

- scalar
  scalar MyDate

- interface
  interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  }
- Union types
  union SearchResult = Human | Droid | Starship

- input types

This is particularly valuable in the case of mutations, where you might want to pass in a whole object to be created. In the GraphQL schema language, input types look exactly the same as regular object types, but with the keyword input instead of type:

input ReviewInput {
stars: Int!
commentary: String
}

#### graphQL scalar type

- Int: A signed 32‐bit integer.
- Float: A signed double-precision floating-point value.
- String: A UTF‐8 character sequence.
- Boolean: true or false.
- ID: The ID scalar type represents a unique identifier
- to specify custom scalar types. For example, we could define a Date type:

scalar Date

#### Lists and Non-Null

type Character {
name: String!
appearsIn: [Episode]!
}
