import React, { useState } from 'react';
import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonCheckbox, IonLabel } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons'
import styles from './styles.module.css';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string|null|undefined>("");
  const [password, setPassword] = useState<string|null|undefined>("");

  const onLogin = () => {
    if(username)
      login(username as string);
  }

  return(
    <IonContent className="ion-padding">

      <IonItem className={`${styles.item} ion-no-padding`}>
        <IonIcon icon={chevronBackOutline}/>
      </IonItem>

      <div className={styles.imgContainer}>
        <img className = "kohoLogo" src={process.env.PUBLIC_URL + '/assets/koho-logo-white.png'}/> 
      </div>

      <IonInput 
        className={styles.input} 
        type="text" 
        placeholder="Username"
        value={username}
        onIonChange={(e) => setUsername(e.detail.value)}
      />
      <IonInput 
        className={styles.input} 
        type="password" 
        placeholder="Password"
        value={password}
        onIonChange={(e) => setPassword(e.detail.value)}
      />
      <IonItem className={`${styles.item} ion-no-padding`}>
        <IonCheckbox color="primary"/>
        <IonLabel color="medium">Remember me</IonLabel>
      </IonItem>

      <IonButton 
        expand="block" 
        onClick={onLogin}
        color="primary"
      >
        Login
      </IonButton>

    </IonContent>
  )
}

const login = async(name: string) => {
  let url = "https://decode-be-2021.herokuapp.com/users/";
  fetch(url, {
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({ name })
  })
  .then((res) => res.json())
  .then((res) => console.log(res));
}

export default LoginScreen;