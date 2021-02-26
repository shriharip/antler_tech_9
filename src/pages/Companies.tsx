import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonItem, IonToolbar, IonSearchbar, IonList, IonLabel, IonFooter } from '@ionic/react';
import goalsT from './../data/goalTitles';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';

interface UserDetailPageProps extends RouteComponentProps<{
    id: string;
  }> {}

 const CPage: React.FC<UserDetailPageProps> = ({match}) => {
  const [searchText, setSearchText] = useState('');
  const[ind, setInd] = useState(match.params.id);
  const [showCompanies, setShowCompanies] = useState(true);
  const [data, setData] = useState([]);

  useEffect(  ()=> {
    const fetchData = async () => {
      const url = 'https://api.airtable.com/v0/app4YBXrKHrULqyRv/sdg?api_key=keyXxMwlPwlFxrUHB&filterByFormula={' + ind +'}="Y"';
      const result = await axios(url);
        setData(result.data['records']);
    };
    fetchData();
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonSearchbar value={goalsT[parseInt(match.params.id)]} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {
        data &&  <IonList>
        {
          data.map((item, index) => ( 
           
      <IonItem>
        <IonLabel>{item['fields']['company']}</IonLabel>
      </IonItem>
          )
          )
        }
        
      
      </IonList>
        }

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
