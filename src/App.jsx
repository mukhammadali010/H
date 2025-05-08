import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <div className="ota">
        
         <Card ism="Emily   Johndson " kasbi="Product  Manager" soha="Product Developmebt"> </Card>
         <Card ism="Amina Idris" kasbi="Software Engineer" soha="Technology" > </Card>
         <Card ism="Carlos Hernández " kasbi="UI Designer" soha="Design" > </Card>
         <Card ism="Carlos Hernández" kasbi="Marketing Specialist" soha="Marketing"  ></Card>
         <Card ism="Takumi Sato" kasbi="HR Specialist" soha="Human Resources" > </Card>
         <Card ism="Chen Wei" kasbi="Data Analyst" soha="Data Science" > </Card>
         <Card ism="Emma Dubois" kasbi="Sales Manager" soha="Sales" ></Card>
         <Card ism="Igor Sokolov" kasbi="Quality Assurance" soha="Quality Control" > </Card>
          
         
           
    </div>
  );
}

export default App;
