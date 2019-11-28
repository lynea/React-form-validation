import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class LoginForm extends React.Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange(event){
        this.setState({username: event.target})
    }


    render() {
        return (

            <form >
                <label>
                    Name:
                  <input type="text" />
                </label>
                <label>
                    password
                  <input type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}



export default LoginForm;