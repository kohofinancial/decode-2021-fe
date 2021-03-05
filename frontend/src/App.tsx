import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupConfig,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  heartCircleOutline,
  cardOutline,
  cashOutline,
} from 'ionicons/icons';
import SpendingTab from './pages/SpendingTab';
import SavingsTab from './pages/SavingsTab';

import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//components
import GivingLanding from './pages/GivingLanding';
import CharityInformation from './pages/CharityInformation';
import LoginScreen from './pages/Login/index';
import React, { useState } from 'react';
import UserContext from './components/UserContext';
import UberEats from './pages/UberEats';
import Reward from './pages/Reward';
import ActiveCampaign from './pages/ActiveCampaign';

setupConfig({
  mode: 'ios',
});

const App: React.FC = () => {

  //context accessor
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/login">
              <LoginScreen />
            </Route>
            <Route path="/information">
              <CharityInformation />
            </Route>
            <Route path="/uber-eats/">
              <UberEats />
            </Route>
            <Route path="/thankyou">
              <Reward />
            </Route>
            <Route path="/tabs">
              <IonTabs>
                <IonRouterOutlet>
                  <Route exact path="/tabs/spending">
                    <SpendingTab />
                  </Route>
                  <Route exact path="/tabs/savings">
                    <SavingsTab />
                  </Route>
                  <Route path="/tabs/giving/landing">
                    <GivingLanding />
                  </Route>
                  <Route path="/tabs/giving/charity">
                    <GivingLanding />
                  </Route>
                  <Route exact path="/tabs/">
                    <Redirect to="/tabs/spending" />
                  </Route>
                  <Route path="/tabs/giving/campaign">
                    <ActiveCampaign />
                  </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                  <IonTabButton tab="spending" href="/tabs/spending">
                    <IonIcon icon={cardOutline} />
                    <IonLabel>SPENDING</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="savings" href="/tabs/savings">
                    <IonIcon icon={cashOutline} />
                    <IonLabel>SAVINGS</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="giving" href="/tabs/giving/landing">
                    <IonIcon icon={heartCircleOutline} />
                    <IonLabel>GIVING</IonLabel>
                  </IonTabButton>
                </IonTabBar>
              </IonTabs>
            </Route>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </UserContext.Provider>
  );
};

export default App;
