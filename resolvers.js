const users = [
    { id: '1', name: 'Alice', email: 'alice@example.com', age: 25, city: 'Paris' },
    { id: '2', name: 'Bob', email: 'bob@example.com', age: 30, city: 'Lyon' },
    { id: '3', name: 'Charlie', email: 'charlie@example.com', age: 35, city: 'Marseille' }
  ];
  
  const addUser = (_, { name, email, age, city }) => {
    const newUser = { id: generateUserId(), name, email, age, city };
    users.push(newUser);
    return newUser;
  };
  
  const resolvers = {
    Query: {
      // Résolveurs pour les requêtes existantes
    },
    Mutation: {
      addUser,
    },
  };
  
  
  