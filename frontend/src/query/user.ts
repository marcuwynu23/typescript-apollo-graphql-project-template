import {gql} from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`;

const CREATE_USER = gql`
  mutation ($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation ($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

export default {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
};
