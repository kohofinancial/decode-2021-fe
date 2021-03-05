import React, { useEffect, useState, useContext } from 'react';
import { IonList } from '@ionic/react';
import "./RecommendedCharityScreen.css";


//components
import CharityItem from './Components/CharityItem';
import RecommendedSearchbar from './Components/RecommendedSearchbar';
import CharityHeader from './Components/CharityHeader';
import DonatedValueCard from './Components/DonatedValueCard';
import GivingProgress from './Components/GivingProgress';
import GoalCompletedCard from './Components/GoalCompletedCard';
import UserContext from '../../components/UserContext';

interface ContainerProps {
    onGoing: boolean,
    filled: boolean
  }

const RecommendedCharityScreen: React.FC<ContainerProps> = ({ onGoing, filled}) => {
    const [text, setText] = useState<string>("");
    const [charities, setCharities] = useState<any>();
    const [campaign, setCampaign] = useState<any>();

    const {user} = useContext(UserContext);

    useEffect(() => {
        retrieveAllCharities(text);
        retrieveCampaign();
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

    const retrieveCampaign = () => {
        fetch(`https://decode-be-2021.herokuapp.com/users/${user._id}/campaigns`)
        .then(res => {
            return (res.ok) ?  res.json() : new Error("Mistake!")
        }).then(campaign => {
            if(campaign.length >0){
                fetch("https://decode-be-2021.herokuapp.com/charities/" + campaign[0].name)
                .then(response => {
                    return (response.ok) ?  response.json() : new Error("Mistake!")
                }).then(charities => {
                    setCampaign({...campaign[0], logo_en: charities.profile.logo_en, popular_name: charities.popular_name_en})
                })
            }
        })
    }

    //search
    const handleKeyDown = (e: any) => {
        if(e.key === "Enter"){
            retrieveAllCharities(text);
        }
    }

    if(user.name){
    return (
        <div className = "recommendCharityScreen">
            <div>
                <CharityHeader/>
                <DonatedValueCard
                    user = {user}/>
                {campaign && campaign.currentAmount>0 && campaign.currentAmount < campaign.goalAmount && 
                    <GivingProgress
                        data = {campaign} />
                }
                {campaign && campaign.currentAmount === campaign.goalAmount &&
                    <GoalCompletedCard
                        data = {campaign}/>}
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
    } else{
        return(
            <p>Login to user </p>
        )
    }
};

export default RecommendedCharityScreen;