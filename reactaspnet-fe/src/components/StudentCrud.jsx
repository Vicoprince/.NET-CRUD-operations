import React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import { toast } from "react-toastify";


const StudentCrud = () => {

    const [id, setId] = useState("");
    const [stname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");
    const [students, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {
      const result = await axios.get(
        "https://localhost:7082/api/Student/GetStudent"
      );
      setUsers(result.data);
      console.log(result.data);
    }

    async function save(e) {
   
    e.preventDefault();
    try {
      await axios.post("https://localhost:7082/api/Student/AddStudent", {
        student_name: stname,
        student_email: email,
        course: course,
      });
      toast.success("Student Registation Successfully");
          setId("");
          setName("");
          setEmail("");
          setCourse("");
        Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(student) {
    setName(student.student_name);
    setEmail(student.student_email);
    setCourse(student.course);

    setId(student.id);
  }

  async function DeleteStudent(id) {
    await axios.delete(
      "https://localhost:7082/api/Student/DeleteStudent/" + id
    );
    toast.success("Student deleted Successfully");
    setId("");
    setName("");
    setEmail("");
    setCourse("");
    Load();
  }

  async function update(e) {
    e.preventDefault();
    try {

      await axios.patch("https://localhost:7082/api/Student/UpdateStudent/"+ students.find((u) => u.id === id).id || id,
        {
          id: id,
          student_name: stname,
          student_email: email,
          course: course,

        }
      );
      toast.success("Registation Updateddddd");
      setId("");
      setName("");
      setEmail("");
      setCourse("");
     
      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div className="container mt-4">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="id"
              hidden
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <label>Student Name</label>
            <input
              type="text"
              className="form-control"
              id="stname"
              value={stname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Student Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              className="form-control"
              id="course"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button className="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <table className="table table-primary" align="center">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(function fn(student) {
          return (
            <tbody>
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.student_name}</td>
                <td>{student.student_email}</td>
                <td>{student.course}</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => DeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default StudentCrud;
