import React, { Component } from 'react';
import axios from 'axios';

class Doc extends Component {
  contructor(){

    this.state={
      apoint: [],
      doc1:[],value:''
    }
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});

}
DoctorDetails(){
  var _this = this;
      this.serverRequest =
        axios
          .get("http://localhost:1337/localhost:4000/calendarApp/v1/getDoctorDetails")
          .then(function(result) {
            _this.setState({
              doc1: result.data

            });
          })

    }
    componentWillMount(){



          this.DoctorDetails();
        }


handleSubmit(e){
  e.preventDefault();
  this.setState({value: e.target.value});
  console.log(this.refs.doc_id.value);
  console.log("Doc_id="+e.target.value);

    console.log(this.refs.time.value);
      console.log(this.refs.subject.value);
        console.log(this.refs.notes.value);
          console.log(this.refs.date.value);
            console.log(this.refs.p_name.value);
}
  createAppointment(){
    var _this = this;
        this.serverRequest =
        axios.post('http://localhost:4000/calendarApp/v1/createAppointment', {
          doc_id:this.refs.doc_id.value,
      time:this.refs.time.value,
      subject:this.refs.subject.value,
      notes:this.refs.notes.value,
      date:this.refs.date.value,
      p_name:this.refs.p_name.value
  })
  .then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

      }
      yourChangeHandler(event){
        event.preventDefault();
      console.log(event.target.value)
}





   render() {


      return (

         <div>
         <div className="panel panel-primary">
          <div className="panel-heading"> <h3> Create Appointment</h3><br/><br/></div>
          <div className="panel-body">
            <form onSubmit={this.createAppointment.bind(this)}>
        <div>
        <div className="form-group" className="col-xs-4">
        Doctor:
        <select  ref="doc_id" className="form-control" required >
         <option disabled selected value> -- select an option -- </option>
        <option value="1">John Watson</option>
        <option value="2">Sherlock Holmes</option>
        <option value="3">Ray Palmer</option>
        <option value="4">Tony Stark</option>
        <option value="5">James Bond</option>
        </select>
        </div>
        <br/><div className="col-xs-4">
              Time: <input type="time" ref="time" className="form-control"  /><br/></div>
          <div className="col-xs-4">  Subject:  <input type="text" ref="subject" className="form-control"/><br/></div>
          <div className="col-xs-4">    Notes: <input type="text" ref="notes" className="form-control"/><br/></div>
          <div className="col-xs-4">  Date:  <input type="date" ref="date" className="form-control"/><br/></div>
          <div className="col-xs-4">    Patient Name: <input type="text" ref="p_name" className="form-control"/><br/></div>
        </div>
        <div>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Submit"/>
        </form>
        </div>
        </div>
         </div>
      );
}

}

export default Doc;
