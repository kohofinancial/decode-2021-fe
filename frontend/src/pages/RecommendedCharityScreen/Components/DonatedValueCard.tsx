import { IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText, IonIcon } from '@ionic/react';
import React, { useContext } from 'react';

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
                                <div className = "donationValue">${user.totalDonated}.00</div>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
  };
  
  export default DonatedValueCard;