import React, { Component } from "react";
import { Grid, Row, Col, Table, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import Card from "components/Card/Card.jsx";
import { usersHeding } from "variables/Variables.jsx";

import firebaseConf from './../../config';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        alert: false,
        alertData: {},
        _notificationSystem: null
    };
  }

  componentDidMount(e) {
    firebaseConf.database().ref('myUserDetail').on('value', db => {
      console.log("users data list=====>", db.val());
    });

    var lastPlayerRef = firebaseConf.database().ref('polls/');

    lastPlayerRef.on("value", function(data) {
      console.log("last===========>",data.val());
    }, function (error) {
      console.log("Error: " + error.code);
    });

    // let formRef = firebaseConf.database().ref('polls').orderByKey();
    const usersRef = firebaseConf.database().ref('myUserDetail/');
    usersRef.on("value", function(snapshot) {

        console.log("snapshot #############", snapshot.val());
        
        const usersData = snapshot.val();
        const usersKey = snapshot.key;
        console.log("users key", usersKey);
        let tempData = [], i = 0;
        for(let key in usersData) {

            console.log("key111111111111", key);
            tempData[i] = usersData[key];
            tempData[i].id = key;
            i++
        }

        console.log("temp data=============>", tempData);

        this.setState({
                data: tempData
        });
    }.bind(this));
  }

  deleteUser = (event,id) => {
    event.preventDefault();
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;

    // Remove single polls
    const  isDeleted = firebaseConf.database().ref('myUserDetail/' + id).remove();

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s" />,
      message: (
        <div>
          <b>User Deleted Successfully</b>
        </div>
      ),
      level: "error",
      position: "tr",
      autoDismiss: 5
    });
    
    console.log("poll deleted.......................", id);
  }

  detailsPoll = (event,id) => {
    event.preventDefault();
    console.log("poll details called.......................", id);
  }

  render() {
    const { data } = this.state;
    if (!data) {
        return 'loading........';
    }

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Users"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {usersHeding.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      { data.map((obj, key) => {
                        return (
                            <tr key={key}>
                                {/*<td>{key}</td>*/}
                                {/*<td><Link to={{ pathname: '/PollDetails', query: obj.id  }}>{obj.profileName}</Link></td>*/}
                                <td>{obj.profileName}</td>
                                <td>{obj.email}</td>
                                {/*<td>
                                  {obj.profilePic ? (
                                    <img src={obj.profilePic} widith="35px" height="35px" alt="..." />
                                  ) : (
                                    <img src="https://firebasestorage.googleapis.com/v0/b/collectivegiving.appspot.com/o/users%2Fuser.png?alt=media&token=3d0aa0ca-3d82-4128-83fa-791dde421b80" widith="35px" height="35px" alt="..." />
                                  )}
                                </td>*/}
                                <td>
                                    <button className="btn btn-fill btn-sm btn-info"><Link to={{ pathname: '/EditUser', query: { userid: obj.id }}} ><font color="white">Edit</font></Link></button>
                                    {/*<Button bsStyle="info" className="btn-fill" bsSize="small" onClick={(e) => {this.editUser(e,obj.id)}}>Edit</Button>*/}
                                    <Button bsStyle="danger" className="btn-fill" bsSize="small" onClick={(e) => {this.deleteUser(e,obj.id)}}>Delete</Button>
                                </td>
                            </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Users;
