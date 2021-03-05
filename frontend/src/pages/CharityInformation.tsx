import React, { useRef, useState, useContext } from 'react';
import { IonContent, IonPage, IonModal, IonButton, IonIcon, IonInput,
    IonCardContent, IonItem, IonFooter, IonToolbar 
} from '@ionic/react';
import { useHistory, useLocation } from "react-router-dom";
import UserContext from '../components/UserContext';
import { heartCircleOutline, chevronBackOutline, closeOutline } from 'ionicons/icons';
import './CharityInformation.css';

const CharityInformation: React.FC = () => {
    const [showDonationModal, setShowDonationModal] = useState(false);
    const [customToggle, setCustomToggle] = useState(false);
    const [donationGoal, setDonationGoal] = useState<Number | null>(null);
    const {user} = useContext(UserContext);
    const firstModalRef = useRef<HTMLIonModalElement | null>(null);
    const history = useHistory();
    const location = useLocation();

    let data:any = location.state;
    
    var description:any;
    if (data) {
        description = data.charity_profile.about_en || "<p>No description found.</p>";
    }

    const createCampaign = () => {
        console.log(data)
        fetch('https://decode-be-2021.herokuapp.com/campaigns', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: user._id,
            goalAmount: donationGoal,
            name: data.slug
            })
        }).then(res => res.json())
        .then(res => console.log(res))

        setShowDonationModal(false);
        
    }

    return (
        <>
        {data && 
        <IonPage>
            <IonContent className="padding">
                <IonItem className="charityIonItem ion-no-padding">
                    <IonIcon 
                        icon={chevronBackOutline}
                        onClick={(e) => {
                            e.stopPropagation();
                            history.goBack();
                        }}
                    />
                </IonItem>
                <div className="charityLogo">
                    <img src={"https://www.canadahelps.org" + data.charity_profile.logo}/>
                </div>
                <div className="ion-text-wrap charityTitle">{data.business_name}</div>
                <div className="charityInnerHTML" dangerouslySetInnerHTML={{__html: description}}></div>
            </IonContent>

            <IonFooter>
                {/* <p className="usersDonated">230 users donated</p> */}
                <IonToolbar>
                    <IonButton className="supportButton" expand="block" onClick={() => setShowDonationModal(true)}>Support this Charity</IonButton>
                </IonToolbar>
            </IonFooter>

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
                        <IonIcon icon={closeOutline} className="closeModal" onClick={() => {
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

                                <div className="amountButton" onClick={() => {
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
                        <IonIcon className="backArrowIcon" icon={chevronBackOutline} onClick={() => {
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
        </IonPage>
        }
        </>
    );
};

export default CharityInformation;
