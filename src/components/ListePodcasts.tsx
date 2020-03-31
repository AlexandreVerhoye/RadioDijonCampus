import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

const ListePodcasts: React.FC = () => (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Podcast 1</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Podcast 2</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Podcast 3</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Podcast 4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Podcast 5</IonLabel>
      </IonItem>
    </IonList>    
  </IonContent>
);

export default ListePodcasts;
