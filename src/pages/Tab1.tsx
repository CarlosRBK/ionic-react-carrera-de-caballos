import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import Home from '../components/Home/Home';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class='ion-text-center ion-padding'>
        <Home />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
