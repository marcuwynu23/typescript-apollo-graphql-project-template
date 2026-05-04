import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  resetUsers,
} from "./user.controller";

beforeEach(() => {
  resetUsers();
});

describe("user service", () => {
  beforeEach(() => {
    const users = getUsers();

    while (users.length > 0) {
      deleteUser(null, {id: users[0].id});
    }
  });

  describe("getUsers", () => {
    it("should return an empty array initially", () => {
      expect(getUsers()).toEqual([]);
    });

    it("should return all created users", () => {
      createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      createUser(null, {
        name: "Wayne",
        email: "wayne@app.com",
      });

      const users = getUsers();

      expect(users).toHaveLength(2);
      expect(users[0].name).toBe("Mark");
      expect(users[1].name).toBe("Wayne");
      expect(users[0].email).toBe("mark@app.com");
      expect(users[1].email).toBe("wayne@app.com");
    });
  });

  describe("getUserById", () => {
    it("should return a user when id exists", () => {
      const user = createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      const found = getUserById(null, {
        id: user.id,
      });

      expect(found).not.toBeNull();
      expect(found?.name).toBe("Mark");
    });

    it("should return null when id does not exist", () => {
      const found = getUserById(null, {
        id: "missing-id",
      });

      expect(found).toBeNull();
    });
  });

  describe("createUser", () => {
    it("should create and return a new user", () => {
      const user = createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      expect(user.id).toBeDefined();
      expect(user.name).toBe("Mark");
      expect(user.email).toBe("mark@app.com");
      expect(getUsers()).toHaveLength(1);
    });
  });

  describe("updateUser", () => {
    it("should update an existing user", () => {
      const user = createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      const updated = updateUser(null, {
        id: user.id,
        name: "Updated Mark",
        email: "updated@app.com",
      });

      expect(updated).not.toBeNull();
      expect(updated?.name).toBe("Updated Mark");
      expect(updated?.email).toBe("updated@app.com");
    });

    it("should partially update an existing user", () => {
      const user = createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      const updated = updateUser(null, {
        id: user.id,
        name: "Only Name Changed",
      });

      expect(updated?.name).toBe("Only Name Changed");
      expect(updated?.email).toBe("mark@app.com");
    });

    it("should return null if user does not exist", () => {
      const updated = updateUser(null, {
        id: "missing-id",
        name: "No User",
      });

      expect(updated).toBeNull();
    });
  });

  describe("deleteUser", () => {
    it("should delete an existing user", () => {
      const user = createUser(null, {
        name: "Mark",
        email: "mark@app.com",
      });

      const deleted = deleteUser(null, {
        id: user.id,
      });

      expect(deleted).toBe(true);
      expect(getUsers()).toHaveLength(0);
    });

    it("should return false if user does not exist", () => {
      const deleted = deleteUser(null, {
        id: "missing-id",
      });

      expect(deleted).toBe(false);
    });
  });
});
