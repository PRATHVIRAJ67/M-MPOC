import React from 'react'

function Sales() {
  return (
    <div className='sales'>
      <div>
      Conversion funnel analysis
      </div>
      <div className="containerr1">
          <select
            name="year"
            id="years"
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
        </div>
    </div>
  )
}

export default Sales