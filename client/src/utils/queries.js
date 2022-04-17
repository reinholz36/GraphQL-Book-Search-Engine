import gpl from 'graphql-tag';

export const GET_ME = gpl`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`