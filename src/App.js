import { useState } from 'react';
import { Card } from './components/card/Card';

import cafe from './cafe.json'

function App() {
  const [cafes] = useState(cafe)

  return (
    <div className="container">
      {
        cafes.map(cafecito => {
          return < Card key={cafecito.id} cafecito={cafecito}/>
        })
      }
    </div>
  );
}

export default App;
