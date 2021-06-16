//Search Input
const github=new GitHub;
const ui=new UI;
// const searchUser=document.getElementById('searchUser');
const searchUser=document.getElementById('gitform');

searchUser.addEventListener('submit',(e)=>{

const  userText=document.getElementById('insertu').value;

if(userText!==''){
  github.getUser(userText)
  .then(data=>{
     if(data.profile.message ==="Not Found"){
       
      ui.showAlert('User not Found', 'alert alert-danger');
     }else{
       //Show profile
       ui.showProfile(data.profile);
       ui.showRepos(data.repos);
      //  ui.showAlert('User not Found', 'alert alert-danger');
     }
  })
}else{
  ui.clearProfile();
}
e.preventDefault();
});
github.getd();
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo



