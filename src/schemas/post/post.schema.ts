import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    status: String!
    likes: [User]
    comments: [Comment]
    createdAt: String
  }

  type Comment {
    body: String!
    user: User!
  }

  type Query {
  
    posts(status: String): [Post]
    post(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!, content: String!): Post
    approvePost(id: ID!): Post
    likePost(id: ID!): Post
    addComment(id: ID!, body: String!): Post
  }
`;


