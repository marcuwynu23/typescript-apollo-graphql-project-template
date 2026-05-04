import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {resolvers} from "./resolvers";
import {typeDefs} from "./typedefs";

export async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const {url} = await startStandaloneServer(server, {
    listen: {port: 4000, host: "0.0.0.0"},
  });

  console.log(`Server ready at ${url}`);
}

if (require.main === module) {
  startServer();
}
