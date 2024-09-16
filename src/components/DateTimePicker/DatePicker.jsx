import React from 'react'

export default function DatePicker() {
  return (
    <div class="date-picker" tabindex="0">
    <input name='Date' id='date' type="date" required />
    <div class="placeholder"></div>
  </div>
  )
}
