import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
  state = {
    friendToAdd: {
        id: '',
        name: '',
        age: '',
        email: '',
    }
  };

  handleChange = e => {
    this.setState({
      friendToAdd: {
        ...this.state.friendToAdd,
        [e.target.name]: e.target.value
      }
    });
  };

  add = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/friends', this.state.friendToAdd)
      .then(res => {
        console.log(res);
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.add}>
        <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.friendToAdd.name}
            onChange={this.handleChange}
          />
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={this.state.friendToAdd.age}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.friendToAdd.email}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default Login;