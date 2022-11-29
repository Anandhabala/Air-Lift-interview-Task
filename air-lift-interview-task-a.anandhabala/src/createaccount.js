import { useState, useContext } from "react";
import userContext from "./context";
import Account from "./account.jpg";
import "./styles.css";
import "./project.css";

export default function CreateAccount() {
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
    if (label === "password" && password.length < 8) {
      setResult("Error: " + label);
      alert("Please enter minimum 8 characters");
      return false;
    }
    if (label === "name") {
      if (!isNaN(check)) {
        setResult("Error: " + label);
        alert("Please Enter Valid Name");
        return false;
      }
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
    if (!validation(name, "name")) return;
    if (!validation(email, "email")) return;
    if (!validation(password, "password")) return;
    customer.users.push({ name, email, password, balance: 0 });
    setDisplay(false);
    alert("Successfully Created");
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
            <div className="row ">
              <center id="createACwholedesign">
                <div id="acreateACcoinstylei">
                  <img id="createAcoinimage" src={Account}></img>
                </div>
                <form>
                  <div className="form-group">
                    <br />
                    <label id="labelCA">NAME:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer Name"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label id="labelCA">EMAIL ADDRESS:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Customer Email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label id="labelCA">PASSWORD:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Customer Password"
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="submitcreateAC"
                    disabled={!name && !email && !password}
                    onClick={handleCreate}
                  >
                    SUBMIT
                  </button>
                </form>
              </center>
            </div>
          </>
        ) : (
          <>
            <h5 id="createAcsucess">Successfully Account Created.</h5>
            <button
              type="submit"
              className="createACanother"
              onClick={clearForm}
            >
              Add another account
            </button>
          </>
        )}
      </div>
    </>
  );
}
