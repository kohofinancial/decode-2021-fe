 import React from 'react';
import './CharityHeader.css';
  
const CharityHeader: React.FC = () => {
    return (
        <div className = "charityHeader">
        <div className = "recommendedTitle">Donations</div>
        <div className = "description">
            With everything that’s happening right now, it’s a great time to give back to the community.
        </div>
    </div>
    );
};
  
  export default CharityHeader;