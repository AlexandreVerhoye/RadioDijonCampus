import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface Props {
    title: string;
  }

export default class Morceau extends React.Component<Props> {

    render(){
        return(
            <IonItem>{this.props.title}</IonItem>
        )
    }
}