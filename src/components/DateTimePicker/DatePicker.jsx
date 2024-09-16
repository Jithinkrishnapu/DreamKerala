import React from 'react'

export default function DatePicker() {
  return (
    <div class="date-picker mb-3 mb-md-0" tabindex="0">
    <input name='Date' id='date' type="date" required />
    <div class="placeholder"></div>
  </div>
  )
}
