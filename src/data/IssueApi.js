import axios from 'axios';



export default class IssueApi {
    static getAllIssues() {
        
       return  axios.get('http://localhost:3001/issues')
            .then(response => response.data)
            .catch(error => {
                throw error
            });
    }

    static saveIssues(issue) {
        
         if (issue.name.length < 1){
             return new Promise((resolve, reject) => {				
				setTimeout(() => {
					reject("Issue name must be at least 1 character.");
				}, 1000);
			});
         }
        return axios.post("http://localhost:3001/issues", issue)
				.then(res => res.data);
        
         
    }

   
    static deleteIssue(id) {
      console.log("inside issue api deleteIssue method");
		return axios.delete("http://localhost:3001/issues/" + id);
	}
    
  static changeIssue(id,issue) {
    return axios.put("http://localhost:3001/issues/" + id,issue)
    .then(res => res.data);
}
 
static ChangeCount(id,count) {
  return axios.patch("http://localhost:3001/issues/" + id,{issuecount:count})
  .then(res => res.data);
}

} 