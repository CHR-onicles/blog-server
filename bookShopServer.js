// PRACTICE FROM CLASS

const {ApolloServer, gql} = require('apollo-server');

const port = process.env.PORT || 8000; // In order to use the port provided by heroku once deployed

// typeDefs
//resolvers

const books = [
    {
        title: 'Harry Potter',
        author: 'J K Rowling',
        ISBN: '0-1-234-5'
    },
    {
        title: 'Jurassic park',
        author: 'John Blue',
        ISBN: '0-11115'
    },
    {
        title: 'Sky high',
        author: 'Peter Newman',
        ISBN: '99-88-77-66'
    }
]

const schemas = gql`
    type Book {
        title: String!
        author: String!
        ISBN: String
    }

    type Query {
        books: [Book]
        book(title: String!): Book
    }

    type Mutation {
        createBook(title: String!, author: String!, ISBN: String): Book
    }
`;

const bookResolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.title === args.title) 
    },

    Mutation: {
        createBook: (parent, args) => {
            const {title, author, ISBN} = args;
            console.log(args)
            const book = {title, author, ISBN};
            books.push(book);
            return book;
        }
    }
}



const server = new ApolloServer({typeDefs: schemas, resolvers: bookResolvers});

server.listen(port).then(({url}) => {
    console.log(`Server is updated and running at ${url}`);
}).catch(err => console.log(err))