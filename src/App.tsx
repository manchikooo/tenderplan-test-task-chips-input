import React, {useState} from 'react';
import './App.css';
import {ChipsInput} from "./components/ChipsInput";

const App = () => {
    const [chips, setChips] = useState<string>('')
    return (
        <div className='chips-input'>
            <ChipsInput chips={chips} setChips={setChips}/>
        </div>
    )
}

export default App;
