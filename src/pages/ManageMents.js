import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import MedicineRow from '../components/MedicineRow/MedicineRow';

function ManageMents(props) {
  const state = useSelector(state => state)
  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Edit</th>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {state?.data?.length > 0 && state.data.map(value =>
            <MedicineRow 
              key={value.id}
              data={value}
              editMedicine={props.handleEdit}
              deleteMedicine={props.deleteMedicine}
              />
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageMents;