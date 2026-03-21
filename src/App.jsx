
import "./App.css";
import Categories from "./components/categories";

const usersDetails = [
    {
    id : 1,
    name : "rajesh",
    status : "active",
    email : "rajesh@gmail.com",
    domain : "Fullstack"
},
{
    id : 2,
    name : "vishnu",
    status : "deactive",
    email : "vishnu@gmail.com",
    domain : "Fullstack"
},
{
    id : 3,
    name : "suresh",
    status : "active",
    email : "suresh@gmail.com",
    domain : "Fullstack"
},
{
    id : 4,
    name : "ramesh",
    status : "active",
    email : "ramesh@gmail.com",
    domain : "Fullstack"
},
]
const MyApp = () => {

    
    return(
      <ul className="main-cont">
        {
            usersDetails.map( each => <Categories key = {each.id} user = {each}/>)
        }
    </ul>
    )
}

export default MyApp;