const data = require('./data');
let {users, comments, posts} = data;

const resolvers = {
    Query: {
        getAllUsers: () => users,

        // something wrong with this guy here
        getUser: (parent, args) => {
            users.find(user => {
                user.id === args.id
                console.log(user.id, args.id)
            })
        },

        getAllPosts: () => posts,

        getPostFromUser: (parent, args) => {
            posts.find(post => {
                post.user.id === args.user.id;
            })
        },

        getAllComments: () => comments,

    },

    Mutation: {
        createPost: (parent, args) => {
            const {user, post_id, title, text, banner} = args;
            const post = {user, post_id, title, text, banner};
            posts.push(post);
            return post;
        },

        deletePost: (parent, args) => {
            const {post} = args;
            const filtered_posts = posts.filter(post_tbd => {
                return post_tbd.id !== post.id;
            });
            posts = filtered_posts;
            return filtered_posts;
        },

        updatePost: (parent, args) => {
            let {post, title, banner, text} = args;
            posts.map(item => {
                if (item.id === post.id) {
                    item.title = title || item.title;
                    item.banner = banner || item.banner;
                    item.text = text || item.text;
                    return item;
                }
            })
            return post;
        },

        likePost: (parent, args) => {
            let {post} = args;
            posts.map(item => {
                if (item.id === post.id) {
                    item.likes += 1;
                    return item;
                }
            })
            return post;
        },

        dislikePost: (parent, args) => {
            let {post} = args;
            posts.map(item => {
                if (item.id === post.id) {
                    item.dislikes += 1;
                    return item;
                }
            })
            return post;
        },

        addCommentToPost: (parent, args) => {
            const {post, text} = args;
            console.log(post)
            posts.map(item => {
                if (item.id === post.id) {
                    // item.comments.push({text, })
                    // insert other shenanigans here
                }
            })
        },

    }
    
}



module.exports = resolvers;