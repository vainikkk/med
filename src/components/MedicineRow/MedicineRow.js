import React from 'react';
import { Button } from 'react-bootstrap';

function MedicineRow({ data, deleteMedicine, editMedicine }) {
  return (
    <tr>
      <td>
        <Button onClick={() => deleteMedicine(data.id)} variant="danger">
          X
        </Button>
      </td>
      <td>
        <Button onClick={() => editMedicine(data.id)} variant="primary">
          E
        </Button>
      </td>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.quantity}</td>
      <td>{data.note}</td>
    </tr>
  );
}

export default MedicineRow;