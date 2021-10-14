import { Segment, Form, Message } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { countries } from "../arrayLists/index";

import { API, graphqlOperation } from "aws-amplify";
import { createClient } from "../graphql/mutations";
import { onCreateClient } from "../graphql/subscriptions";

import useForm from "../Forms/useForm";
//------------------------Main Component----------------------

const NewClientForm = ({ setVisible, clients, setClients }) => {
  const { onChange, form, setForm, clientFormValid } = useForm();
  //---------------------States------------------------------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState("");

  //----to update whenever someone-call-createClient-instead of the --------------useEffect array--------------------
  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateClient)
    ).subscribe({
      next: (eventData) => {
        const newClient = eventData.value.data.onCreateClient;
        setClients([...clients, newClient]);
      },
    });
    return () => subscription.unsubscribe();
  }, []);
  //---------------------Functions------------------------------

  const createNewClient = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      console.log(form, "form in create client");
      const newClient = await API.graphql(
        graphqlOperation(createClient, { input: form })
      );
      setIsSubmitting(false);
      setErrors("");
      setForm({});
      console.log(form, "after setform");
      setVisible(false);
      console.log("succes");
    } catch (error) {
      console.log("error creating a client", error);
      setErrors(error.errors[0].message);
      setIsSubmitting(false);
    }
  };
  return (
    <Segment style={{ padding: "9%" }} padded basic>
      <Form widths="equal" onSubmit={(e) => createNewClient(e)}>
        <Form.Group>
          <Form.Input
            type="text"
            label="First Name"
            placeholder="ex: Matthew"
            name="firstName"
            value={form.firstName || ""}
            onChange={onChange}
          />

          <Form.Input
            type="text"
            label="Last Name"
            placeholder="ex: Dunn"
            name="lastName"
            value={form.lastName || ""}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="text"
            label="Email"
            name="email"
            value={form.email || ""}
            onChange={onChange}
          />
          <Form.Input
            type="text"
            label="Phone"
            placeholder="ex: +666..."
            name="phone"
            value={form.phone || ""}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="text"
            label="Company Name"
            name="companyName"
            value={form.companyName || ""}
            onChange={onChange}
          />

          <Form.Dropdown
            clearable
            search
            selection
            options={countries}
            label="Select Country"
            name="country"
            value={form.country || ""}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Input
          type="text"
          label="Website"
          name="website"
          value={form.website || ""}
          onChange={onChange}
        />
        {/* <Form.Group>
          <Form.Select
            label="Status"
            options={toggleActive}
            name="status"
            value={form.status || ""}
            onChange={onChange}
          />
        </Form.Group> */}

        <Form.Button
          disabled={clientFormValid}
          loading={isSubmitting}
          type="submit"
          primary
          fluid
        >
          Add Client
        </Form.Button>
      </Form>
      {
        // isSubmitting &&
        errors ? (
          <Message error>
            <Message.Header>Error</Message.Header>
            <p>{errors}</p>
          </Message>
        ) : //  (
        //   <Message success>
        //     {/* <Message.Header>Succefully added</Message.Header> */}
        //     {/* <p>{errors}</p> */}Succefully added
        //   </Message>
        // )
        // ) :
        null
      }
    </Segment>
  );
};

export default NewClientForm;
