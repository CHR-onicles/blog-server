const {ApolloServer} = require('apollo-server');
const typeDefs  = require('./typeDefs');
const resolvers  = require('./resolvers');

const port = process.env.PORT || 8000;

const server = new ApolloServer({typeDefs, resolvers });

server.listen(port).then(({url}) => {
    console.log(`Server hot at ${url}`)
}).catch(err => console.log(err));

