import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";
import firebaseConf from '../../config';

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editScreen' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editScreen' : 'http://139.59.23.83:5000/api/editScreen';

class EditWelcomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pollTitle: '',
            alert: false,
            pollDescription: {},
            _notificationSystem: null,
            fileName: '',
            id: props.location.query.screenId ? props.location.query.screenId : null,
            data: null
        };
    }

    componentDidMount() {
        let welcomeId = this.state.id;
        if(welcomeId) {
            const  welcomeDataRef = firebaseConf.database().ref('WelcomeScreen/' + welcomeId);
            welcomeDataRef.on("value", function(snapshot) {
                let tempData =  snapshot.val();
                tempData.id = snapshot.key;
                console.log("tempData!!!!!!!!!!!!!!", tempData);
                this.setState({
                    data : tempData
                });
            }.bind(this));
        }       
    }

    handleForm(event){
        event.preventDefault();
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
            screen6: event.target.screen6.value,
            screenId: event.target.screenid.value
            })
        }).then(res => res.json())
        .then(screen => {
            if(screen.status == 'success') {
                // Success notification message
                console.log("this.props.history", this.props);
                this.props.history.push("/WelcomeScreen");
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
        const editData = this.state.data;
        if (!editData) {
            return 'loading........';
        }

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Edit Screen"
                content={
                  <form onSubmit={this.handleForm.bind(this)}>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen1"  placeholder="screen tw1">{editData.screen1}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen2"  placeholder="screen two">{editData.screen2}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen3"  placeholder="screen three">{editData.screen3}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen4"  placeholder="screen four">{editData.screen4}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen5"  placeholder="screen five">{editData.screen5}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Screen</ControlLabel>
                        <textarea className="form-control" rows="3" name="screen6"  placeholder="screen six">{editData.screen6}</textarea>                        
                    </FormGroup>
                    
                    
                    <input type="hidden" name="screenid" value={editData.id} />
                    {/*<button className="btn btn-fill btn-defaultValue">
                        <Link to={{ pathname: '/WelcomeScreen'}} >
                            <font color="white">Back</font>
                        </Link>
                    </button>*/}
                    <ButtonToolbar>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update
                    </Button>
                    <Button bsStyle="default" pullRight fill type="submit">
                        <Link to={{ pathname: '/WelcomeScreen'}} >
                        <font color="white">Cancel</font>
                        </Link>
                    </Button>
                    </ButtonToolbar>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default EditWelcomeScreen;

