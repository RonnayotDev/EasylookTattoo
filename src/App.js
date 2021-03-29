import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/Tattooitem';
import TattooPost from './components/TattooPost';
import tattoos from './data/tattoos';

function App() {
  const [selectedTattoo , setSelectedTattoo] = useState(null); //ใช้กับ TattoPost

  function onTattooOpenClick(TheTattoo){
    setSelectedTattoo(TheTattoo);
  }

  function onTattooCloseClick(){
    setSelectedTattoo(null);
  }

  const tattooElements = tattoos.map((tattoomap, index) => { 
    return <TattooItem key={index} tattoo={tattoomap} onTattooClick={onTattooOpenClick}/>;
  });

  let tattooPost = null;
  if(!!selectedTattoo){
      tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick}/>
  }

  return (
    <div className="App">
      <AppHeader/>
        <div class="app-wrap">
              {tattooElements}
        </div>
        {tattooPost}
    </div>
  );
}

export default App;
