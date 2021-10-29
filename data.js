let comments = [
    {
        userID: 1001,
        text: 'Nice blog',
        postID: 1,
    },
    {
        userID: 1001,
        text: 'This comment checks if the first comment is there',
        postID: 1,
    },
]

let users = [
    {
        id: 1001,
        name: 'Musa Saq Madiq',
        posts: [

        ],
        comments: [
            
        ],
    },
    {
        id: 1002,
        name: 'Dixon Yu',
        posts: [

        ],
        comments: [

        ],
    },
    {
        id: 1003,
        name: 'Ben Dover Domey',
        posts: [

        ],
        comments: [

        ],
    },
]


let posts = [
    {
        id: 1,
        title: 'Orientation in Legon',
        user: users[0],
        banner: 'https://images.unsplash.com/photo-1635330409777-b3535af024ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        text: 'Legon is the premiere university of Ghana which was founded in 1972 around which no one was around to find out how bad it really is lorem ipsum.',
        comments: [

        ],
        likes: 10,
        dislikes: 5,
    },
    {
        id: 2,
        title: 'Blog about lecturers in UK',
        user: users[1],
        banner: 'https://images.unsplash.com/photo-1635452066377-6df9b3529b33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
        text: "In the UK, the term lecturer is ambiguous and covers several academic ranks. The key distinction is between permanent/open-ended or temporary/fixed-term lectureships.",
        comments: [
            comments[0],
        ],
        likes: 20,
        dislikes: 50,
    },
]

module.exports = {
    users,
    posts,
    comments,
}