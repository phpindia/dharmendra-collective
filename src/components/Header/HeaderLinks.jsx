import React, { Component } from "react";
import { 
  NavItem, 
  Nav, 
  Button, 
  Modal, 
  Tooltip, 
  Popover,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl,
  ButtonToolbar
 } from "react-bootstrap";
 
 import NotificationSystem from "react-notification-system";
 import { style } from "variables/Variables.jsx";
 import history from "../../history";
 import firebase from "firebase";

 import firebaseConf from '../../config';
 console.log("firebaecf", firebaseConf);

class HeaderLinks extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    //this.state = {isLoggedIn: false};

    this.state = {
      _notificationSystem: null,
      show: false,
      isLoggedIn: false,
      exists: false,
    };
  }

  componentDidMount() {
    //this.interval = setInterval(this.fetchNews, 3600000);
    //window.firebase = firebaseConf;
    let data =''
    setTimeout(() => {
      data = firebaseConf.auth().currentUser
      if(data) {
        this.setState({exists: true});
      }
      console.log("===== Nitin ", data)
    },2000);
    console.log("inside did mount^^^^^^^^^^^^^^");
    console.log("ffirebase.auth().currentUser aaa^^^^^^^^", firebaseConf.auth().currentUser);
  }

  handleLoginClick() {
    console.log("click handleloginbutton");
    this.setState({isLoggedIn: true});
  }

  // handleLogoutClick() {
  //   this.setState({isLoggedIn: false});
  // }


  handleClose() {
    this.setState({ isLoggedIn: false });
  }

  handleShow() {
    
    this.setState({ show: true });
  }

  handleLogoutClick(){
    this.setState({ _notificationSystem: this.refs.notificationSystem });      
    var _notificationSystem = this.refs.notificationSystem;
    // Firebase auth signuot
    firebaseConf.auth().signOut().then(function() {
      // Sign-out successful.    
      //localStorage.removeItem("firebase:host:project-xxxxxxxxxxx.firebaseio.com");
      // Sign-out successful.
      console.log("Logout successful");
      //this.setState({ show: true });
      this.setState({isLoggedIn: false});
      this.setState({ show: true });

      _notificationSystem.addNotification({
        title: <span data-notify="icon" className="pe-7s" />,
        message: (
          <div>
            <b>Your Acoount logout successfully</b>
          </div>
        ),
        level: "info",
        position: "tr",
        autoDismiss: 5
      });
      
      history.push("/dashboard");
    }.bind(this), function(error) {
      // An error happened.
      console.log(error);

    });
  }

  formSubmitted(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    this.setState({ _notificationSystem: this.refs.notificationSystem });      
    var _notificationSystem = this.refs.notificationSystem;

    if ( email !== 'admin-collective@gmail.com') {
      this.setState({isLoggedIn: true});
      
      _notificationSystem.addNotification({
        title: <span data-notify="icon" className="pe-7s" />,
        message: (
          <div>
            <b>Login Failed!. You don't have access privilege</b>
          </div>
        ),
        level: "error",
        position: "tr",
        autoDismiss: 5
      });
      return false;
    }
      

    

    //console.log(firebaseConf.auth().currentUser);

    // firebaseConf.auth().createUserWithEmailAndPassword('ashish@deligence.com',"pass123").catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log("new user error", error);
     
    // });

    // Firebase auth login
    firebaseConf.auth().signInWithEmailAndPassword(email, password).then(function () {
      // User is signed in.
      console.log("login success")
      this.setState({ show: false });
      this.setState({isLoggedIn: true});
      // Success notification message
      _notificationSystem.addNotification({
        title: <span data-notify="icon" className="pe-7s" />,
        message: (
          <div>
            <b>Welcome. Login Success</b>
          </div>
        ),
        level: "info",
        position: "tr",
        autoDismiss: 5
      });

      history.push("/dashboard");

    }.bind(this)).catch(function(error) {
      // Handle Errors here.
      //var errorCode = error.code;
      //var errorMessage = error.message;
      _notificationSystem.addNotification({
        title: <span data-notify="icon" className="pe-7s" />,
        message: (
          <div>
            <b>Failed!. Invalid email or Password</b>
          </div>
        ),
        level: "error",
        position: "tr",
        autoDismiss: 5
      });
      console.log("error message", error);
      //console.log("login failed");
    });
  }

  render() {
    console.log("firebase.auth().currentUser OOOOO", firebase);
    let isLoggedIn = this.state.isLoggedIn;
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <NotificationSystem ref="notificationSystem" style={style} />
        {/*<Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>*/}
        <Nav pullRight>
          {/*<NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Dropdown"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Action</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown>*/}
          <NavItem eventKey={3} href="#">
              <ButtonToolbar>
              {firebaseConf.auth().currentUser ? (
                  <button className="btn btn-danger btn-fill" onClick={this.handleLogoutClick} >
                    Log Out
                  </button>
                ) : (
                  <button className="btn btn-info btn-fill" onClick={this.handleLoginClick} >Sign In</button>
              )}
            </ButtonToolbar>
          </NavItem>
        </Nav>

        <Modal show={this.state.isLoggedIn && !firebaseConf.auth().currentUser} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal onSubmit={this.formSubmitted}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" name="email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" name="password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" className="btn btn-info btn-fill">Sign In</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default HeaderLinks;