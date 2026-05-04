import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./controllers/user.controller";
import {typeDefs} from "./typedefs";
const resolvers = {
  Query: {
    users: getUsers,
    user: getUserById,
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
  },
};

async function startServer() {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
  });

  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000, host: "0.0.0.0"},
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer();
