
import React from "react";

import './App.css';
import Title from "./components/title";
import Puce from "./components/puce";
import Chiffre from "./components/chiffre";
import Chiffre1 from "./components/chiffre1";
import Cardholder from "./components/cardholder";
import Date from "./components/date";
import Visa from "./components/visa";
import Arrow from "./components/arrow";

class App extends React.Component {
  render(){
    return (
      <div>
       <div className="wrapper">
        <div className="main">
          <div className="container card">
            <div className="row">
            <div className="col-md-12 title">           
            <Title/>
            </div>
            </div>
            <div className="row">
            <div className="col-md-12 puce"><Puce/>
            </div>
            </div>

            <div className="row">
                <div className="col-md-9 chiffre"><div className="chiffres"><Chiffre/></div>
                <div className="row"> <div className="col-md-12 date">MONTH/YEAR</div></div>
                <div className="row">
                
                <div className="col-md-8"> <Chiffre1/> </div>
                <div className="col-md-2 date">VALID<br/>THRU </div>
                <Arrow/>
                <div className="col-md-2 date1"><Date/></div>
                </div>
                <div className='cardholder'><Cardholder/></div>
                </div>
                <div className="col-md-2 chiffre"><Visa/> </div>
            </div>
            </div>
      </div>
      </div>
      </div>
    )

  }
};

        
export default App;