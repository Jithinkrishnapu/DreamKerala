import React from 'react'

export default function DatePicker() {
  return (
    <div style={{padding: '19px 25px', height:'63px'}} class="date-picker mb-3 mb-md-0" tabindex="0">
    <input style={{padding:'20px'}} name='Date' id='date' type="date" required />
    <div class="placeholder"></div>
  </div>
  )
}
