import React from "react";
import ChangePassword from 'views/ChangePassword.js'
// reactstrap components
import { Button, Modal } from "reactstrap";

function ChangePasswordButton() {
  const [tooltipsAndPopovers, setTooltipsAndPopovers] = React.useState(false);

  
  return(
    <>
      <Button
        color="primary"
        type="button"
        block
        onClick={() => setTooltipsAndPopovers(true)}
      >
        Change password
      </Button>
      <Modal
        isOpen={tooltipsAndPopovers}
        toggle={() => setTooltipsAndPopovers(false)}
        style={{ width: "350px"}}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Change password
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setTooltipsAndPopovers(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
<ChangePassword/>
      </Modal>
    </>
  );
}

export default ChangePasswordButton;