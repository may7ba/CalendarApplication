import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
  constructor(){
    super();
    this.state={

        time: '',
        subject: '',
        notes: '',
        date: '',
        p_name: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }

  updateAppointment(){
    
    var _this = this;
        this.serverRequest =
        axios.post('http://localhost:1337/localhost:4000/calendarApp/v1/updateAppointment', {
          doc_id:this.refs.doc_id.value,
      time:this.refs.time.value,
      subject:this.refs.subject.value,
      notes:this.refs.notes.value,
      date:this.refs.date.value,
      p_name:this.refs.p_name.value,
      apoint_id:this.refs.apoint.value
  })
  .then(function (response) {
  console.log(response);
  })
  .catch(function (error) {
  console.log(error);
  });

      }

handleChange(event){
  //this.setState({doc_id: event.target.doc_id});
  this.setState({time: event.target.time});
  this.setState({subject: event.target.subject});
  this.setState({notes: event.target.notes});
  this.setState({date: event.target.date});
  this.setState({p_name: event.target.p_name});
}


   render() {
      return (
        <div>
<div className="panel panel-primary">
      <div className="panel-heading">  <h3>Update Appointment</h3></div>
        <div className="panel-body">
           <form onSubmit={this.updateAppointment.bind(this)}>
       <div>
       <div className="form-group" className="col-xs-4">
       Doctor:
       <select ref="doc_id" required className="form-control" >
       <option disabled selected value> -- select an option -- </option>
       <option value="1">John Watson</option>
       <option value="2">Sherlock Holmes</option>
       <option value="3">Ray Palmer</option>
       <option value="4">Tony Stark</option>
       <option value="5">James Bond</option>
       </select><br/>
       </div>
          <div className="col-xs-4">   Time: <input type="time" ref="time"  className="form-control" defaultValue={this.props.time} onChange={this.handleChange}/><br/> </div>
          <div className="col-xs-4"> Subject:  <input type="text" ref="subject" className="form-control"  defaultValue={this.props.subject} onChange={this.handleChange}/><br/> </div>
        <div className="col-xs-4">     Notes: <input type="text" ref="notes" className="form-control"  defaultValue={this.props.notes} onChange={this.handleChange}/><br/> </div>
        <div className="col-xs-4">   Date:  <input type="date" ref="date" className="form-control"  defaultValue={this.props.date} onChange={this.handleChange}/><br/> </div>
        <div className="col-xs-4">     Patient Name: <input type="text"  className="form-control" ref="p_name" defaultValue={this.props.p_name} onChange={this.handleChange}/><br/> </div>
           <input type="hidden"  value={this.props.apoint} ref="apoint" />
       </div>
       <div>
       </div>
       <input type="submit" className="btn btn-primary" value="Update"/>
       </form>

       </div>
       </div>
        </div>
      );
   }
}

export default Update;
