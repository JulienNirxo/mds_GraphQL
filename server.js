const express = require('express');
const users = require('./users');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Définir le schéma GraphQL
const schema = buildSchema(`
  type Query {
    user(id: Int!): User
  }
  type User {
    id: Int
    name: String
    email: String
    age: Int
    city: String
  }
`);

// Implémenter les résolveurs GraphQL
const root = {
  user: ({id}) => users.find(user => user.id === id),
};

// Route REST pour obtenir un utilisateur par ID
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Utilisateur non trouvé');
  }
});

// Configuration de GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// Démarrage du serveur
app.listen(4000, () => {
  console.log('Serveur démarré sur http://localhost:4000');
  console.log('Endpoint GraphQL: http://localhost:4000/graphql');
  console.log('Endpoint REST: http://localhost:4000/users/:id');
});
