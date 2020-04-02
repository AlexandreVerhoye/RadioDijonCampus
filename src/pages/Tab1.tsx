import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import PlayerToolbar from '../components/PlayerToolbar';
import LiveCard from '../components/LiveCard';

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
        <PlayerToolbar/>
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
