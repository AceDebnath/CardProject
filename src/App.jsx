import Card from "./Card";
import Button from "./button/Button";
import Student from "./Student";
import userGret from "./userGret";
function App(){
  return (
    <>
    <Button/>
    <Card/>
    <Student name ="ace" age ={30} isStudent={false}/>
    <Student />
    <userGret isLoggedin ={true}username ="Tarun"/>
    </>
    
  );
}
export default App;