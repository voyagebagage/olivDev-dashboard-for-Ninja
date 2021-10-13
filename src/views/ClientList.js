import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "../component/AddIcon";
import { PaginationShortCentered } from "../component/Pagination";
import SidebarForm from "../component/SidebarForm";
// import ClientDetails from "./views/ClientDetails";

//------------------------graphQl----------------------
import { API, graphqlOperation } from "aws-amplify";
import { listClients } from "../graphql/queries";

import {
  List,
  Segment,
  Sidebar,
  Table,
  Header,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
// import useForm from "../Forms/useForm";
import NewClientForm from "../Forms/NewClientForm";

//------------------------context & custom hooks----------------------
import { useClient } from "../context/Provider";
import { useVisible } from "../context/Provider";

/* ------------------------------------------------------------------
-                               Main function                       -
------------------------------------------------------------------ */
function Client() {
  let history = useHistory();
  //------------------------context & custom hooks----------------------
  const { clientDetails, setClientDetails } = useClient();
  const { visible, setVisible } = useVisible();
  //---------------------States------------------------------
  // const [activeCampaign, setActiveCampaign] = useState(false);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //---------------------Functions------------------------------
  const fetchClients = async () => {
    try {
      const clientData = await API.graphql(graphqlOperation(listClients));
      setClients(clientData.data.listClients.items);
      console.log(clientData.data.listClients.items, "client");
      setIsLoading(false);
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchClients();
  }, []);

  return !isLoading ? (
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
              <Table.HeaderCell>NAME</Table.HeaderCell>
              <Table.HeaderCell collapsing>E-mail</Table.HeaderCell>
              <Table.HeaderCell collapsing>COMPANY</Table.HeaderCell>
              <Table.HeaderCell collapsing>WEBSITE</Table.HeaderCell>
              <Table.HeaderCell collapsing>LOCATION</Table.HeaderCell>
              <Table.HeaderCell collapsing>ON CAMPAIGN</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* ---------------------TABLE BODY---------------------------- */}
          {clients.map((client, idx) => (
            <Table.Body>
              <Table.Row
                onClick={() => {
                  setClientDetails(client);
                  console.log(clientDetails, "client D");
                  history.push(`/client/${client.firstName}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {/* {console.log(client)} */}
                <Table.Cell>
                  {client.firstName} {client.lastName}
                </Table.Cell>
                <Table.Cell>{client.email}</Table.Cell>
                <Table.Cell>{client.companyName}</Table.Cell>
                <Table.Cell>
                  <a href={client.website}>{client.website}</a>
                </Table.Cell>
                <Table.Cell>{client.country}</Table.Cell>
                <Table.Cell>
                  {client.campaigns.items?.map((campaign) => (
                    <p key={campaign.id}>
                      {campaign.endDate.split("-").reverse().join("-")}
                    </p>
                  ))}
                  {/* <Radio toggle={client.status?true:false} /> */}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
        <PaginationShortCentered />
        {/* ------------------------------------------------------------------
        -                                 SIDEBAR                        -
        ------------------------------------------------------------------ */}
        <SidebarForm>
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
          <NewClientForm
            // updateList={fetchClients}
            setVisible={setVisible}
            clients={clients}
            setClients={setClients}
          />
        </SidebarForm>
      </Sidebar.Pushable>
    </>
  ) : (
    <Segment>
      <Dimmer active inverted>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
      <Image
        size="massive"
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
      <Image
        size="massive"
        src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
      />
    </Segment>
  );
}

export default Client;
