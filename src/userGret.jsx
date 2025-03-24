//Conditional rendaring = allows you to control what gets rendard in your application based on certain condition 
//(show ,hide or change component)

function userGret(props){
    if(props.isLoggedin){
        return <div>Logged in welcome {props.username}</div>
    }
    else{
        return <div>You are not logged in </div>
    }

    // return(props.isLoggedin ? <div>Logged in welcome props{username}.</div> : <div>You are not logged in </div>)
}

export default userGret;