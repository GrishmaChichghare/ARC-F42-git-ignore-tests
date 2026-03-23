import { useState}from "react";
import "./App.css";

const MyApp = () => {
    const [heading, setHeading] = useState("Hello World");

    const onChangeHeading = () => {
        setHeading("Heading has been changed");
    }

    return (
        <div className="main-cont">
            <h1>{heading}</h1>
            <button onClick={onChangeHeading} className="btn btn-primary">change heading</button>
        </div>
    );
}

export default MyApp;