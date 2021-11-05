import API, { graphqlOperation } from "@aws-amplify/api";
import { Link, useHistory, useParams } from "react-router-dom";
// import { panes } from "../arrayLists/index";
import { getCampaign } from "../graphql/queries";
import {
  Card,
  Button,
  Segment,
  Header,
  Form,
  Table,
  Confirm,
  Grid,
  Radio,
  Tab,
  Icon,
} from "semantic-ui-react";
import { useState, useEffect } from "react";

function CampaignDetails() {
  const { name, id } = useParams();
  const [campaignDetails, setCampaignDetails] = useState({});
  const [edit, setEdit] = useState(false);
  console.log({ name, id }, "params");
  //--
  const fetchCampaign = async () => {
    try {
      const campaignData = await API.graphql(
        graphqlOperation(getCampaign, { id: id })
      );
      setCampaignDetails(campaignData.data.getCampaign);
      console.log(campaignData.data.getCampaign, "campaignData");
      console.log("succes campaignData");
    } catch (error) {
      console.log("there is an error with getCampaign", error);
    }
  };
  useEffect(() => fetchCampaign(), []);

  const {
    length,
    startDate,
    endDate,
    updatedAt,
    createdAt,
    notes,
    client,
    agent,
    status,
  } = campaignDetails;
  //   console.log(client.firstName);
  const timeStampSplit = (timeStamp) => {
    let separate = timeStamp.slice(0, 19).split("T");
    console.log(separate, "separate=========");
    let date = separate[0].split("-").reverse().join("-");
    let time = separate[1];
    console.log(date, time);
    return `on the ${date} at ${time}`;
  };
  const panes = [
    {
      menuItem: "Info",
      render: () => (
        <Tab.Pane attached={false} basic>
          <div
            className="dFlex-fEnd"
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
                      <Table.HeaderCell className="dFlex-sBetween">
                        Current info
                        {/* <div className="dFlex-fEnd"> */}
                        {!edit && (
                          <Icon
                            name="ellipsis horizontal"
                            size="large"
                            onClick={() => setEdit(!edit)}
                          />
                        )}
                        {/* </div> */}
                      </Table.HeaderCell>
                      {edit && (
                        <Table.HeaderCell
                        //   className="dFlex-sBetween"
                        //   style={{ width: "30vw" }}
                        >
                          Update to...
                        </Table.HeaderCell>
                      )}
                    </Table.Row>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {name}
                              <Header.Subheader>Campaign name</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Cell>
                            {/* <Form.Input
                    type="text"
                    placeholder="ex: Matthew"
                    name="firstName"
                    value={form.firstName || ""}
                    onChange={onChange}
                  /> */}
                          </Table.Cell>
                        )}
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {length} months
                              <Header.Subheader>Length</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Cell>
                            {/* <Form.Input
                    type="text"
                    placeholder="ex: Dunn"
                    name="lastName"
                    value={form.lastName || ""}
                    onChange={onChange}
                  /> */}
                          </Table.Cell>
                        )}
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {startDate}
                              <Header.Subheader>Start</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Cell>
                            {/* <Form.Input
                    type="text"
                    placeholder="ex: +666..."
                    name="phone"
                    value={form.phone || ""}
                    onChange={onChange}
                  /> */}
                          </Table.Cell>
                        )}
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {endDate}
                              <Header.Subheader>End</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Cell>
                            {/* <Form.Input
                    type="text"
                    name="email"
                    value={form.email || ""}
                    onChange={onChange}
                  /> */}
                          </Table.Cell>
                        )}
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {createdAt ? timeStampSplit(createdAt) : null}
                              <Header.Subheader>Created at...</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Cell>
                            {/* <Form.Input
                    type="text"
                    name="companyName"
                    value={form.companyName || ""}
                    onChange={onChange}
                  /> */}
                          </Table.Cell>
                        )}
                      </Table.Row>
                      {createdAt !== updatedAt ? (
                        //   timeStampSplit(createdAt) !== timeStampSplit(updatedAt)
                        <Table.Row>
                          <Table.Cell>
                            <Header as="h4" image>
                              <Header.Content>
                                {updatedAt ? timeStampSplit(updatedAt) : null}
                                <Header.Subheader>
                                  Updated at...
                                </Header.Subheader>
                              </Header.Content>
                            </Header>
                          </Table.Cell>
                          {edit && (
                            <Table.Cell>
                              {/* <Form.Input
                    type="text"
                    name="website"
                    value={form.website || ""}
                    onChange={onChange}
                    placeholder="https://"
                  /> */}
                            </Table.Cell>
                          )}
                        </Table.Row>
                      ) : null}

                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4" image>
                            <Header.Content>
                              {notes}
                              <Header.Subheader>Notes</Header.Subheader>
                            </Header.Content>
                          </Header>
                        </Table.Cell>
                        {edit && (
                          <Table.Row>
                            <Table.Cell>
                              {/* <Form.Dropdown
                    clearable
                    search
                    selection
                    options={countries}
                    name="country"
                    value={form.country || ""}
                    onChange={onChange}
                  /> */}
                            </Table.Cell>
                          </Table.Row>
                        )}
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  {edit && (
                    <div className="dFlex">
                      {/* // <Form.Group widths="equal" fluid attached="bottom"> */}
                      <Button
                        fluid
                        content="Delete"
                        inverted
                        color="red"
                        className="dFlex-1"
                        style={{ marginRight: 0, marginLeft: 0 }}
                        // onClick={show}
                      />
                      {/* //    <Confirm
              //     open={areYouSure}
              //     content="Are you sure you want to delete the client ?"
              //     onCancel={handleCancel}
              //     onConfirm={handleConfirm}
              //   />  */}
                      <Button
                        fluid
                        content="Save"
                        style={{
                          backgroundColor: "#566A63",
                          marginRight: 0,
                          marginLeft: 0,
                        }}
                        className="dFlex-1"
                        // loading={isSubmitting}
                        // onClick={editClient}
                        onClick={() => setEdit(!edit)}
                        // style={{ backgroundColor: "#566A63" }}
                      />
                      {/* // </Form.Group> */}
                    </div>
                  )}
                </Form>
              </Segment>
            </div>
          </div>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Reports",
      render: () => <Tab.Pane attached={false}>Reports</Tab.Pane>,
    },
    // {
    //   menuItem: "Tab 3",
    //   render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    // },
  ];
  return (
    <>
      <Link to="/agent" style={{ color: "#566A63" }}>
        <Icon name="arrow left" size="large" />
        BACK
      </Link>

      <Header as="h2" textAlign="center" dividing>
        {name}
      </Header>
      <Segment basic as={Header} className="dFlex-sAround" centered>
        <div className="dFlex">{`${client?.firstName}  ${client?.lastName}`}</div>
        <div className="dFlex">
          status :
          <Icon
            as={Icon}
            name="circle thin"
            color={status === true ? "green" : "grey"}
          />
        </div>
        <div className="dFlex" as="h3">
          {agent?.name}
        </div>
      </Segment>

      <Tab
        menu={{ fluid: true, vertical: true, tabular: "right" }}
        panes={panes}
      />
    </>
  );
}

export default CampaignDetails;
