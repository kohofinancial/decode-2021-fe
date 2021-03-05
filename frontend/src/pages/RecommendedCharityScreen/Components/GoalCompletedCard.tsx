import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";

//css
import './GoalCompletedCard.css';
  
  const GoalCompletedCard: React.FC<any> = ({data}) => {
    const history = useHistory();

    const onClickDonateNow = () => {
        fetch("https://decode-be-2021.herokuapp.com/campaigns/" + data._id,{
            method: 'DELETE',
        }).then(res => {
            return (res.ok) ?  res.json() : new Error("Mistake!")
        }).then(data => {
            history.push("/thankyou")
        })
    }
    return (
        <div>
        <IonCard class = "goalCard">
            <IonCardContent className = "goalCompletedCard">
                <div className = "goalCompletedContainer">
                    <div className = "goalCompletedBody">
                        <img src = {"https://www.canadahelps.org" + data.logo_en} width = {50}/>
                        <div style = {{fontWeight: "bold", fontSize: 23, marginLeft: 15}}>Goal completed!</div>
                    </div>
                    <div className = "filledBar"></div>
                    <div className = "donateNowBtn" onClick = {onClickDonateNow}>
                        <b>Donate now</b>
                    </div>
                    <div className = "seeMoreBtn">See more</div>
                </div>
            </IonCardContent>
        </IonCard>
        </div>
    );
  };
  
  export default GoalCompletedCard;