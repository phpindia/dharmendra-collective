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

// U - user agreement, P- Privacy Policy, S- Security Policy
//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addUPS' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addUPS' : 'http://139.59.23.83:5000/api/addUPS';

class AddPrivacyAndSecurity extends Component {
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
            securityPolicy: event.target.securityPolicy.value,
            privacyPolicy: event.target.privacyPolicy.value,
            userAgreement: event.target.userAgreement.value    
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
            this.props.history.push("/PrivacyAndSecurity");
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
                        <ControlLabel>Security Policy</ControlLabel>
                        <FormControl componentClass="textarea" name="securityPolicy"  placeholder="Text" />
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Privacy Policy</ControlLabel>
                        <FormControl componentClass="textarea" name="privacyPolicy"  placeholder="Text" />
                    </FormGroup>

                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>User Agreement</ControlLabel>
                        <FormControl componentClass="textarea" name="userAgreement"  placeholder="Text" />
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

export default AddPrivacyAndSecurity;

