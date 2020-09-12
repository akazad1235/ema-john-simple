import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';

firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setNewUser] = useState(false);

  const [users, setUser] = useState({
    isSignIn:false,
    name:'',
    email:'',
    password:'',
    photo:'',

    
  })

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = ()=> {
    firebase.auth().signInWithPopup(provider)
    .then(result =>{
      var token = result.credential.accessToken;
         // The signed-in user info.
    // var user = result.user;
        const {displayName, photoURL, email} = result.user
        const signIn = {
          isSignIn:true,
          name: displayName,
          email: email,
          photo: photoURL
        }
      setUser(signIn)
      console.log(displayName, photoURL, email);
    //  console.log(user);
    }).catch(err=>{
      console.log(err);
    })
  } 

  const handleSignOut =()=> {

    firebase.auth().signOut()
    .then(result => {
      const userSignOut ={
        isSignIn:false,
        
        name:'',
        email:'',
        photo:'',
        error:'',
       success:false
      }
      setUser(userSignOut)
    }).catch(err => {
      return err;
    })
  }
  //loign input section 
  const handlBlur = (event)=> {
  // const isValidated = (event.target.name, event.target.value);

    let isFieldValid = true;
    if (event.target.name == 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
       // console.log(isvalidForm); 
    }
    if (event.target.name == 'password') {
        const isValidPassword = event.target.value.length>6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFieldValid = (isValidPassword && passwordHasNumber);
    }
 //   console.log(isvalidForm);
    
   if(isFieldValid){
    const newUserInfo = {...users};
    newUserInfo[event.target.name] = event.target.value;

    setUser(newUserInfo);
   }

  }
  const handlerSubmit = (event)=>{
  //  console.log(users.email, users.password);
    if (newUser && users.email && users.password) 
    {
      firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
      .then(res => {
        const newUserInfo = {...users};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(users.name)
      })
      .catch(error =>  {
        // Handle Errors here.
       
        const newUserInfo = {...users};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        
      });
    }
    if (!newUser && users.email, users.password){
      firebase.auth().signInWithEmailAndPassword(users.email, users.password)
      .then( res =>{
        const newUserInfo = {...users};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
      })
      .catch((error) =>  {
        const newUserInfo = {...users};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
    }
    event.preventDefault()
  }
  const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log('user name update success', user);
    }).catch(function(error) {
      console.log(error);
    });
  }
  
  return (
    <div style={{textAlign:'center'}}>
      {
        users.isSignIn ? <button onClick={handleSignOut}> LogOut</button>:<button onClick={handleSignIn}> Sign In </button>
      }
      {
        users.isSignIn &&
        <div>
         <h1>name:{users.name}</h1>
        <p>email:{users.email}</p>
        <img style={{width:'50%'}} src={users.photo}/>
      </div>
      }
      <h3>Owner Login</h3>
        <p>Name:{users.name}</p>
        <p>Email:{users.email}</p>
        <p>Password:{users.password}</p>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"  id=""/>
        <lebel> New User Sign UP</lebel>
      <form onSubmit={handlerSubmit}>
        
        { newUser && <input type="text" name="name" onBlur={handlBlur} placeholder="Enter Your name"/>}<br/>
        <input type="email" name="email" onBlur={handlBlur} placeholder="Please Enter Your Email" required/><br/>
        <input type="password" name="password" onBlur={handlBlur} placeholder="Please Enter Your Password" required/><br/>
        <input type="submit" value={newUser ? 'Sing Up': 'Log In'}/>
      </form>
      <p style={{color:'red'}}>{users.error}</p>
      {
      //  console.log('success', users.success)
        users.success && <p style={{color:'green'}}>User { newUser ? 'Register':'Login'} Successfully</p>
      }
    </div>
  );
}

export default Login;
