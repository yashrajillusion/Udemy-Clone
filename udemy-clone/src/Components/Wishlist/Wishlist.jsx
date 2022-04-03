import React from "react";
import "./wishlist.css";
import { Header } from "../Header/Header";
import { ProdCard } from "../ProdCard/ProdCard";
import "../ProdCard/prod.css";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

const Wishlist = () => {
  return (
    <div>
      <div className="wishlistDiv">
        <div class="tab">
          <h1>My learning</h1>
          <div className="tabs_header">
            <button class="tablinks" onclick="openCity(event, 'allcources')">
              All cources
            </button>
            <button class="tablinks" onclick="openCity(event, 'mylists')">
              My Lists
            </button>
            <button class="tablinks" onclick="openCity(event, 'wishlist')">
              Wishlist
            </button>
            <button class="tablinks" onclick="openCity(event, 'archived')">
              Archieved
            </button>
            <button class="tablinks" onclick="openCity(event, 'learningtools')">
              Learning tools
            </button>
          </div>
        </div>

        <div id="allcources" class="tabcontent">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="mylists" class="tabcontent"></div>

        <div id="wishlist" class="tabcontent"></div>

        <div id="archived" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>

        <div id="learningtools" class="tabcontent">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search my cources"
          variant="outlined"
        />
      </Box>

      <Wishcard />
    </div>
  );
};

export default Wishlist;

const Wishcard = () => {
  return (
    <div style={{ marginTop: "1.5rem" }} className="tec-cont">
      <div>
        <div className="prod-cont">
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </div>
      </div>
    </div>
  );
};
