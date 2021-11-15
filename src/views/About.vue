<template>
  <div class="about">
  <nav class="nav">
    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg">
    <div class="accessibility">
    <input type="email" placeholder="Email or Phone">
    <input type="password" placeholder="password">
    <button><router-link to="/Login" class="login">Log In</router-link></button>
    <a href="#" class="forgotten">Forgotten Account?</a>
    </div>
  </nav>
<div class="account">
 <div class="card">
<h2>Find Your Account</h2>
<div class="bord">
<p>Please enter your email address or mobile number to search for your account.</p>
<input type="text" placeholder="Mobile Number" class="mobile">
</div>
<div class="btn">
  <button>Cancel</button>
  <button>Search</button>
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


export default({
  setup() {
    
  },
})
</script>
<style scoped>
.nav{
  display: flex;
  justify-content: space-between;
  box-shadow:3px 3px 5px #ceced1, 3px 3px 5px #ceced1, 3px 3px 5px #ceced1, 3px 3px 5px #ceced1 ;
  align-items: center;
}
.accessibility{
  padding:0 16px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.nav img{
  width: 150px;
  height: 56px;
}
.forgotten{
  text-decoration: none;
  color:#1877f2;
}
.nav button{
  background: #1877f2;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 69px;
  height: 40px;
  padding: 6px 4px;
  cursor:pointer;

}
.login {
    text-decoration: none;
  color: #fff;
}
input{
  padding: 8px 12px 10px;
  border-radius: 5px;
  border:1px solid rgb(153, 151, 151);
}
.account{
  background:#f0f2f5;
  padding:80px 0;
  display: flex;
}
.card{
  background: #fff;
  margin: auto;
  border-radius: 10px;
  padding: 10px 0 0;
}
.card h2{
  padding: 18px 16px 18px 18px ;
  font-size: 20px;
  margin:-15px 0 0;
}
.bord{
  border-top: 1px solid #ceced1;
    border-bottom: 1px solid #ceced1;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
}
.bord p{
  font-size: 17px;
  margin-bottom: 16px;
  margin:10px auto;
  width: calc(100% - 70px);
  
}
.bord input{
  padding: 16px 0 16px 16px;
  margin:0 auto;
  width: calc(100% - 90px);
  
}
.btn{
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.btn button{
  border:none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 20px;
  height: 36px;
}
.btn button:last-child{
  background: #1877f2;
  color: #fff;
}
.mobile{
  margin-bottom: 20px;
}


.footer{
    background: #fff;
    margin-bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding:20px 0 0;
   margin-top: 114px;
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

@media all and(max-width:850px){
  .nav input{
  display: none;
  }
}
</style>
