import { useState } from "react";
import "./App.css";
import Students from "./components/students/students";

function App() {
    const [studentsState, setStudents] = useState([
        {
            id: 0,
            name: "Mahdi",
            classNumber: 204,
            phoneNumber: 1234,
            email: "reactapp.ir@gmail.com",
        },
        {
            id: 1,
            name: "Alireza",
            classNumber: 214,
            phoneNumber: 12345,
            email: "reactapp.ir@gmail.com",
        },
        {
            id: 2,
            name: "Ali",
            classNumber: 224,
            phoneNumber: 123456,
            email: "reactapp.ir@gmail.com",
        },
        {
            id: 3,
            name: "Amirhossien",
            classNumber: 234,
            phoneNumber: 1234567,
            email: "reactapp.ir@gmail.com",
        },
    ]);
    return (
        <div className="App">
            <Students studentsList={studentsState} />
        </div>
    );
}

export default App;
