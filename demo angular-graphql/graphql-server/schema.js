const schema = `
scalar GQDate

type Registration {
  id: ID!
  firstName: String
  lastName: String
  dob: GQDate
  email: String
  country: String
}

type Query {
  Registration(id: ID!): Registration
  Registrations(limit: Int): [Registration]
}

type Mutation {
  createRegistration (firstName: String, lastName: String, dob: GQDate, email: String, password: String, country: String): Registration
  updateRegistration (id: ID!, firstName: String, lastName: String, dob: GQDate, email: String, password: String, country: String): Registration
  deleteRegistration(id: ID!): Registration
}
`;

module.exports.schema = schema;
