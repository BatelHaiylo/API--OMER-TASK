let githubUserName = document.getElementById('user_input');
async function getUser(githubLogingName){
    try{
        return await fetch(`https://api.github.com/users/${githubLogingName}`)
        .then(res => res.json())
    }
    catch(err){}
    finally{}
}
function printGetUser(){
    getUser(githubUserName.value).then((res => console.log(res)))
}