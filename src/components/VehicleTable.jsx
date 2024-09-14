import React from 'react';

function VehicleTable({ data }) {

    console.log(data)

  return (
    <table>
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
    </table>
  );
}

export default VehicleTable;