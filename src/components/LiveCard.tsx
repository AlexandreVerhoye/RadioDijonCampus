import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


const LiveCard: React.FC = () => (
    <IonCard>
        <IonCardHeader>
        <IonCardSubtitle>Ecoutez le live dès maintenant</IonCardSubtitle>
        <IonCardTitle>Le live</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
            La faudra mettre une image de live les potes
        </IonCardContent>
  </IonCard>
);

export default LiveCard;
