import "semantic-ui-css/semantic.min.css";
import "./Layout.css";
//---------------------REACT------------------------------
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Login from "./views/Login";
import SidebarComponent from "./component/Sidebar";
import Header from "./component/Header";
import LoginCustom from "./views/LoginCustom";
//---------------------AWS------------------------------
import { Auth, Hub } from "aws-amplify";

//---------------------Context------------------------------
import { GlobalProvider } from "./context/Provider";
//---------------------Plugin------------------------------
import Cookies from "js-cookie";
import useForm from "./Forms/useForm";

//---------------------Assets------------------------------

function Layout() {
  const { onChangeSignUp, formState, user, updateFormState, updateUser } =
    useForm();
  //---------------------States------------------------------
  const [sidebarItem, setSidebarItem] = useState(false);
  const { formType, userType } = formState;
  const [token, setToken] = useState(Cookies.get("token") || null);
  // const [username, setUsername] = useState(Cookies.get("username") || "");
  //-------------------Functions---------------------------
  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);
  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          console.log("data from event:", data);
          updateFormState(() => ({ ...formState, formType: "signIn" }));
          break;
        default:
          break;
      }
    });
  }
  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log("checkUSER", user);
      updateUser(await user);
      console.log("checkUSER FORM STATE:", formState.formType);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
      //   history.push("/");
    } catch (error) {
      updateUser(null);
      // console.log("checkUser", error);
    }
  }
  const handleSidebarItem = () => setSidebarItem(!sidebarItem);
  console.log("formtype LaYOUT:", formState.formType);

  return (
    <Router>
      <GlobalProvider>
        <Route path="/login">
          {formType !== "signedIn" && (
            <LoginCustom
              formState={formState}
              updateFormState={updateFormState}
              onChangeSignUp={onChangeSignUp}
              user={user}
              updateUser={updateUser}
            />
          )}
        </Route>
        {/* ------------------------------------------------------------------
        -                                 LAYOUT                        -
      ------------------------------------------------------------------    */}
        <Route
          path="/"
          render={() =>
            formType === "signedIn" ? (
              <>
                <div
                  style={
                    //this will need to change
                    window.location.origin !== "http://localhost:3000"
                      ? { height: "100vh" }
                      : { height: "100%" }
                  }
                >
                  <Header handleSidebarItem={handleSidebarItem} user={user} />
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
      </GlobalProvider>
    </Router>
  );
}

export default Layout;
