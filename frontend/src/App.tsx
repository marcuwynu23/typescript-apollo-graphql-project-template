import {useMutation, useQuery} from "@apollo/client/react";
import userQuery from "./query/user";
import type {User} from "./types/user";

function App() {
  const {data, loading, error} = useQuery<{users: User[]}>(userQuery.GET_USERS);
  const [createUser] = useMutation<
    {createUser: User},
    {name: string; email: string}
  >(userQuery.CREATE_USER, {
    refetchQueries: [{query: userQuery.GET_USERS}],
  });

  const [updateUser] = useMutation<
    {updateUser: User},
    {id: string; name: string; email: string}
  >(userQuery.UPDATE_USER, {
    refetchQueries: [{query: userQuery.GET_USERS}],
  });

  const [deleteUser] = useMutation<{deleteUser: boolean}, {id: string}>(
    userQuery.DELETE_USER,
    {
      refetchQueries: [{query: userQuery.GET_USERS}],
    },
  );

  const handleCreateUser = async () => {
    try {
      const {data} = await createUser({
        variables: {
          name: "New User",
          email: "user@app.com",
        },
      });

      console.log("User created:", data?.createUser);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  const handleUpdateUser = async (id: string) => {
    try {
      const {data} = await updateUser({
        variables: {
          id,
          name: "Updated User",
          email: "update-user@app.com",
        },
      });

      console.log("User updated:", data?.updateUser);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      const {data} = await deleteUser({
        variables: {id},
      });

      console.log("User deleted:", data?.deleteUser);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Users</h1>

      <button onClick={handleCreateUser}>Create User</button>

      <ul>
        {data?.users?.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleUpdateUser(user.id)}>Update</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
