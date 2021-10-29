const {gql} = require('apollo-server');


// checkout how to use actual ID  type later
const typeDefs = gql`

    type User {
        id: Int!
        name: String!
        posts: [Post]
        comments: [Comment]
    }

    input UserInput {
        id: Int!
    }

    type Post {
        id: Int!
        title: String!
        user: User!
        banner: String
        text: String
        likes: Int
        dislikes: Int
        comments: [Comment]
    }

    input PostInput {
        id: Int!
    }

    type Comment {
        user: User!
        post: Post
        text: String
    }

    type Query {
        getAllUsers: [User]
        getUser(id: Int!, name: String): User
        getAllPosts: [Post]
        getPostFromUser(id: Int!, title: String, user: UserInput!): Post
        getAllComments: [Comment]
    }

    type Mutation {
        createPost(user: UserInput!, id: Int!, title: String!, text: String, banner: String): Post
        deletePost(post: PostInput!): [Post]
        updatePost(post: PostInput!, title: String, banner: String, text: String): Post
        likePost(post: PostInput!): Post
        dislikePost(post: PostInput!): Post
        addCommentToPost(post: PostInput!, text: String!, user: UserInput!): Post

    }

`;

module.exports = typeDefs;