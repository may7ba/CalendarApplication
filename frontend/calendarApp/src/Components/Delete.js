import React, { Component } from 'react';
import axios from 'axios';


class  Delete extends Component {
  deleteAppointment(){
      var _this = this;
          this.serverRequest =
          axios.post('http://localhost:1337/localhost:4000/calendarApp/v1/deleteAppointment', {
            apoint_id:this.refs.apoint.value
    })
    .then(function (response) {
  console.log(response);
  })
  .catch(function (error) {
  console.log(error);
  });

        }


   render(props) {

      return (
         <div>
            <form onSubmit={this.deleteAppointment.bind(this)}>
            <input type="hidden" value={this.props.apoint} ref="apoint" />
            <button type="submit" className="btn btn-danger">Delete</button>
            </form>
         </div>
      );
   }
}

export default Delete;
