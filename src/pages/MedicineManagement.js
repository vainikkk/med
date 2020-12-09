import React, { useState } from 'react';
import MedicineTable from '../components/MedicineTable/MedicineTable';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import AddMedicineModal from '../components/AddMedicineModal/AddMedicineModal';
import DeleteConfirmation from '../components/DeleteConfirmation/DeleteConfirmation';

function MedicineManagement() {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const dispatch = useDispatch()

  const deleteMedicine = (id) => {
    setId(id)
    setDeleteModalShow(true)
  }

  const confirmDelete = (id) => {
    dispatch({ type: "DELETE", payload: id })
    setDeleteModalShow(false)
  }

  const handleClose = () => {
    dispatch({ type: "REMOVE_MEDICINE_EDIT_DATA" })
    setShow(false)
  }

  const handleEdit = (id) => {
    setShow(true)
    dispatch({ type: "EDIT", payload: id })
  }

  const addMedicine = (data) => {
    setShow(false)
    dispatch({ type: "ADD", payload: data })
  }

  const editMedicine = (data) => {
    setShow(false)
    dispatch({ type: "SET_EDIT", payload: data })
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="title">
            Medicine Management
          </Col>
          <Col className="add-button">
            <Button onClick={() => setShow(!show)}>
              Add
            </Button>
          </Col>
        </Row>
        <MedicineTable handleEdit={handleEdit} deleteMedicine={deleteMedicine} />
        <AddMedicineModal
          editMedicine={editMedicine}
          show={show}
          handleClose={handleClose}
          addMedicine={addMedicine}
        />
        <DeleteConfirmation
          title="Confirmation Popup"
          bodyDescription="Are you sure to Delete!"
          buttonName="DELETE"
          show={deleteModalShow}
          id={id}
          handleClose={() => setDeleteModalShow(false)}
          confirmDelete={confirmDelete}
        />
      </Container>
    </div>
  );
}

export default MedicineManagement;