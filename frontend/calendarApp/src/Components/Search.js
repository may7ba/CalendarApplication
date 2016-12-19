import React, { Component } from 'react';
import axios from 'axios';




class Search extends Component {
  constructor(){
    super();
    this.state={
    apoint: [],doc_id:''
  }
this.getAppointmentBasedonDoctorId=this.getAppointmentBasedonDoctorId.bind(this);
}

getAppointmentBasedonDoctorId(val){
var flag=true;
if(flag==true)
  var _this = this;
      this.serverRequest =
        axios
          .get("http://localhost:1337/localhost:4000/calendarApp/v1/getAppointmentByDocId?doc_id="+val)
          .then(function(result) {
            _this.setState({
              apoint: result.data

            });
          })


flag=false;
    }


    handleChange(event) {
        this.setState({value: event.target.value});
      }

componentWillUnmount(){
this.getAppointmentBasedonDoctorId();
}
test(e){
           e.preventDefault();
             console.log(this.refs.doc_id.value);
             this.setState({
     doc_id : this.refs.doc_id.value

   });

         }

   render() {
      return (
         <div>
         <div className="panel panel-primary">
          <div className="panel-heading"> <h3> Search Appointment</h3><br/><br/></div>
          <div className="panel-body">
          <form onSubmit={this.getAppointmentBasedonDoctorId(this.state.doc_id)}>

      <div className="form-group" className="col-xs-4">
      Doctor
      <select ref="doc_id" className="form-control" >

      <option value="1">John Watson</option>
      <option value="2">Sherlock Holmes</option>
      <option value="3">Ray Palmer</option>
      <option value="4">Tony Stark</option>
      <option value="5">James Bond</option>
      </select>
      </div>
      <br/>

      <input type="submit" className="btn btn-primary" value="Submit" onClick={this.test.bind(this)}/>
      </form>
      <div>
      {this.state.apoint.map(function(apoint) {
        return (
         <div key={apoint.apoint_id} className="apoint" >
         <br/>
         <br/>
        <h4> <strong> Doctor </strong>: {apoint.Doc_fname} {apoint.doc_lname}     <strong>Phone </strong>: {apoint.phone}<br/></h4>
            <h4><strong> Appointment Time</strong> : {apoint.time}         <strong>       Appointment Date </strong>: {apoint.date}<br/></h4>
          <h4> <strong>Subject</strong> : {apoint.subject} <strong>Notes</strong> : {apoint.notes}<br/></h4>
        <h4>  <strong>Patient Name </strong>: {apoint.p_name}<br/></h4>

          <br/>


         </div>
       );
     })}
      </div>
          </div>
          </div>
         </div>
      );
   }

}

export default Search;
