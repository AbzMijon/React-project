//React
import React from 'react';

//Components
import Header from './Components/Header';
import Main from './Components/Main';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            headerLoginName: 'Войти',
        };
	}

	render() {
		return (
        <div className="app">
            <Header loginName = {this.state.headerLoginName} />
            <Main />
        </div>
        )
	}
}
export default App;