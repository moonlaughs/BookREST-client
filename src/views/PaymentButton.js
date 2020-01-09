import React from "react";

import { Button, Modal, Label } from "reactstrap";
import PaymentPage from "./PaymentPage";

export default function PaymentButton() {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
    return (
        <>
            <Button
                color="primary"
                type="button"
                size="lg"
                onClick={() => setScrollingLongContent(true)}
            >
                CheckOut
      </Button>
            <Modal isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)} style={{width: "370px", height: "400px"}}>
                <div className="modal-header" >
                    <Label className="modal-title" id="exampleModalLongTitle" style={{fontSize: "30px", marginLeft: "5px"}}>Checkout</Label>
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
                <PaymentPage style={{marginRight: "0px"}} />
            </Modal>
        </>
    );
}