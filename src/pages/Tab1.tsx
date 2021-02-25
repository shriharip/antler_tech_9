import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonItem, IonToolbar, IonSearchbar, IonList, IonLabel, IonFooter } from '@ionic/react';
import goalsT from './../data/goalTitles';
import axios from 'axios';
import { Route } from 'react-router';
import CPage from './Companies';

 const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
         <IonList>
        {
          goalsT.map((item, index) => ( 
            
            // <Route path="/cpage" render={props => {
            //   return  <CPage index={index + 1} /> ;
            // }}> 
      <IonItem>
        <IonLabel>{item}</IonLabel>
      </IonItem>
      // </Route>
          )
          )
        }
        
      
      </IonList>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          SUSTAINIFY
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
