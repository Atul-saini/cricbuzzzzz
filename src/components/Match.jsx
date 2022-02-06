import React from "react";
import { Link } from "react-router-dom";
function Match() {
  return (
    <div>
      <br />
      <br />
      <h1> Match List </h1>
      <br />
      <br />
      <ul rows="3" className="nav navbar-nav navbar-right">
        <li>
          <Link to="/TeamA">
            <br />
            <h2>CDK VS HSK</h2>
            <br /> Oval, Barbados
            <br />
            HSK won by 9 wickets
          </Link>
          <br />
        </li>
        <li>
          <Link to="/TeamA">
            <br />
            <h2>ADK VS FKG</h2>
            <br /> Trinidad, West Indies
            <br />
            ADK won by 10 runs
          </Link>
          <br />
        </li>
        <li>
          <Link to="/TeamA">
            <br />
            <h2>RCB VS KKR</h2>
            <br /> Eden Garden,Kolkata
            <br />
            RCB won by 4 wickets
          </Link>
          <br />
        </li>
        <li>
          <Link to="/TeamA">
            <br />
            <h2>CSK VS DC</h2>
            <br /> Wankhade, Mumbai
            <br />
            MI won by 48 Runs
          </Link>
          <br />
        </li>
      </ul>
    </div>
  );
}

export default Match;
