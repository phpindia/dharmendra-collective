import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";
import firebaseConf from '../../config';

console.log("firebae poll add page", firebaseConf);

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addScreen' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addScreen' : 'http://139.59.23.83:5000/api/addScreen';

class AddWelcomeScreen extends Component {
  state = {    
    pollTitle: null,
    pollDescription: null,
    _notificationSystem: null,
    fileName: ''
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  handleForm(event){
    event.preventDefault();
    //alert("hey hey");

    // Form submit code goes here
    fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          screen1: event.target.screen1.value,
          screen2: event.target.screen2.value,
          screen3: event.target.screen3.value,
          screen4: event.target.screen4.value,
          screen5: event.target.screen5.value,
          screen6: event.target.screen6.value          
        })
      }).then(res => res.json())
      .then(screen => {
        console.log(screen);
        //this line changes the route to polls list
        //use if else condition to define success and failure result
        //change the api accordingly to get success true or false in return
          if(screen.status == 'success') {
            // Success notification message
            console.log("this.props.history", this.props);
            this.props.history.push("/welcomeScreen");
          } else {
            //send somewhere else
            this._notificationSystem.addNotification({
              message: 'Failed!, Internal Server Error',
              level: 'error',
              position: "tr",
              autoDismiss: 5
            });
          }
      });
  }

  render() {
    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Add Screen"
                content={
                  <form onSubmit={this.handleForm.bind(this)}>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen One</ControlLabel>
                        <FormControl componentClass="textarea" name="screen1"  placeholder="screen one" />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen Two</ControlLabel>
                        <FormControl componentClass="textarea" name="screen2"  placeholder="screen two" />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen Three</ControlLabel>
                        <FormControl componentClass="textarea" name="screen3"  placeholder="screen three" />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen Four</ControlLabel>
                        <FormControl componentClass="textarea" name="screen4"  placeholder="screen four" />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen Five</ControlLabel>
                        <FormControl componentClass="textarea" name="screen5"  placeholder="screen five" />
                    </FormGroup>


                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen Six</ControlLabel>
                        <FormControl componentClass="textarea" name="screen6"  placeholder="textarea" />
                    </FormGroup>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Save
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default AddWelcomeScreen;

