import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

import PlayerToolbar from '../components/PlayerFab';
import LiveCard from '../components/LiveCard';
import PlayerFab from '../components/PlayerFab';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Accueil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accueil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LiveCard/>
        <PlayerFab/>
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
