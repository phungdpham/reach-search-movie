import React from "react";
import { Link } from "@reach/router";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledTMDBLogo,
  StyledRMDBLogo,
} from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        {" "}
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
