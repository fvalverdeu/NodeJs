const { GraphQLScalarType } = require('graphql');

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth()), d.getFullYear()].join("/");
}

const GQDate = new GraphQLScalarType({
  name: "GQDate",
  description: "Date type",
  parseValue(value) {
    return value;
  },
  serialize(value) {
    return value;
  },
  parseLiteral(ast) {
    return new Date(ast.value);
  }
});

const registrations = [
  {
    id: 1,
    firstName: "Johan",
    lastName: "Peter",
    dob: new Date("2019-09-04"),
    email: "johan@gmail.com",
    password: "johan123",
    country: "UK"
  },
  {
    id: 2,
    firstName: "Mohamed",
    lastName: "Tariq",
    dob: new Date("1981-11-24"),
    email: "tariq@gmail.com",
    password: "tariq123",
    country: "UAE"
  },
  {
    id: 3,
    firstName: "Nirmal",
    lastName: "Kumar",
    dob: new Date("1991-09-02"),
    email: "nirmal@gmail.com",
    password: "nirmal123",
    country: "India"
  }
];

const resolvers = {
  Query: {
    Registrations: () => registrations,
    Registration: (_, { id }) =>
    registrations.find(registration => registration.id == id)
  },

  Mutation: {
    createRegistration: (root, args) => {
      const nextId =
      registrations.reduce((id, registration) => {
        return Math.max(id, registration.id);
      }, -1) +1;
      const newRegistration = {
        id: nextId,
        firstName: args.firstName,
        lastName: args.lastName,
        dob: args.dob,
        email: args.email,
        password: args.password,
        country: args.country
      };
      registrations.push(newRegistration);
      return newRegistration;
    },

    deleteRegistration: (root, args) => {
      const index = registrations.findIndex(
        registration => registration.id == args.id
      );
      registrations.splice(index, 1);
    },

    updateRegistration: (root, args) => {
      const index = registrations.findIndex(
        registration.id == args.id
      );
      registrations[index].firstName = args.firstName;
      registrations[index].lastName = args.lastName;
      registrations[index].dob = args.dob;
      registrations[index].email = args.email;
      registrations[index].password = args.password;
      registrations[index].country = args.country;
      return registrations[index];
    }
  },
  GQDate
};

module.exports.resolvers = resolvers;
