import { useEffect, useState } from "react";
import axios from "axios";
import { Icon, Dropdown, Statistic, Header, Segment } from "semantic-ui-react";
const TimeComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeZone, setTimeZone] = useState("Asia/Bangkok");
  useEffect(() => fetchTime(), [timeZone]);
  const fetchTime = async () => {
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${timeZone}`
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  let date = new Date(data.datetime).toString().split(" ");
  // console.log("data", date[0] + date[2]);
  return !isLoading ? (
    <div className="dFlex">
      <Header
        as={Segment}
        className="dFlex-aCenter"
        style={{
          color: "#566A63",
          backgroundColor: "#8CABA0",
          paddingBottom: 0,
          paddingTop: 0,
        }}
      >{`${date[0]} ${date[2]}`}</Header>
      <Statistic size="small">
        <Statistic.Value style={{ color: "#8CABA0" }}>
          {data.datetime.split("T")[1].slice(0, 8)}
        </Statistic.Value>
        <Statistic.Label style={{ color: "#566A63" }}>
          {data.timezone}
        </Statistic.Label>
      </Statistic>
      <Dropdown
        text={<Icon name="adjust" size="large" style={{ color: "#566A63" }} />}
      >
        <Dropdown.Menu>
          <Dropdown.Item
            icon="adjust"
            content="L.A."
            onClick={() => setTimeZone("America/Los_Angeles")}
          />
          <Dropdown.Item
            icon="adjust"
            content="U.S"
            onClick={() => setTimeZone("America/New_York")}
          />
          <Dropdown.Item
            button
            icon="moon outline"
            content=" Greenwich "
            onClick={() => setTimeZone("Etc/Greenwich")}
          />
          <Dropdown.Divider />
          <Dropdown.Item
            button
            icon="moon outline"
            content=" Stockholm "
            onClick={() => setTimeZone("Europe/Stockholm")}
          />
          <Dropdown.Divider />
          <Dropdown.Item
            button
            icon={<Icon name="moon outline" flipped="horizontally" />}
            content=" Moscow "
            onClick={() => setTimeZone("Europe/Moscow")}
          />
          <Dropdown.Item
            button
            icon={<Icon name="circle outline" flipped="horizontally" />}
            content=" Thailand "
            onClick={() => setTimeZone("Asia/Bangkok")}
          />
          <Dropdown.Item
            button
            icon={<Icon name="adjust" flipped="horizontally" />}
            content=" Sydney "
            onClick={() => setTimeZone("Australia/Sydney")}
          />
          {/* <Dropdown.Divider /> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default TimeComponent;
