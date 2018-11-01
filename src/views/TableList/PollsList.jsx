import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, Badge} from "react-bootstrap";
import { Link } from "react-router-dom";

import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import Card from "components/Card/Card.jsx";
import { pollsHeding } from "variables/Variables.jsx";

import firebaseConf from './../../config';

class PollsList extends Component {
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
    var lastPlayerRef = firebaseConf.database().ref('polls/');

    lastPlayerRef.on("value", function(data) {
      console.log("last===========>",data.val());
    }, function (error) {
      console.log("Error: " + error.code);
    });

    // let formRef = firebaseConf.database().ref('polls').orderByKey();
    const pollsRef = firebaseConf.database().ref('polls/');
    pollsRef.on("value", function(snapshot) {

        console.log("snapshot #############", snapshot.val());
        
        const pollsData = snapshot.val();
        const pollsKey = snapshot.key;
        console.log("polls key", pollsKey);
        let tempData = [], i = 0;
        for(let key in pollsData) {

            console.log("key111111111111", key);
            tempData[i] = pollsData[key];
            tempData[i].id = key;
            i++
        }

        console.log("temp data=============>", tempData);

        this.setState({
                data: tempData
        });
    }.bind(this));
  }

  deletePoll = (event,id) => {
    event.preventDefault();
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;

    // Remove single polls
    const  isDeleted = firebaseConf.database().ref('polls/' + id).remove();

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s" />,
      message: (
        <div>
          <b>Poll Deleted Successfully</b>
        </div>
      ),
      level: "error",
      position: "tr",
      autoDismiss: 5
    });
    // red
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
            <button className="btn btn-fill btn-info pull-right"><Link to={{ pathname: '/AddPoll'}} ><font color="white">Create New Poll</font></Link></button>
              <Card
                title="Polls"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {pollsHeding.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      { data.map((obj, key) => {
                        return (
                            <tr key={key}>
                                {/*<td>{key}</td>*/}
                                <td><Link to={{ pathname: '/PollDetails', query: obj.id  }}>{obj.title}</Link> <Badge>Total Vote {obj.totalVote}</Badge></td>
                                <td>                                                     
                                    
                                    <button className="btn btn-fill btn-sm btn-info"><Link to={{ pathname: '/editPoll', query: { pollId: obj.id }}} ><font color="white">Edit</font></Link></button>
                                    &nbsp;<Button bsStyle="danger" className="btn-fill" bsSize="small" onClick={(e) => {this.deletePoll(e,obj.id)}}>Delete</Button>
                                </td>
                            </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
              {/*<Button bsStyle="info" className="btn-fill btn-md" href="/AddPoll">Create Poll</Button>*/}
              {/*<button className="btn btn-fill btn-info"><Link to={{ pathname: '/AddPoll'}} ><font color="white">Create Poll</font></Link></button>*/}
              {/*<Button className="btn-fill btn-md" ><Link to={{ pathname: '/AddPoll'}} type="primary">Create Poll</Link></Button>*/}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PollsList;
