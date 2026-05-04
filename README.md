# TypeScript Apollo GraphQL Project Template

A lightweight backend template for building GraphQL APIs using TypeScript, Apollo Server, and in-memory data handling. Includes a basic user module with full CRUD operations and Jest testing setup.

---

## Features

- Apollo Server (standalone setup)
- GraphQL schema with type definitions
- TypeScript support
- In-memory data store (no database required)
- Full CRUD example (User module)
- Jest testing with ts-jest
- Clean modular structure

---

## Installation

```bash
npm install
```

---

## Development

Run the server in development (after build or using ts-node/tsx if added):

```bash
npx tsc
node dist/index.js
```

Or recommended:

```bash
npx tsx src/index.ts
```

---

## GraphQL Server

Once running, the server will be available at:

```
http://localhost:4000
```

---

## Example Queries

### Get Users

```graphql
query {
  users {
    id
    name
    email
  }
}
```

### Get User By ID

```graphql
query {
  user(id: "USER_ID") {
    id
    name
    email
  }
}
```

---

## Example Mutations

### Create User

```graphql
mutation {
  createUser(name: "Mark", email: "mark@app.com") {
    id
    name
    email
  }
}
```

### Update User

```graphql
mutation {
  updateUser(id: "USER_ID", name: "Updated Name") {
    id
    name
    email
  }
}
```

### Delete User

```graphql
mutation {
  deleteUser(id: "USER_ID")
}
```

---

## Testing

This project uses Jest + ts-jest.

Run tests:

```bash
npx jest
```

Run tests in single thread:

```bash
npx jest --runInBand
```

---

## Test Coverage

Includes tests for:

- getUsers
- getUserById
- createUser
- updateUser (full & partial updates)
- deleteUser

---

## Tech Stack

- Node.js
- TypeScript
- Apollo Server
- GraphQL
- Jest
- ts-jest

---

## Notes

- This template uses an in-memory array as a mock database.
- Data resets on server restart.
- Suitable for learning, prototyping, and backend architecture practice.

---

## Future Improvements

- Add database support (PostgreSQL / MongoDB)
- Add authentication (JWT)
- Add file upload support (GraphQL multipart)
- Add Docker setup
- Add integration tests with Apollo test client
