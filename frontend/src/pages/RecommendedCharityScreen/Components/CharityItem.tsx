import React, { useState } from 'react';
import { 
    IonCard, IonCardHeader, IonCardContent, IonIcon,
    IonModal, IonButton, IonContent, IonItem, IonFooter, IonToolbar
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons'
import { useHistory } from "react-router-dom";

//css
import './CharityItem.css';

const CharityItem: React.FC<any> = ({ data, on }) => {

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
        <IonCard className = "ionCard" >
            <IonCardHeader className = "ionCardHeader">
                <div className = "charityLogo">
                    <img src = {"https://www.canadahelps.org" + data.charity_profile.logo}/>
                </div>
            </IonCardHeader>

            <IonCardContent className="charityBottomContainer">
                <div className="charityTitle">{data.business_name}</div>
                <div className="charityDescription" dangerouslySetInnerHTML={{__html: data.charity_profile.about_en}}/>
            </IonCardContent>

            

        </IonCard>
    );
};

export default CharityItem;
