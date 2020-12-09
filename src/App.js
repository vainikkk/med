import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddMedicineModal from './components/AddMedicineModal/AddMedicineModal';
import DeleteConfirmation from './components/DeleteConfirmation/DeleteConfirmation';
import ToastMessage from './components/ToastMessage/ToastMessage';
import ManageMents from './pages/ManageMents';

function App() {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(false)
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const dispatch = useDispatch()
  const {showToast, toastMessage} = useSelector(state => state)

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
    <div className="App">
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
        <ManageMents handleEdit={handleEdit} deleteMedicine={deleteMedicine} />
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
      {showToast && <ToastMessage 
        show={showToast}
        delay={3000}
        closeToast={() => dispatch({type: "CLOSE_TOAST"})}
        message={toastMessage}
      />}
    </div>
  );
}

export default App;
