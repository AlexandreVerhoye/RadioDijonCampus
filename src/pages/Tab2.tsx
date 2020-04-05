import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import Podcasts from '../components/Podcasts'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Podcasts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Podcasts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Podcasts/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
