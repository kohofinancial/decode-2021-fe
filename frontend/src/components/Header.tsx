import { IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import {
  caretDownOutline,
  diamondOutline,
  heartCircleOutline,
} from 'ionicons/icons';
import React from 'react';

import './Header.css';

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <div>
          See total balance <IonIcon color="warning" icon={caretDownOutline} />
          <span>
            Personal <IonIcon color="secondary" icon={diamondOutline} />
          </span>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
