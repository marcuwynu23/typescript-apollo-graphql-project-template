import type {User} from "./user.types";
import {randomUUID} from "node:crypto";

// in-memory DB
let users: User[] = [];

// for testing purposes only
export const resetUsers = () => {
  users = [];
};

// get all users
export const getUsers = () => users;
// get a user by id, return null if not found
export const getUserById = (_: any, args: {id: string}) => {
  return users.find((u) => u.id === args.id) || null;
};
// create a new user, return the created user
export const createUser = (_: any, args: {name: string; email: string}) => {
  const newUser: User = {
    id: randomUUID(),
    name: args.name,
    email: args.email,
  };
  users.push(newUser);
  return newUser;
};

// update a user by id, return the updated user or null if not found
export const updateUser = (
  _: any,
  args: {id: string; name?: string; email?: string},
) => {
  const user = users.find((u) => u.id === args.id);
  if (!user) return null;

  if (args.name !== undefined) user.name = args.name;
  if (args.email !== undefined) user.email = args.email;

  return user;
};

// delete a user by id, return true if deleted, false if not found
export const deleteUser = (_: any, args: {id: string}) => {
  const initialLength = users.length;
  users = users.filter((u) => u.id !== args.id);
  return users.length !== initialLength;
};
