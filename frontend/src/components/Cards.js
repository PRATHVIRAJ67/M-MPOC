import React from "react";
import "./style.css";
import Slider from "react-slick";

const Cards = ({ text, label, title }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{width:'450px', marginLeft:'30px'}} >
    <Slider {...settings} className="black-slider">
      <div style={{width:'400px'}}>
         <div style={{position:'relative', top:'30px', left:'30px',}}>
        <img src={'/tata.png'} style={{ width: '80px', height: '60px' ,border:'1px solid lightgrey', borderRadius:'8px'}} width={200} height={200} />
        </div>
      <div style={{backgroundColor:'white', borderRadius:'10px', padding:'25px',}}>
       
        <div style={{display:'flex',marginTop:'20px'}}>
        <div style={{flex:3}}>
              <div style={{ paddingTop: "10px", fontSize: '24px' }}>New Edge Motors</div>
              <div style={{ fontSize: "14px", color: "gray", marginTop: '10px' }}>4/5</div>
            </div>
            <div
              style={{
                flex:1,
                // textAlign:'end',
                borderRadius: "5px",
              }}
            >
              <div style={{backgroundColor:'lightblue',textAlign:'center', borderRadius:'10px',padding:'10px'}}>
              <div style={{ fontWeight: '600',fontSize:'30px' }}>60cr</div>
              <div style={{ fontSize: '14px', color: "gray", alignItems: "center" }}>Total sale</div>
            </div>
            </div>
        </div>
           
          <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2px",
            marginTop:'20px',
            fontSize: "11px",
            color: "gray",
          }}
        >
          <span style={{fontSize: '14px'}}>Sales Target</span>
          <span style={{fontSize: '14px'}}>Revenue</span>
          <span style={{fontSize: '14px'}}>Contribution</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2px",
            fontSize: "13px",
          }}
        >
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>67 Crores</span>
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>13.89 Crores</span>
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>18%</span>
        </div>
        </div>
      </div>
      <div style={{width:'400px'}}>
         <div style={{position:'relative', top:'30px', left:'30px',}}>
        <img src={'/tata.png'} style={{ width: '80px', height: '60px' ,border:'1px solid lightgrey', borderRadius:'8px'}} width={200} height={200} />
        </div>
      <div style={{backgroundColor:'white', borderRadius:'10px', padding:'25px',}}>
       
        <div style={{display:'flex',marginTop:'20px'}}>
        <div style={{flex:3}}>
              <div style={{ paddingTop: "10px", fontSize: '24px' }}>New Edge Motors</div>
              <div style={{ fontSize: "14px", color: "gray", marginTop: '10px' }}>4/5</div>
            </div>
            <div
              style={{
                flex:1,
                // textAlign:'end',
                borderRadius: "5px",
              }}
            >
              <div style={{backgroundColor:'lightblue',textAlign:'center', borderRadius:'10px',padding:'10px'}}>
              <div style={{ fontWeight: '600',fontSize:'30px' }}>60cr</div>
              <div style={{ fontSize: '14px', color: "gray", alignItems: "center" }}>Total sale</div>
            </div>
            </div>
        </div>
           
          <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2px",
            marginTop:'20px',
            fontSize: "11px",
            color: "gray",
          }}
        >
          <span style={{fontSize: '14px'}}>Sales Target</span>
          <span style={{fontSize: '14px'}}>Revenue</span>
          <span style={{fontSize: '14px'}}>Contribution</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2px",
            fontSize: "13px",
          }}
        >
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>67 Crores</span>
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>13.89 Crores</span>
          <span style={{marginTop:'5px',fontSize:'16px',fontWeight: '600'}}>18%</span>
        </div>
        </div>
      </div>
    </Slider>
     </div>
   
  );
};

export default Cards;




