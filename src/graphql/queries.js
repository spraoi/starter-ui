import gql from 'graphql-tag';

export const ALL_POSTS = gql`
  query allPosts {
    allPosts {
      id
      title
    }
  }
`;
