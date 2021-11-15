<template>
  <div class="log-in">
    <div class="container">
        <div class="image" >
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg">
            </div>
            <div class="part">
            <div class="card">
                <div class="h2">Log in to facebook</div>
                <form>
                  <input  type="email" placeholder="Email address or phone number" v-model="email">
               <span class="danger">The email address or mobile number you entered isn't connected to an account. Find your account and log in.</span>
                 <input type="password" placeholder="Password" v-model="password">
                   <div class="log">
                           <button class="login">Log In</button></div>
                             <div class="forgot"><a href=""><router-link to="/about">Forgotten Password?</router-link></a></div>
        </form>    
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
// @ is an alias to /src


export default {
  name: 'Login',
  data() {
      return {
       title:'Log In',
       email:'',
       password:'',
      }
    },
}
</script>
<style scoped>
.log-in{
    display: flex;  
       flex-direction: column;
}
.container{
  background: #f0f2f5;  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0;
}
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
.card{
    background: #fff;
    margin:auto;
    width: 396px;
    padding: 10px 0 24px;
    border-radius: 5px; 
    box-shadow: 3px 3px 5px #ceced1, 3px 3px 5px #ceced1,  3px 3px 5px #ceced1,  3px 3px 5px #ceced1 ;
    display: flex;
    flex-direction: column;
}
.h2{
    margin: 0 auto;
    padding: 24px 0 16px;
    font-size: 18px;
}
form{
     display: flex;  
     flex-direction: column; 
}
.danger{
    color: #f02849;
    font-size: 13px;
    margin: 0 auto;
     width: calc( 100% - 20%);
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
input:first-child{
    border:1px solid #f02849;
}
.log{
 display: flex;
}
.login{
      width: calc( 100% - 20%);
    padding: 14px 16px;
    margin: 6px auto;
    border-radius: 5px;
    color: #fff;
    background: #1877f2;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
.login:hover{
    background: #1773eb;
}
.forgot{
  
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
.wrapper{
    margin:0 auto;
    width:58%;
  
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