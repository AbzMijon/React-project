//React
import React from "react";

//Components
import { testLog } from './test'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Defolt..1',
            arr: [],
            num: 0,
        }
        
    }
    setValuePlus() {
        this.setState(state => {
            return (
                {title:state.title + '1'}
            )
        })
    }
    
    setValueMinus() {
        this.setState(state => {
            return (
                {title:state.title.substring(0, this.state.title.length - 1)}
            )
        })
    }

    addNum() {
        this.setState(state => {
            return (
                {num:state.num + 1}
            )
        },() => {
            console.log(this.state.num);
        })
    }

    render() {
        return (
            <div className="app">
                <header>
                    <h1>
                        {this.state.title}
                    </h1>
                <button onClick={() => this.setValuePlus()}>+</button>
                <button onClick={() => this.setValueMinus()}>-</button>
                <button onClick={() => this.addNum()}>click</button>
            </header>
            <main>
                <div className="image-block">
                    <img src="/images/sun.jpg" alt="" />
                </div>
            </main>
            </div>
            )
    }
}
export default App