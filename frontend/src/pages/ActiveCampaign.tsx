import {
    IonContent,
    IonPage,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
  } from '@ionic/react';
  import React, { useState, useContext, useEffect }  from 'react';
  import { useHistory } from "react-router-dom";
  import UserContext from '../components/UserContext';
  import CampaignDetails from '../components/CampaignDetails/CampaignDetails';
  import {
    chevronBackCircleOutline,
  } from 'ionicons/icons';
  import './ActiveCampaign.css';
  
  const ActiveCampaign: React.FC = () => {
    const history = useHistory();
    const {user} = useContext(UserContext);
    const [campaign, setCampaign] = useState<any>();

    console.log(campaign);

    useEffect(() => {
        retrieveCampaign();
    }, [])

    const retrieveCampaign = () => {
        fetch(`https://decode-be-2021.herokuapp.com/users/${user._id}/campaigns`)
        .then(res => {
            return (res.ok) ?  res.json() : new Error("Mistake!")
        }).then(campaign => {
            fetch("https://decode-be-2021.herokuapp.com/charities/" + campaign[0].name)
            .then(response => {
                return (response.ok) ?  response.json() : new Error("Mistake!")
            }).then(charities => {
                console.log(charities)
                setCampaign({...campaign[0], logo_en: charities.profile.logo_en, popular_name: charities.popular_name_en})
            })
        })
    }

    return (
      <IonPage>
        <IonHeader >
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="" icon={chevronBackCircleOutline} className="activeCampaign__back-button" />
                </IonButtons>
                { campaign &&
                <IonTitle>{campaign.popular_name} Campaign</IonTitle>
                }
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            {campaign &&
                <CampaignDetails 
                    charityLogo={"https://www.canadahelps.org" + campaign.logo_en}
                    campaignGoalProgress={campaign.currentAmount}
                    campaignGoalOverall={campaign.goalAmount}
                    entries={
                        campaign.transactions.map((transaction: any) => {
                            return {
                                key: transaction._id,
                                transactionLogo: 'assets/uber-eats-logo.png',
                                transactionName: transaction.receiver,
                                donationDate: 'March 5, 2021',
                                donationAmount: transaction.amount,
                            }
                        })
                    }
                />
            }
        </IonContent>
      </IonPage>
    );
  };
  
  export default ActiveCampaign;
  