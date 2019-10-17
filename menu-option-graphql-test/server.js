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
    Options: [Option]
  }

  type Option{
    description: String!,
    creation_date: String!,
    update_date: String!,
    option_type: String!,
    role: [String!],
    active: Boolean,
    sub_option: [Sub_option]
  }

  type Sub_option{
      description: String!,
      application: String!,
      role: [String!]
  }
`;

const Options = [
    {
      description: "Inicio",
      creation_date: "2019-08-29 00:00:00",
      update_date: "2019-08-29 00:00:00",
      option_type: "MP",
      role: [
        "SE"
      ],
      active: true,
      sub_option: []
    },
    {
      description: "NUESTROS PORTALES",
      creation_date: "2019-09-09 00:00:00",
      update_date: "2019-09-09 00:00:00",
      option_type: "MF",
      role: [
        "SE",
        "GR",
        "GZ",
        "DV"
      ],
      active: true,
      sub_option: [
        {
          description: "Somos Belcorp",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        },
        {
          description: "Únete a Belcorp",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        },
        {
          description: "Comunidad Virtual",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        }
      ]
    },
    {
      description: "NUESTRAS MARCAS",
      creation_date: "2019-09-09 00:00:00",
      update_date: "2019-09-09 00:00:00",
      option_type: "MF",
      role: [
        "SE",
        "GR",
        "GZ",
        "DV"
      ],
      active: true,
      sub_option: [
        {
          description: "Ésika",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        },
        {
          description: "L'Bel",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        },
        {
          description: "Cyzone",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        }
      ]
    },
    {
      description: "SÍGUENOS",
      creation_date: "2019-09-09 00:00:00",
      update_date: "2019-09-09 00:00:00",
      option_type: "MF",
      role: [
        "SE",
        "GR",
        "GZ",
        "DV"
      ],
      active: true,
      sub_option: [
        {
          description: "Facebook",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        },
        {
          description: "YouTube",
          application: "Web",
          role: [
            "SE",
            "GR",
            "GZ",
            "DV"
          ]
        }
      ]
    },
    {
      description: "Reporte de Cierre",
      creation_date: "2019-09-11 00:00:00",
      update_date: "2019-09-11 00:00:00",
      option_type: "MP",
      role: [
        "SE",
        "GZ"
      ],
      active: true,
      sub_option: []
    },
    {
      description: "Bolsa de Pedidos",
      creation_date: "2019-09-11 00:00:00",
      update_date: "2019-09-11 00:00:00",
      option_type: "MP",
      role: [
        "SE",
        "GZ"
      ],
      active: true,
      sub_option: []
    },
    {
      description: "Pedidos Web",
      creation_date: "2019-09-11 00:00:00",
      update_date: "2019-09-11 00:00:00",
      option_type: "MP",
      role: [
        "SE",
        "GZ"
      ],
      active: true,
      sub_option: []
    },
    {
      description: "IP Único",
      creation_date: "2019-09-11 00:00:00",
      update_date: "2019-09-11 00:00:00",
      option_type: "MP",
      role: [
        "SE",
        "GZ"
      ],
      active: true,
      sub_option: []
    }
  ]

const resolvers = {
    Query:{
        Options: () => Options
    }
}

const schema = new ApolloServer({ typeDefs, resolvers })
schema.applyMiddleware({ app });
// app.use('/graphql', bodyParser.json(), ApolloServer({ schema }))
// app.use('/graphiql', ApolloServer({ endpointURL: '/graphql' }))

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  // console.log('Options')
  // console.log(Options)
})
