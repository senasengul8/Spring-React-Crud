import "./App.css";
import React from "react";
import ClientRow from "./ClientRow";
import AddClientRow from "./AddClientRow";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.deleteClient.bind(this);
        this.addClient.bind(this);
        this.state = { clients: [] };
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:8080/clients");
        const body = await response.json();
        this.setState({ clients: body });
    }

    deleteClient = (id) => {
        fetch("http://localhost:8080/clients/" + id, { method: "DELETE" });
        this.setState({
            clients: this.state.clients.filter((client) => client.id != id),
        });
    };

    addClient = async (client) => {
        const bodyData = { name: client.name, email: client.email };
        const response = await fetch("http://localhost:8080/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyData),
        });
        const getClientsResponse = await fetch("http://localhost:8080/clients");
        const getClientsBody = await getClientsResponse.json();
        this.setState({ clients: getClientsBody });
    };

    render() {
        const { clients } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Clients</h2>
                    <div className="App-intro">
                        {clients.map((client) => (
                            <ClientRow
                                client={{
                                    name: client.name,
                                    email: client.email,
                                    id: client.id,
                                }}
                                deleteClient={this.deleteClient}
                            />
                        ))}
                    </div>
                    <div className="addClientDiv">
                        <AddClientRow addClient={this.addClient} />
                    </div>
                </header>
            </div>
        );
    }
}
export default App;