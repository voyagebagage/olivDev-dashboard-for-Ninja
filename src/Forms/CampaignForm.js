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
import { useState } from "react";
import { useVisible } from "../context/Provider";
import { v4 as uuidv4 } from "uuid";

const CampaignForm = () => {
  const { setVisible } = useVisible();
  const [step2, setStep2] = useState(false);
  const [newKpi, setNewKpi] = useState(false);
  const initialState = {
    listKpi: [],
    valueName: "",
    valueCoeff: 0,
    valuePercent: 0,
    idClient: uuidv4(),
  };
  const [kpi, setKpi] = useState(initialState);
  const addKpiButtonValid =
    !kpi.valueCoeff?.length ||
    !kpi.valueName?.length ||
    !kpi.valuePercent?.length;
  console.log(kpi, "KPI");
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

        style={{ backgroundColor: "pink", paddingRight: 0 }}
      >
        <Grid
          columns={2}
          padded
          divided
          // stretched
          // relaxed="very"
        >
          <Grid.Column
            stretched
            // width={8}
            style={{ backgroundColor: "yellow" }}
          >
            <Segment
              style={{
                paddingRight: "7%",
                paddingLeft: "7%",
                paddingTop: "3%",
                backgroundColor: "green",
                // backgroundColor: "grey",
              }}
              disabled={step2 ? true : false}
              padded
              basic
            >
              <Segment basic style={{ backgroundColor: "olive" }}>
                <Header>Campaign Information</Header>
              </Segment>
              <Form widths="equal" style={{ backgroundColor: "cyan" }}>
                <Grid
                  relaxed="very"
                  // padded
                >
                  {/* //################################
                  //################################ 
                  //######## COLUMN 1
                  FORM######### 
                  //################################
                  //################################ */}
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      {/* <Form.Group> */}
                      <Form.Input
                        type="text"
                        label="Campaign Name"
                        // value={name}
                      />

                      {/* </Form.Group> */}
                      <Form.Dropdown
                        search
                        selection
                        // options={countries}
                        label="Client Name"
                        placeholder="Select Client"
                        // value={email}
                        // onChange={}
                      />
                      <Grid columns={2}>
                        <Grid.Column>
                          <Form.Input
                            type="text"
                            label="Start date"
                            // placeholder="Company"
                            // value={company}
                            // onChange={}
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <Form.Input
                            type="text"
                            label="End date"
                            // placeholder="Website"
                            // value={website}
                            // onChange={}
                          />
                        </Grid.Column>
                      </Grid>
                    </Grid.Column>
                    {/* //################################
                  //################################ 
                  //######## COLUMN 2
                  FORM#########
                   //################################
                  //################################ */}
                    <Grid.Column>
                      <Form.Input
                        type="text"
                        label="Campaign Type"
                        // value={name}
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
                      <Form.Input
                        type="text"
                        label="Campaign Length"
                        // placeholder="Website"
                        // value={website}
                        // onChange={}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  {/* ---------------------------------------------- */}
                  <Grid.Row>
                    <Grid.Column stretched>
                      <Form.TextArea label="Notes" />
                    </Grid.Column>
                  </Grid.Row>
                  {/* ---------------------------------------------- */}

                  <Grid.Row>
                    <Grid.Column>
                      <div className="dFlex-fEnd">
                        <Form.Button
                          type="submit"
                          primary
                          style={{ justifyContent: "flex-end" }}
                          onClick={() => setStep2(true)}
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
                  // paddingRight: "7%",
                  // paddingLeft: 0,
                  // marginLeft: 0,
                  // paddingTop: "3%",
                  // height: "100%",
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
                    <Grid.Row columns={3} stretched>
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
                    {kpi.listKpi?.length ? (
                      <Grid.Row>
                        {kpi.listKpi.map((oneKpi, idx) => (
                          <List
                            key={oneKpi.idClient}
                            style={{ backgroundColor: "beige" }}
                          ></List>
                        ))}
                      </Grid.Row>
                    ) : null}

                    {newKpi && step2 ? (
                      <>
                        {/* //=============ROW================ */}
                        <Grid.Row>
                          <Grid.Column>
                            <Form.Input
                              placeholder="a name"
                              value={kpi.valueName}
                              onChange={(e, { value }) =>
                                setKpi({ ...kpi, valueName: value })
                              }
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Form.Input
                              placeholder="a number"
                              value={kpi.valueCoeff}
                              onChange={(e, { value }) =>
                                setKpi({ ...kpi, valueCoeff: value })
                              }
                            />
                          </Grid.Column>
                          <Grid.Column>
                            <Grid columns={2}>
                              <Grid.Column>
                                <Form.Input
                                  placeholder="a Percentage"
                                  value={kpi.valuePercent}
                                  onChange={(e, { value }) =>
                                    setKpi({ ...kpi, valuePercent: value })
                                  }
                                />
                              </Grid.Column>
                              <Grid.Column>
                                <div className="centerSized">
                                  <Icon name="percent" fitted size="large" />
                                </div>
                              </Grid.Column>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>
                      </>
                    ) : null}
                    <>
                      {/* //=============ROW================ */}
                      <Grid.Row stretched>
                        {kpi.listKpi.length ? (
                          <>
                            <div className="center">
                              <Label attapched="bottom">Add a new KPI's</Label>
                              <Icon
                                size="big"
                                name="add circle"
                                link
                                inverted
                                onClick={() => setNewKpi(true)}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="center">
                              <Button
                                as="div"
                                labelPosition="left"
                                disabled={addKpiButtonValid}
                                compact
                              >
                                <Button icon>
                                  <Icon
                                    size="large"
                                    name="add circle"
                                    link
                                    // inverted
                                    onClick={() => setNewKpi(true)}
                                  />
                                </Button>
                                <Label as="div" basic pointing="left">
                                  Add a new KPI's
                                </Label>
                                {/* Add a new KPI's */}
                              </Button>
                              {/* <Label pointing="left">Add a new KPI's</Label> */}
                            </div>
                          </>
                        )}
                      </Grid.Row>
                    </>

                    {/* </Grid.Row> */}
                    {/* <Segment disabled={!step2} basic>
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
                    </Segment> */}
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
                              setNewKpi(false);
                            }}
                            // style={{ justifyContent: "flex-end" }}
                          >
                            Back
                          </Button>
                        </Grid.Column>
                        <Grid.Column style={{ backgroundColor: "orange" }}>
                          <Form.Button
                            type="submit"
                            disabled={kpi.listKpi?.length > 0 ? null : true}
                            primary
                            style={{ justifyContent: "flex-end" }}
                            // onClick={() => setStep2(true)}
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
