import React from 'react';
import { Card, ListGroup, Table } from 'react-bootstrap';

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

    <Card className="bg-light mt-4 text-dark">
      <Card.Header>Important Notes</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Above rates are inclusive of toll, parking, and driver bata.</ListGroup.Item>
          <ListGroup.Item>Above rates are subjected to change during festive/season days.</ListGroup.Item>
          <ListGroup.Item>Above rates are subjected to change based on availability, changes in fuel rates, etc.</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>

    </div>
  );
}

export default VehicleTable;