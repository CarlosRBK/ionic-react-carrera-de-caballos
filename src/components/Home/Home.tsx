import React from 'react';
import {
  IonButton,
  IonGrid,
  IonRouterLink,
  IonRow,
} from '@ionic/react';
import './home.css';
import logo from '../../img/logo.png';

function jugar() {

}

const Home: React.FC = () => {
  return (
    <div className="ion-text-center ion-padding">
      <div className='titulo'>
        <img src={logo} alt="logo" />
      </div>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonRouterLink routerLink="/jugar">
            <IonButton color={"primary"} className='btn' shape="round" expand="block" >JUGAR</IonButton>
          </IonRouterLink>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <IonButton color={"primary"} className='btn' shape="round" >CONFIGURACION</IonButton>
        </IonRow>
        <IonRow class="ion-justify-content-center">
          <IonButton color={"primary"} className='btn' shape="round" >SALIR</IonButton>
        </IonRow>
      </IonGrid>
    </div>
  )
};

export default Home;
