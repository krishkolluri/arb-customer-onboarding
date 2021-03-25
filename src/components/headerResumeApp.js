import React from 'react';

import  banklogo from '../assets/arabBankLogo-header.png';
import step1 from '../assets/step1.png';

function HeaderResumeApp() {
    return (<header>
        <div className="header-img-container">
            <img src={banklogo} alt="arabBankLogo" width="200" height="50"/>
                     
        </div>
        <div className="headerLink"> <a href="#" >Resume Application</a> </div>
    </header>
      
     
    
    );
  }
 
export default HeaderResumeApp;