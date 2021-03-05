import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import './SavingsTab.css';

const SavingsTab: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default SavingsTab;
