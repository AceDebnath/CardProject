import Card from "./Card";
import Button from "./button/Button";
import Student from "./Student";
function App(){
  return (
    <>
    <Button/>
    <Card/>
    <Student name ="ace" age ={30} isStudent={false}/>
    <Student name ="Tarun" age ={20} isStudent={true}/>
    <Student name ="Gg" age={22} isStudent={true}/>
    </>
    
  );
}
export default App;