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
  Button,
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
  // const limit = 8;
  let contains = "capital";
  let filter = {
    or: [
      { lastName: { contains: contains } },
      { firstName: { contains: contains } },
      { companyName: { contains: contains } },
    ],
  };
  //------------------------context & custom hooks----------------------
  const { clientDetails, setClientDetails } = useClient();
  const { setVisible } = useVisible();
  const {
    nextToken,
    // setNextNextToken,
    isLoading,
    setIsLoading,
    // nextNextToken,
    // previousTokens,
  } = useFetch();
  const {
    fieldDropDown,
    setFieldDropDown,
    directionDropDown,
    setDirectionDropDown,
  } = useDropDownFilter();
  //---------------------States------------------------------
  // const [activeCampaign, setActiveCampaign] = useState(false);
  const [clients, setClients] = useState([]);
  const [totalClients, setTotalClients] = useState(0);
  const [targetPage, setTargetPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [from, setFrom] = useState(0);

  // const [activePage, setPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  // const [nextToken, setNextToken] = useState(undefined);
  // const [nextNextToken, setNextNextToken] = useState();
  // const [sortDirection, setSortDirection] = useState(SORT.ASC);
  // const [isLoading, setIsLoading] = useState(true);
  // const hasNext = !!nextNextToken;
  // const hasPrev = previousTokens.length;
  // const disabledNext = !hasNext || isLoading;
  // const disabledPrev = !hasPrev || isLoading;
  console.log(fieldDropDown, "fieldDropDown");
  const variables = {
    // filter,
    from: from,
    limit: limit,
    sort: { direction: directionDropDown, field: fieldDropDown },
  };
  //-------------------
  const fetchClients = async () => {
    try {
      setIsLoading(true);
      const clientData = await API.graphql(
        graphqlOperation(searchClients, variables)
        // listClients, variables)
      );
      setClients(clientData.data.searchClients.items);
      setTotalClients(clientData.data.searchClients.total);
      setMaxPages(Math.ceil(clientData.data.searchClients.total / limit));
      // setNextNextToken(clientData.data.searchClients.nextToken);
      // const maxPages = Math.ceil(totalClients / limit);
      console.log("=========USEEFFECT==========");
      console.log(clients);
      setFrom(limit * (targetPage - 1));
      setIsLoading(false);
    } catch (error) {
      console.log("error with get clients :", error);
    }
  };
  useEffect(() => {
    fetchClients();
  }, [from, targetPage, fieldDropDown, directionDropDown]);
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
        {/* <PrevNextButtons
          nextNextToken={nextNextToken}
          previousTokens={previousTokens}
          isLoading={isLoading}
        /> */}
        {/* <Button content="Previous" disabled={disabledPrev} onClick={prev} />
        <Button
          content="Next"
          disabled={disabledNext}
          style={{ minWidth: "8%" }}
          onClick={next}
        /> */}
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
