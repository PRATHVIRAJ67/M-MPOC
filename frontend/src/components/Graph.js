

import React,{ useEffect,useState } from 'react';
import { AreaChart, Area, CartesianGrid, ResponsiveContainer, defs, linearGradient, stop, YAxis } from 'recharts';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './style.css'; 
import { funnelData,funnelEntityData, entityPercentDifference } from '../api/Look.js'

const Graph = ({sel_year}) => {
  let Enquiries, Test_Drives, Booking, Total_Sales, tot_booking, tot_enq, tot_sales, tot_test_drives;
  let enq_a,enq_b, td_a, td_b, bk_a, bk_b, ts_a, ts_b;
  let enq_diff,td_diff,bk_diff,ts_diff
  const [funneldata, setFunnelData] = useState([]);
  const [funnelEntitydata, setFunnelEntityData]= useState([])
  const [funnelEntityPercentdata, setFunnelEntityPercentData]= useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await funnelData();
        setFunnelData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await funnelEntityData();
        setFunnelEntityData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await entityPercentDifference();
        setFunnelEntityPercentData(result.success);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  funneldata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)).map((item,index)=>{
    Enquiries=item['all_data_iter_4.Enquiries']
    Test_Drives=item['all_data_iter_4.Test_Drives']
    Booking= item['all_data_iter_4.Booking']
    Total_Sales= item['all_data_iter_4.Total_Sales']
  })
  funnelEntitydata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)).map((item,index)=>{
    tot_enq=item["all_data_iter_4.Sum_of_Inquiries"]
    tot_test_drives=item["all_data_iter_4.Total_testdrive"]
    tot_booking=item["all_data_iter_4.Total_Bookings"]
    tot_sales=item["all_data_iter_4.Total_sales_mahindra"]
  })
  if(sel_year!=2020){
    funnelEntityPercentdata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)).map((item,index)=>{
      enq_a=item["all_data_iter_4.Sum_of_Inquiries"]
      td_a=item["all_data_iter_4.Test_Drives"]
      bk_a=item["all_data_iter_4.Total_Bookings"]
      ts_a=item["all_data_iter_4.Total_Sales"]
   })
   funnelEntityPercentdata.filter((item)=>item["all_data_iter_4.date_year"] === parseInt(sel_year)-1).map((item,index)=>{
    enq_b=item["all_data_iter_4.Sum_of_Inquiries"]
    td_b=item["all_data_iter_4.Test_Drives"]
    bk_b=item["all_data_iter_4.Total_Bookings"]
    ts_b=item["all_data_iter_4.Total_Sales"]
 })
    enq_diff=((enq_a-enq_b)/enq_b*100).toFixed(2)
    td_diff=((td_a-td_b)/td_b*100).toFixed(2)
    bk_diff=((bk_a-bk_b)/bk_b*100).toFixed(2)
    ts_diff=((ts_a-ts_b)/ts_b*100).toFixed(2)
}
 else{
   enq_diff=td_diff=bk_diff=ts_diff="NA"
 }


  const data = [
    { name: 'Segment 1', value: Enquiries},
    { name: 'Segment 2', value: Test_Drives},
  ];

  const data1 = [
    { name: 'Segment 1', value: Test_Drives },
    { name: 'Segment 2', value: Booking },
  ];
  const data2 = [
    { name: 'Segment 1', value: Booking },
    { name: 'Segment 2', value: Total_Sales },
  ];
  const data3 = [
    { name: 'Segment 1', value:Total_Sales },
    { name: 'Segment 2', value:Total_Sales },
  ];
  const graphContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    paddingTop: "50px",
    // paddingBottom: '0px',
    left:'10px'
  };

  const graphContainerStyle1 = {
    position: 'relative',
    textAlign: 'center',
    paddingTop: "50px",
    // paddingBottom: '50px',
  };
  const graphContainerStyle2 = {
    position: 'relative',
    textAlign: 'center',
    paddingTop: "50px",
    // paddingBottom: '50px',
    right:'10px'
  };
  const graphContainerStyle3 = {
    position: 'relative',
    textAlign: 'center',
    paddingTop: "50px",
    // paddingBottom: '50px',
    right:'20px'
  };
  const graphLineStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: "20px",
    right: "2px", // Adjust this value as needed to align the line with the graph
    borderRight: '2px solid #8e918f', // Change the style of the connecting line here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',border:"1px solid #8e918f",borderRadius:"10px",paddingTop:"20px",marginTop:"50px"}}>
      <div style={graphContainerStyle}>
      <div style = {{color:"#8e918f",fontSize:12,display: "flex",paddingLeft:" 20px"}}>Step 1</div>
        <div style = {{display: "flex",paddingLeft:" 20px",paddingTop:"20px",fontSize:14}}>Enquiries</div>
        <div style={{display: "flex",justifyContent: "space-between",padding:" 20px",paddingTop:"5px"}}><span style = {{ fontWeight:"bold"}}>{tot_enq}</span></div>
        <ResponsiveContainer width={300} height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis domain={[20000000, 40000000]} ticks={[20000000,24000000,28000000,32000000,36000000, 40000000]} hide={true}  tickLine={false}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#gradient1)" />
          </AreaChart>
        </ResponsiveContainer>
        <div>1</div>
        <div><ArrowCircleDownIcon color="error"/></div>
        <div style = {{color:"#8e918f",fontSize:12,paddingTop:'5px' }}>dropp off</div>
        <div style={{ color: 'red',paddingTop:'5px' }}>{enq_diff}%</div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle1}>
      <div style = {{color:"#8e918f",fontSize:12,display: "flex",paddingLeft:" 20px"}}>Step 2</div>
        <div style = {{ display: "flex",paddingLeft:" 20px",paddingTop:"20px",fontSize:14}}>Test drives</div>
        <div  style={{display: "flex",justifyContent: "space-between",padding:" 20px",paddingTop:"5px"}}><span style = {{ fontWeight:"bold"}}>{tot_test_drives}</span></div>
        <ResponsiveContainer width={300} height={300}>
          <AreaChart data={data1}>
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis domain={[20000000, 40000000]} ticks={[20000000,24000000,28000000,32000000,36000000, 40000000]} hide={true}  tickLine={false}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#gradient2)" />
          </AreaChart>
        </ResponsiveContainer>
        <div>2</div>
        <div><ArrowCircleDownIcon color="error"/></div>
        <div style = {{color:"#8e918f",fontSize:12,paddingTop:'5px' }}>dropp off</div>
        <div style={{ color: 'red',paddingTop:'5px' }}>{td_diff}%</div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle2}>
      <div style = {{color:"#8e918f",fontSize:12,display: "flex",paddingLeft:" 20px"}}>Step 3</div>
        <div style = {{display: "flex",paddingLeft:" 20px",paddingTop:"20px",fontSize:14}}>Bookings</div>
        <div  style={{display: "flex",justifyContent: "space-between",padding:" 20px",paddingTop:"5px"}}><span style = {{ fontWeight:"bold"}}>{tot_booking}</span></div>
        <ResponsiveContainer width={300} height={300}>
          <AreaChart data={data2}>
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis domain={[20000000, 40000000]} ticks={[20000000,24000000,28000000,32000000,36000000, 40000000]} hide={true}  tickLine={false}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#gradient2)" />
          </AreaChart>
        </ResponsiveContainer>
        <div>3</div>
        <div><ArrowCircleDownIcon color="error"/></div>
        <div style = {{color:"#8e918f",fontSize:12,paddingTop:'5px'}}>dropp off</div>
        <div style={{ color: 'red',paddingTop:'5px'}}>{bk_diff}%</div>
        <div style={graphLineStyle}></div>
      </div>

      <div style={graphContainerStyle3}>
      <div style = {{color:"#8e918f",fontSize:12,display: "flex",paddingLeft:" 20px"}}>Step 4</div>
        <div style = {{ display: "flex",paddingLeft:" 20px",paddingTop:"20px",fontSize:14}}>Purchases</div>
        <div style={{display: "flex",justifyContent: "space-between",padding:" 20px",paddingTop:"5px"}}><span style = {{ fontWeight:"bold"}}>{tot_sales}</span></div>
        <ResponsiveContainer width={300} height={300}>
          <AreaChart data={data3}>
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="red" />
                <stop offset="95%" stopColor="maroon" />
              </linearGradient>
            </defs>
            <YAxis domain={[20000000, 40000000]} ticks={[20000000,24000000,28000000,32000000,36000000, 40000000]} hide={true}  tickLine={false}/>
            <CartesianGrid strokeDasharray="3 3" />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#gradient2)" />
          </AreaChart>
        </ResponsiveContainer>
        <div>4</div>
        <div>< CheckCircleIcon style={{ color: 'green'}}/></div>
        <div classname = "funneldroppoff" style = {{color:"#8e918f",fontSize:12,paddingTop:'5px'}}>Conversion</div>
        <div style={{ color: 'green' ,paddingTop:'5px' }}>{ts_diff}%</div>
        {/* <div style={graphLineStyle}></div> */}
      </div>
    </div>
  );
};

export default Graph;
