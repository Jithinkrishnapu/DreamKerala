import React from 'react'

export default function TimePicker() {
  return (
    <div class="time-picker" tabindex="0">
    <input name='Time' id='time' type="time" required />
    <div class="placeholder"></div>
  </div>
  )
}
