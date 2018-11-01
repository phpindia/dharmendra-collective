import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";
import firebaseConf from '../../config';

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editUser' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editUser' : 'http://139.59.23.83:5000/api/editUser';

class EditUser extends Component {

    constructor(props) {
        console.log("userid===========>", props.location.query.userid);
        super(props);
        this.state = {
            pollTitle: '',
            alert: false,
            pollDescription: {},
            _notificationSystem: null,
            fileName: '',
            id: props.location.query.userid ? props.location.query.userid : null,
            data: null
        };
    }

    componentDidMount() {
        let id = this.state.id;
        if(id) {
            const  uPSDataRef = firebaseConf.database().ref('myUserDetail/' + id);
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
        console.log("====================>", event.target.email.value);
        console.log("profile name", event.target.profileName.value);
        console.log("user id", event.target.userid.value);
        // Form submit code goes here
        fetch(API_URL, {
            method: 'POST',
            headers: {
            'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: event.target.email.value,
                profileName: event.target.profileName.value,
                id: event.target.userid.value
            })
        }).then(res => res.json())
        .then(screen => {
            if(screen.status == 'success') {
                // Success notification message
                console.log("this.props.history", this.props);
                this.props.history.push("/Users");
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
                title="Edit User Profile"
                content={
                  <form onSubmit={this.handleForm.bind(this)}>                    
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Email</ControlLabel>
                        <input type="text" defaultValue={editData.email} className="form-control" name="email" />                        
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Profile Name</ControlLabel>
                        <input type="text" defaultValue={editData.profileName} className="form-control" name="profileName" />
                    </FormGroup>          
                    
                    <input type="hidden" name="userid" value={editData.id} />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Update
                    </Button>
                    <button className="btn btn-fill btn-default pull-right">
                        <Link to={{ pathname: '/Users'}} >
                        <font color="white">Cancel</font>
                        </Link>
                    </button>
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

export default EditUser;

