import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CreateUniversalSymbol from "../components/CreateUniversalSymbol";
import ImportUniversalSymbol from "../components/ImportUniversalSymbol";
import UniversalSymbolTable from "../components/UniversalSymbolTable";

function Hub() {
  return (
    <Tabs
      defaultActiveKey="Universal Symbols"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Universal Symbols" title="Universal Symbols">
        <UniversalSymbolTable />
      </Tab>
      <Tab eventKey="profile" title="Create A Universal Symbol">
        <CreateUniversalSymbol />
      </Tab>
      <Tab eventKey="contact" title="Import and Create Universal Symbol">
        <ImportUniversalSymbol />
      </Tab>
    </Tabs>
  );
}

export default Hub;
