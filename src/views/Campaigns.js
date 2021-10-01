import {
  Table,
  Header,
  Segment,
  Sidebar,
  List,
  Menu,
  Form,
  Container,
  Icon,
  Label,
} from "semantic-ui-react";
import SidebarForm from "../component/SidebarForm";
import AddIcon from "../component/AddIcon";
import React, { useState } from "react";

function Campaigns() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Sidebar.Pushable as={List}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Campaigns</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>CLIENT</Table.HeaderCell>
              <Table.HeaderCell collapsing>CAMPAIGN</Table.HeaderCell>
              <Table.HeaderCell collapsing>AGENT</Table.HeaderCell>
              <Table.HeaderCell collapsing>START</Table.HeaderCell>
              <Table.HeaderCell collapsing>END</Table.HeaderCell>
              {/* <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell> */}
            </Table.Row>
          </Table.Header>
        </Table>
        <SidebarForm setVisible={setVisible} visible={visible}>
          <Segment
            as="h3"
            padded
            size="huge"
            style={{
              borderRightWidth: 0,
              borderRadius: 0,
            }}
          >
            Setting up a new Campaign
          </Segment>
          <Segment
            style={{
              paddingRight: "7%",
              paddingLeft: "7%",
              paddingTop: "3%",
            }}
            // padded
            basic
          >
            <Form
              widths="equal"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Segment basic>
                  <Header>Campaign Information</Header>
                </Segment>

                <Form.Group>
                  <Form.Input
                    type="text"
                    label="Campaign Name"
                    // value={name}
                  />

                  <Form.Input
                    type="text"
                    label="Campaign Type"
                    // value={name}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Dropdown
                    search
                    selection
                    // options={countries}
                    label="Client Name"
                    placeholder="Select Client"
                    // value={email}
                    // onChange={}
                  />
                  <Form.Dropdown
                    search
                    selection
                    // options={countries}
                    label="Assign Agent"
                    placeholder="Select Agent"
                    // value={email}
                    // onChange={}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Group>
                    <Form.Input
                      type="text"
                      label="Start date"
                      // placeholder="Company"
                      // value={company}
                      // onChange={}
                    />
                    <Form.Input
                      type="text"
                      label="End date"
                      // placeholder="Website"
                      // value={website}
                      // onChange={}
                    />
                  </Form.Group>
                  <Form.Input
                    type="text"
                    label="Campaign Length"
                    // placeholder="Website"
                    // value={website}
                    // onChange={}
                  />
                </Form.Group>
                <Form.TextArea label="Notes" />
                <Form.Button
                  type="submit"
                  primary
                  style={{ justifyContent: "flex-end" }}
                >
                  Add Campaign
                </Form.Button>
                {/* <Form.Input
                  type="text"
                  label="Location"
                  placeholder="Location"
                  // value={location}
                  
                  // onChange={}
                /> */}
                {/* </Form> */}
              </div>
              <div
              // style={{
              //   display: "flex",
              // }}
              >
                {/* <Form> */}
                <Segment basic as={Header}>
                  KPI Configuration
                </Segment>

                <Segment
                  basic
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    // alignItems: "flex-start",
                    // backgroundColor: "grey",
                  }}
                >
                  <div>
                    <h4>KPI's</h4>
                  </div>
                  <div>
                    <h4>Assign Targets</h4>
                  </div>
                </Segment>
                <Form.Group>
                  <Form.Checkbox label="Meeting" />
                  <Form.Input />
                  <Icon size="big" name="remove circle" inverted />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox label="Demo" />
                  <Form.Input />
                  <Icon size="big" name="remove circle" inverted />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox label="Interested" />
                  <Form.Input />
                  <Icon size="big" name="remove circle" inverted />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox label="LinkedIn outreach" />
                  <Form.Input />
                  <Icon size="big" name="remove circle" inverted />
                </Form.Group>
                <Form.Group>
                  <Form.Checkbox label="Sales" />
                  <Form.Input />
                  <Icon size="big" name="remove circle" inverted />
                </Form.Group>
                <Icon
                  size="big"
                  name="add circle"
                  inverted
                  onClick={() => setVisible(true)}
                />
                <Label>Add a new KPI's</Label>
              </div>
            </Form>
          </Segment>
        </SidebarForm>
      </Sidebar.Pushable>
    </>
  );
}

export default Campaigns;
