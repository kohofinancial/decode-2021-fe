import { useState } from 'react';
import { IonContent, IonPage, IonCard, IonButton, IonCardContent, IonPopover, IonItem, IonLabel, IonInput } from '@ionic/react';

const CharityDonation: React.FC = () => {
    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonCard>
                    <h5>Set up a donation goal for this charity.</h5>
                    <IonCardContent>
                        {/* <h5>Your Giving Roundups currently have:  <strong>{roundupsvalue || "$0.00"}</strong></h5> */}
                        <h5>Your Giving Roundups currently have:  <strong>$5.00</strong></h5>
                    </IonCardContent>
                    <IonButton>$5</IonButton>
                    <IonButton>$10</IonButton>
                    <IonButton>$20</IonButton>
                    <IonButton>$50</IonButton>
                    <IonButton
                        onClick={
                            (e: any) => {
                                e.persist();
                                setShowPopover({ showPopover: true, event: e })
                            }}>
                        Custom
                    </IonButton>
                    <IonPopover
                        event={popoverState.event}
                        isOpen={popoverState.showPopover}
                        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
                    >
                        <IonItem>
                            <IonLabel position="fixed">Amount</IonLabel>
                            <IonInput placeholder="$25.00" inputMode="numeric"></IonInput>
                        </IonItem>
                    </IonPopover>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CharityDonation;