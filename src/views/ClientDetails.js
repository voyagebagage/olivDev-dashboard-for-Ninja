import { Card } from "semantic-ui-react";

function ClientDetails() {
  return (
    <Card
      as="p"
      centered
      image="/images/avatar/large/elliot.jpg"
      header="Elliot Baker"
      meta="Friend"
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
      // extra={extra}
    />
  );
}

export default ClientDetails;
