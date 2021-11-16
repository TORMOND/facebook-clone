<template>
    <div>
    <div class="image" >
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg">
            </div>
              <div class="part">
       <div id="popup" class="mypopup" >
        <div class="ftp">
            <div class="box-1">
              
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
                  <div class="footer">
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
    </div>
</template>
<script>


export default {
    setup() {
        
    },
}
</script>
<style scoped>
.image{
width: 80%;
display: flex;
justify-content: flex-start;

}
img{
    width: 240px;
    height: 84.4px;
    margin: auto;
}
.part{
   margin:0 auto; 
   display: flex;
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
.footer{
    background: #fff;
    margin-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:20px 0 0;
    margin-top: 94px;
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
</style>