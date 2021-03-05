import { IonContent, IonPage, } from '@ionic/react';
import GivingProgress from './GivingProgress';
import RecommendedCharityScreen from './RecommendedCharityScreen/RecommendedCharityScreen';

const GivingLanding: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {
          true ? 
          <RecommendedCharityScreen /> : 
          <GivingProgress />
        }
      </IonContent>
    </IonPage>
  );
};

export default GivingLanding;