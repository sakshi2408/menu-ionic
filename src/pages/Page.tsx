import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonLabel, IonItem } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import emojipedia from "../components/emojipedia";

import './Page.css';
interface Emoji {
  id: number;
  emoji: string;
  name: string;
  meaning: string;
}

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

      </IonContent>
      <IonContent>
        <IonItem>
          {emojipedia[0].emoji}
          {
            emojipedia[0].meaning}

        </IonItem>
        <IonItem>
          {emojipedia[1].emoji}
          {
            emojipedia[1].meaning}
        </IonItem>

        <IonItem>
          {emojipedia[2].emoji}
          {
            emojipedia[2].meaning}
        </IonItem>
      </IonContent>

    </IonPage >
  );
};

export default Page;
