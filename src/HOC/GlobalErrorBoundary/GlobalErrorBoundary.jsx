import React, { Component } from "react";

//Routing
import { Link } from "react-router-dom";

//styles
import './globalErrorBoundary.scss';

class GlobalErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        if(this.state.hasError) {
            return (
                <div className="global-error">
                    <h2 className="global-error__title">Ой, что-то пошло не так! :(</h2>
                    <Link to='/'>
                        <button className="global-error__btn btn" type="button">Сообщить о проблеме</button>
                    </Link>
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    {this.props.children}
                </React.Fragment>
        )
        }
    }
}

export default GlobalErrorBoundary;