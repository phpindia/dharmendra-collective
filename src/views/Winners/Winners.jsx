import React, { Component } from "react";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import Card from "components/Card/Card.jsx";
import { winnersHeding } from "variables/Variables.jsx";

import firebaseConf from '../../config';

class Winners extends Component {
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
    /*firebaseConf.database().ref('myWinnerDetails').on('value', db => {
      console.log("users data list=====>", db.val());
    });*/

    /*var lastPlayerRef = firebaseConf.database().ref('polls/');

    lastPlayerRef.on("value", function(data) {
      console.log("last===========>",data.val());
    }, function (error) {
      console.log("Error: " + error.code);
    });*/

    // let formRef = firebaseConf.database().ref('polls').orderByKey();
    const usersRef = firebaseConf.database().ref('myWinnerDetails/');
    usersRef.on("value", function(snapshot) {

        console.log("snapshot #############", snapshot.val());
        
        const winnersData = snapshot.val();
        const winnersKey = snapshot.key;
        console.log("users key", winnersKey);
        let tempData = [], i = 0;
        for(let key in winnersData) {

            console.log("key111111111111", key);
            tempData[i] = winnersData[key];
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
    const  isDeleted = firebaseConf.database().ref('myWinnerDetails/' + id).remove();

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
    console
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
                title="Winners"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {winnersHeding.map((prop, key) => {
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
                                <td>{obj.winnerName}</td>
                                <td>{obj.totalVote}</td>
                                <td>{obj.commulativeTotal}</td>
                                <td>{obj.week}</td>
                                {/*<td>
                                  {obj.profilePic ? (
                                    <img src={obj.profilePic} widith="35px" height="35px" alt="..." />
                                  ) : (
                                    <img src="https://firebasestorage.googleapis.com/v0/b/collectivegiving.appspot.com/o/users%2Fuser.png?alt=media&token=3d0aa0ca-3d82-4128-83fa-791dde421b80" widith="35px" height="35px" alt="..." />
                                  )}
                                </td>*/}
                                <td>                                                     
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

export default Winners;
