import "./App.css";
import { useState } from "react";

function App() {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [savedData, setSavedData] = useState([]);
  const handleInputData = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };
  const handleSubmit = () => {
    setSavedData([...savedData, inputData]);
    console.log(inputData);
  };
  const handleDelete = (index) => {
    console.log(index + 1);
    const tempArray = [...savedData];
    tempArray.splice(index, 1);
    setSavedData(tempArray);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        {/* FORM */}
        <div className="col-4">
          <h4>User Registation Form</h4>
          <div className="mb-3">
            <input
              name="fname"
              type="text"
              onChange={handleInputData}
              placeholder="First Name"
              class="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              name="lname"
              type="text"
              onChange={handleInputData}
              placeholder="Last Name"
              class="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              onChange={handleInputData}
              placeholder="Email"
              class="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              name="phone"
              type="number"
              onChange={handleInputData}
              placeholder="Phone"
              class="form-control"
            />
          </div>
          <div className="mb-3">
            <button
              onClick={handleSubmit}
              type="button"
              class="btn-outline theme-info"
            >
              Submit
            </button>
          </div>
        </div>
        {/* TABLE */}
        <div className="col-8">
          <h4>User Record</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {savedData.map((data, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                      <button
                        type="submit"
                        className="btn-outline theme-primary"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="btn-outline theme-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
