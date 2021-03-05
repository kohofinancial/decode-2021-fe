import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import GivingProgress from './GivingProgress';
import RecommendedCharityScreen from './RecommendedCharityScreen';

const GivingLanding: React.FC = () => {
  return (
    <IonPage>
      <Header />
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