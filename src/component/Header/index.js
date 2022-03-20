import React, { useState } from "react";
import { Button, Modal } from "antd";
import ReactJson from "react-json-view";

import * as SC from "./style";
import { store } from "../../mobx";
import SideBar from "../SideBar";

function Header() {
  const [schemaDialog, setSchemaDialog] = useState(false);

  const setSchema = () => {
    localStorage.setItem("schema", JSON.stringify(store.schema));
  };
  return (
    <SC.Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "60px",
          marginLeft: "1vw",
        }}
      >
        <SideBar />
        <span>W-kitchen</span>
      </div>
      <div>
        <Button
          href="/showPage"
          target="blank"
          onClick={setSchema}
        >
          预览
        </Button>
        <Button type="primary" onClick={() => setSchemaDialog(true)}>
          Schema
        </Button>
        <Button>退出</Button>
        <Modal
          title="Schema"
          visible={schemaDialog}
          onCancel={() => setSchemaDialog(false)}
          footer={null}
        >
          <ReactJson
            src={store.schema}
            displayDataTypes={false}
            displayObjectSize={false}
            enableClipboard={false}
          />
        </Modal>
      </div>
    </SC.Header>
  );
}

export default Header;
