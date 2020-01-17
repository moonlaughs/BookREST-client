import React from "react";
import QuotesHeader from "components/Navbars/QuotesHeader";

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/croppedPhoto.jpg") + ")",
          marginTop: "100px",
          minHeight: "400px"
        }}
      > <QuotesHeader/>
      </div>
    </>
  );
}

export default IndexHeader;