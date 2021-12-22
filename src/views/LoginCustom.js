import React, { useEffect } from "react";
import { Auth, Hub } from "aws-amplify";
import { Form, Segment, Image } from "semantic-ui-react";
// import useForm from "../Forms/useForm";
import loginPic from "../img/loginPic.png";
import logoDash from "../img/logoDash.svg";
// import { useHistory } from "react-router-dom";

const LoginCustom = ({
  formState,
  updateFormState,
  onChangeSignUp,
  updateUser,
  user,
}) => {
  //   const { updateUser, user } = useForm();
  const { formType, userType } = formState;
  //   let history = useHistory();

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
      console.log("Auth", Auth);
      updateFormState(() => ({ ...formState, formType: "signedIn" }));
    } catch (error) {
      console.log("signIn error", error);
    }
  }

  console.log("formtype LOG C:", formState.formType);
  console.log("user: Login C", user);
  console.log("Auth: LogC", Auth.user?.username);
  return (
    <>
      <div
        className="dFlex-aCenter"
        style={{
          height: "100vh",
          gap: "18%",
          backgroundColor: "#F0F4F5",
        }}
      >
        <Image src={loginPic} style={{ height: "100%" }} />
        <div>
          <Image src={logoDash} size="medium" />
          <Form>
            {formType === "signUp" && (
              <Segment centered fitted padded basic>
                <Form.Input
                  name="name"
                  type="text"
                  onChange={onChangeSignUp}
                  label="Name"
                />
                <Form.Input
                  name="password"
                  type="password"
                  onChange={onChangeSignUp}
                  label="Password"
                />
                <Form.Input
                  name="email"
                  type="email"
                  onChange={onChangeSignUp}
                  label="Email"
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
                    disabled
                    radio
                    name="userType"
                    checked={userType === "admin"}
                    onClick={onChangeSignUp}
                    value="admin"
                    label="Admin"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Button content="Sign up" primary onClick={signUp} />
                  <Form.Button
                    secondary
                    content="Sign in"
                    onClick={() =>
                      updateFormState(() => ({
                        ...formState,
                        formType: "signIn",
                      }))
                    }
                  />
                </Form.Group>
              </Segment>
            )}
            {formType === "confirmSignUp" && (
              <Segment centered fitted padded basic>
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
              </Segment>
            )}
            {formType === "signIn" && (
              <Segment centered fitted padded basic>
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
                <Form.Group>
                  <Form.Button content="Log in" primary onClick={signIn} />
                  <Form.Button
                    content="Sign Up"
                    secondary
                    onClick={signIn}
                    onClick={() =>
                      updateFormState(() => ({
                        ...formState,
                        formType: "signUp",
                      }))
                    }
                  />
                </Form.Group>
              </Segment>
            )}
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginCustom;
