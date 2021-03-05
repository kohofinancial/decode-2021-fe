import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './GivingProgress.css';

const GivingProgress: React.FC<any> = ({data}) => {
  return (
    <IonCard className = "ionCard">
      <IonCardHeader>
        <div className = "charityLogo">
            <img src = {"https://www.canadahelps.org" + data.charity_profile.logo}/>
        </div>
      </IonCardHeader>

      <IonCardContent className = "charityBottomContainer">
        <div className = "charityTitle">$3 of $50 raised</div>
        <div className = "progressBar">
          <div className = "progressedFill"></div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default GivingProgress;