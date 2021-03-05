import React, { useState } from 'react';
import { 
    IonCard, IonCardHeader, IonCardContent, IonIcon,
    IonModal, IonButton, IonContent, IonItem, IonFooter, IonToolbar
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from "react-router-dom";

//css
import './CharityItem.css';

const CharityItem: React.FC<any> = ({ data }) => {

    const [open, setOpen] = useState(false);

    // const getInfo = async(data: any) => {
    //     const slug = data.slug;
    //     const url = "https://decode-be-2021.herokuapp.com/charities/" + slug;
    //     fetch(url) 
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // };

    const description = data.charity_profile.about_en || "<p>No description found.</p>";

    return (
        <IonCard className = "ionCard" onClick={() => setOpen(true)}>
            <IonCardHeader className = "ionCardHeader">
                <div className = "charityLogo">
                    <img src = {"https://www.canadahelps.org" + data.charity_profile.logo}/>
                </div>
            </IonCardHeader>

            <IonCardContent className="charityBottomContainer">
                <div className="charityTitle">{data.business_name}</div>
                <div className="charityDescription" dangerouslySetInnerHTML={{__html: data.charity_profile.about_en}}/>
            </IonCardContent>

            <IonModal isOpen={open}>
                <IonContent className="padding">
                    <IonItem className="charityIonItem ion-no-padding">
                        <IonIcon 
                            icon={chevronBackOutline}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                                console.log(data);
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
                    <IonToolbar>
                        <IonButton expand="block" onClick={(e) => {
                            e.stopPropagation();
                            setOpen(false);
                            console.log(data);
                        }}>Start a Campaign</IonButton>
                    </IonToolbar>
                </IonFooter>

            </IonModal>

        </IonCard>
    );
};

export default CharityItem;
