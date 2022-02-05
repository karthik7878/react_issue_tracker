import axios from 'axios';

export default class UserApi{
static saveUsers(user) {
        
    if (user.emailid.length < 1){
        return new Promise((resolve, reject) => {				
           setTimeout(() => {
               reject("Emailid must be at least 1 character.");
           }, 1000);
       });
    }
   return axios.post("http://localhost:3001/users", user)
           .then(res => res.data);
   
    
}

}