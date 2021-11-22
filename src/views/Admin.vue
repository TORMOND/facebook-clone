<template >
    <div id="admin">
       
        
<div class="users">
 <div><input type="text" v-model="findUser" placeholder="Search by email address or USER UID"></div>
    <div class="use" v-for="user in users" :key="user">
        
        <p>{{user.email}}</p>
        <p> {{user.uid}}</p>
    </div>

</div>

    </div>
</template>
<script>
export default {
    data() {
        return{
            users:[{email:"victormonderu@gmail.com", uid:"tUmz1C3i4uYB5z5xNrXZlEElc8M2"},
                   {email:"annnjoki@gmail.com", uid:"eHIjlpz72qZIKRFQ4hU2tcxL1y63"}
            ]
        }
    },
}
</script>
<style scoped>
#admin{
    background: #f0f2f5;
    display:flex;
    flex-direction: column;
}
.users{
    display: flex;
    margin: auto;
    flex-direction: column;
}
.user{
   
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
}
.use p{
    margin: 10px;
     background: #fff;
}
</style>