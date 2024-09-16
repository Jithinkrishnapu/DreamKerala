import React from 'react'

export default function TimePicker() {
  return (
    <div style={{padding: '19px 25px', height:'63px'}} class="time-picker" tabindex="0">
    <input style={{padding:'20px'}} name='Time' id='time' type="time" required />
    <div class="placeholder"></div>
  </div>
  )
}
