import React, { useState } from "react";
import { useHistory, Link, Route } from "react-router-dom";
import { countries, toggleActive } from "../arrayLists/countries";
import AddIcon from "../component/AddIcon";
import { PaginationShortCentered } from "../component/Pagination";
import SidebarForm from "../component/SidebarForm";
// import ClientDetails from "./views/ClientDetails";
import {
  Button,
  Image,
  List,
  Segment,
  Sidebar,
  Form,
  Menu,
  Icon,
  Table,
  Pagination,
  Radio,
  Dropdown,
  Message,
  Header,
} from "semantic-ui-react";

function Client() {
  //---------------------States------------------------------
  const [visible, setVisible] = useState(false);
  const [activeCampaign, setActiveCampaign] = useState(false);
  //---------------------Function------------------------------
  // const handleMoreButton = () => setVisible(true);
  const handleClickClient = () => {
    // <Route path="/client" component={ClientDetails} />;
    history.push("/client");
  };
  let history = useHistory();

  return (
    <>
      <Sidebar.Pushable as={List}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Clients</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>

        <Table striped>
          {/* ---------------------TABLE HEADER---------------------------- */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>ID</Table.HeaderCell>
              <Table.HeaderCell collapsing>NAME</Table.HeaderCell>
              <Table.HeaderCell collapsing>E-mail</Table.HeaderCell>
              <Table.HeaderCell collapsing>COMPANY</Table.HeaderCell>
              <Table.HeaderCell collapsing>WEBSITE</Table.HeaderCell>
              <Table.HeaderCell collapsing>LOCATION</Table.HeaderCell>
              <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* ---------------------TABLE BODY---------------------------- */}
            <Table.Row
              onClick={handleClickClient}
              style={{ cursor: "pointer" }}
            >
              <Table.Cell>0123</Table.Cell>
              <Table.Cell>Sameer</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Nintendo</Table.Cell>
              <Table.Cell>www.nintendo.in</Table.Cell>
              <Table.Cell>India</Table.Cell>
              <Table.Cell>
                <Radio toggle />
              </Table.Cell>
            </Table.Row>
            <Table.Row onClick={handleClickClient}>
              <Table.Cell>01234</Table.Cell>
              <Table.Cell>Sonia</Table.Cell>
              <Table.Cell>jhlfgfdilk22@yahoo.com</Table.Cell>
              <Table.Cell>Arturia</Table.Cell>
              <Table.Cell>www.Arturia.fr</Table.Cell>
              <Table.Cell>France</Table.Cell>
              <Table.Cell>
                <Radio toggle />
              </Table.Cell>
            </Table.Row>
            <Table.Row onClick={handleClickClient}>
              <Table.Cell>01235</Table.Cell>
              <Table.Cell>Sameer</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Nintendo</Table.Cell>
              <Table.Cell>www.nintendo.in</Table.Cell>
              <Table.Cell>India</Table.Cell>
              <Table.Cell>
                <Radio toggle />
              </Table.Cell>
            </Table.Row>
            <Table.Row onClick={handleClickClient}>
              <Table.Cell>01236</Table.Cell>
              <Table.Cell>Sameer</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>Nintendo</Table.Cell>
              <Table.Cell>www.nintendo.in</Table.Cell>
              <Table.Cell>India</Table.Cell>
              <Table.Cell>
                <Radio toggle />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <PaginationShortCentered />
        {/* ------------------------------------------------------------------
        -                                 SIDEBAR                        -
        ------------------------------------------------------------------ */}
        <SidebarForm setVisible={setVisible} visible={visible}>
          <Segment
            as="h3"
            padded
            fluid
            size="huge"
            style={{
              borderRightWidth: 0,
              borderRadius: 0,
            }}
          >
            New Client
          </Segment>
          {/* ------------------------------------------------------------------
        -                                 FORM                        -
      ------------------------------------------------------------------ */}
          <Segment style={{ padding: "9%" }} padded basic>
            <Form widths="equal">
              <Form.Group>
                <Form.Input
                  type="text"
                  label="First Name"
                  placeholder="Matthew"
                  // value={name}
                />

                <Form.Input
                  type="text"
                  label="Last Name"
                  placeholder="Dunn"
                  // value={name}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  type="text"
                  label="Email"
                  // placeholder="Email"
                  // value={email}
                  // onChange={}
                />
                <Form.Input
                  type="text"
                  label="Phone"
                  // placeholder="Email"
                  // value={email}
                  // onChange={}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  type="text"
                  label="Company Name"
                  // placeholder="Company"
                  // value={company}
                  // onChange={}
                />

                <Form.Dropdown
                  clearable
                  search
                  selection
                  options={countries}
                  label="Select Country"
                />
              </Form.Group>
              <Form.Input
                type="text"
                label="Website"
                // placeholder="Website"
                // value={website}

                // onChange={}
              />

              {/* <Form.Input
                  type="text"
                  label="Location"
                  placeholder="Location"
                  // value={location}

                  // onChange={}
                /> */}
              <Form.Group>
                <Form.Select
                  label="Status"
                  options={toggleActive}
                  // value={notes}
                />
                OR
                <Form.Radio
                  toggle
                  onClick={() => setActiveCampaign(!activeCampaign)}
                  label={activeCampaign ? "on campaign" : "no campaign"}
                  // style={!activeCampaign ? { label: "grey" } : null}
                />
              </Form.Group>

              <Form.Button type="submit" primary fluid>
                Add Client
              </Form.Button>
            </Form>
          </Segment>
          {/* <div
            style={{
              height: "100%",
              // width: "100%",
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: 0,
              backgroundColor: "blue",
            }}
          >
            <Message
              attached="bottom"
              warning
              style={{ backgroundColor: "red", justifySelf: "flex-end" }}
            >
              <Icon name="help" />
              Already signed up?&nbsp;<a href="#">Login here</a>&nbsp;instead.
            </Message>
          </div> */}
        </SidebarForm>
      </Sidebar.Pushable>
    </>
  );
}

export default Client;
