import { IonContent, IonPage, } from '@ionic/react';
import RecommendedCharityScreen from './RecommendedCharityScreen/RecommendedCharityScreen';

const GivingLanding: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
          <RecommendedCharityScreen
            onGoing = {true}
            filled = {false}/> 
      </IonContent>
    </IonPage>
  );
};

export default GivingLanding;