import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonItem, IonToolbar, IonSearchbar, IonList, IonLabel, IonFooter } from '@ionic/react';
import goalsT from './../data/goalTitles';
import axios from 'axios';

interface CProps {
    index: number;
  }

 const CPage: React.FC<CProps> = ({ index }) => {
  const [searchText, setSearchText] = useState('');
  const [showCompanies, setShowCompanies] = useState(true);
  const [data, setData] = useState({});

  useEffect(  ()=> {
    const fetchData = async () => {
      let ind = index.toString();
      const url = 'https://api.airtable.com/v0/app4YBXrKHrULqyRv/sdg?api_key=keyXxMwlPwlFxrUHB&filterByFormula={' + ind +'}="Y"';
      const result = await axios(url);
 
      setData(result.data);
      console.log(result.data);
    };

      fetchData();

  },[]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonSearchbar value={goalsT[index]} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {/* {
        showCompanies &&           <IonList>
        {
          goalItems.map((item, index) => ( 
           
      <IonItem>
        <IonLabel onClick = {()=> { setGoalIndex(index+1); setShowCompanies(!showCompanies)}}>{item}</IonLabel>
      </IonItem>
          )
          )
        }
        
      
      </IonList>
        } */}

      </IonContent>
      <IonFooter>
        <IonToolbar>
          SUSTAINIFY
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default CPage;
