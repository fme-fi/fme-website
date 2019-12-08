import React, { Component } from 'react';
import WarningBox from './common/WarningBox';

class UsefulSidebar extends Component {    
    render() { 
        return ( 
            <div className="usesulSidebarContainer">
                <h2>
                    Hasznos tudnivalók
                </h2>
                <WarningBox warningText="" />
            </div>
         );
    }
}
 
export default UsefulSidebar;