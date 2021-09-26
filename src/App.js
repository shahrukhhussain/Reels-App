import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AuthProvider from "./AuthProvider";
import {useEffect} from "react";
import {firestore} from "./firebase";

let App = () => {

  // useEffect(()=>{
                 //for adding any data

    // firestore.collection("users").add({body: "this is val 2"});
    // firestore.collection("users").add({body: "this is val 3"});
    // firestore.collection("users").add({body: "this is val 4"});


               //For getting  all data

    // async function f() {
    //   let querySnapshot = await firestore.collection("users").get();
    //   for(let i=0 ; i<querySnapshot.docs.length ; i++){
    //     console.log(querySnapshot.docs[i].data());
    //   }
    // }
    // f();

                 //For getting single data
      //this gives you the reference of that document
      // let f = async ()=>{
      //   let docRef = await firestore.collection("users").doc("eksSsS16g32nLTXIlAVh");
      //   let documentSnapshot = await docRef.get();
      //   console.log(documentSnapshot.exists);
      // }
      // f();

  // } , [])


  
  return (
    <>
   
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
