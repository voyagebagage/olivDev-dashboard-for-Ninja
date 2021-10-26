import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "../component/AddIcon";
import { PaginationShortCentered } from "../component/Pagination";
import SidebarForm from "../component/SidebarForm";
// import ClientDetails from "./views/ClientDetails";
// import { fetchClients } from "../fetch/FetchClients";
//------------------------graphQl----------------------
import { API, graphqlOperation } from "aws-amplify";
import { listClients, searchClients } from "../graphql/queries";
import {
  useClient,
  useVisible,
  useFetch,
  useDropDownFilter,
} from "../context/Provider";
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
import PrevNextButtons from "../component/PrevNextButtons/index.js";
//------------------------context & custom hooks----------------------

/* -----------------------------------------------------------
-                      Main FUNCTION                      -
------------------------------------------------------------- */
function Client() {
  let history = useHistory();
  const sort = {
    field: "companyName",
    direction: "asc",
    // ASC: "asc",
    // DESC: "desc",
  };
  //------------------------context & custom hooks----------------------
  const {
    clientDetails,
    setClientDetails,
    clients,
    setClients,
    filteredResults,
  } = useClient();
  //xxxxxxxxxxxxxxxxxxxx
  const { setVisible } = useVisible();
  //xxxxxxxxxxxxxxxxxxxx
  const {
    isLoading,
    setIsLoading,
    // limit,
    // setLimit,
  } = useFetch();
  //xxxxxxxxxxxxxxxxxxxx
  const {
    fieldDropDown,
    setFieldDropDown,
    directionDropDown,
    setDirectionDropDown,
  } = useDropDownFilter();
  //------------------------States------------------------------
  const [totalClients, setTotalClients] = useState(0);
  const [targetPage, setTargetPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [from, setFrom] = useState(0);
  const [maxPages, setMaxPages] = useState(0);

  const variables = {
    //filter
    from: from,
    limit: limit,
    sort: { direction: directionDropDown, field: fieldDropDown },
  };
  //-------------------
  const fetchClients = async () => {
    try {
      setIsLoading(true);
      // setLimit(10);
      const clientData = await API.graphql(
        graphqlOperation(searchClients, variables)
        // listClients, variables)
      );
      //----------------------setStates-----------
      setClients(clientData.data.searchClients.items);
      //----onKeyPress === "Enter"---------------
      if (filteredResults.length) {
        setTotalClients(filteredResults.length);
        setMaxPages(Math.ceil(filteredResults.length / limit));
      }
      //----Default fetch------------------------
      if (!filteredResults.length) {
        setTotalClients(clientData.data.searchClients.total);
        setMaxPages(Math.ceil(clientData.data.searchClients.total / limit));
      }

      console.log("=========USEEFFECT==========");
      console.log(clients, "CLIENT USEEFFECT");
      setFrom(limit * (targetPage - 1));
      setIsLoading(false);
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchClients();
  }, [
    from,
    targetPage,
    fieldDropDown,
    directionDropDown,
    filteredResults,
    maxPages,
  ]);
  //#################################################
  //           RENDER
  //################################################
  return !isLoading ? (
    <>
      <Sidebar.Pushable as={List}>
        <Segment basic className="dFlex-sBetween">
          <Header as="h2">Clients</Header>
          <AddIcon setVisible={setVisible} />
        </Segment>

        <Table striped>
          {/* ---------------------TABLE HEADER-------------------- */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>COMPANY</Table.HeaderCell>
              <Table.HeaderCell>NAME</Table.HeaderCell>
              <Table.HeaderCell>E-mail</Table.HeaderCell>
              <Table.HeaderCell>WEBSITE</Table.HeaderCell>
              <Table.HeaderCell>LOCATION</Table.HeaderCell>
              <Table.HeaderCell>ON CAMPAIGN</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* ---------------------TABLE BODY------------------------ */}
          <Table.Body>
            {clients.map((client, idx) => (
              <Table.Row
                key={client.id}
                onClick={() => {
                  setClientDetails(client);
                  console.log(clientDetails, "client D");
                }}
                style={{ cursor: "pointer" }}
              >
                {/* {console.log(client)} */}
                <Table.Cell
                  onClick={() => history.push(`/client/${client.firstName}`)}
                >
                  {client.companyName}
                </Table.Cell>
                <Table.Cell
                  collapsing
                  onClick={() => history.push(`/client/${client.firstName}`)}
                >
                  {client.firstName} {client.lastName}
                </Table.Cell>
                <Table.Cell
                  onClick={() => history.push(`/client/${client.firstName}`)}
                >
                  {client.email}
                </Table.Cell>
                <Table.Cell>
                  <a href={client.website} className="clientListLink">
                    {client.website}
                  </a>
                </Table.Cell>
                <Table.Cell
                  onClick={() => history.push(`/client/${client.firstName}`)}
                >
                  {client.country}
                </Table.Cell>
                <Table.Cell
                  onClick={() => history.push(`/client/${client.firstName}`)}
                >
                  {client.campaigns.items?.map((campaign) => (
                    <p key={campaign.id}>
                      {campaign.endDate.split("-").reverse().join("-")}
                    </p>
                  ))}
                  {/* <Radio toggle={client.status?true:false} /> */}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <PaginationShortCentered
          maxPages={maxPages}
          setFrom={setFrom}
          from={from}
          limit={limit}
          targetPage={targetPage}
          setTargetPage={setTargetPage}
        />
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
