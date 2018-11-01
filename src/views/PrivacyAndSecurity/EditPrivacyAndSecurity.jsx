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

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editUPS' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editUPS' : 'http://139.59.23.83:5000/api/editUPS';

class EditPrivacyAndSecurity extends Component {

    constructor(props) {
        console.log("upsid===========>", props.location.query.upsid);
        super(props);
        this.state = {
            pollTitle: '',
            alert: false,
            pollDescription: {},
            _notificationSystem: null,
            fileName: '',
            id: props.location.query.upsid ? props.location.query.upsid : null,
            data: null
        };
    }

    componentDidMount() {
        let id = this.state.id;
        if(id) {
            const  uPSDataRef = firebaseConf.database().ref('PrivacyAndSecurity/' + id);
            uPSDataRef.on("value", function(snapshot) {
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
                privacyPolicy: event.target.privacyPolicy.value,
                securityPolicy: event.target.securityPolicy.value,
                userAgreement: event.target.userAgreement.value,
                id: event.target.upsid.value
            })
        }).then(res => res.json())
        .then(screen => {
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
        const editData = this.state.data;
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@2", editData);
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
                title="Edit Page"
                content={
                  <form onSubmit={this.handleForm.bind(this)}>
                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Security & Policy</ControlLabel>
                        <textarea className="form-control" rows="3" name="securityPolicy"  placeholder="TEXT">{editData.securityPolicy}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Privacy & Policy</ControlLabel>
                        <textarea className="form-control" rows="3" name="privacyPolicy"  placeholder="TEXT">{editData.privacyPolicy}</textarea>                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>User Agreement</ControlLabel>
                        <textarea className="form-control" rows="3" name="userAgreement"  placeholder="TEXT">{editData.userAgreement}</textarea>                        
                    </FormGroup>                    
                    
                    <input type="hidden" name="upsid" value={editData.id} />
                    <ButtonToolbar>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update
                    </Button>
                    <button className="btn btn-fill btn-default pull-right">
                        <Link to={{ pathname: '/PrivacyAndSecurity'}} >
                        <font color="white">Cancel</font>
                        </Link>
                    </button>
                    <div className="clearfix" />
                    </ButtonToolbar>
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

export default EditPrivacyAndSecurity;

