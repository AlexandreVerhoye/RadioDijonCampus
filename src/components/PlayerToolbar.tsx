import React from 'react';
import {
  IonIcon,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import {musicalNote } from 'ionicons/icons';


const PlayerToolbar: React.FC = () => (
  <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={musicalNote} />
          </IonFabButton>
        </IonFab>

);

export default PlayerToolbar;
