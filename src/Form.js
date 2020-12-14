import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    const initialState = {
      name: '',
      job: '',
    }
  
    this.state = initialState
  } 

render() {
  const { name, job } = this.state;
  const handleChange = (event) => {
    const { name, value } = event.target;
      this.setState({ 
      [name]: value 
    });
  }
  
  const submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState)
  }
  
  return (
    <form>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Your name" name='name' id='name' value={ name } onChange={ handleChange } />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Your Job" name='job' id='job' value={ job } onChange={ handleChange } />
        </div>
      </div>
      <input className="btn btn-primary btn-sm" type="button" value="Submit" onClick={submitForm} />
    </form>
  )
}
}

export default Form
