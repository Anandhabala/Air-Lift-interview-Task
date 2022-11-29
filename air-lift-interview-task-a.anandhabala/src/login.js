import { useState, useContext } from "react";
import "./project.css";
import userContext from "./context";
export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState(true);
  let customer = useContext(userContext);

  function validation(check, label) {
    if (!check) {
      setResult("Error: " + label);
      alert("Please enter " + label);
      return false;
    }
    if (label === "name") {
      if (!isNaN(check)) {
        setResult("Error: " + label);
        alert("Please Enter Valid Name");
        return false;
      }
    }
    if (label === "password" && password.length < 8) {
      setResult("Error: " + label);
      alert("Please enter minimum 8 characters");
      return false;
    }
    if (label === "email") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
      }
    }
    return true;
  }
  function handleCreate() {
    console.log(name, email, password);
    if (!validation(email, "email")) return;
    if (!validation(password, "password")) return;
    if (customer.users === setName) {
      if (customer.user === setEmail) {
        if (customer.user === setPassword) {
          alert("LOGIN SUCCESSFULLY");
        }
      }
    }
    setDisplay(false);
    alert("Successfully login");
  }
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setDisplay(true);
  }

  return (
    <>
      <div className="container mt-5" id="form">
        {display ? (
          <>
            <div className="login">
              <center id="loginwholedesign">
                <div id="loginheader">Login Account</div>
                <div class="card-body">
                  <form onSubmit={handleCreate}>
                    <div className="form-group">
                      <br />
                      <label id="labellUN">USERNAME</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Customer Name"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label id="labellEA">EMAIL ADDRESS </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Username or Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label id="labellpw">PASSWORD</label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="submitlogin"
                      disabled={!name && !email && !password}
                      onClick={handleCreate}
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
              </center>
            </div>
          </>
        ) : (
          <>
            <h5 id="loginsucess">Successfully Logged in.</h5>
            <button type="submit" className="loginanother" onClick={clearForm}>
              LOGIN another account
            </button>
          </>
        )}
      </div>
    </>
  );
}
