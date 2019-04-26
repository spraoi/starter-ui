import gql from 'graphql-tag';

export const UPDATE_SELF_MUTATION = gql`
  mutation($email: String!, $givenName: String!, $familyName: String!) {
    updateSelf(email: $email, givenName: $givenName, familyName: $familyName) {
      id
    }
  }
`;
