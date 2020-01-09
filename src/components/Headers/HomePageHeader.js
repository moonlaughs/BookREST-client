import React from "react";


function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/cover5.jpg") + ")",
          marginTop: "100px",
          minHeight: "400px"
        }}
      >
      </div>
    </>
  );
}

export default IndexHeader;