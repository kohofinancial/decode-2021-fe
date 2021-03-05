import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import RecommendedCharityScreen from './RecommendedCharityScreen/RecommendedCharityScreen';

const GivingLanding: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <RecommendedCharityScreen onGoing={true} filled={false} />
      </IonContent>
    </IonPage>
  );
};

export default GivingLanding;
