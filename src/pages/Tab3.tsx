import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {  IonCard,IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Favorites </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <IonCardHeader>

            <IonCardTitle>Your Favorite Companies</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Coming Soon..
      </IonCardContent>
        </IonCard>
        </IonContent>
    </IonPage>
  );
};

export default Tab3;
