import { Icon } from "semantic-ui-react";
import React, { useState } from "react";

const AddIcon = ({ setVisible }) => (
  <Icon
    size="big"
    name="add circle"
    onClick={() => setVisible(true)}
    style={{ color: "#8CABA0" }}
  />
);

export default AddIcon;
