const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const bodyParser = require('body-parser')
const http = require('http')
const { makeExecutableSchema } = require('graphql-tools')

const PORT = 3000
const app = express()
const server = http.createServer(app)

const typeDefs = gql`
  type Query{
    books: [Book]
  }

  type Book{
    title: String!,
    description: String!
    authorName: String!
  }
`

const Books = [
  {
    title: 'El Principito',
    description: 'El Principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry',
    authorName: 'Antoine de Saint-Exupéry'
  },
  {
    title: 'Las Aventuras de Tom Sawyer',
    description: 'Las Aventuras de Tom Sawyer es una novela del autor estadounidense Mark Twain publicada en 1876',
    authorName: 'Mark Twain'
  }
]

const resolvers = {
  Query:{
    books: () => Books
  }
}

const schema = new ApolloServer({ typeDefs, resolvers })
schema.applyMiddleware({ app });
// app.use('/graphql', bodyParser.json(), ApolloServer({ schema }))
// app.use('/graphiql', ApolloServer({ endpointURL: '/graphql' }))

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

