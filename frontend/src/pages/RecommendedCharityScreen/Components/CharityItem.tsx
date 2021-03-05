import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { useHistory } from "react-router-dom";

//css
import './CharityItem.css';

const CharityItem: React.FC<any> = ({ data }) => {
    const history = useHistory();
    return (
        <div onClick = {() => history.push("/information/")}>
        <IonCard className = "ionCard">
            <IonCardHeader className = "ionCardHeader">
                <div className = "charityLogo">
                    <img src = {"https://www.canadahelps.org" + data.charity_profile.logo}/>
                </div>
            </IonCardHeader>

            <IonCardContent className = "charityBottomContainer">
                <div className = "charityTitle">{data.business_name}</div>
                <div className = "charityDescription" dangerouslySetInnerHTML = {{__html: data.charity_profile.about_en}}/>
            </IonCardContent>
        </IonCard>
        </div>
    );
};

export default CharityItem;
