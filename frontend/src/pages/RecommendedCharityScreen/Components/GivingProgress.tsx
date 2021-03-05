import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import './GivingProgress.css';

const GivingProgress: React.FC<any> = ({data}) => {
  return (
    <IonCard className = "ionCard">
      <IonCardHeader>
        <div className = "charityLogo">
            <img src = {"https://www.canadahelps.org" + data.logo_en}/>
        </div>
      </IonCardHeader>

      <IonCardContent className = "charityBottomContainer">
        <div className = "charityName">{data.popular_name}</div>
        <div className = "charityTitle">${data.currentAmount} of ${data.goalAmount} raised</div>
        <div className = "progressBar">
          <div className = "progressedFill" style = {{width: `${data.currentAmount*100/data.goalAmount}%`}}></div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default GivingProgress;