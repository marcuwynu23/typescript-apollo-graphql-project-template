type User = {
  id: string;
  name: string;
  email: string;
};

// in-memory DB
let users: User[] = [];

export const getUsers = () => users;

export const getUserById = (_: any, args: {id: string}) => {
  return users.find((u) => u.id === args.id) || null;
};

export const createUser = (_: any, args: {name: string; email: string}) => {
  const newUser: User = {
    id: crypto.randomUUID(),
    name: args.name,
    email: args.email,
  };

  users.push(newUser);
  return newUser;
};

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

export const deleteUser = (_: any, args: {id: string}) => {
  const initialLength = users.length;
  users = users.filter((u) => u.id !== args.id);
  return users.length !== initialLength;
};
