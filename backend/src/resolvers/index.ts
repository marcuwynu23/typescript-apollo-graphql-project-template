import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../modules/user/user.controller";

export const resolvers = {
  Query: {
    users: getUsers,
    user: getUserById,
  },
  Mutation: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
  },
};
