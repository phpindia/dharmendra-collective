import React, { Component } from "react";
import { Grid, Row, Col, Table} from "react-bootstrap";
import {Link } from "react-router-dom";

import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import Card from "components/Card/Card.jsx";
import { uPSHeding } from "variables/Variables.jsx";

import firebaseConf from '../../config';

class PrivacyAndSecurity extends Component {
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
    const privacyAndSecurityRef = firebaseConf.database().ref('PrivacyAndSecurity/');
    privacyAndSecurityRef.on("value", function(snapshot) {

        console.log("snapshot #############", snapshot.val());
        
        const privacyAndSecurityData = snapshot.val();
        if (!privacyAndSecurityData) {
          this.setState({
            dataStatus: false
          });
        } else {
          const privacyAndSecurityKey = snapshot.key;
          console.log("polls key", privacyAndSecurityKey);
          let tempData = {}, i = 0;
          for(let key in privacyAndSecurityData) {

              console.log("key111111111111", key);
              tempData = privacyAndSecurityData[key];
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

  deleteUPS = (event,id) => {
    event.preventDefault();
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;

    // Remove single polls
    const  isDeleted = firebaseConf.database().ref('PrivacyAndSecurity/' + id).remove();

    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s" />,
      message: (
        <div>
          <b>Item Deleted Successfully</b>
        </div>
      ),
      level: "error",
      position: "tr",
      autoDismiss: 5
    });
    // red
    console.log("UPS deleted.......................", id);
  }

  detailsUPS = (event,id) => {
    event.preventDefault();
    console.log("UPS details called.......................", id);
  }

  render() {
    const { data, dataStatus } = this.state;
    console.log("my loading data======>", data);
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
                !dataStatus?
                  <button className="btn btn-fill btn-info pull-right"><Link to={{ pathname: '/AddPrivacyAndSecurity'}} ><font color="white">Add Privacy And Security</font></Link></button>
                  :
                  <button className="btn btn-fill btn-info pull-right"><Link to={{ pathname: '/EditPrivacyAndSecurity', query: { upsid: data.id }}} ><font color="white">Edit Privacy And Security</font></Link></button>
              }
              <Card
                title="Privacy And Security"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  dataStatus?
                  <Table striped hover>
                    <thead>
                      <tr>
                        {uPSHeding.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                          <tbody key={data.id}>
                            <tr key={1}>
                              <td>Security & Policy</td><td>{data.securityPolicy}</td>
                            </tr>
                            <tr key={2}>
                              <td>Privacy & Policy</td><td>{data.privacyPolicy}</td>
                            </tr>
                            <tr key={3}>
                              <td>User Agreement</td><td>{data.userAgreement}</td>
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

export default PrivacyAndSecurity;
