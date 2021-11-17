<template>
  <div class="app">
  <div class="opt">
        <div class="grid">
            <div class="segment-1">
                <div class="center">
                <div class="image">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg">
            </div>
                <p class="description">Facebook helps you connect and share with the people in your life.</p>
           </div> 
        </div>
            <div class="container">
                <div class="segment-2">
            <div class="card">
                       <form>
                           <div class="textplace">
                           <input  type="email" placeholder="Email address or phone number" v-model="mail"  >
                           <input type="password" placeholder="Password" v-model="pass" class="textField">
                        </div>
                        <div class="log">
                           <button class="login" @click="login">login</button></div>
                           
                           <div class="forgot"><a href=""><router-link to="/about">Forgotten Password?</router-link></a></div>

                           <div class="line"></div>
                           <div class="acc">
                           <button @click="toggle" class="newacc">Create New Account</button></div>
                       </form>
            </div>
       
        <p><a href="" class="create"><router-link to="/NewPage" class="create">Create a Page</router-link> </a> for a celebrity, brand or business.</p>
      </div>  </div>
        </div>
    </div>
<!--  <p v-bind::key="password">{{password}}</p> -->
    <div class="footer" >
        <div class="wrapper">
<div class="wrap-1">
    <a href="#">Kiswahili</a>
    <a href="https://en-gb.facebook.com/">English (UK)</a>
    <a href="https://fr-fr.facebook.com/">Français (France)</a>
    <a href="https://es-la.facebook.com/">Español</a>
    <a href="https://pt-br.facebook.com/">Português (Brasil)</a>
    <a href="https://ar-ar.facebook.com/">العربية</a>
    <a href="https://de-de.facebook.com/">Deutsch</a>
    <a href="https://it-it.facebook.com/">Italiano</a>
    <a href="https://tr-tr.facebook.com/">Türkçe</a>
    <a href="https://hi-in.facebook.com/"> हिन्दी</a>
    <a href="https://zh-cn.facebook.com/">中文(简体)</a> 
    <a href="#" class="languages"><i class="far fa-plus-square"></i></a>
</div>
<div class="line"></div>
<div class="wrap-2">
    
    <a href="https://www.facebook.com/r.php">Sign In</a>
    <a href="https://www.facebook.com/login/">Log In</a>
    <a href="https://messenger.com/">Messenger</a>
    <a href="https://www.facebook.com/lite/">FacebookLite</a>
    <a href="https://www.facebook.com/watch/">Watch</a>
    <a href="https://www.facebook.com/places/">Places</a>
    <a href="https://www.facebook.com/games/">Games</a>
    <a href="https://www.facebook.com/marketplace/">Marketplace</a>
    <a href="https://pay.facebook.com/"> FacebookPay</a>
    <a href="https://www.facebook.com/jobs/">jobs</a>
    <a href="https://www.oculus.com/">Oculus</a>
    <a href="https://portal.facebook.com/">Portal</a>
    <a href="https://www.instagram.com/">Instagram</a>
    <a href="https://www.facebook.com/local/lists/245019872666104/">Bulletin</a>
    <a href="https://www.facebook.com/fundraisers/">Local</a>
    <a href="https://www.facebook.com/biz/directory/">Fundraisers</a>
    <a href="https://www.facebook.com/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D">Services</a>
    <a href="https://about.facebook.com/">Voting Information Centre</a>
    <a href="https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto">Groups</a>
    <a href="https://www.facebook.com/pages/create/?ref_type=site_footer">About</a>
    <a href="https://developers.facebook.com/?ref=pf">Create ad</a>
    <a href="https://www.facebook.com/careers/?ref=pf">Create Page</a>
    <a href="https://www.facebook.com/privacy/explanation">Developers</a>
    <a href="https://www.facebook.com/policies/cookies/">Careers</a>
    <a href="https://www.facebook.com/help/568137493302217">Privacy</a>
    <a href="https://www.facebook.com/policies?ref=pf">Cookies</a>
    <a href="https://www.facebook.com/help/?ref=pf">AdChoices</a>
 <a>Terms</a>
 <a>Help</a>

<div class="meta">Meta @ 2021</div>
</div>
</div>
    </div>



    <div id="popup" class="mypopup" v-if="popup">
        <div class="ftp">
            <div class="box-1">
                <h1>Sign Up</h1>
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" @click="toggle">
            </div>
            <div class="box-2">
                <p>It's quick and easy.</p>
            </div>
        </div>
        <div class="box-3">
            <div class="form">
                <form id="signupForm">
                    <span class="names">
                        <input type="text" placeholder="First name" required id="firstName" v-model="firstName">
                        <input type="text" placeholder="surname" required id="surname" v-model="surName">
                    </span>
                    <span class="details">
                        <input type="email" placeholder="Mobile number or email address" id="signup-Email" v-model="email">
                        <input type="password" placeholder="New password" id="signup-Password" v-model="password">
                    </span>
                    <p class="date">Date of birth

                <i class="fas fa-question-circle"></i>
                    </p>
                    <span class="date-no">
                        <select id="day">
                        
                        </select>
    
                        <select id="month">
                          
                        </select>
    
                        <select id="year">
                      
                        </select>
                    </span>
                    <p class="date">Gender
                        <i class="fas fa-question-circle"></i>
                    </p>
                    <label class="radio-btn" id="gender" >
                        <span><p>Female</p><input type="radio" name="gender" id="female" v-model="female" @click="noCustoms"></span>
                        <span><p>Male</p><input type="radio" name="gender" id="male" v-model="male" @click="noCustoms"></span>
                        <span><p>Custom</p><input type="radio" name="gender" id="custom" v-model="custom" @click="customs"></span>
                    </label>
                    <div v-if="customize" class="customize">
                        <!-- v-for="pronoun in pronouns" v-bind:key="pronoun" -->
    <select>
<option>{{pronoun}}</option>
    </select>
    <p>Your pronoun is visible to everyone.</p>
    <input type="text" placeholder="Gender (optional)" v-model="optionalGender">
    </div>
                    <p class="policy">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                    </p>
                    <div class="button">
                        <button type="submit" class="submit-btn" @click="signUp">Sign Up</button>
                    </div>
                </form>
    
            </div>
        </div>
    </div>
  
  </div>
</template>

<script>

import { computed } from '@vue/reactivity'

//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDocs} from "firebase/firestore"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkWbp12XRoV38kEajV7hBahdxwUxSXiVc",
  authDomain: "meta-fb.firebaseapp.com",
  projectId: "meta-fb",
  storageBucket: "meta-fb.appspot.com",
  messagingSenderId: "973161692832",
  appId: "1:973161692832:web:82d9c0d61cd734369493c5",
  measurementId: "G-76Q2K0FMJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

const querySnapshot = getDocs(collection(db, "user-Details"), {
});
 querySnapshot.then((collection) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(querySnapshot);
  console.log(collection);

}).catch((error) => {
  console.log("Error getting document:", error);


}); 
//  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ..
//     console.log(user);
//     });
 
export default {
  name: 'HelloWorld',
//   props: {
//     msg: String
//   },
 data() {
      return {
       mail:'',
       pass: '',
       email: '',
       password: '',
       popup:false,
       customize:false,
       pronoun: "They:  Wish them a happy birthday",
       optionalGender : '',
       firstName:'',
       surName:'',
       female:'',
       male:'',
       custom:'',
//  pronouns:{"She:Wish her a happy birthday", "He:Wish him a happy birthday","They:Wish them a happy birthday"}
      }
    },
    methods: {
    toggle:function(){
      this.popup = !this.popup
      const app = document.querySelector('#app')
        app.classList = "active";
    //     const form = document.querySelector('#signupForm');
    //  form.reset();
    },
    customs:function(){
        this.customize = true
    },
    noCustoms:function(){
        this.customize = false
    },
  infor:function(){
 console.log(email.value)
  },
  signUp:function(){
  console.log(this.firstName, this.surName, this.password,this.custom)
      createUserWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ..
    console.log(user);
    alert("signed in as " + this.email)
    // const docRef = addDoc(collection(db, "user-Details"), {
    //   name: this.firstName,
    //   surname: this.surName,
     
    //   }),
      
    });   
    
  
  },
  input:function(){
      const textField = document.querySelector('textField');  
      textField.$style.color = "blue";
    },

 login:function(){
 if(this.mail === "" && this.pass === ""){
this.$router.push('/Login')
 }else{

     signInWithEmailAndPassword(auth, this.mail, this.pass).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    alert("You've Signed in as" + this.mail);
      if (user) {
            this.$router.push('/Navigation')
            console.log(user)
    }else{
        stop. this.$router.push('/Navigation')
        alert("error")
    }
      
  });
 }
   
 }
    },
 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app{
   margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
}
.container{
    grid-column: 6/10;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-self: center;
}
.card{
    background: #fff;
    width:120%;
    margin-top: 40px;
    padding: 10px 0 24px;
    border-radius: 5px; 
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1,  3px 3px 5px #ceced1,  3px 3px 5px #ceced1 ;
}
.segment-2{
     margin:auto 0 0;
}
.opt{ 
    background: #f0f2f5;
    margin:0 auto;
    display: flex;
    align-items: center;
}
.grid{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
     padding:62px 0 102px;
    height: 536px;
}
.segment-1{
    height: 266px;
    grid-column: 3/6;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:80px;
}
.image{
width: 80%;
display: flex;
justify-content: flex-start;

}
img{
    width: 301px;
    height: 105px;
    margin: auto;
}
.textplace{
  width:100%;
  display: flex;
  justify-content: center;
   flex-direction: column;
 
}
input{
    margin:0 auto;
    width: calc( 100% - 20%);
    padding: 14px 16px;
    margin-top: 6px;
    margin-bottom: 6px;
    border-radius: 5px;
    border:1px solid #f0f2f5;
    font-size: 17px;
}
.inputClick{
    border:1px solid #1877f2;
}

.log{
    display: flex;
    width: 100%;
}
.login{
    margin: 0 auto;
    width: calc(100% - 20%);
    padding: 14px 16px;
    margin-top: 6px;
    margin-bottom: 6px;
    border-radius: 5px;
    color: #fff;
    background: #1877f2;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
.login:hover{
    background: #1773eb;
}
.forgot{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 16px;
}
.forgot a{
    text-decoration: none;
    color:#1877f2 ;
}
.forgot a:hover{
    text-decoration: underline;
}
.line{
    margin: 20px auto 16px;
    height: 1px;
    width: 80%;
    background: rgb(180, 179, 179);
}
.newacc{
    background: #42b72A;
    color: #fff;
    font-size: 17px;
    padding: 0 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    height: 48px;
    cursor: pointer;
}
.newacc:hover{
    background-color: #25a50b;
}
.acc{
    width: 100%;
    display: flex;
    justify-content: center; 
    padding: 6px 0 0;
}
.container p{
    margin: 28px auto;
    
}
.center{
    margin: auto;
}
.description{
    width:90%;
    padding: 0 70px 20px;
    font-size: 28px;
    margin: 0 auto;
    
}
.create{
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin: auto;
    width: 120%;
}
.create:hover{
    text-decoration: underline;
}
.footer{
    background: #fff;
    margin-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:20px 0 0;

}
.wrapper{
    margin:0 auto;
    width:58%;
}

.footer a {
    text-decoration: none;
    color: #8A8D91;
    margin: 1px;
    font-size: 12px;
}
.wrap-1 a{
    padding-left:10px;
}
.wrap-2 a{
    padding-left:11px;
}
.wrap-1 a:first-child{
    padding-left:0px;
}
.wrap-2 a:first-child{
    padding-left:0px;
}
.footer a:hover{
    text-decoration: underline;
}
.meta{
    color: #737373;  
    font-size: 12px;
    margin-top: 20px;
}
.languages{
    font-size: 40px;
}
#popup {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    transition: 0.8s;
    z-index: 1;
}

/* #popup.active {
    position: fixed;
    z-index: 10;
    pointer-events: all;
    transition: 0.8s;
} */
#app.active {
    opacity: 0.25;
    pointer-events: none;
    user-select: none;
    transition: 0.1s;
}

.mypopup {
    box-shadow: 2px 2px 2px 2px rgb(202, 199, 199);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    width: 400px;
}

.mypopup img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin: 0;
}

.ftp {
    height: 82px;
    padding: 10px 16px;
}

.box-1 {
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-1 h1 {
    color: #1c1e21;
    font-size: 32px;
}

.box-2 {
    height: 24px;
    font-size: 15px;
}
.box-2 p{
    color: #606770;
}
.box-3{
    border-top: 1px solid grey;
}
.names {
 display: flex;
 gap: 10px;
 margin: 0 auto;
}

.names input {
    background: #f0f2f5;
    padding: 10px;
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
    font-size: 15px;
}

.names input .error {
    border: red;
}

.names input :nth-child(2) {
    margin-left: 11px;
}

.details input {
    background: #f0f2f5;
    width: calc(100% - 35px);
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
    font-size: 15px;
}

#firstName .error {
    border: red;
}
#firstName .error i{
    color: red;
    position: absolute;;
    right: 10px;
    top:40px;
}

.date {  
    font-size: 12px;
    margin: 2px auto;
}

.date-no {  
   display: grid;
  grid-template-columns: repeat(3, 1fr);
   border: 1px solid rgb(216, 212, 212);
     gap: 20px;
     border: none;
}

.date-no select {
    padding: 0 20px 0 8px;
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
}


.radio-btn {
    margin: -8px -6px -6px;
    color: #777777;
    display: flex;
    margin-top: 5px;
    gap: 10px;
    align-items: center;
}

.radio-btn input {
    width: 13px;
    height: 13px;
    margin-left:5px;
    top:10px;
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
}

.radio-btn span {
    color: #1c1e21;
    font-size: 15px;
    padding: 0 28px 0 10px;
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
}


.policy {
    margin: 11px 0;
    font-size: 11px;
}

.submit-btn {
    background: #39a724;
    color: #fff;
    border: none;
    border-radius: 8px;
    width: 194px;
    height: 36px;
    margin: 0 auto; 
    cursor: pointer;
}

.button {
    display: flex;
   
}

.box-3 {
    margin: 12px;
}

#responsive.active {
   opacity: 0.25;
   pointer-events: none;
   user-select: none;
   transition: 0.1s;
}
.form{
    padding: 16px;
    display: flex;
    flex-direction: column;
}
.customize p{
    font-size: 12px;
    margin: 2px 0;
}
.customize select{
  background: #f0f2f5;   
   width: calc(100% - 35px);
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
    font-size: 15px;
    margin-top:20px ;  
    padding: 10px 0;
}
.customize input{
 background: #f0f2f5;   
   width: calc(100% - 35px);
    border: 1px solid rgb(216, 212, 212);
    border-radius: 5px;
    font-size: 15px;
    margin: 6px 0;
}
@media all and(max-width:1024px) {
    .card{
        width:100%;
    }
}
@media all and (max-width:885px){
    .description{
        width: 60%;
    }
    
    .footer{
        margin-top: 300px;
    }
    #app{
        background: #f0f2f5;
    }
    .grid{
   padding: 0;
    }
    .images{
        padding-top: 0;
    }
  .segment-1{
      grid-column: 1/12;
      grid-row: 1;
  }
  .container{
    grid-column: 1/12;
    grid-row: 2; 
  }
}
@media all and (max-width:600px){


}
</style>
