import React from "react";

function TariffTable({ data }) {
  return (
    <div className="tariff-table-wrapper">
      <table className="tariff-table">
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
              <td>{row.days}</td>
              <td>{row.kilometer}</td>
              <td className="tariff-price">₹{row.rate?.toLocaleString?.() || row.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TariffTable;
