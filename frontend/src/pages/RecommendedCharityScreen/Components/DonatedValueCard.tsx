import { IonCard, IonGrid, IonRow,IonCol, IonCardContent, IonText } from '@ionic/react';
import React from 'react';

import ribbon from '../../../images/ribbon.png';

//css
import './DonatedValueCard.css';
  
  const DonatedValueCard: React.FC = () => {
    return (
        <IonCard className = "donationCard">
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size = "2">
                            <IonRow>
                                &nbsp;
                            </IonRow>
                            <IonRow>
                                <img src = {ribbon}/>
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