import React, { Component } from "react";
import ws from "./services/ws";
import {
    Header,
    Content,
    UsersList,
    Chat,
    RouletteCircle,
    Login
} from "./components";
import "./App.scss";

class App extends Component {
    constructor() {
        super();
        this.onLoginHandler = this.onLoginHandler.bind(this);
    }

    state = {
        me: null,
        users: []
    };

    componentDidMount() {
        ws.on("CHANGE_USERS_LIST", data => {
            console.log("CHANGE_USERS_LIST");
            this.setState({
                users: data.users
            });
        });
    }

    onLoginHandler(user) {
        this.setState({
            me: user
        });
    }

    render() {
        return (
            <div className="App">
                <Header id={this.state.user} />
                <Content>
                    {this.state.me ? (
                        <>
                            <UsersList users={this.state.users} />
                            <RouletteCircle users={this.state.users} />
                            <Chat />
                        </>
                    ) : (
                        <Login onLogin={this.onLoginHandler} />
                    )}
                </Content>
            </div>
        );
    }
}

export default App;
