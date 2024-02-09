import './app.scss';
import Gallery from './Gallery';
import ModalWindow from './ModalWindow';
import {useState} from 'react';

function App() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <h1>My Gallery</h1>
      <Gallery setModal = {setModal}/>
      <ModalWindow modal = {modal} setModal = {setModal}/>
    </>
  );
}

export default App;