import React from "react";
import { UserProvider } from "./context/UserContext";
import Login from "./Login/Login";
import { Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <Route exact path="/" component={Login} />
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
