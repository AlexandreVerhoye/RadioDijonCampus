import React from 'react';
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';

import { play } from 'ionicons/icons';


const Player: React.FC = () => (
  <IonToolbar>
    <IonIcon icon={play} />
    <IonTitle>Lecture en cours</IonTitle>
  </IonToolbar>

);

export default Player;
