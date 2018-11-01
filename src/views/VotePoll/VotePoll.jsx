import React, { Component } from 'react';

import { ListGroup, ListGroupItem, Form, Badge, Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


import firebaseConf from './../../config';

export default class VotePoll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            alert: false,
            alertData: {},
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    
    formSubmitted = (event) => {
        event.preventDefault();
        const choice = event.target.radio1.value;
        const pollid = event.target.pollid.value;

        const constIndex = choice - 1;
        const countRef2 = firebaseConf.database().ref('/polls/' + pollid + '/data');

        countRef2.orderByChild("count").equalTo(1).once("value", function(snapshot) {
            console.log('remove snapshot', snapshot.val());
            snapshot.forEach(function(childSnapshot) {
                console.log("remove snapshot child value", childSnapshot.val());
                childSnapshot.ref.update({
                    count:0
                })
            }.bind(this));
        });


        const countRef = firebaseConf.database().ref('/polls/' + pollid + '/data/' + constIndex);
        return firebaseConf.database().ref('/polls/' + pollid + '/data/' + constIndex).once('value').then(function(snapshot) {
            
            const count = snapshot.val().count;
            snapshot.ref.update({
                "count": count + 1
            })
            console.log("add count index value >>>>>>>>>>>>>>", constIndex);
            console.log("add count >>>>>>>>>>>>>>", snapshot.val());           
            // countRef.update({
            //     "count": count + 1
            // });
        });
    }

    componentDidMount(e) {
        const formRef = firebaseConf.database().ref('polls').orderByKey().limitToLast(1);

        formRef.on('value', function(snapshot) {
            
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                
                this.setState({
                    pollId: childSnapshot.key,
                    title: childData.title,
                    data: childData.data
                });
            }.bind(this));
        }.bind(this));
    }   

    render() {
        const { title, data, pollId } = this.state;
        return (
            <div>
                {title ?  
                    <div className="container">
                        <h1>Vote for your favourite</h1> 
                        <Form onSubmit={this.formSubmitted}>
                            <ListGroup>
                                <FormGroup tag="fieldset">
                                    <legend>{`${title}`}</legend>
                                    {data.map(function(obj){
                                        return <ListGroupItem className="justify-content-between" key={obj.id}>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio" name="radio1" value={obj.id} />{obj.option}
                                                </Label>
                                                <Badge pill placement="right">Description</Badge>
                                            </FormGroup>
                                            
                                        </ListGroupItem>
                                    })}
                                    <Button color="info" onClick={this.toggle}>Description</Button>
                                </FormGroup>
                            </ListGroup>
                            <Input type="hidden" name="pollid" id="pollid" value={pollId} />
                            <Button type="submit" color="info">Save</Button>
                        </Form>
                        
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                        </Modal>
                    </div>: <h1>Loading.. please wait!</h1>
                }        
            </div>
        );
    }
}
