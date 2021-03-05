import { IonCard, IonCardHeader, IonCardContent } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './GivingProgress.css';

const GivingProgress: React.FC<any> = ({data}) => {
  const history = useHistory();

  const routeActiveCampaign = () => {
      history.push("/campaign");
  }

  return (
    <IonCard className = "ionCard" onClick={routeActiveCampaign}>
      <IonCardHeader>
        <div className = "charityLogo">
            <img src = {"https://www.canadahelps.org" + data.logo_en}/>
        </div>
      </IonCardHeader>

      <IonCardContent className = "charityBottomContainer">
        <div className = "charityName">{data.popular_name}</div>
        <div className = "charityTitle">{formatDonationValue(data.currentAmount)} of {formatDonationValue(data.goalAmount)} raised</div>
        <div className = "progressBar">
          <div className = "progressedFill" style = {{width: `${data.currentAmount*100/data.goalAmount}%`}}></div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

const formatDonationValue = (user: any) => {
  if(user.balance)
      return `$${user.balance.toFixed(2)}`;
  return "$0.00"
}

export default GivingProgress;