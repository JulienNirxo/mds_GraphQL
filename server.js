const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Définir le schéma GraphQL
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Implémenter les résolveurs
const root = {
  hello: () => 'Bonjour, monde !',
};

const app = express();

// Configuration de GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Activer l'interface graphique interactive (facultatif)
}));

// Démarrage du serveur
app.listen(4000, () => {
  console.log('Serveur GraphQL démarré sur http://localhost:4000/graphql');
});
