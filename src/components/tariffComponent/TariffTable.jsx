import React, { useState } from "react";
import Table from "react-bootstrap/Table";

// JSON data for tariffs
const tariffs = {
  tab1: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 3200, driver_bata: 1200 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 4800, driver_bata: 1800 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 6400, driver_bata: 2400 },
    // Add more entries...
  ],
  tab2: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 4000, driver_bata: 1500 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 6000, driver_bata: 2250 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 8000, driver_bata: 3000 },
    // Add more entries...
  ],
  tab3: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 3500, driver_bata: 1300 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 5200, driver_bata: 1950 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    // Add more entries...
  ],
  tab4: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 3500, driver_bata: 1300 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 5200, driver_bata: 1950 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    // Add more entries...
  ],
  tab5: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 3500, driver_bata: 1300 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 5200, driver_bata: 1950 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    // Add more entries...
  ],
  tab6: [
    { number_of_days: "1 night - 2 days", km: 160, ac_rate: 3500, driver_bata: 1300 },
    { number_of_days: "2 nights - 3 days", km: 300, ac_rate: 5200, driver_bata: 1950 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    { number_of_days: "3 nights - 4 days", km: 400, ac_rate: 7000, driver_bata: 2600 },
    // Add more entries...
  ],
};

function TariffTable({selectedModel}) {
  // State to manage the selected car mode
  return (
    <div style={{background:'white', borderRadius:'12px', border:'none'}} className="" >  
      {/* Table to display tariffs */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Number of Days</th>
            <th>Km</th>
            <th>AC Rate</th>
            <th>Driver Bata</th>
          </tr>
        </thead>
        <tbody>
          {/* Dynamically generate table rows based on selected model */}
          {tariffs?.[selectedModel]?.map((tariff, index) => (
            <tr key={index}>
              <td>{tariff.number_of_days}</td>
              <td>{tariff.km}</td>
              <td>{tariff.ac_rate}</td>
              <td>{tariff.driver_bata}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TariffTable;
