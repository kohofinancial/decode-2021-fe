import { IonContent, IonPage, IonIcon, IonButton } from '@ionic/react';
import { heart } from 'ionicons/icons';
import './Reward.css';

const Reward: React.FC = () => {
    return (
        <IonPage >
            <IonContent fullscreen>
                <div className="content">
                    <IonIcon className="iconHeart" icon={heart} />
                    <div className="text">
                        <h3>Thanks for your support!</h3>
                        <p>Small things can change the world, thanks for your act of kindness.</p>
                    </div>
                    <IonButton className="newGoalButton" expand="block" fill="outline">Start your next goal</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Reward;