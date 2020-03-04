import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = {  
            persons:[
                {firstname: "احمدرضا", lastname: "سعیدی", age: "۲۵"},
                {firstname: "میلاد", lastname: "اسدی", age: "۳۰"},
                {firstname: "مجید", lastname: "فرحپور", age: "۴۰"}
            ]
    }
    render() { 
        const { persons } = this.state;
        return ( 
        <div>
            <Persons persons={persons}/>
        </div> 
        );
    }
}
 
export default App;