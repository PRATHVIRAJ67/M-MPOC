import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Funnel() {
  return (
    <div className='funnel'>
      <div className='funnel1'>
        Conversion funnel analysis
      </div>
      <div classname = "funnel2">
      <div className="dropdown">
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
    </div>
    </div>
  );
}

export default Funnel;
