import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import ListePodcasts from '../components/ListePodcasts'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Podcast</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Podcast</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListePodcasts/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
