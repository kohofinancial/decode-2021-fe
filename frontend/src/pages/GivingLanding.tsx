import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GivingProgress from './GivingProgress';
import RecommendedCharityScreen from './RecommendedCharityScreen';

const GivingLanding: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome!</IonTitle>
        </IonToolbar>
      </IonHeader>
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