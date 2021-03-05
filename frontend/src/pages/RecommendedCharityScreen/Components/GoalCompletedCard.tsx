import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';

//css
import './GoalCompletedCard.css';
  
  const GoalCompletedCard: React.FC<any> = ({data}) => {
      console.log(data);
    return (
        <IonCard class = "goalCard">
            <IonCardContent className = "goalCompletedCard">
                <div className = "goalCompletedContainer">
                    <div className = "goalCompletedBody">
                        <img src = {"https://www.canadahelps.org" + data.logo_en} width = {50}/>
                        <div style = {{fontWeight: "bold", fontSize: 23, marginLeft: 15}}>Goal completed!</div>
                    </div>
                    <div className = "filledBar"></div>
                    <div className = "donateNowBtn">
                        <b>Donate now</b>
                    </div>
                    <div className = "seeMoreBtn">See more</div>
                </div>
            </IonCardContent>
        </IonCard>
    );
  };
  
  export default GoalCompletedCard;