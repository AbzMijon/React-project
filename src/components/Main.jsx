import React from 'react';

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
                <div className="container">
                    <ul className="tools">
                        <li className="tools__item">
                            <p className="tools__category">Автор</p>
                            <i className ="fa-solid fa-angle-right"></i>
                            <div className="tools__hidden-block">
                                <ul className="tools__hidden-list">
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                </ul>
                            </div>
                        </li>
                        <li className="tools__item">
                            <p className="tools__category">Жанр</p>
                            <i className ="fa-solid fa-angle-right"></i>
                            <div className="tools__hidden-block">
                                <ul className="tools__hidden-list">
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                </ul>
                            </div>
                        </li>
                        <li className="tools__item">
                            <p className="tools__category">Показать все</p>
                            <i className ="fa-solid fa-angle-right"></i>
                            <div className="tools__hidden-block">
                                <ul className="tools__hidden-list">
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                    <li className="tools__hidden-item"></li>
                                </ul>
                            </div>
                        </li>
                        <li className="tools__item">
                            <input type="checkbox" className="tools__checkbox" />
                            <p className="tools__available">Посмотреть доступные</p>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Main;