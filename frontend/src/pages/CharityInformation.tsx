import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonCardTitle, IonCardContent } from '@ionic/react';

const CharityInformation: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Welcome!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    {/* <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton> */}
                    <IonCardContent>
                        <img src="https://lever-client-logos.s3.amazonaws.com/cd28cdb4-b64a-4531-9755-2df6d7078e82-1577991460239.png"></img>
                    </IonCardContent>
                    <IonCardTitle color="secondary">Charity Name</IonCardTitle>
                    <IonCardContent>Description here</IonCardContent>
                    <IonButton expand="block">Donate</IonButton>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CharityInformation;