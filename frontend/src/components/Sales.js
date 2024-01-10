import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function Sales() {
  return (
    <>
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
        <div className="more-vert-icon">
            <MoreVertIcon />
          </div>
          <div>
            <AddBoxIcon />
            < IndeterminateCheckBoxIcon/>
          </div>
    </div>
    </>
  )
}

export default Sales