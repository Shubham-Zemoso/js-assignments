var local = document.getElementById("local");
var session = document.getElementById("session")

//to initiate the values of local and session
function initiate()
{
    if(!localStorage.getItem('local'))
    {
        localStorage.setItem('local',0);
    }
    
    if(!sessionStorage.getItem('session'))
    {
        sessionStorage.setItem('session',0);
    }

    local.innerHTML = localStorage.getItem('local')
    session.innerHTML = sessionStorage.getItem('session')
}

initiate();

//to increment local variable
function incrementLocal()
{
    let l = parseInt(localStorage.getItem('local'));
    localStorage.setItem('local',l+1);


    local.innerHTML = localStorage.getItem('local');
}

//to increment session variable
function incrementSession()
{
    let s = parseInt(sessionStorage.getItem('session'));
    sessionStorage.setItem('session',s+1);


    session.innerHTML = sessionStorage.getItem('session');
}