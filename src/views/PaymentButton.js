import React from "react";

import { Button, Modal } from "reactstrap";
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
            <Modal isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}>
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLongTitle">Checkout</h3>
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
                <PaymentPage />
            </Modal>
        </>
    );
}