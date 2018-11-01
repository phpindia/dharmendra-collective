//import { Router } from "express";
//import firebase from "firebase";
var express = require('express');
var firebase = require('firebase');

var router = express.Router();
//const router = Router();

router.route("/")
    .get((req, res) => {
        res.send("<h1>Welcome to Apis</h1>");
    })
    .post((req, res) => {
        res.send({success: true, message: "Welcome to apis"})
    });

router.route("/addpoll")
        .get((req, res) => {
            console.log('get poll called', req.body);
            if (!req.body) return res.sendStatus(400)
        
            //return 'bahubali';
            res.send({ title: 'rohan' });
            //res.send({ express: 'Hello From Express' });
        });

router.route("/addpoll/:dataid")
    .post((req, res) => {

        console.log("going to add poll");
        if (!req.body) return res.sendStatus(400);

        console.log("post api called...................");
        
        //   // Get a key for a new Post.
        // var newPostKey = firebase.database().ref().child('polls').push().key;
        var newPostKey = req.params.dataid;
        var updates = {};

        // Write the new poll's data simultaneously in the polls list and the user's poll list.
        updates['/polls/' + newPostKey] = req.body;
    
        //firebase.database().ref().update(updates);

        firebase.database().ref().update(updates).then(function() {
            console.log("new poll saved");
            res.send({ status: 'success' });
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error message", error);
            res.send({ status: 'failed' });
        });
});

router.route("/editPoll")
    .post((req, res) => {
        console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
        if (!req.body) return res.sendStatus(400);

        const editObject = req.body;
        const pillId = req.body.pollId;
        delete editObject.pollId;
        //console.log("poll IIIId", pillId);
        //console.log("edit poll api called...................", editObject.data);
        // const xxx = editObject.data;

        // xxx.forEach(function(item){
        //     console.log("my inner data=============>", item);
        // });


        firebase.database().ref('polls/' + pillId).update({
            title: req.body.title,
                   
        });

        for(let i=0;i<10;i++){

            firebase.database().ref('polls/' + pillId + '/data/'+i).update({
                description: req.body.data[i].description,
                option: req.body.data[i].option ,
                imgName : req.body.data[i].imgName,
                url:req.body.data[i].url,          
            });    
        }
        /*firebase.database().ref('polls/' + pillId).update({
           starDate: req.body.startDate,
           endDate:req.body.endDate,
        });*/

        console.log(req.body);
        if(req.body.starDate && req.body.endDate) {
            console.log("inside date exists condition");
            firebase.database().ref('polls/' + pillId).update({
                starDate: req.body.starDate,
                endDate: req.body.endDate,
            }).then(function() {
                res.send({ status: 'success' });
            }).catch(function(error) {
                // Handle Errors here.
                res.send({ status: 'failed' });
            });
        } else {
            console.log("outside date exists condition");
            firebase.database().ref('polls/' + pillId).update({
                // update code here  if date doesnot exites in form
            }).then(function() {
                res.send({ status: 'success' });
            }).catch(function(error) {
                // Handle Errors here.
                res.send({ status: 'failed' });
            });
        }

        /*firebase.database().ref('polls/' + pillId).update({
            starDate: req.body.startDate,
            endDate: req.body.endDate,
        }).then(function() {
            console.log("poll updated successfully");
            res.send({ status: 'success' });
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error message", error);
            res.send({ status: 'failed' });
        });*/
});

router.route("/addScreen")
    .post((req, res) => {
        if (!req.body) return res.sendStatus(400);

        console.log("WelcomeScreen api called...................");
        
        //   // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('WelcomeScreen').push().key;
        var updates = {};

        // Write the new WelcomeScreen data.
        updates['/WelcomeScreen/' + newPostKey] = req.body;
    
        //firebase.database().ref().update(updates);

        firebase.database().ref().update(updates).then(function() {
            console.log("new WelcomeScreen saved");
            res.send({ status: 'success' });
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error message", error);
            res.send({ status: 'failed' });
        });
});

router.route("/editScreen")
    .post((req, res) => {
        if (!req.body) return res.sendStatus(400);
        console.log("update request body===============>");        
        firebase.database().ref('WelcomeScreen/' + req.body.screenId).set({
            screen1: req.body.screen1,
            screen2: req.body.screen2,
            screen3 : req.body.screen3,
            screen4: req.body.screen4,
            screen5: req.body.screen5,
            screen6 : req.body.screen6
        }).then(function() {
                console.log("WelcomeScreen updates");
                res.send({ status: 'success' });
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error message", error);
                res.send({ status: 'failed' });
        });
});

router.route("/AddUPS")
    .post((req, res) => {
        if (!req.body) return res.sendStatus(400);

        console.log("PrivacyAndSecurity api called...................");
        
        //   // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('PrivacyAndSecurity').push().key;
        var updates = {};

        // Write the new PrivacyAndSecurity data.
        updates['/PrivacyAndSecurity/' + newPostKey] = req.body;
    
        //firebase.database().ref().update(updates);

        firebase.database().ref().update(updates).then(function() {
            console.log("new PrivacyAndSecurity saved");
            res.send({ status: 'success' });
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error message", error);
            res.send({ status: 'failed' });
        });
});

router.route("/editUPS")
    .post((req, res) => {
        if (!req.body) return res.sendStatus(400);
        console.log("update request body===============>");        
        firebase.database().ref('PrivacyAndSecurity/' + req.body.id).set({
            privacyPolicy: req.body.privacyPolicy,
            securityPolicy: req.body.securityPolicy,
            userAgreement : req.body.userAgreement,
        }).then(function() {
                console.log("PrivacyAndSecurity updated");
                res.send({ status: 'success' });
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error message", error);
                res.send({ status: 'failed' });
        });
});

router.route("/editUser")
    .post((req, res) => {
        if (!req.body) return res.sendStatus(400);
        console.log("update request body===============>");        
        firebase.database().ref('myUserDetail/' + req.body.id).set({
            email: req.body.email,
            profileName: req.body.profileName,
            profilePic : '',
        }).then(function() {
                console.log("myUserDetail updated");
                res.send({ status: 'success' });
        }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("error message", error);
                res.send({ status: 'failed' });
        });
});

export default router;