'use strict'
import React from 'react';
import ReactDom from 'react-dom'
import faker from 'faker';
import {say} from 'cowsay';
import { think, SQUIRREL } from 'cowsay';
import './style/app.scss';
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <header>
            <h1>Generate Cowsay Lorem</h1>
            </header>
        )
    }
}
class App extends React.Component{
  constructor(props){
        super(props);
        this.cowsay = this.cowsay.bind(this);
        this.selectCow = this.selectCow.bind(this);
        this.state = {
            content: 'click me to say moo',
            selectedValue: ''
        }
    }
    cowsay(event){
        let comment = faker.hacker.phrase();
        let content = say({
            text: comment
          })
       let selectedValue = event.target.value;
       this.setState({content,selectedValue})
    }
    selectCow(event){
       console.log(event.target.value)
         if(event.target.value === 'squirrel'){
          let content = think({
            text: faker.hacker.phrase(),
            cow: SQUIRREL,
            eyes: 'pp',
            tongue: ';;',
          })
          let selectedValue = event.target.value;
          this.setState({content,selectedValue})
        }
        else{
            this.cowsay(event);
        }   
    }
    render(){
        return (
            <div>
                <Header />
                <select value ={this.state.selectedValue} onChange ={this.selectCow}>
                  <option value = 'select' defaultValue>select a cow</option>
                  <option value = 'squirrel'>SQUIRREL</option>
                  <option value = 'cow'>COW</option>
                </select>
                <p>{this.state.content}</p>
                <button onClick = {this.cowsay}>Click Me</button>
                <pre className="animal">{this.state.content}</pre>
                </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));