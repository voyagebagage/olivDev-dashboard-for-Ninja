import { Header, Image, Table, Icon } from "semantic-ui-react";

function Dashboard() {
  const TableExampleCollapsing = () => (
    <Table basic="very" celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Employee</Table.HeaderCell>
          <Table.HeaderCell>KPI</Table.HeaderCell>
          <Table.HeaderCell>CONTACTS - REPLY.IO</Table.HeaderCell>
          <Table.HeaderCell>MEETINGS BOOKED</Table.HeaderCell>
          <Table.HeaderCell>INTERESTED</Table.HeaderCell>
          <Table.HeaderCell>OPEN RATE%</Table.HeaderCell>
          <Table.HeaderCell>ALL TASKS</Table.HeaderCell>
          <Table.HeaderCell>POINTS</Table.HeaderCell>
          <Table.HeaderCell>+/-</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image src="/images/avatar/small/lena.png" rounded size="mini" />
              <Header.Content>
                Lena
                <Header.Subheader>Human Resources</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>510</Table.Cell>
          <Table.Cell>
            <Icon name="level up alternate" color="green" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                src="/images/avatar/small/matthew.png"
                rounded
                size="mini"
              />
              <Header.Content>
                Matthew
                <Header.Subheader>Fabric Design</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>15</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>22</Table.Cell>
          <Table.Cell>470</Table.Cell>
          <Table.Cell>
            <Icon name="level down alternate" color="red" />
          </Table.Cell>{" "}
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                src="/images/avatar/small/lindsay.png"
                rounded
                size="mini"
              />
              <Header.Content>
                Lindsay
                <Header.Subheader>Entertainment</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>12</Table.Cell>
          <Table.Cell>300</Table.Cell>
          <Table.Cell>
            <Icon name="level up alternate" color="green" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image src="/images/avatar/small/mark.png" rounded size="mini" />
              <Header.Content>
                Mark
                <Header.Subheader>Executive</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>11</Table.Cell>
          <Table.Cell>230</Table.Cell>
          <Table.Cell>
            <Icon name="level down alternate" color="red" />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
  return (
    <>
      <h1>DASHBOARD</h1>
      <TableExampleCollapsing />
    </>
  );
}

export default Dashboard;
