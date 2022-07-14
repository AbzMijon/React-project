import React, { Component } from "react";

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
            return <h2>Ой, что-то пошло не так ;(</h2>
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