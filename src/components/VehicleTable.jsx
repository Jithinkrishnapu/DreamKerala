import React from 'react';
import { Table } from 'react-bootstrap';

function VehicleTable({ data }) {
  return (
    <div className='mt-5 mb-5' > 
        <h4 className='mb-5' >Vehicle Tariffs</h4>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            <td>{row.vehicle}</td>
            <td>{row.passengers}</td>
            <td>{row.rate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default VehicleTable;