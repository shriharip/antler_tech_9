import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonCard, IonButton, IonModal } from '@ionic/react';
import './Tab2.css';
import {useState} from 'react';
import  goals  from '../data/goalsDescription';

const Tab2: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [sdgGoal, setSdgGoal] = useState(1);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sustainable Development Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="small" color="primary">The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future.</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonModal isOpen={showModal}>
        <IonContent>
         <IonCard>
           <IonHeader>
              <h2>{goals[sdgGoal]}</h2>
           </IonHeader>
           <IonGrid>
             <IonRow>
               <IonCol>
               <IonButton color="primary" onClick={() => setShowModal(false)}>Show Companies</IonButton>
               </IonCol>
             </IonRow>
             <IonRow>
               <IonCol>
               <IonButton  color="light" onClick={() => setShowModal(false)}>Close</IonButton>
               </IonCol>
             </IonRow>
           </IonGrid>
         </IonCard>
         
         </IonContent>
      </IonModal>
      
    <IonGrid>
      <IonRow >
        <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(1)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(2)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(3)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg" />
      </IonCard>
    </IonCol> 
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(4)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg" />
      </IonCard>
    </IonCol>  
      </IonRow>
      </IonGrid>
      <IonGrid>
      <IonRow >
        <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(5)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(6)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(7)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg" />
      </IonCard>
    </IonCol> 
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(8)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg" />
      </IonCard>
    </IonCol>  
      </IonRow>
      </IonGrid>
      <IonGrid>
      <IonRow >
        <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(9)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(10)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(11)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg" />
      </IonCard>
    </IonCol> 
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(12)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg" />
      </IonCard>
    </IonCol>  
      </IonRow>
      </IonGrid>
      <IonGrid>
      <IonRow >
        <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(13)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(14)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg" />
      </IonCard>
    </IonCol>
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(15)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg" />
      </IonCard>
    </IonCol> 
    <IonCol >
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(16)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg" />
      </IonCard>
    </IonCol>  
      </IonRow>
      </IonGrid>
      <IonGrid>
      <IonRow >
        <IonCol size="3" sm-size>
      <IonCard>
        <img onClick={() => {setShowModal(true); setSdgGoal(17)}} src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg" />
      </IonCard>
    </IonCol>
      </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
