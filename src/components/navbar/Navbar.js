import {
  faWallet,
  faPaintBrush,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <div className="navigation-button logo"></div>
        <div className="navigation-button">
          <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className="navigation-button">
          <FontAwesomeIcon icon={faNetworkWired} />
        </div>
        <div className="navigation-button">
          <FontAwesomeIcon icon={faPaintBrush} />
        </div>
      </div>
    </div>
  );
}
