import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const linechart1 = () => {
    const data = [
        { name: '2020', North: 20, East: 30, West: 40, South: 50 },
        { name: '2021', North: 35, East: 45, West: 55, South: 65 },
        { name: '2022', North: 40, East: 50, West: 60, South: 70 },
      ];
    
      return (
        <div style={{position:'relative', left:'30%',marginBottom:'30px'}}>
        <div style={{ width: '60%', border:'1px solid lightgrey',height: 200, padding:'10px' ,borderRadius:'10px' }}>
            <div style={{fontSize:'18px', color:'grey', fontWeight:'bold', marginLeft:'20px',}}>Sales Trend</div>
          <ResponsiveContainer>
            <LineChart data={data} style={{height:'90%'}}>
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} axisLine={false} ticks={[0, 20, 40, 60, 80, 100]} hide={true} tickLine={false} />
              <Tooltip />
              {/* <Legend /> */}
              <Line type="monotone" dataKey="North" stroke="#8884d8" dot={false} />
              <Line type="monotone" dataKey="East" stroke="#82ca9d" dot={false} />
              <Line type="monotone" dataKey="West" stroke="#FF5733" dot={false} />
              <Line type="monotone" dataKey="South" stroke="#FFD700" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
      );
    };

export default linechart1;