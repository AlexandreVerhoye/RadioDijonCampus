import React from 'react';
import { IonTitle,IonFooter, IonContent, IonHeader, IonPage, IonModal, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { musicalNote } from 'ionicons/icons';
import './Morceau.css';

interface Props {
    title: string;
    id : number;
    desc: string;
    date:string;
    lien: string;
  }

  type State = {
    showModal: boolean;
  }

export default class Morceau extends React.Component<Props, State > {

    public state: State = {
        showModal: false
      }

    render(){
        return(
            <IonItem button onClick={() => {this.setState({showModal:true})}} detail>
                <IonIcon slot="start" icon={musicalNote} />
                <IonLabel>{this.props.title}</IonLabel>

                <IonModal 
                    isOpen={this.state.showModal}
                    swipeToClose={true}
                    backdropDismiss={true}
                    onDidDismiss={() => this.setState({showModal: false})}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>{this.props.title}</IonTitle>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent>
                            <IonHeader collapse="condense">
                            <IonToolbar>
                                <IonTitle size="large">{this.props.title}</IonTitle>
                            </IonToolbar>
                            </IonHeader>
                        </IonContent>
                        <IonFooter>
                            <IonButton expand="full" shape="round" href={this.props.lien}>Voir ici</IonButton>
                        </IonFooter>
                        <p>ID : {this.props.id}</p>
                        <p>Date : {this.props.date}</p>
                </IonModal>
            </IonItem>
        )
    }
}