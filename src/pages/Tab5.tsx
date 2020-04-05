import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lecture en cours</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
