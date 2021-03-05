import { IonContent, IonPage, IonIcon, IonButton } from '@ionic/react';
import { heart } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import './Reward.css';

const Reward: React.FC = () => {
    const history = useHistory();

    const routeToHome = () => {
        history.push('/tabs');
    }

    return (
        <IonPage >
            <IonContent fullscreen>
                <div className="content">
                    <IonIcon className="iconHeart" icon={heart} />
                    <div className="text">
                        <h3>Thanks for your support!</h3>
                        <p>Small things can change the world, thanks for your act of kindness.</p>
                    </div>
                    <IonButton className="newGoalButton" expand="block" fill="outline" onClick={routeToHome}>Start your next goal</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Reward;