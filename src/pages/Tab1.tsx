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
        <LiveCard name="test1" subtitle="Ecoutez le live dès maintenant !" desc="poulet"/>
        <LiveCard name="tes2" subtitle="Carte de test" desc="frite"/>
        <LiveCard name="coca" subtitle="Carte de test" desc="coca"/>

      </IonContent>
      <IonFooter>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
