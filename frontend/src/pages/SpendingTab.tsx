import {
  IonContent,
  IonImg,
  IonPage,
} from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";
import Header from '../components/Header';
import './SpendingTab.css';

const SpendingTab: React.FC = () => {
  const history = useHistory();

  const routeUberEats = () => {
    history.push("/uber-eats");
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonImg src="assets/Spending.jpg" onClick={routeUberEats} />
      </IonContent>
    </IonPage>
  );
};

export default SpendingTab;
