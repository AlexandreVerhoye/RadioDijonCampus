import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

interface Props {
    name: string;
    desc: string;
    subtitle : string;
  }

export default class LiveCard extends React.Component<Props> {

    render(){
        return(
            <IonCard>
            <IonCardHeader>
            <IonCardSubtitle>{this.props.subtitle}</IonCardSubtitle>
    <IonCardTitle>{this.props.name}</IonCardTitle>
            </IonCardHeader>
    
            <IonCardContent>
                {this.props.desc}
            </IonCardContent>
      </IonCard>
        )
    }
}