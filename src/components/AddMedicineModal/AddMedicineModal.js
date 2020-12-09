import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function AddMedicineModal({ show, handleShow, handleClose, addMedicine, editMedicine }) {
  const editData = useSelector(state => state.editData)
  const dispatch = useDispatch()
  const [medicineData, setMedicineData] = useState({
    name: "",
    type: "",
    quantity: 0,
    note: ""
  })

  useEffect(() => {
    if (editData) {
      setMedicineData(editData)
    }
  }, [editData])


  const closeModal = () => {
    handleClose();
    setMedicineData({
      name: "",
      type: "",
      quantity: 0,
      note: ""
    })
  }

  const handleEdit = () => {
    if (!medicineData.name || !medicineData.name.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter name"})
      return;
    }
    if (!medicineData.type || !medicineData.type.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter type"})
      return;
    }
    if (!medicineData.note || !medicineData.note.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter note"})
      return;
    }
    if (!medicineData.quantity) {
      dispatch({type: "SET_TOAST", payload: "Please Enter quantity"})
      return;
    }
    else {
      editMedicine(medicineData)
      setMedicineData({
        name: "",
        type: "",
        quantity: 0,
        note: ""
      })
    }
  }


  const handleAdd = () => {
    if (!medicineData.name || !medicineData.name.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter name"})
      return;
    }
    if (!medicineData.type || !medicineData.type.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter type"})
      return;
    }
    if (!medicineData.note || !medicineData.note.trim()) {
      dispatch({type: "SET_TOAST", payload: "Please Enter note"})
      return;
    }
    if (!medicineData.quantity) {
      dispatch({type: "SET_TOAST", payload: "Please Enter quantity"})
      return;
    }
    else {
      addMedicine(medicineData)
      setMedicineData({
        name: "",
        type: "",
        quantity: 0,
        note: ""
      })
    }
  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editData ? "Edit Medicine" : "Add Medicine"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={medicineData.name}
                onChange={v => setMedicineData({ ...medicineData, name: v.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type of medicine"
                name="type"
                value={medicineData.type}
                onChange={v => setMedicineData({ ...medicineData, type: v.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quanitity"
                name="quantity"
                value={medicineData.quantity}
                onChange={v => setMedicineData({ ...medicineData, quantity: v.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a note"
                name="note"
                value={medicineData.note}
                onChange={v => setMedicineData({ ...medicineData, note: v.target.value })} />
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {editData ?
            <Button variant="primary" onClick={handleEdit}>
              Edit madicine
         </Button> :
            <Button variant="primary" onClick={handleAdd}>
              Add madicine
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMedicineModal;