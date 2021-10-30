import {
  Header,
  Segment,
  Form,
  Icon,
  Label,
  Divider,
  List,
  Grid,
  Button,
} from "semantic-ui-react";
import { useState, useEffect } from "react";
import { useVisible } from "../context/Provider";
import { API, graphqlOperation } from "aws-amplify";
import {
  createDailyReport,
  createKpi,
  createCampaign,
  updateCampaign,
  deleteKpi,
  updateAgent,
  updateClient,
} from "../graphql/mutations";
import {
  agentByName,
  clientByfirstName,
  agentByNameLight,
  listClients,
  searchClients,
} from "../graphql/queries";

import { getYYYYMMDD } from "../lib/function";
import { v4 as uuidv4 } from "uuid";
import useForm from "./useForm";

const CampaignForm = () => {
  const {
    onChange,
    form,
    setForm,
    addKpiButtonValid,
    isSubmitting,
    setIsSubmitting,
    errors,
    setErrors,
    campaignFormValid,
    campaignFormUpdateValid,
  } = useForm();
  const { setVisible } = useVisible();
  const [step2, setStep2] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [newKpi, setNewKpi] = useState(false);
  const [editKpi, setEditKpi] = useState(false);
  const [dailyReport, setDailyReport] = useState({});
  const [listKpi, setListKpi] = useState([]);
  const [agentName, setAgentName] = useState([]);
  const [clientName, setClientName] = useState([]);
  const [newCampaign, setNewCampaign] = useState({});
  const disabledStep2Button = !backButton
    ? campaignFormValid || step2
    : campaignFormUpdateValid;
  //-------------------Functions------------------------------

  //#########################################################
  //                     DROPDOWN
  //#########################################################
  const selectClient = async () => {
    // console.log(form.campaignClientId, "campaignClientId");
    try {
      const filteredClientNames = await API.graphql(
        graphqlOperation(clientByfirstName, {
          category: "client",
          //getting ID as value because it is the required key to create Campaign
          firstName: { beginsWith: form.campaignClientId },
          sortDirection: "ASC",
          // limit: 5000,
        })
      );
      setClientName(filteredClientNames.data.clientByfirstName.items);
      console.log(
        filteredClientNames.data.clientByfirstName.items,
        "filteredClientNames"
      );
    } catch (error) {
      console.log("Error with select ClientByFirstName", error);
    }
  };
  //----------------------------------------------------------
  const selectAgent = async (e) => {
    try {
      const filteredAgentNames = await API.graphql(
        graphqlOperation(agentByName, {
          category: "agent",
          name: { beginsWith: form.campaignAgentId },
          sortDirection: "ASC",
        })
      );

      setAgentName(filteredAgentNames.data.agentByName.items);

      console.log(
        filteredAgentNames.data.agentByName.items,
        "filteredAgentNames"
      );
    } catch (error) {
      console.log("Error with select AgentByName", error);
    }
  };
  //#########################################################
  //                     CAMPAIGN
  //#########################################################
  //-
  //-----------------===========Add============------------------
  const addCampaign = async () => {
    setStep2(true);
    setIsSubmitting(true);
    console.log(backButton, "backButton -OUT");

    if (!backButton) {
      console.log(backButton, "!backButton ");

      let idDailyReport = "";
      try {
        const newCampaignData = await API.graphql(
          graphqlOperation(createCampaign, {
            input: form,
          })
        );
        setIsSubmitting(false);
        setErrors("");
        setForm({});
        setNewCampaign(newCampaignData.data.createCampaign);
        idDailyReport = newCampaignData.data.createCampaign.id;
        console.log(newCampaignData.data.createCampaign, "newCampaignData");
        console.log(newCampaign, "newCampaign");
        console.log("succes createCampaign");
      } catch (error) {
        console.log("Error with create new Campaign", error);
        setErrors(error.errors[0].message);
        setIsSubmitting(false);
      }
      //------------createDailyReport---~~~~~~~~~~~~~-----------
      try {
        // setIsSubmitting(true);
        // console.log(newCampaignData.data.createCampaign.id, "campaign ID");
        const newDailyReport = await API.graphql(
          graphqlOperation(createDailyReport, {
            input: {
              dailyReportCampaignId: idDailyReport,
            },
          })
        );
        setDailyReport(newDailyReport.data.createDailyReport);
        console.log("success daily report");
        console.log(newDailyReport.data.createDailyReport, "newDailyReport");
      } catch (error) {
        console.log("error creating a DailyReport", error);
      }
    }
    //------~~~~~~~~~~~~~--if BACK BUTTON---~~~~~~~~~~~~~--------

    if (backButton) {
      console.log(backButton, "backButton");
      // setForm({ ...newCampaign });
      // console.log(form, " fom back button");
      //----------------------==========Update============------
      try {
        let dailyReports = form.dailyReports;
        //------removing fields
        delete form.agent;
        delete form.client;
        delete form.dailyReports;
        delete form.createdAt;
        delete form.updatedAt;
        const campaignUpdate = await API.graphql(
          graphqlOperation(updateCampaign, { input: form })
        );
        setNewCampaign(campaignUpdate.data.updateCampaign);
        newCampaign.dailyReports = dailyReports;
        setForm({});
        setIsSubmitting(false);
        console.log(campaignUpdate.data.updateCampaign, "campaignUpdate");
        console.log("succes update");
        setBackButton(false);
      } catch (error) {
        console.log("error updating a campaign", error);
      }
    }
  };
  //#########################################################
  //                     KPI
  //#########################################################
  //-
  //-----------------===========Add============---------------------
  const handleAddKpi = async () => {
    setNewKpi(true);
    try {
      // setIsSubmitting(true);
      form.kpiDailyReportId = dailyReport.id;
      form.kpiAgentId = dailyReport.campaign.agent.id;
      const newKpi = await API.graphql(
        graphqlOperation(createKpi, { input: form })
      );
      setNewKpi(newKpi.data.createKpi);
      console.log("success kpi");
      console.log(newKpi.data.createKpi, "newKpi");
      console.log(listKpi, "listKpi");
      const newKpiAdd = [...listKpi];
      // setForm({ ...form });
      console.log(newKpiAdd, "newKpiAddw");
      newKpiAdd.push(newKpi.data.createKpi);
      console.log(newKpiAdd, "newKpiAdd2**");
      const newArr = [...newKpiAdd];
      console.log(newArr, "newArr1");
      setListKpi(newArr);
      setForm({});
    } catch (error) {
      console.log("error creating a KPI", error);
    }
    //----------------------~~~~~~~~~~~~~----------------
  };
  //----------------===========Del============---------------------
  const handleDeleteKpi = async (oneKpi, idx) => {
    // setNewKpi(false);
    try {
      console.log(oneKpi, "oneKpi");
      console.log(listKpi[idx], "listKpi");
      const inputDel = { id: listKpi[idx].id };
      const kpiDelete = await API.graphql(
        graphqlOperation(deleteKpi, {
          input: inputDel,
        })
      );
      console.log(kpiDelete, "kpiDelete");
      console.log("succes");
      //removing
      const newKpiDelete = [...listKpi];
      newKpiDelete.splice(idx, 1); //spotting the elem to remove
      setListKpi(newKpiDelete); //updating
    } catch (error) {
      console.log("there is a Error with Deleting KPI", error);
    }
  };
  console.log(clientName, "clientName");
  console.log(listKpi, "listKpi--OUT");
  console.log(form, "FORM");
  //-
  return (
    <>
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
        basic
        // size="massive"

        style={{
          // backgroundColor: "pink",
          paddingRight: 0,
        }}
      >
        <Grid
          columns={2}
          // padded
          divided
          // stretched
          // relaxed="very"
        >
          <Grid.Column
            stretched
            // width={8}
            // style={{ backgroundColor: "yellow" }}
          >
            <Segment
              style={{
                paddingRight: "7%",
                paddingLeft: "7%",
                paddingTop: "3%",
                // backgroundColor: "green",
                // backgroundColor: "grey",
              }}
              disabled={step2 ? true : false}
              padded
              basic
            >
              <Segment
                basic
                disabled={step2 ? true : false}
                // style={{ backgroundColor: "olive" }}
              >
                <Header>Campaign Information</Header>
              </Segment>
              <Form
                // disabled={step2 ? true : false}
                onSubmit={addCampaign}
                // style={{ backgroundColor: "cyan" }}
              >
                <Grid
                  relaxed="very"
                  // padded
                >
                  {/* //################################
                  //################################ 
                  //######## COLUMN 1 FORM ######### 
                  //################################
                  //################################ */}
                  {/* ------------------------name-------------------------- */}
                  <Grid.Row columns={2}>
                    <Grid.Column stretched>
                      <Form.Input
                        type="text"
                        label="Campaign Name"
                        name="name"
                        placeholder="a name"
                        value={form.name || ""}
                        onChange={onChange}
                        disabled={step2}
                      />
                      {/* -----------------client name----------------------- */}
                      <Form.Dropdown
                        clearable
                        search
                        selection
                        compact
                        options={clientName.map((item) => {
                          return {
                            key: item.id,
                            value: item.id,
                            text: `${item.firstName}(${item.companyName})`,
                            // clientName: `${item.firstName} ${item.lastName}`,
                          };
                        })}
                        label="Client Name"
                        placeholder="Select Client"
                        name="campaignClientId"
                        value={form.campaignClientId || ""}
                        onChange={onChange}
                        onFocus={selectClient}
                        disabled={step2}
                      />
                      {/* ------------------startDate------------------------- */}
                      <Form.Input
                        fluid
                        type="date"
                        name="startDate"
                        label="Start date"
                        placeholder="15-09-2021"
                        value={form.startDate || ""}
                        onChange={onChange}
                        disabled={step2}
                      />
                    </Grid.Column>
                    {/* //########################
                  //################################ 
                  //######## COLUMN 2 FORM #########
                   //################################
                  //################################ */}
                    <Grid.Column stretched>
                      <Form.Group widths="equal" fluid>
                        {/* ------------Campaign-Type------------------------- */}
                        <Form.Input
                          fluid
                          type="text"
                          label="Campaign Type"
                          name="type"
                          value={form.type || ""}
                          onChange={onChange}
                          disabled={step2}
                        />
                        {/* ------------Campaign-Length------------------------ */}
                        <Form.Input
                          fluid
                          type="text"
                          label="Campaign Length"
                          name="length"
                          value={form.length || ""}
                          onChange={onChange}
                          disabled={step2}
                        />
                      </Form.Group>
                      {/* ---------------CampaignAgent------------------------- */}
                      <Form.Dropdown
                        clearable
                        search
                        selection
                        compact
                        options={agentName.map((item) => {
                          return {
                            key: item.id,
                            value: item.id,
                            text: item.name,
                          };
                        })}
                        label="Assign Agent"
                        placeholder="Select Agent"
                        onFocus={selectAgent}
                        name="campaignAgentId"
                        value={form.campaignAgentId || ""}
                        onChange={onChange}
                        disabled={step2}
                      />
                      {/* ---------------endDate------------------------- */}
                      <Form.Input
                        type="date"
                        label="End date"
                        placeholder="15-09-2021"
                        name="endDate"
                        value={form.endDate || ""}
                        onChange={onChange}
                        disabled={step2}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  {/* ---------------------------------------------- */}
                  <Grid.Row>
                    <Grid.Column stretched>
                      {/* -----------------notes--------------------------- */}
                      <Form.TextArea
                        label="Notes"
                        name="notes"
                        value={form.notes || ""}
                        onChange={onChange}
                        disabled={step2}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  {/* -----------------STEP2-BUTTON----------------------- */}
                  <Grid.Row>
                    <Grid.Column>
                      <div className="dFlex-fEnd">
                        <Form.Button
                          type="submit"
                          primary
                          disabled={disabledStep2Button}
                          loading={isSubmitting}
                        >
                          Step 2
                        </Form.Button>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  {/* ---------------------------------------------- */}
                </Grid>
              </Form>
            </Segment>
          </Grid.Column>

          {/* //####################################################
          //####################################################
          //####################################################
          //###################### STEP 2 ######################
          //####################################################
          //####################################################
          //#################################################### */}
          {/* <Divider vertical section>
            Then
          </Divider> */}
          <Grid.Column
            // width={8}
            stretched
            style={{ backgroundColor: "purple" }}
          >
            <Segment
              disabled={!step2 ? true : false}
              fluid
              style={{ backgroundColor: "red" }}
            >
              <Segment basic as={Header} style={{ backgroundColor: "crimson" }}>
                Daily Report Configuration
              </Segment>
              {/* ################################################################################ */}
              <Segment
                basic
                padded
                style={{
                  backgroundColor: "green",
                }}
              >
                <Form
                  // widths="equal"
                  style={{
                    backgroundColor: "cyan",
                    // height: "37vh",
                  }}
                  // size="wide"
                >
                  <Grid
                    relaxed="very"
                    // padded
                    columns={3}
                    // stretched
                    style={{
                      backgroundColor: "orange",
                      //  opacity: 0.7
                    }}
                  >
                    {/* ---------------------------------------------- */}
                    {/* //============ROW================= */}
                    <Grid.Row
                      columns={4}
                      // stretched
                      // centered
                    >
                      {/* <Grid.Row> */}
                      <Grid.Column>
                        <h4 className="kpi-header">KPI's</h4>
                      </Grid.Column>
                      <Grid.Column>
                        <h4 className="kpi-header">Coeff.</h4>
                      </Grid.Column>
                      <Grid.Column>
                        <h4 className="kpi-header">Assign Targets</h4>
                      </Grid.Column>
                    </Grid.Row>
                    {/* //=============ROW================ */}
                    {listKpi?.length
                      ? listKpi.map((oneKpi, idx) => (
                          <>
                            <Grid.Row
                              columns={4}
                              stretched
                              // centered
                              style={{
                                backgroundColor: "olive",
                              }}
                            >
                              <Grid.Column key={idx}>
                                <strong className="kpi-header">
                                  {oneKpi.name}
                                </strong>
                              </Grid.Column>
                              <Grid.Column>
                                <strong className="kpi-header">
                                  {oneKpi.coeff}
                                </strong>
                              </Grid.Column>
                              <Grid.Column>
                                <strong className="kpi-header">
                                  {oneKpi.target}
                                </strong>
                              </Grid.Column>
                              <Grid.Column width={1}>
                                <div className="centerSized">
                                  <Icon
                                    inverted
                                    name="remove circle"
                                    fitted
                                    link
                                    size="large"
                                    onClick={() => handleDeleteKpi(oneKpi, idx)}
                                  />
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </>
                        ))
                      : null}

                    {newKpi && step2 ? (
                      <>
                        {/* //=============ROW================ */}
                        <Grid.Row columns={4}>
                          <Grid.Column style={{ padding: "1%" }}>
                            <Form.Input
                              placeholder="a name"
                              name="name"
                              value={form.name || ""}
                              onChange={onChange}
                            />
                          </Grid.Column>
                          <Grid.Column
                            style={{
                              paddingTop: "1%",
                              paddingRight: "6%",
                              paddingLeft: "6%",
                            }}
                          >
                            <Form.Input
                              placeholder="ex:10"
                              name="coeff"
                              value={Number(form.coeff) || ""}
                              onChange={onChange}
                            />
                          </Grid.Column>
                          <Grid.Column
                            style={{
                              paddingTop: "1%",
                              paddingRight: "5%",
                              paddingLeft: "6%",
                            }}
                          >
                            <Form.Input
                              placeholder="1-100"
                              name="target"
                              value={Number(form.target) || ""}
                              onChange={onChange}
                              fluid
                            />
                          </Grid.Column>
                          <Grid.Column width={1}>
                            <div className="centerSized">
                              <Icon name="percent" fitted size="large" />
                            </div>
                          </Grid.Column>
                        </Grid.Row>
                      </>
                    ) : null}
                    <>
                      {/* //=============ROW================ */}
                      <Grid.Row stretched>
                        {!listKpi.length && !newKpi ? (
                          <>
                            <div className="center">
                              <Label labelPosition="left">Add a new KPI</Label>
                              <Icon
                                size="big"
                                name="add circle"
                                link
                                // labelPosition="left"
                                inverted
                                onClick={() => setNewKpi(true)}
                              />
                            </div>
                          </>
                        ) : newKpi ? (
                          <>
                            <div className="center">
                              <Form.Button
                                basic
                                icon
                                type="submit"
                                disabled={addKpiButtonValid}
                                style={{ borderWidth: 0 }}
                              >
                                <Icon
                                  // disabled={addKpiButtonValid}
                                  size="large"
                                  name="add circle"
                                  link
                                  style={{ borderWidth: 0 }}
                                  onClick={handleAddKpi}
                                />
                              </Form.Button>
                            </div>
                          </>
                        ) : null}
                      </Grid.Row>
                    </>
                    {/* //=============ROW================ */}
                    {step2 ? (
                      <Grid.Row
                        columns={2}
                        style={{ backgroundColor: "brown" }}
                      >
                        <Grid.Column style={{ backgroundColor: "purple" }}>
                          <Button
                            secondary
                            inverted
                            onClick={() => {
                              setStep2(false);
                              setBackButton(true);
                              setNewKpi(false);
                              form.campaignAgentId = newCampaign.agent.id;
                              form.campaignClientId = newCampaign.client.id;
                              setForm({ ...newCampaign, ...form });
                              setIsSubmitting(false);
                            }}
                            // style={{ justifyContent: "flex-end" }}
                          >
                            Back
                          </Button>
                        </Grid.Column>
                        <Grid.Column style={{ backgroundColor: "orange" }}>
                          <Form.Button
                            type="submit"
                            disabled={listKpi?.length > 0 ? null : true}
                            primary
                            style={{ justifyContent: "flex-end" }}
                            // onClick={() => setStep2(true)}
                            //setBackButton(false)
                          >
                            Submit
                          </Form.Button>
                        </Grid.Column>
                      </Grid.Row>
                    ) : null}
                    {/* ---------------------------------------------- */}
                  </Grid>
                </Form>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

export default CampaignForm;
