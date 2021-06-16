class GitHub{
constructor(){
    this.client_id='Iv1.b7696da2b6714f8d';
    this.client_secret='30b3b9c33957aa0d6037643967e76c283250ed91';
    this.repos_sort='created:desc';
    this.repos_count=5;
    
}

async getUser(user){

const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

const profile=await profileResponse.json();
const repos=await repoResponse.json();
return{
    profile,
    repos
}
}
async getd(){
    
    const datalimit=await fetch(`https://api.github.com/rate_limit?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const ess=await datalimit.json();
console.log(ess);
    }
}
