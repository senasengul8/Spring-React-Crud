import React from "react";

class AddClientRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "" };
        this.updateEmail = this.updateEmail.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    updateName(event) {
        this.setState({ name: event.target.value, email: this.state.email });
    }
    updateEmail(event) {
        this.setState({ email: event.target.value, name: this.state.name });
    }

    render() {
        return (
            <div key="addForm">
                <label>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.updateName}
                ></input>
                <label>Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={this.updateEmail}
                ></input>
                <button onClick={() => this.props.addClient(this.state)}>
                    Add Client
                </button>
            </div>
        );
    }
}
export default AddClientRow;