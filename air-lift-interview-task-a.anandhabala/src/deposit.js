import { Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from "./context";
import currency from "./curency.jpg";
import "./styles.css";
import "./project.css";

export default function Deposit() {
  const [deposit, setDeposit] = useState("");
  const [result, setResult] = useState("");
  let customer = useContext(UserContext);
  var cnamelength = customer.users.length;
  var Balance = customer.users[cnamelength - 1].balance;
  const [availablebalance, setAvailableBalance] = useState(Balance);
  const [display, setDisplay] = useState(true);

  function validation(check, label) {
    if (isNaN(check)) {
      setResult("Error: " + label);
      alert("PLEASE ENTER VALID AMOUNT");
      return false;
    }
    if (parseInt(check) <= 0) {
      setResult("Error: " + label);
      alert(" PLEASE ENTER a AMOUNT MORE THAN ZERO");
      return false;
    }
    return true;
  }
  function handleCreate() {
    if (!validation(deposit, "deposit")) return;
    var GOOGLEPAYMONEY = Balance + parseInt(deposit); //convert string to integer parseint
    setAvailableBalance(GOOGLEPAYMONEY);
    customer.users[cnamelength - 1].balance = GOOGLEPAYMONEY;
    setDisplay(false);
    alert("Successfully Deposited ₹" + deposit);
  }

  function refreshForm() {
    setDeposit("");
    setDisplay(true);
  }
  return (
    <>
      <Container>
        <Row>
          <h4 id="depositbalance">Balance : ₹ {availablebalance}</h4>
        </Row>
        <Row>
          {display ? (
            <form>
              <center id="depositwholedesign">
                <br />
                <h5 id="depositheader">PAYMENTS</h5>
                <br />
                <div id="depositcurrencyimagestylei">
                  <img id="depositcurrencyimage" src={currency}></img>
                </div>
                <div class="form-group">
                  <div id="labelspacedeposit">
                    <br />
                    <label id="labeldeposit">ENTER YOUR AMOUNT:</label>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Enter Amount TO Deposit in Your Account"
                    value={deposit}
                    onChange={(e) => setDeposit(e.currentTarget.value)}
                  />
                </div>
                <br />
                <button
                  type="submit"
                  class="depositsubmit "
                  onClick={handleCreate}
                >
                  Deposit
                </button>
              </center>
            </form>
          ) : (
            <>
              <h5 id="successdeposit">SUCCESSFULLY PAYMENT IN YOUR ACCOUNT.</h5>
              <br />
              <br />
              <button
                type="submit"
                className="addanotherdeposit"
                onClick={refreshForm}
              >
                Add Another PAYMENTS
              </button>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
