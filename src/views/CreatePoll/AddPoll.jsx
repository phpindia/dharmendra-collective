import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  ButtonToolbar
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NotificationSystem from "react-notification-system";
import { style } from "variables/Variables.jsx";

//import avatar from "assets/img/faces/face-3.jpg";

import firebaseConf from '../../config';
//import { Input } from 'reactstrap';
import firebase from "firebase";

console.log("firebae poll add page", firebaseConf);

//const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'production-url-here';
const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'http://139.59.23.83:5000/api/addpoll';
class AddPoll extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      lastWeek: 1
    }
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;

    var usersRef = firebaseConf.database().ref("polls");
    var usersQuery = usersRef.limitToLast(1);
    usersQuery.on('value', function(dataSnapshot) {
      dataSnapshot.forEach(function(data) {
        const weekData = data.val();
        console.log("The " + data.key + " score is " + weekData.week);
        if(weekData) {
          console.log("hello data weekData", weekData);
          this.setState({ lastWeek: weekData.week + 1 });
        } else
          this.setState({ lastWeek: 1 });
      }.bind(this));
    }.bind(this));

  }

  handleUploadFile = (event) => {
    // Get upload file
    const  uploadFile = event.target.files[0];
    const uploadFileRef = firebaseConf.storage().ref('images/' + uploadFile.name);

    const firebaseUploadRef = uploadFileRef.put(uploadFile);
    console.log("upload status============>", uploadFile);
    // Pause the upload
    // firebaseUploadRef.pause();

    // firebaseUploadRef.then(function(snapshot) {
    //   console.log("my new snapy===============>", snapshot);
    // });
    // Resume the upload
    //firebaseUploadRef.resume();
    
    //console.log("File Upload Called", firebaseUploadRef);
  }

  handleForm(event){
    console.log("handle form is called");
    event.preventDefault();
    // Get form element
    let elem = event.target.elements;
    console.log("event.target ===> " , event.target.title.value);
    console.log("title=====>", event.target.files);
    console.log("elem ===>",elem);
    const pollTitle = event.target.title.value;

    // File upload
    const fileName = ['file1','file2','file3','file4','file5','file6','file7','file8','file9','file10'];
    const picNames = [];
    let picName = "noname.jpg";
    let tempJ = 1;
    //const uploadFileRef = firebaseConf.storage().ref('images/' + uploadFile.name);
    var newPostKey = firebase.database().ref().child('polls').push().key;
    let imagesUrls = [];
    for(let i = 0; i<elem.length; i++){
      if(fileName.includes(elem[i].name)) {
        
        if(elem[i].files.length) {
          console.log("my files hey hey==========>", elem[i].files[0]);
          console.log("my files hey hey==========>", elem[i].files.length);
          console.log("my files hey hey==========>", elem[i].files[0].name);
          //picNames.push(elem[i].files[0].name);
          // File upload code section

          let tempName = 'option'  +  tempJ + '.jpg';
          picNames.push(tempName);
          let uploadFileRef = firebaseConf.storage().ref('images/' + newPostKey + '/' + tempName);
          const firebaseUploadRef = uploadFileRef.put(elem[i].files[0]);
          firebaseUploadRef
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
              imagesUrls[tempName] = url;
              /////////// temp /////////////////////
              var updates = {};
              let urlval = 'option' + i/4;
              updates['/polls/' + newPostKey + '/' + urlval] = url;
              firebaseConf.database().ref().update(updates);
            });
        } else {
          
          picNames.push(picName);
        }
        tempJ ++;
      }
    }
    console.log("pic names==========>", picNames);
    console.log("last week !!!!!!!!!!!!!!!!1", this.state.lastWeek);

    // Form submit code goes here

    console.log("api url ===> " , API_URL);

    fetch(API_URL+"/"+newPostKey, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        totalVote: 0,
        title: event.target.title.value,
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
        week: this.state.lastWeek,
        nextWeekTheme:""
      })
    })
    // .then(res => res.json())
    .then(poll => {
      console.log("Poll ===>", poll);
      //this line changes the route to polls list
      //use if else condition to define success and failure result
      //change the api accordingly to get success true or false in return
        console.log("poll status********", poll);
        if(poll.status == 200) {
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

  formSubmitted = (event) => {
    event.preventDefault();
    console.log("event=======================>", event.target.title.value);
    console.log("files data===>", event.target.files);
  }
  
  render() {
    return (
      <div className="content">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create"
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
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description1",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file1",
                          id: "file1",
                          multiple: true,
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description2",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file2",
                          id: "file2",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description3",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file3",
                          id: "file3",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description4",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file4",
                          id: "file4",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description5",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file5",
                          id: "file5",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description6",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file6",
                          id: "file6",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          placeholder: "First name",
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description7",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file7",
                          id: "file7",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description8",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file8",
                          id: "file8",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description9",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file9",
                          id: "file9",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description10",
                          bsClass: "form-control",
                          placeholder: "Description",
                          required: true
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
                          required: true
                        },
                        {
                          label: "Upload",
                          type: "file",
                          name: "file10",
                          id: "file10",
                          bsClass: "form-control",
                          placeholder: "Upload file",
                          required: true
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
                          required: true
                        },
                        {
                          label: "End Date",
                          type: "date",
                          name: "endDate",
                          bsClass: "form-control",
                          placeholder: "End Date",
                          required: true
                        }
                      ]}
                    />
                    <ButtonToolbar>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Poll
                    </Button>
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

export default AddPoll;
