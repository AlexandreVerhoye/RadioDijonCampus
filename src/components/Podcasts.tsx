import React from 'react'
import { IonList, IonItem, IonContent, IonLoading } from '@ionic/react';

type Props = {}

type State = {
  podcasts: [any]
  isLoaded: boolean
}

export default class Podcasts extends React.Component<Props, State> {

  public state: State = {
    podcasts: [""],
    isLoaded: false
  }

  componentDidMount() {
    fetch('http://radiodijoncampus.com/wp-json/wp/v2/pages?parents=393')
      .then(res => res.json())
      .then((result) => {
        this.setState({ podcasts: result, isLoaded: true })

      })
      .catch();
  }

  render() {
    if (this.state.isLoaded) {
      console.log(this.state);
      return (
        <IonContent>
          <IonList>
            {this.state.podcasts.map(podcast => <IonItem>{podcast.title.rendered}</IonItem>)}
          </IonList>
        </IonContent>
      )
    } else {
      return (
        <IonContent>
          <IonLoading
          isOpen={!this.state.isLoaded}
          message={'Chargement des podcasts en cours...'}
          duration={5000}/>
      </IonContent>
      )
    }

  }
}