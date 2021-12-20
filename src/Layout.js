import "semantic-ui-css/semantic.min.css";
import "./Layout.css";
//---------------------REACT------------------------------
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./views/Login";
import SidebarComponent from "./component/Sidebar";
import Header from "./component/Header";
//---------------------AWS------------------------------
import Amplify, { Auth, Hub } from "aws-amplify";
import {
  withAuthenticator,
  Authenticator,
  AmplifyAuthenticator,
  // signOut,
  AmplifySignOut,
  AmplifyGreetings,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
//---------------------Context------------------------------
import { GlobalProvider } from "./context/Provider";
//---------------------Plugin------------------------------
import Cookies from "js-cookie";
import useForm from "./Forms/useForm";
import { Card, Form, Segment, Button } from "semantic-ui-react";

function Layout() {
  const { onChangeSignUp, formState, updateFormState, updateUser, user } =
    useForm();
  //---------------------States------------------------------
  const [sidebarItem, setSidebarItem] = useState(false);
  const { formType, userType } = formState;
  const [token, setToken] = useState(Cookies.get("token") || null);
  // const [username, setUsername] = useState(Cookies.get("username") || "");
  //-------------------Functions---------------------------
  async function signUp() {
    try {
      const { name, password, email, userType } = formState;
      console.log(formState);
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: { name, email, "custom:user_type": userType },
      });
      console.log("user:", user);
      updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
    } catch (error) {
      console.log("bloody signUp", error);
    }
  }
  async function confirmSignUp() {
    try {
      const { email, authCode } = formState;
      const { confirm } = await Auth.confirmSignUp(email, authCode);
      console.log(confirm);
      updateFormState(() => ({ ...formState, formType: "signIn" }));
    } catch (error) {
      console.log("confirmSignUp error", error);
    }
  }
  async function signIn() {
    try {
      const { email, password } = formState;
      await Auth.signIn({ username: email, password });
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } catch (error) {
      console.log("signIn error", error);
    }
  }
  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);
  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          console.log("data from event:", data);
          updateFormState(() => ({ ...formState, formType: "signedOut" }));
          break;
        default:
          break;
      }
    });
  }
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user);
      updateUser(user);
      console.log("checkUSER FORM STATE:", formState);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
      console.log("checkUSER FORM STATE 2:", formState);
    } catch (error) {
      updateUser(null);
      // console.log("checkUser", error);
    }
  }
  const setUser = (userToken, username) => {
    setToken(userToken);
    // setUsername(username);
    Cookies.set("token", userToken, { expires: 1 });
    // Cookies.set("username", username, { expires: 1 });
  };
  const handleSidebarItem = () => setSidebarItem(!sidebarItem);
  // console.log(window.location.origin);
  console.log("formState:", formState);
  // console.log("userTy:", userType);

  return (
    <Router>
      <GlobalProvider>
        <Route path="/login">
          <Form>
            {formType === "signUp" && (
              <Card centered fitted>
                <Form.Input
                  name="name"
                  type="text"
                  onChange={onChangeSignUp}
                  placeholder="name"
                />
                <Form.Input
                  name="password"
                  type="password"
                  onChange={onChangeSignUp}
                  placeholder="password"
                />
                <Form.Input
                  name="email"
                  type="email"
                  onChange={onChangeSignUp}
                  placeholder="email"
                />
                <Form.Group inLine>
                  <Form.Radio
                    radio
                    name="userType"
                    checked={userType === "agent"}
                    onClick={onChangeSignUp}
                    value="agent"
                    label="Agent"
                  />
                  <Form.Radio
                    radio
                    name="userType"
                    checked={userType === "client"}
                    onClick={onChangeSignUp}
                    value="client"
                    label="Client"
                  />
                  <Form.Radio
                    radio
                    name="userType"
                    checked={userType === "admin"}
                    onClick={onChangeSignUp}
                    value="admin"
                    label="Admin"
                  />
                </Form.Group>
                <Form.Button content="Sign up" onClick={signUp} />
                <Form.Button
                  content="Sign in"
                  onClick={() =>
                    updateFormState(() => ({
                      ...formState,
                      formType: "signIn",
                    }))
                  }
                />
              </Card>
            )}
            {formType === "confirmSignUp" && (
              <Card centered fitted>
                <Form.Input
                  name="authCode"
                  type="password"
                  onChange={onChangeSignUp}
                  placeholder="confirmation code"
                />
                <Form.Button
                  content="confirm sign up"
                  onClick={confirmSignUp}
                />
              </Card>
            )}
            {formType === "signIn" && (
              <Card centered fitted>
                {/* <Form.Input
                  name="name"
                  onChange={onChangeSignUp}
                  placeholder="name"
                /> */}
                <Form.Input
                  name="email"
                  onChange={onChangeSignUp}
                  placeholder="email"
                />
                <Form.Input
                  name="password"
                  type="password"
                  onChange={onChangeSignUp}
                  placeholder="password"
                />
                <Form.Button content="Sign in" onClick={signIn} />
              </Card>
            )}
          </Form>
          {/* <Authenticator>
            {({ signOut, user }) => {
              console.log("user:", user);
              console.log("signOut:", signOut);
              return (
                <div>
                <p>Hey {user.username}, welcome to my channel, with auth!</p>
                <button onClick={signOut}>Sign out</button>
                </div>
                );
              }}
            </Authenticator> */}
          {/* <Login setUser={setUser} /> */}
        </Route>
        {/* ------------------------------------------------------------------
        -                                 LAYOUT                        -
      ------------------------------------------------------------------    */}
        <Route
          render={() =>
            formType === "signedIn" ? (
              <>
                {/* <h1>Welcome on board, Ninja....</h1> */}
                <Button content="sign OUT" onClick={() => Auth.signOut()} />
                {/* <div>{user.attributes.name}</div> */}
                <div
                  style={
                    //this will need to change
                    window.location.origin !== "http://localhost:3000"
                      ? { height: "100vh" }
                      : { height: "100%" }
                  }
                >
                  <Header handleSidebarItem={handleSidebarItem} user={user} />
                  {/* <AmplifySignOut /> */}
                  <div>
                    <SidebarComponent sidebarItem={sidebarItem} />
                  </div>
                </div>
              </>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        {/* <Route
          render={() =>
            
            token ? (
              <div
                style={
                  //this will need to change
                  window.location.origin !== "http://localhost:3000"
                    ? { height: "100vh" }
                    : { height: "100%" }
                }
              >
                <Header handleSidebarItem={handleSidebarItem} />
                <div>
                  <SidebarComponent sidebarItem={sidebarItem} />
                </div>
              </div>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        ) */}
      </GlobalProvider>
    </Router>
  );
}

export default Layout;
