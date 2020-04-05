import React from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

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
      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
