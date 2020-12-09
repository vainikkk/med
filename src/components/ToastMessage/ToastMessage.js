import React from 'react';
import { Toast } from 'react-bootstrap';

function ToastMessage({ show, delay, closeToast, message }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'absolute',
        zIndex: "99999",
        top: "25px",
        right: "50px",
        minHeight: '100px',
      }}
    >
      <Toast
        onClose={closeToast} show={show} delay={delay} autohide
        style={{
          position: 'absolute',
          top: 0,
          width: '400px',
          right: 0,
          borderRadius: "20px"
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto text-danger">Error!</strong>
        </Toast.Header>
        <Toast.Body style={{ fontWeight: 600, fontSize: "18px" }}>{message}</Toast.Body>
      </Toast>
    </div>
  );
}

export default ToastMessage;