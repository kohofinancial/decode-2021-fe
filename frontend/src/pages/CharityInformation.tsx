import React, { useRef, useState } from 'react';
import { IonContent, IonPage, IonModal, IonButton, IonIcon, IonCard, IonCardContent, IonInput } from '@ionic/react';
import { heartCircleOutline, chevronBackOutline, closeOutline } from 'ionicons/icons';
import './CharityInformation.css';

const CharityInformation: React.FC = () => {
    const [showDonationModal, setShowDonationModal] = useState(false);
    const [customToggle, setCustomToggle] = useState(false);
    const [donationGoal, setDonationGoal] = useState<Number | null>(null);
    const firstModalRef = useRef<HTMLIonModalElement | null>(null);

    const createCampaign = () => {
        setShowDonationModal(false);
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="content">
                    <img className="headerImage" alt="image" src="https://lever-client-logos.s3.amazonaws.com/cd28cdb4-b64a-4531-9755-2df6d7078e82-1577991460239.png"></img>
                    <img className="logoImage" alt="logo"></img>
                    <h1>Charity Name</h1>
                    <p>Description...</p>
                    <IonModal
                        ref={firstModalRef}
                        cssClass="DonationProcessModal"
                        isOpen={showDonationModal}
                        //presentingElement={router || undefined}
                        swipeToClose={true}
                        onDidDismiss={() => setShowDonationModal(false)}
                    >
                        {!customToggle ?
                            <div className="supportAmount">
                                <IonIcon icon={closeOutline} className="closeModal" onClick={(e: any) => {
                                    setShowDonationModal(false)
                                }} /><br />
                                <div className="supportAmountContent">
                                    <h2><strong>Create a donation goal</strong></h2>
                                    <p>Current RoundUps: $15.00</p>
                                    <div className="buttonRow">
                                        <div className={`amountButton ${donationGoal == 5 ? "selected" : null}`} onClick={() => setDonationGoal(5)}>
                                            <div>
                                                <IonIcon className={`heartIcon ${donationGoal == 5 ? "selected" : null}`} icon={heartCircleOutline} />
                                            </div>
                                            <div>
                                                <span>$5.00</span>
                                            </div>
                                        </div>

                                        <div className={`amountButton ${donationGoal == 10 ? "selected" : null}`} onClick={() => setDonationGoal(10)}>
                                            <div>
                                                <IonIcon className={`heartIcon ${donationGoal == 10 ? "selected" : null}`} icon={heartCircleOutline} />
                                            </div>
                                            <div>
                                                <span>$10.00</span>
                                            </div>
                                        </div>

                                        <div className={`amountButton ${donationGoal == 25 ? "selected" : null}`} onClick={() => setDonationGoal(25)}>
                                            <div>
                                                <IonIcon className={`heartIcon ${donationGoal == 25 ? "selected" : null}`} icon={heartCircleOutline} />
                                            </div>
                                            <div>
                                                <span>$25.00</span>
                                            </div>
                                        </div>

                                        <div className="amountButton" onClick={(e: any) => {
                                            setCustomToggle(true)
                                        }}>
                                            <div>
                                                <IonIcon className="heartIcon" icon={heartCircleOutline} />
                                            </div>
                                            <div>
                                                <span>Custom</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <IonButton className="createButton" expand="block" onClick={() => createCampaign()}>Create</IonButton>
                            </div> :
                            <div className="enterCustomAmount">
                                <IonIcon className="backArrowIcon" icon={chevronBackOutline} onClick={(e: any) => {
                                    setCustomToggle(false)
                                }} />
                                <div className="enterCustomAmountItems">
                                    <h5>Enter Amount</h5>
                                    <IonInput className="inputField" type="number" placeholder="Enter Number" onIonChange={e => setDonationGoal(parseInt(e.detail.value!, 10))}></IonInput>
                                    <br />
                                    <IonButton className="createButton" expand="block" onClick={() => { setDonationGoal(donationGoal); createCampaign() }}>Create</IonButton>
                                </div>
                            </div>}
                    </IonModal>
                    <IonCard className="supportAction">
                        <IonCardContent>
                            <p className="usersDonated">230 users donated</p>
                            <IonButton className="supportButton" expand="block" onClick={() => setShowDonationModal(true)}>Support this Charity</IonButton>
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CharityInformation;