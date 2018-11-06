import React, { Component } from "react";
import { Grid, Row, Col, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

import Card from "components/Card/Card.jsx";
//import { pollsHeding, thArray, tdArray } from "variables/Variables.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

import firebaseConf from '../../config';
var dateFormat = require('dateformat');

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editPoll' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/editPoll' : 'http://139.59.23.83:5000/api/editPoll';

class EditPoll extends Component {
  constructor(props) {
    console.log("localStorage ====> " , localStorage.getItem("pollId"));
    // localStorage.setItem("pollId" ,"");
    super(props);
    this.state = {
        data: [],
        pollId: (props.location.query && props.location.query.pollId) ? props.location.query.pollId : localStorage.getItem("pollId"),
        alert: false,
        alertData: {}
    };
        
    localStorage.setItem("pollId",this.state.pollId);
  }

  componentDidMount(e) {
    let pollId = this.state.pollId;
    if(pollId) {
        const  pollDataRef = firebaseConf.database().ref('polls/' + pollId);
        pollDataRef.on("value", function(snapshot) {
            let tempData =  snapshot.val();
            tempData.id = snapshot.key;
            this.setState({
                data : tempData
            });
        }.bind(this));
    }
  }

  handleForm(event){
    console.log("Enter into handle form");
    event.preventDefault();
    let elem = event.target.elements;
    const pollTitle = event.target.title.value;

    // File upload
    const fileName = ['file1','file2','file3','file4','file5','file6','file7','file8','file9','file10'];
    const picNames = [];
    let picName = "noname.jpg";
    let tempJ = 1;
    //const uploadFileRef = firebaseConf.storage().ref('images/' + uploadFile.name);

    let p = 0;

    for(let i = 0; i<elem.length; i++){
      if(fileName.includes(elem[i].name)) {
        console.log("under if ");
        if(elem[i].files.length) {
          // File upload code section
          let tempName = 'option'  +  tempJ + '.jpg';
          picNames.push(tempName);
          let uploadFileRef = firebaseConf.storage().ref('images/' + this.state.pollId + '/' + tempName);
          const firebaseUploadRef = uploadFileRef.put(elem[i].files[0]);
          firebaseUploadRef
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
              //imagesUrls[tempName] = url;
              /////////// temp /////////////////////
              var updates = {};
              let urlval = 'option' + i/4;
              updates['/polls/' + this.state.pollId + '/' + urlval] = url;
              firebaseConf.database().ref().update(updates);
          });
        } else {
          picNames.push(this.state.data.data[p].imgName);
          p++;
        }
        tempJ ++;
      }
    }
    //console.log("pic names==========>", picNames);
    // Form submit code goes here
    console.log("api url ===> " , API_URL);

    // Form submit code goes here
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        totalVote: 0,
        title: event.target.title.value,
        pollId: event.target.pollid.value,
        data: [
          {
            id: 1,
            option: event.target.option1.value,
            description: event.target.description1.value,
            imgName: picNames[0],
            url: event.target.weburl1.value,
            count: 0,
            users: []
          },
          {
            id: 2,
            option: event.target.option2.value,
            description: event.target.description2.value,
            imgName: picNames[1],
            url: event.target.weburl2.value,
            count: 0,
            users: []
          },
          {
            id: 3,
            option: event.target.option3.value,
            description: event.target.description3.value,
            imgName: picNames[2],
            url: event.target.weburl3.value,
            count: 0,
            users: []
          },
          {
            id: 4,
            option: event.target.option4.value,
            description: event.target.description4.value,
            imgName: picNames[3],
            url: event.target.weburl4.value,
            count: 0,
            users: []
          },
          {
            id: 5,
            option: event.target.option5.value,
            description: event.target.description5.value,
            imgName: picNames[4],
            url: event.target.weburl5.value,
            count: 0,
            users: []
          },
          {
            id: 6,
            option: event.target.option6.value,
            description: event.target.description6.value,
            imgName: picNames[5],
            url: event.target.weburl6.value,
            count: 0,
            users: []
          },
          {
            id: 7,
            option: event.target.option7.value,
            description: event.target.description7.value,
            imgName: picNames[6],
            url: event.target.weburl7.value,
            count: 0,
            users: []
          },
          {
            id: 8,
            option: event.target.option8.value,
            description: event.target.description8.value,
            imgName: picNames[7],
            url: event.target.weburl8.value,
            count: 0,
            users: []
          },
          {
            id: 9,
            option: event.target.option9.value,
            description: event.target.description9.value,
            imgName: picNames[8],
            url: event.target.weburl9.value,
            count: 0,
            users: []
          },
          {
            id: 10,
            option: event.target.option10.value,
            description: event.target.description10.value,
            imgName: picNames[9],
            url: event.target.weburl10.value,
            count: 0,
            users: []
          }
        ],
        starDate: Date.parse(event.target.startDate.value)/1000,
        endDate: Date.parse(event.target.endDate.value)/1000,
        status: 0,
        week: this.state.lastWeek
      })
    }).then(res => res.json())
    .then(poll => {
      console.log("edit poll called+++++++++++++++++", poll);
      //this line changes the route to polls list
      //use if else condition to define success and failure result
      //change the api accordingly to get success true or false in return
        if(poll.status == 'success') {
          // Success notification message
          console.log("this.props.history", this.props);
          this.props.history.push("/pollsList");
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
    const pollData = this.state.data;

    if (!pollData || !pollData.data) {
        return 'loading........';
    }

    var star_date = new Date(pollData.starDate);
    var end_date = new Date(pollData.endDate);
    var startDate = dateFormat(star_date, "dd/mm/yyyy");
    var endDate = dateFormat(end_date, "dd/mm/yyyy");

    return (
      <div className="content">
        {/*<NotificationSystem ref="notificationSystem" style={style} />*/}
        <Grid fluid>
          <Row>
            <Col md={12}>
              <button className="btn btn-fill btn-default pull-right">
                  <Link to={{ pathname: '/PollsList'}} >
                  <font color="white">Cancel</font>
                  </Link>
              </button>
              <Card
                title="Edit Poll"
                content={
                  <form onSubmit={this.handleForm.bind(this)}>
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Poll Title",
                          type: "text",
                          name: "title",
                          bsClass: "form-control",
                          placeholder: "Poll Title",
                          defaultValue: pollData.title
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option1",
                          bsClass: "form-control",
                          placeholder: "Option1",
                          defaultValue: pollData.data[0].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description1",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[0].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl1",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[0].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file1",
                          id: "file1",
                          multiple: true,
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option2",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[1].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description2",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[1].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl2",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[1].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file2",
                          id: "file2",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option3",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[2].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description3",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[2].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl3",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[2].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file3",
                          id: "file3",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option4",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[3].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description4",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[3].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl4",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[3].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file4",
                          id: "file4",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option5",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[4].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description5",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[4].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl5",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[4].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file5",
                          id: "file5",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option6",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[5].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description6",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[5].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl6",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[5].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file6",
                          id: "file6",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option7",
                          bsClass: "form-control",
                          placeholder: "option",
                          defaultValue: pollData.data[6].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description7",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[6].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl7",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[6].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file7",
                          id: "file7",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option8",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[7].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description8",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[7].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl8",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[7].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file8",
                          id: "file8",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option9",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[8].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description9",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[8].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl9",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[8].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file9",
                          id: "file9",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option10",
                          bsClass: "form-control",
                          placeholder: "Option",
                          defaultValue: pollData.data[9].option
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description10",
                          bsClass: "form-control",
                          placeholder: "Description",
                          defaultValue: pollData.data[9].description
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Web",
                          type: "text",
                          name: "weburl10",
                          bsClass: "form-control",
                          placeholder: "website url",
                          defaultValue: pollData.data[9].url
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file10",
                          id: "file10",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                        }
                      ]}
                    />
                    <hr />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Start  Date",
                          type: "date",
                          name: "startDate",
                          bsClass: "form-control",
                          placeholder: "Start Date",
                          defaultValue: startDate
                        },
                        {
                          label: "End Date",
                          type: "date",
                          name: "endDate",
                          bsClass: "form-control",
                          placeholder: "End Date",
                          defaultValue: endDate
                        }
                      ]}
                    />
                    <input type="hidden" name="pollid" value={pollData.id} />
                    {/*<Button bsStyle="info" pullRight fill type="submit">
                      Update
                    </Button>*/}
                    <ButtonToolbar>
                    <button className="btn btn-fill btn-info pull-right" type="submit">                        
                        <font color="white">Update</font>                       
                    </button>
                    
                    <button className="btn btn-fill btn-default pull-right">
                        <Link to={{ pathname: '/PollsList'}} >
                        <font color="white">Cancel</font>
                        </Link>
                    </button>
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

export default EditPoll;
