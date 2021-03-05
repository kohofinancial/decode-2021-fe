import { IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText, IonIcon } from '@ionic/react';
import React from 'react';

import { heartCircleOutline } from 'ionicons/icons';

//css
import './DonatedValueCard.css';
  
  const DonatedValueCard: React.FC<any> = ({user}) => {
    
    return (
        <IonCard className = "donationCard">
            <IonCardContent>
                <IonGrid style = {{backgroundColor: "white"}}>
                    <IonRow>
                        <IonCol size = "2">
                            <IonRow>
                                <IonIcon icon={heartCircleOutline} className = "heartSize" />
                            </IonRow>
                        </IonCol>
                        <IonCol>
                            <IonRow>
                                <IonText>You have donated:</IonText>
                            </IonRow>
                            <IonRow>
                                <div className = "donationValue">${formatDonationValue(user.totalDonated)}.00</div>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
};

const formatDonationValue = (user: any) => {
    if(user.balance)
        return `$${user.balance.toFixed(2)}`;
    return "$0.00"
}

export default DonatedValueCard;