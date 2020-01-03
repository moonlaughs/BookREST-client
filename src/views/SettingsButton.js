import React from "react";

import EditProfile from "views/EditProfile.js";

import { 
    Button,
    Modal 
} from "reactstrap";

export default function PaymentButton() {

  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);

  return (
    <>
      <Button
        className="btn-round"
        color="default"
        outline
        onClick={() => setScrollingLongContent(true)}
      >
        <i className="fa fa-cog" />
        Settings
      </Button>

      <Modal className="edit-profile"
        isOpen={scrollingLongContent}
        toggle={() => setScrollingLongContent(false)}
        style={{ width: "350px"}}
        
      >
        <div className="modal-header">
          <h3 className="modal-title" 
          id="exampleModalLongTitle">
            Edit profile
          </h3>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setScrollingLongContent(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <EditProfile/>
      </Modal>
    </>
  );
}
