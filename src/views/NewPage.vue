<template>
  <div class="newPage">
   <nav>
     <div class="wrapper">
<div class="box">
    <h1>facebook</h1>
    <button>Sign Up</button>
</div>
<a href="" >Join or login to facebook </a>
</div>
     </nav>
     <div class="container">
        <div class="element">
            <h2>Create a Page</h2>
            <p>Connect your business, yourself or your cause to the worldwide community of people on Facebook. To get started, choose a
            Page category.</p>
        </div> 
        <div class="displays">
        <div class="grid">
            <div class="card">
                <img src="https://www.facebook.com/images/pages/create/biz_illustration.png">
                <div class="description">
                <h3>Business or Brand</h3>
                <p>Showcase your products and services, spotlight your brand and reach more customers on Facebook.</p>
                
                </div>
                <button>Get Started</button>
            </div>
            <div class="card-1">
                <img src="https://www.facebook.com/images/pages/create/community_illustration.png">
                <div class="description">
                <h3>Community or public figure</h3>
                <p>Connect and share with people in your community, organisation, team, group or club.</p>
                
                </div>
                <button>Get Started</button>
            </div>
            </div>
        </div>
     </div>
<div id="popup" >
<div class="part-1">
  <span>Email or Phone</span>
  <input type="email">
   <span>Password</span>
  <input type="password">
  <a href="">Forgotten Account</a>
  <button class="login">Log In</button>
  </div>
  <div class="enter">
  <p>Do you wanna join Facebook?</p>
  <button class="signUp">Sign Up</button>
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

* {
    margin: 0;
    padding: 0;
}

.newPage {
    min-height: 100vh;
     background:#F0F2F5
}

nav {
    background: #3B5998;
    display: flex;
    color: #fff;
    align-items: center;
  
}
.wrapper{
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 450px;
}
.box h1{
    font-size: 48px;
}
nav a{
    text-decoration: none;
    color: #fff;
    font-size: 12px;
}
.box{
    display: flex;
    gap:20px;
    align-items: center;
}
.box button{
    border: none;
    background: #42b72a;
    color:#fff;
    border: 5px;
    font-weight: 600;
    width: 67.33px;
    height: 32px;
    border-radius: 5px;
   cursor: pointer;
}
.container { 
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    margin-top: 16px;
    gap: 20px;
    padding-top: 120px;
}
.displays{
  margin:0 auto;
  display: flex;
}
p{
    padding-top: 10px;
}
.card {
    background: #fff;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-1 {
    background: #fff;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
}

h3 {
    margin: 0 auto;
    font-weight: 600;
}

.card p {
    color: #90949c;
}

.card-1 p {
    color: #90949c;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 14px;
}
.element{
  margin: 0 auto;
  padding: 20px  0;
}
.card button {
    padding: 0 11px;
    margin: 0 auto;
    font-size: 12px;
    color: #444950;
    cursor: pointer;
}

.card-1 button {
    padding: 0 11px;
    margin: 0 auto;
    font-size: 12px;
    color: #444950;
    cursor: pointer;
}
.description{
  padding-top: 30px;
  padding-bottom:42px ;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
#popup{
background: #F0F2F5;
padding: 0 0 6px;
display: flex;
flex-direction: column;
width: 260px;
position:absolute;
z-index: 1;
top: 8%;
left: 60%;
box-shadow: 3px 3px 5px #ceced1;
}
#popup input{
  width: 228px;
  height: 32px;
  margin: 0 auto;
  border: 1px solid #ceced1;
}
#popup a{
  text-decoration: none;
  color: #385898;
  font-size: 12px;
  margin: 0 auto;
}
.login{
   width: 228px;
  height: 32px;
  margin: 0 auto;
  border: none;
  background: #4267b2;
  color: #fff;
}
.enter{
  display: flex;
  flex-direction: column;
  background: #F0F2F5;
}
.enter p{
  font-size: 12px;
  color: #7f7f7f;
  margin: 0 auto;
}
.signUp{
    border: none;
    background: #42b72a;
    color:#fff;
    border: 5px;
    font-weight: 600;
    width: 67.33px;
    height: 32px;
    border-radius: 5px;
   cursor: pointer;
   margin: 0 auto;
}
.part-1{
  padding: 10px 16px 16px;
  background: #fff;
}
#popup span{
  font-size: 12px;
  color: #606770;
}

@media all and (max-width:600px){
    .grid{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
