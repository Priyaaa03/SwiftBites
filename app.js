import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Shared/Header';
import Restaurants from './src/Components/Restaurants';
const App =()=>{
  return(
    <div>
      <Header/>
      <Restaurants/>
    </div>
  )

}

// const rootElement = React.createElement("div");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);  