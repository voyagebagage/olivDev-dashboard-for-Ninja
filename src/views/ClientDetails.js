import {
  Card,
  Button,
  Segment,
  Header,
  Dropdown,
  Icon,
  TextArea,
  Form,
  Table,
  List,
  Confirm,
  Sidebar,
} from "semantic-ui-react";
import { countries } from "../arrayLists/index";
import { useClient, useVisible } from "../context/Provider";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import useForm from "../Forms/useForm";

//------------------------graphQl----------------------
import { API, graphqlOperation } from "aws-amplify";
import { updateClient, deleteClient } from "../graphql/mutations";
import SidebarForm from "../component/SidebarForm";
import CampaignForm from "../Forms/CampaignForm";

function ClientDetails() {
  const { clientDetails, setClientDetails } = useClient();
  const { onChange, form, setForm } = useForm();
  const { setVisible } = useVisible();
  let history = useHistory();
  // let location= useLocation();
  //---------------------States---------------------------------
  const [textArea, setTextArea] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);
  // const [upClient, setUpClient] = useState({});
  const {
    firstName,
    lastName,
    companyName,
    email,
    phone,
    website,
    country,
    notes,
    campaigns,
  } = clientDetails;

  //---------------------Functions------------------------------
  const show = () => setAreYouSure(true);
  const handleConfirm = () => {
    setIsSubmitting(true);
    removeClient();
    setAreYouSure(false);
  };
  const handleCancel = () => setAreYouSure(false);
  //-----------------------
  const editNotes = async () => {
    try {
      //--cannot have fields that aren't in the schema
      //-- it doesnt let us keep campaigns
      //----so we remove and add it after update
      let campaigns = clientDetails.campaigns;
      clientDetails.notes = text;
      delete clientDetails.createdAt;
      delete clientDetails.updatedAt;
      delete clientDetails.campaigns;
      //-----update
      const clientUpdate = await API.graphql(
        graphqlOperation(updateClient, { input: clientDetails })
      );
      clientDetails.campaigns = campaigns;
      console.log(clientUpdate, "clientUpdate");
      console.log("succes");
      setTextArea(false);
    } catch (error) {
      console.log("error adding notes to a client", error);
    }
  };
  //------------------------===========Del============---------------------
  const removeClient = async () => {
    try {
      const inputDel = { id: clientDetails.id };
      const clientDelete = await API.graphql(
        graphqlOperation(deleteClient, {
          input: inputDel,
        })
      );
      console.log(clientDelete, "clientDelete");
      console.log("succes");
      history.push("/client-list");
    } catch (error) {
      console.log("error erasing a client", error);
    }
  };
  //------------------------===========Up============---------------------
  const editClient = async () => {
    try {
      setIsSubmitting(true);
      let campaigns = clientDetails.campaigns;
      //-I really should use a reducer!--------
      clientDetails.firstName = form.firstName;
      clientDetails.lastName = form.lastName;
      clientDetails.phone = form.phone;
      clientDetails.website = form.website;
      clientDetails.email = form.email;
      clientDetails.companyName = form.companyName;
      clientDetails.country = form.country;
      //---removing fields
      delete clientDetails.createdAt;
      delete clientDetails.updatedAt;
      delete clientDetails.campaigns;

      //-----update
      const clientUpdate = await API.graphql(
        graphqlOperation(updateClient, { input: clientDetails })
      );
      setClientDetails(clientUpdate.data.updateClient);
      clientDetails.campaigns = campaigns;
      setForm({});
      setIsSubmitting(false);
      console.log(clientDetails, "clientDetails AFTER UP");
      console.log(clientUpdate.data.updateClient, "response");
      console.log("succes");
      setEdit(false);
    } catch (error) {
      console.log("error updating a client", error);
    }
  };

  return (
    <>
      <Sidebar.Pushable as={List}>
        <Segment basic>
          <Link
            to={!edit ? "/client-list" : `/client/${firstName}`}
            onClick={edit ? () => setEdit(false) : null}
            style={{ color: "#566A63" }}
          >
            <Icon name="arrow left" size="large" />
            BACK
          </Link>
          {!edit ? (
            <>
              <Card as="p" centered style={{ width: "25vw" }}>
                <Segment padded basic style={{ height: "35vh" }}>
                  <div className="dFlex-sBetween-aCenter">
                    <div className="dFlex">
                      <Card.Header as="h2">
                        {firstName} {lastName}
                      </Card.Header>
                    </div>
                    <div className="dFlex">
                      <Icon
                        name="edit outline"
                        size="large"
                        onClick={() => setEdit(true)}
                      />
                    </div>
                  </div>

                  <Card.Meta as="h4">
                    work for {companyName} in {country}
                  </Card.Meta>
                  <h4>Notes :</h4>
                  <Card.Description>
                    {notes}
                    {!notes && !textArea
                      ? "be the first to drop some notes"
                      : null}
                    {textArea ? (
                      <TextArea
                        style={{ width: "22vw" }}
                        placeholder="I noticed..."
                        onChange={(e) => setText(e.target.value)}
                      />
                    ) : null}
                  </Card.Description>
                  <Header as="h4">
                    {!campaigns.items
                      ? "Previous Campaigns"
                      : "No Campaigns yet"}
                  </Header>
                  {!campaigns.items ? (
                    <>
                      <Card.Group>
                        {/* <div className="center">
                  <div className="center"> */}
                        <Dropdown
                          search
                          icon="search"
                          selection
                          options={campaigns.items.map((campaign) => {
                            return {
                              key: campaign.id,
                              text: campaign.name,
                              value: campaign.id,
                            };
                          })}
                          placeholder="Find a Campaign"
                        />
                        {/* </div>
                  <div className="center"> */}
                        <Button
                          content="Go"
                          attached="right"
                          // className="dFlex"
                        />
                        {/* </div> */}
                        {/* </div> */}
                      </Card.Group>

                      <Card.Group>
                        <Header as="h4">
                          condition on Current campaign
                          {/* {!campaigns.items ? "Current Campaigns :" : "No Campaigns"} */}
                        </Header>
                        <List items={["current campaign"]} />
                      </Card.Group>
                    </>
                  ) : (
                    <Header.Subheader>Be the first to add one</Header.Subheader>
                  )}
                </Segment>
                {/* <Card.Content>coucouc</Card.Content> */}
                {textArea ? (
                  <>
                    <Button basic primary fluid onClick={() => editNotes()}>
                      <strong>Save</strong>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button.Group fluid>
                      <Button basic primary onClick={() => setTextArea(true)}>
                        {!notes === "" ? "EDIT NOTES" : "ADD NOTES"}
                      </Button>
                      <Button primary onClick={() => setVisible(true)}>
                        ADD CAMPAIGN
                      </Button>
                    </Button.Group>
                  </>
                )}
              </Card>
              <SidebarForm>
                <CampaignForm />
              </SidebarForm>
            </>
          ) : (
            <div
              className="dFlex-center"
              // style={{ backgroundColor: "purple" }}
            >
              <div className="dFlex" style={{ width: "30vw" }}>
                <Segment
                  as={Card}
                  centered
                  basic
                  fluid
                  size="large"
                  className="dFlex-sBetween"
                  // style={{ paddingLeft: 0 }}
                >
                  <Form>
                    <Table
                      padded
                      // size="large"
                      inverted
                      celled
                      fluid
                      style={{
                        backgroundColor: "#8CABA0",
                        marginBottom: 0,
                      }}
                    >
                      <Table.Row>
                        <Table.HeaderCell>Current info</Table.HeaderCell>
                        <Table.HeaderCell>Update to...</Table.HeaderCell>
                      </Table.Row>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {firstName}
                                <Header.Subheader>First name</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              placeholder="ex: Matthew"
                              name="firstName"
                              value={form.firstName || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {lastName}
                                <Header.Subheader>Last name</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              placeholder="ex: Dunn"
                              name="lastName"
                              value={form.lastName || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {phone}
                                <Header.Subheader>Phone</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              placeholder="ex: +666..."
                              name="phone"
                              value={form.phone || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {email}
                                <Header.Subheader>email</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              name="email"
                              value={form.email || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {companyName}
                                <Header.Subheader>Company</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              name="companyName"
                              value={form.companyName || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {website}
                                <Header.Subheader>Website</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Input
                              type="text"
                              name="website"
                              value={form.website || ""}
                              onChange={onChange}
                              placeholder="https://"
                            />
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {country}
                                <Header.Subheader>Location</Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          <Table.Cell>
                            <Form.Dropdown
                              clearable
                              search
                              selection
                              options={countries}
                              name="country"
                              value={form.country || ""}
                              onChange={onChange}
                            />
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Form>
                  <div style={{ maxWidth: "40vw", width: "38vw" }}>
                    <Button.Group
                      attached="bottom"
                      // inverted
                      // fluid
                      // size="medium"
                      // style={{ width: "30vw" }}
                    >
                      {/* <div> */}
                      <Button
                        content="Delete"
                        inverted
                        color="red"
                        // fluid
                        onClick={show}
                      />
                      <Confirm
                        open={areYouSure}
                        content="Are you sure you want to delete the client ?"
                        onCancel={handleCancel}
                        onConfirm={handleConfirm}
                      />
                      {/* </div> */}
                      <Button
                        content="Save"
                        // inverted
                        // fluid
                        loading={isSubmitting}
                        onClick={editClient}
                        style={{ backgroundColor: "#566A63" }}
                      />
                    </Button.Group>
                  </div>
                </Segment>
              </div>
            </div>
          )}
        </Segment>
      </Sidebar.Pushable>
    </>
  );
}

export default ClientDetails;
