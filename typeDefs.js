const {gql} = require('apollo-server');


const blogTypeDefs = gql`
    scalar Date

    type User {
        id: ID!
        name: String!
        posts: [Post]
        comments: [Comment]
    }

    type Post {
        id: ID!
        title: String!
        banner: String
        text: String
        date: Date
        user: User
        likes: Int
        dislikes: Int
        comments: [Comment]
    }

    type Comment {
        user: User!
        post: Post!
        text: String
    }


    type Query {
        getAllUsers: [User]
        getUser(id: ID!, name: String): User
        getAllPosts: [Post]
        getPost(id: ID!, title: String, user: User)
        getAllCommentsFromUser(user: User!): [Comment]
    }

    type Mutation {
        createPost()
        createComment()
        createUser()
        likePost()
        dislikePost()
        commentOnPost()
    }


`;