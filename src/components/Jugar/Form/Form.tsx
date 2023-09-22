import React, { useState } from 'react';
import {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonRouterLink,
} from '@ionic/react';

// css
import './form.css'

// sprites
import oro from '../../../img/sprites/oros_11s.jpg';
import copa from '../../../img/sprites/copas_11s.jpg';
import espada from '../../../img/sprites/espadas_11s.jpg';
import basto from '../../../img/sprites/bastos_11s.jpg';

let formTitulo = 'Jugador 1';

const Form: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleFormSubmit = () => {
        console.log(`Nombre: ${name}, Opción seleccionada: ${selectedOption}`);
    };

    const handleImageClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <IonPage>
            <IonContent>
                <form onSubmit={handleFormSubmit} className='ion-text-center ion-padding'>
                    <h1>{formTitulo.toUpperCase()}</h1>
                    <IonInput
                        placeholder="Nombre"
                        value={name}
                        onIonChange={(e) => setName(e.detail.value!)}
                    ></IonInput>
                    <div className="image-buttons">
                        <img
                            src={oro}
                            alt="Opción 1"
                            onClick={() => handleImageClick('oro')}
                            className='imgOption'
                        />
                        <img
                            src={copa}
                            alt="Opción 2"
                            onClick={() => handleImageClick('copa')}
                            className='imgOption'
                        />
                        <img
                            src={espada}
                            alt="Opción 3"
                            onClick={() => handleImageClick('espada')}
                            className='imgOption'
                        />
                        <img
                            src={basto}
                            alt="Opción 4"
                            onClick={() => handleImageClick('basto')}
                            className='imgOption'
                        />
                    </div>

                    <IonButton type="button" className='botonForm' onClick={handleFormSubmit}>
                        LISTO
                    </IonButton>
                    <IonRouterLink routerLink="/tab1">
                        <IonButton type="button" color={'medium'} className='botonForm'>
                            ATRAS
                        </IonButton>
                    </IonRouterLink>
                </form>
            </IonContent>
        </IonPage>
    );
};

export default Form;
