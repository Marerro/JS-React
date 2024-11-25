import React, { useState } from 'react';
import InputComponent from './components/InputComponent';
import DisplayComponent from './components/DisplayComponent';
import Forms from './components/Forms';
 
const App = () => {
  const [sharedText, setSharedText] = useState('');
 
  const handleTextChange = (newText) => {
    setSharedText(newText);
  };
 
  return (
<div>
<Forms/>
</div>
  );
};
 
export default App;