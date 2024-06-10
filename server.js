const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server');

// Lire le fichier de schéma GraphQL
const typeDefs = gql(fs.readFileSync('./schema.graphql', 'utf8'));

// Importer les résolveurs
const resolvers = require('./resolvers');

// Créer et configurer le serveur Apollo
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Serveur GraphQL démarré sur ${url}`);
});
