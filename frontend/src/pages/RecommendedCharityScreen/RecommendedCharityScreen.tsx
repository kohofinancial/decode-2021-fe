import React, { useEffect, useState } from 'react';
import { IonList, IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText } from '@ionic/react';
import CharityItem from './Components/CharityItem';
import "./RecommendedCharityScreen.css";

import RecommendedSearchbar from './Components/RecommendedSearchbar';

const RecommendedCharityScreen: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [charities, setCharities] = useState<any>();

    useEffect(() => {
        retrieveAllCharities(text);
    }, [])

    const retrieveAllCharities = (category: string) => {
        fetch("https://decode-be-2021.herokuapp.com/charities?category=" + category,{headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }}).then(res => {
            return (res.ok) ?  res.json() : new Error("Mistake!")
        }).then(data => {
            setCharities(data.results);
        })
    }

    const handleKeyDown = (e: any) => {
        if(e.key === "Enter"){
            retrieveAllCharities(text);
        }
    }

    return (
        <div className = "recommendCharityScreen">
            <div>
                <div className = "recommendedTitle">Donations</div>
                <div className = "description">
                    With everything that’s happening right now, it’s a great time to give back to the community.
                </div>
                <IonCard className = "donationCard">
                    <IonCardContent>
                        <IonGrid>
                            <IonRow>
                                <IonCol size = "2">te</IonCol>
                                <IonCol>
                                    <IonRow>
                                        <IonText>You have donated:</IonText>
                                    </IonRow>
                                    <IonRow>
                                        <div className = "donationValue">$0.00</div>
                                    </IonRow>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardContent>
                </IonCard>
                <RecommendedSearchbar
                    text = {text}
                    setText = {setText}
                    handleKeyDown = {handleKeyDown}/>   
            </div>
            <IonList>
                {
                   charities && charities.map((charity: any) => {
                        return (
                            <CharityItem
                                key = {charity.business_number}
                                data = {charity}/>
                        )
                    })
                }
            </IonList>

        </div>
    );
};

export default RecommendedCharityScreen;