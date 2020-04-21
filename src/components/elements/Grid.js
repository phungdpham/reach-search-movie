import React from "react";
import PropTypes from "prop-types";

import { StyledGridContent, StyledGrid } from "../styles/StyledGrid";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

Grid.prototype = {
  header: PropTypes.string,
}

export default Grid;
