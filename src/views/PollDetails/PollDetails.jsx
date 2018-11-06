import React, { Component } from "react";
import { Grid, Row, Col, Table, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
//import { pollsHeding, thArray, tdArray } from "variables/Variables.jsx";
import moment from 'moment';
//const moment = require('moment');

import firebaseConf from '../../config';

class PollDetails extends Component {
  constructor(props) {
    console.log("details props==========>", props.location.query);
    super(props);
    this.state = {
        data: [],
        pollId: props.location.query,
        alert: false,
        alertData: {}
    };
  }

  componentDidMount(e) {

    const { pollId } = this.state;
    var pollRef = firebaseConf.database().ref('polls/' + pollId);

    pollRef.on("value", function(data) {
      console.log("poll details data ===========>",data.val());
      const tempData = data.val();
      tempData.id = data.key;
      console.log("key------------", tempData);
      this.setState({
        data: tempData
      });
    }.bind(this), function (error) {
      console.log("Error: " + error.code2);
    });
  }

  deletePoll = (event,id) => {
    event.preventDefault();

    // Remove single polls
    const  isDeleted = firebaseConf.database().ref('polls/' + id).remove();
    console.log("poll deleted.......................", id);
  }

  render() {
    const { data } = this.state;
    const pollData = data.data;
    const pollId = data.id;
    console.log("pollid=======>", pollId);
    console.log("poll data 44444", data);
    const formattedStartDate = moment(data.starDate*1000).format('L');
    console.log("s date", formattedStartDate);
    const formattedEndDate = moment(data.endDate*1000).format('L');

    if (!pollData) {
        return 'loading........';
    }

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Poll Details"
                //category="Here you can see the number of Polls created"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <td><b>Title:</b> {data.title} {pollData.id}</td>
                        <td>
                          
                            {/*<Button bsStyle="warning" className="btn-fill" bsSize="small">
                              <Link to={{ pathname: '/EditPoll', query: data.id  }}> Edit</Link>
                            </Button>*/}
                            <ButtonToolbar>
                            <Button className="btn btn-fill btn-info pull-right">
                              <Link to={{ pathname: '/EditPoll', query: { pollId: data.id }}} >
                                <font color="white">Edit Poll</font>
                              </Link>
                            </Button>
                            <Button className="btn btn-fill btn-default pull-right">
                              <Link to={{ pathname: '/PollsLIst'}} >
                                <font color="white">Back</font>
                              </Link>
                            </Button>
                            </ButtonToolbar>
                          
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="40%"><b>Start Date:</b> {formattedStartDate}</td>
                        <td width="60%"><b>End Date:</b> {formattedEndDate}</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td width="40%"><b>Options</b></td>
                        <td width="60%"><b>Description</b></td>
                        <td>Image</td>
                        <td>URL</td>
                      </tr>
                      {pollData.map(function(obj, key){
                        let option = 'option'+ (key+1);
                        return (
                          <tr key={key}>
                                <td width="40%">{obj.option}</td>
                                <td width="40%">{obj.description}</td>
                                <td><img src ={data[option]} width="25px" height="25px" /></td>
                                {/*<td><img src ="https://firebasestorage.googleapis.com/v0/b/collectivegiving.appspot.com/o/images%2Fnoimage.png?alt=media&token=927389dc-6626-4283-bfe2-ca09b28156a3" height="30px" width="30px"/></td>*/}
                                <td>{obj.url}</td>
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

export default PollDetails;
