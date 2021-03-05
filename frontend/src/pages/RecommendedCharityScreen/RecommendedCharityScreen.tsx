import React, { useEffect, useState } from 'react';
import { IonList, IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText } from '@ionic/react';
import "./RecommendedCharityScreen.css";

//components
import CharityItem from './Components/CharityItem';
import RecommendedSearchbar from './Components/RecommendedSearchbar';
import CharityHeader from './Components/CharityHeader';
import DonatedValueCard from './Components/DonatedValueCard';
import GivingProgress from './Components/GivingProgress';
import GoalCompletedCard from './Components/GoalCompletedCard';

interface ContainerProps {
    onGoing: boolean,
    filled: boolean
  }

const RecommendedCharityScreen: React.FC<ContainerProps> = ({ onGoing, filled}) => {
    const [text, setText] = useState<string>("");
    const [charities, setCharities] = useState<any>();

    useEffect(() => {
        retrieveAllCharities(text);
    }, [])

    //get api to retrieve all charities
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

    //search
    const handleKeyDown = (e: any) => {
        if(e.key === "Enter"){
            retrieveAllCharities(text);
        }
    }

    return (
        <div className = "recommendCharityScreen">
            <div>
                <CharityHeader/>
                <DonatedValueCard/>
                {onGoing && charities &&
                    <GivingProgress
                        data = {charities[0]} />
                }
                {filled && charities &&
                    <GoalCompletedCard
                        data = {charities[0]}/>}
                {(onGoing || filled) &&
                <div className = "browseText">Browse for your next impact</div>
                        }
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