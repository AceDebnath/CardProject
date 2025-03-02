import profilePic from './assets/react.svg';
function Card()
{
    return (
        <div className="card">
            <img className = "cardImage" src={profilePic} alt="profile picture"></img>
            <h2 className="cardTitle">Ace Dev</h2>
            <p className='CardText'>I am a web developer</p>
        </div>
    );
}
export default Card;