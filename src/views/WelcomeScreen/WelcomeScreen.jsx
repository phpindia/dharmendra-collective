import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import Card from "components/Card/Card.jsx";
import { screenHeding } from "variables/Variables.jsx";

import firebaseConf from './../../config';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        alert: false,
        alertData: {},
        _notificationSystem: null,
        dataStatus: true
    };
  }

  componentDidMount(e) {
    // let formRef = firebaseConf.database().ref('polls').orderByKey();
    const welcomeScreenRef = firebaseConf.database().ref('WelcomeScreen/');
    welcomeScreenRef.on("value", function(snapshot) {

        //console.log("snapshot #############", snapshot.val().id);
        
        //console.log("welcome screen keyyyyyyyyyyyyyyy id=====>", snapshot.key);
        const welcomeData = snapshot.val();
        if(!welcomeData) {
          this.setState({
            dataStatus: false
          });
        } else {
          const welcomeKey = snapshot.key;
          console.log("welcomeData==", welcomeData);
          let tempData = {}, i = 0;
          for(let key in welcomeData) {

              console.log("welcomeData[key]", welcomeData[key]);
              tempData = welcomeData[key];
              tempData.id = key;
              i++
          }

          console.log("temp data=============>", tempData);

          this.setState({
                  data: tempData
          });
        }
    }.bind(this));
  }

  deletePoll = (event,id) => {
    event.preventDefault();
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;

    // Remove single polls
    const  isDeleted = firebaseConf.database().ref('WelcomeScreen/' + id).remove();

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
    console.log("poll deleted.......................", id);
  }

  detailsPoll = (event,id) => {
    event.preventDefault();
    console.log("poll details called.......................", id);
  }

  render() {
    const { data, dataStatus } = this.state;
    console.log("data idddddddddddddd", data);
    if (!data) {
        return 'loading........';
    }

    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              {
                !dataStatus ? <button className="btn btn-fill btn-info pull-right"><Link to={{ pathname: '/AddWelcomeScreen', query: { screenId: data.id }}} ><font color="white">Add Screen</font></Link></button> :
                <button className="btn btn-fill btn-info pull-right"><Link to={{ pathname: '/EditWelcomeScreen', query: { screenId: data.id }}} ><font color="white">Edit Screen</font></Link></button>
              }
              <Card
                title="Screens"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  dataStatus?
                  <Table striped hover>
                    <thead>
                      <tr>
                        {screenHeding.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                          <tbody key={data.id}>
                            <tr key={1}>
                              <td>Screen one</td><td>{data.screen1}</td>
                            </tr>
                            <tr key={2}>
                            <td>Screen Two</td><td>{data.screen2}</td>
                            </tr>
                            <tr key={3}>
                            <td>Screen Three</td><td>{data.screen3}</td>
                            </tr>
                            <tr key={4}>
                              <td>Screen Four</td><td>{data.screen4}</td>
                            </tr>
                            <tr key={5}>
                              <td>Screen Five</td><td>{data.screen5}</td>
                            </tr>
                            <tr key={6}>
                              <td>Screen Six</td><td>{data.screen6}</td>
                            </tr>
                          </tbody>
                  </Table>
                  : ''
                }
              />
              {/*<Button bsStyle="info" className="btn-fill btn-md" href="/AddPoll">Create Poll</Button>*/}
                {/*<button className="btn btn-fill btn-info"><Link to={{ pathname: '/AddWelcomeScreen'}} ><font color="white">Add New</font></Link></button>*/}
              {/*<Button className="btn-fill btn-md" ><Link to={{ pathname: '/AddPoll'}} type="primary">Create Poll</Link></Button>*/}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WelcomeScreen;
