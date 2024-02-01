import CartWidGet from "./components/CartWidGet";
import NavBar from "./components/NavBar";
import Title from "./components/Title";

import React from 'react';

const App = () => {
  return (
    <>
      <Title mensaje= {"Nombre del Comercio"} />
      < NavBar/>
      < CartWidGet numero = {1} />
    </>
  );
}

export default App;
