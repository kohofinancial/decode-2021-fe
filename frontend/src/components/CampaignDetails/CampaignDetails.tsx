import './CampaignDetails.css';
import { IonCard, IonButton } from '@ionic/react';
import CampaignEntries from '../CampaignEntries/CampaignEntries';
import ProgressBar from '../ProgressBar/ProgressBar';


interface Props {
  charityLogo: string,
  campaignGoalProgress: number,
  campaignGoalOverall: number,
  entries: {
    transactionLogo: string
    transactionName: string
    donationDate: string
    donationAmount: number
  }[],
}

const CampaignDetails: React.FC<Props> = ({ charityLogo, campaignGoalProgress, campaignGoalOverall, entries }) => {
  return (
    <IonCard className="container">
      <div className="headerContainer">
        <div className="charityImageContainer">
          <img
            src={charityLogo}
            className="charityLogo"
          />
        </div>

        <div className="headerGoalTextContainer">
          <p className="headerGoalText"> ${campaignGoalProgress} of ${campaignGoalOverall} raised </p>
        </div>
      </div>

      <ProgressBar percentage={(campaignGoalProgress / campaignGoalOverall * 100)} />

      {entries.map(current => {
        return (
          <CampaignEntries
            transactionLogo={current.transactionLogo}
            transactionName={current.transactionName}
            donationDate={current.donationDate}
            donationAmount={current.donationAmount}
          />
        )
      })}

      <div className="bottomButtonContainer">
        <IonButton className="buttonContainer chooseCharityButton"> Choose a different charity </IonButton>
        <IonButton className="buttonContainer deleteGoalButton"> Delete goal </IonButton>
      </div>
    </IonCard>
  );
};

export default CampaignDetails;
