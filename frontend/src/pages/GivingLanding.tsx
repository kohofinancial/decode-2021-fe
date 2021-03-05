import { IonContent, IonPage, } from '@ionic/react';
import GivingProgress from './RecommendedCharityScreen/Components/GivingProgress';
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