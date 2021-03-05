import { IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText, IonIcon } from '@ionic/react';
import React from 'react';

import { heartCircleOutline } from 'ionicons/icons';

//css
import './DonatedValueCard.css';
  
  const DonatedValueCard: React.FC = () => {
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
                                <div className = "donationValue">$0.00</div>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
  };
  
  export default DonatedValueCard;