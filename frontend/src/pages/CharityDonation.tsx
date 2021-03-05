import { useState } from 'react';
import { IonContent, IonPage, IonCard, IonButton, IonCardContent, IonPopover, IonItem, IonLabel, IonInput } from '@ionic/react';
import CampaignDetails from '../components/CampaignDetails/CampaignDetails';


const CharityDonation: React.FC = () => {
    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });

    const entriesPlaceholder = [
        {
            transactionLogo: "https://static01.nyt.com/images/2021/03/03/us/03xp-amazon-logo/oakImage-1614794068335-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            transactionName: "Amazon",
            donationDate: "March 1, 2021",
            donationAmount: 0.25,
        },
        {
            transactionLogo: "https://www.vhv.rs/dpng/d/433-4331606_uber-eats-logo-transparent-uber-food-delivery-logo.png",
            transactionName: "Uber Eats",
            donationDate: "February 28, 2021",
            donationAmount: 1.15,       
        },
    ]

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

                <CampaignDetails
                    charityLogo="https://upload.wikimedia.org/wikipedia/en/2/24/WWF_logo.svg"
                    campaignGoalProgress={3}
                    campaignGoalOverall={50}
                    entries={entriesPlaceholder}
                />
            </IonContent>
        </IonPage>
    );
};

export default CharityDonation;