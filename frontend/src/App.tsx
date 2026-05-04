import {useRoutes} from "react-router-dom";
import {Navigate} from "react-router";
import UserPage from "./app/user/user.page";

function App() {
  const routes = [
    {
      path: "/",
      element: <Navigate to="/user" />,
    },
    {
      path: "/user",
      element: <UserPage />,
    },
  ];
  const element = useRoutes(routes);

  return element;
}

export default App;
