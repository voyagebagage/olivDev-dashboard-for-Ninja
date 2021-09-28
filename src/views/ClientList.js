import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
} from "semantic-ui-react";

function Client() {
  //---------------------States------------------------------
  const [visible, setVisible] = useState(false);
  //---------------------Function------------------------------
  const handleMoreButton = () => setVisible(true);
  const handleClickClient = () => history.push("/client");
  let history = useHistory();

  return (
    <>
      <Sidebar.Pushable as={List}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Icon
            size="big"
            name="add circle"
            color="green"
            onClick={handleMoreButton}
          />
        </div>

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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
          />
        </div>
        <div style={{ height: "100vh" }}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="right"
            vertical
            visible={visible}
            onHide={() => setVisible(false)}
            style={{ width: "30vw" }}
          >
            <Segment style={{ padding: "7%" }} basic>
              <Form>
                <Form.Group inline>
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
                <Form.Input
                  type="text"
                  label="Email"
                  placeholder="Email"
                  // value={email}

                  // onChange={}
                />
                <Form.Input
                  type="text"
                  label="Company"
                  placeholder="Company"
                  // value={company}
                  // onChange={}
                />
                <Form.Input
                  type="text"
                  label="Website"
                  placeholder="Website"
                  // value={website}

                  // onChange={}
                />
                <Form.Input
                  type="text"
                  label="Location"
                  placeholder="Location"
                  // value={location}

                  // onChange={}
                />
                <Form.Input
                  type="text"
                  label="Notes"
                  placeholder="Notes"
                  // value={notes}

                  // onChange={}
                />

                <Button type="submit" primary fluid>
                  Add Client
                </Button>
              </Form>
            </Segment>
          </Sidebar>
        </div>
      </Sidebar.Pushable>
    </>
  );
}

export default Client;
