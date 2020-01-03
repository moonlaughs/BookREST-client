import React from "react";
import DeleteAccount from 'views/DeleteAccount.js'
// reactstrap components
import { Button, Modal } from "reactstrap";

function ChangePasswordButton() {
  const [tooltipsAndPopovers, setTooltipsAndPopovers] = React.useState(false);

  return(
    <>
      <Button
        color="danger"
        type="button"
        block
        onClick={() => setTooltipsAndPopovers(true)}
      >
        Delete account
      </Button>
      <Modal
        isOpen={tooltipsAndPopovers}
        toggle={() => setTooltipsAndPopovers(false)}
        style={{ width: "350px"}}
      >
        <div className="modal-header">
          <h6 className="modal-title" id="exampleModalPopoversLabel">
            Confirm to delete your account
          </h6>
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
        <DeleteAccount/>
      </Modal>
    </>
  );
}

export default ChangePasswordButton;