import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Grid,
    Row,
    Col,
    ControlLabel,
    FormControl
  } from "react-bootstrap";

//import logo from './logo.svg';
import { Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import './App.css';

//import Example from './vote';
//import PollList from './pollList';

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/addpoll' : 'production-url-here';

class Polls extends Component {
  
  
    state = {
      
      pollTitle: null,
      pollDescription: null
    }
  
    componentDidMount() {
      
    }
  
    formSubmitted = (event) => {
      event.preventDefault();
      console.log("event=======================>", event.target.name.value);

      fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          totalVote: 0,
          title: event.target.name.value,
          data: [
            {
              id: 1,
              option: event.target.opt1.value,
              description: event.target.opt1desc.value,
              count: 0,
              users: []
            },
            {
              id: 2,
              option: event.target.opt1.value,
              description: event.target.opt1desc.value,
              count: 0,
              users: []
            },
            {
              id: 3,
              option: event.target.opt3.value,
              description: event.target.opt3desc.value,
              count: 0,
              users: []
            },
            {
              id: 4,
              option: event.target.opt4.value,
              description: event.target.opt4desc.value,
              count: 0,
              users: []
            },
            {
              id: 5,
              option: event.target.opt5.value,
              description: event.target.opt5desc.value,
              count: 0,
              users: []
            },
            {
              id: 6,
              option: event.target.opt6.value,
              description: event.target.opt6desc.value,
              count: 0,
              users: []
            },
            {
              id: 7,
              option: event.target.opt7.value,
              description: event.target.opt7desc.value,
              count: 0,
              users: []
            },
            {
              id: 8,
              option: event.target.opt8.value,
              description: event.target.opt8desc.value,
              count: 0,
              users: []
            },
            {
              id: 9,
              option: event.target.opt9.value,
              description: event.target.opt9desc.value,
              count: 0,
              users: []
            },
            {
              id: 10,
              option: event.target.opt10.value,
              description: event.target.opt10desc.value,
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
        //const position = [this.state.location.lat, this.state.location.lng];
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                <Card body className="message-form">
                    <CardTitle>Welcome to Voting App</CardTitle>
                    <CardSubtitle>Create Poll</CardSubtitle>
                    <div className="row">
                    <div className="col-sm-12">            
                    <Form onSubmit={this.formSubmitted}>
                        <div className="row">
                        <div className="col-sm-12">
                        <FormGroup>
                            <Label for="name">Poll Title</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter yor name" />
                        </FormGroup>
                        </div>
                        </div>
        
                        <div className="row">
                        <div className="col-sm-5">
                            <FormGroup>
                            <Label for="name">Option 1:</Label>
                            <Input
                                onChange={this.valueChanged}
                                type="text"
                                name="opt1"
                                id="opt1"
                                placeholder="Enter value" />
                            </FormGroup>
                            </div>
                            <div className="col-sm-7">
                            <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                                onChange={this.valueChanged}
                                type="textarea"
                                name="opt1desc"
                                id="opt1desc"
                                placeholder="Description" />
                            </FormGroup>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-5">
                            <FormGroup>
                                <Label for="name">Option 2:</Label>
                                <Input
                                onChange={this.valueChanged}
                                type="text"
                                name="opt2"
                                id="oppt2"
                                placeholder="Enter value" />
                            </FormGroup>
                            </div>
                            <div className="col-sm-7">
                            <FormGroup>
                                <Label for="name">Description</Label>
                                <Input
                                onChange={this.valueChanged}
                                type="textarea"
                                name="opt2desc"
                                id="opt2desc"
                                placeholder="Description" />
                            </FormGroup>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-5">
                            <FormGroup>
                                <Label for="name">Option 3:</Label>
                                <Input
                                onChange={this.valueChanged}
                                type="text"
                                name="opt3"
                                id="opt3"
                                placeholder="Enter value" />
                            </FormGroup>
                        </div>
                        <div className="col-sm-7">
                            <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                                onChange={this.valueChanged}
                                type="textarea"
                                name="opt3desc"
                                id="opt3desc"
                                placeholder="Description" />
                            </FormGroup>
                        </div>
                        </div>
        
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 4:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt4"
                            id="opt4"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt4desc"
                            id="opt4desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 5:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt5"
                            id="opt5"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt5desc"
                            id="opt5desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 6:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt6"
                            id="opt6"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt6desc"
                            id="opt6desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 7:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt7"
                            id="opt7"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt7desc"
                            id="opt7desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 8:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt8"
                            id="opt8"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt8desc"
                            id="opt8desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 9:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt9"
                            id="opt9"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt9desc"
                            id="opt9desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Option 10:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="text"
                            name="opt10"
                            id="opt10"
                            placeholder="Enter value" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">Description</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="textarea"
                            name="opt10desc"
                            id="opt10desc"
                            placeholder="Description" />
                        </FormGroup>
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="col-sm-5">
                        <FormGroup>
                            <Label for="name">Start:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="date"
                            name="startDate"
                            id="startDate"
                            placeholder="Select" />
                        </FormGroup>
                        </div>
                        <div className="col-sm-7">
                        <FormGroup>
                            <Label for="name">End:</Label>
                            <Input
                            onChange={this.valueChanged}
                            type="date"
                            name="endDate"
                            id="endDate"
                            placeholder="Select" />
                        </FormGroup>
                        </div>
                    </div>
                    <Button type="submit" color="info" >Save</Button>
                    </Form>
                    </div>
                    </div>
                </Card>
                </Col>
          </Row>
        </Grid>>
      </div>
        );
      }
    }
    
    //export default App;
    export default Polls;