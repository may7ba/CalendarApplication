import React, { Component } from 'react';
import axios from 'axios';
import Doc from './Components/Doc';
import Delete from './Components/Delete';
import Update from './Components/Update';
import Search from './Components/Search';
import './App.css';


class App extends Component {

  constructor(){
      super()
      this.state={
        apoint: [],
        doc:[],
        doc1:[]
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    getDoctorDetails(){
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
getAppointment(){
  var _this = this;
      this.serverRequest =
        axios
          .get("http://localhost:1337/localhost:4000/calendarApp/v1/getAppointment")
          .then(function(result) {
            _this.setState({
              apoint: result.data

            });
          })

    }
    handleChange(event) {
    this.setState({value: event.target.value});
  }

    componentWillMount(){

          this.getAppointment();

          this.getDoctorDetails();
        }

    createAppointment(event){
        var _this = this;
            this.serverRequest =
            axios.post('http://localhost:1337/localhost:4000/calendarApp/v1/createAppointment', {
              doc_id:1,
          time:"09:00",
          subject:"Regular Checkup",
          notes:"Please do regular fitness checkup",
          date:"2016-12-17",
          p_name:"Miss Katrina",
      })
      .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });

          }

          deleteAppointment(){
              var _this = this;
                  this.serverRequest =
                  axios.post('http://localhost:1337/localhost:4000/calendarApp/v1/deleteAppointment', {
                    apoint_id:60
            })
            .then(function (response) {
          console.log(response);
          })
          .catch(function (error) {
          console.log(error);
          });

                }
handleClick(e){
    e.preventDefault();
  console.log("clicked");
}


  render() {

    return (
      <div className="App">

      <h2>  Calendar App</h2><br/>
      
        <div>
        <Doc/><br/>
        <div className="panel panel-primary">
        <div className="panel-heading"><h3>Appointments</h3></div>
        <div className="panel-body">
        {this.state.apoint.map(function(apoint) {
          return (
           <div key={apoint.apoint_id} className="apoint" >
           <br/>
           <br/>
          <h4> <strong> Doctor </strong>: {apoint.Doc_fname} {apoint.doc_lname}     <strong>Phone </strong>: {apoint.phone}<br/></h4>
              <h4><strong> Appointment Time</strong> : {apoint.time}         <strong>       Appointment Date </strong>: {apoint.date}<br/></h4>
            <h4> <strong>Subject</strong> : {apoint.subject} <strong>Notes</strong> : {apoint.notes}<br/></h4>
          <h4>  <strong>Patient Name </strong>: {apoint.p_name}<br/><Delete apoint={apoint.apoint_id}/></h4>
            <Update time={apoint.time} date={apoint.date} subject={apoint.subject} notes={apoint.notes} p_name={apoint.p_name} apoint={apoint.apoint_id}/>
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

export default App;
