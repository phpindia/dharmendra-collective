import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
//import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import avatar from "assets/img/faces/face-3.jpg";

import firebaseConf from './../../config';

console.log("firebae poll add page", firebaseConf);

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'production-url-here';

class UserProfile extends Component {
  state = {
    
    pollTitle: null,
    pollDescription: null
  }

  componentDidMount() {
    
  }

  formSubmitted = (event) => {
    event.preventDefault();
    console.log("event=======================>", event.target.title.value);

      fetch(API_URL, {
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
              count: 0,
              users: []
            },
            {
              id: 2,
              option: event.target.option2.value,
              description: event.target.description2.value,
              count: 0,
              users: []
            },
            {
              id: 3,
              option: event.target.option3.value,
              description: event.target.description3.value,
              count: 0,
              users: []
            },
            {
              id: 4,
              option: event.target.option4.value,
              description: event.target.description4.value,
              count: 0,
              users: []
            },
            {
              id: 5,
              option: event.target.option5.value,
              description: event.target.description5.value,
              count: 0,
              users: []
            },
            {
              id: 6,
              option: event.target.option6.value,
              description: event.target.description6.value,
              count: 0,
              users: []
            },
            {
              id: 7,
              option: event.target.option7.value,
              description: event.target.description7.value,
              count: 0,
              users: []
            },
            {
              id: 8,
              option: event.target.option8.value,
              description: event.target.description8.value,
              count: 0,
              users: []
            },
            {
              id: 9,
              option: event.target.option9.value,
              description: event.target.description9.value,
              count: 0,
              users: []
            },
            {
              id: 10,
              option: event.target.option10.value,
              description: event.target.description10.value,
              count: 0,
              users: []
            }
          ],
          starDate: event.target.startDate.value,
          endDate: event.target.endDate.value,
          status: false
        })
      }).then(res => res.json())
      .then(poll => {
        console.log(poll);     
      });
    
  }
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create New Poll"
                content={
                  <form onSubmit={this.formSubmitted}>
                    <FormInputs
                      ncols={["col-md-12"]}
                      proprieties={[
                        {
                          label: "Poll Title",
                          type: "text",
                          name: "title",
                          bsClass: "form-control",
                          placeholder: "Poll Title",
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
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description1",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option2",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description2",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option3",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description3",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option4",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description4",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option5",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description5",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option6",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description6",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option7",
                          bsClass: "form-control",
                          placeholder: "First name",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description7",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option8",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description8",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option9",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description9",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Option",
                          type: "text",
                          name: "option10",
                          bsClass: "form-control",
                          placeholder: "Option",
                        },
                        {
                          label: "Description",
                          type: "text",
                          name: "description10",
                          bsClass: "form-control",
                          placeholder: "Description",
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      proprieties={[
                        {
                          label: "Start  Date",
                          type: "date",
                          name: "startDate",
                          bsClass: "form-control",
                          placeholder: "Start Date",
                        },
                        {
                          label: "End Date",
                          type: "date",
                          name: "endDate",
                          bsClass: "form-control",
                          placeholder: "End Date",
                        }
                      ]}
                    />
                    <Button bsStyle="info" pullRight fill type="submit">
                      Add Poll
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>>
      </div>
    );
  }
}

export default UserProfile;
