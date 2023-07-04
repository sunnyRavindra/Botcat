import { useState } from 'react'
import './MyFirstComponent.scss'


const MyFirstComponent = (props) => {

    const [varii,setCommand] = useState(props.Component1);
    
    const changeTitle = ()=> {
        setCommand('new Value');
    };

    return (
        <div>
            <div>{varii}</div>
            <div>{props.Component2}</div>
            <button onClick={changeTitle}>click</button>
        </div>
        
    );
}

export default MyFirstComponent;