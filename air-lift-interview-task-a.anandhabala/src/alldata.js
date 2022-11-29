import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import UserContext from "./context";
import "./styles.css";
import "./project.css";

export default function AllData() {
  const ctx = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(ctx.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  function renderTableData() {
    return ctx.users.map((user, index) => {
      const { name, email, password, balance } = user;
      return (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }
  return (
    <>
      <Container>
        <center>
          <h5 id="alldataheader">ALLDATA</h5>
        </center>
        <h5 id="alldatalist">USER DETAILS</h5>
        <Row>
          <br />
          <div id="alldatastylei">
            <table id="users" class="table mt-5">
              <tr class="tablehead">{renderTableHeader()} </tr>
              {renderTableData()}
            </table>
          </div>
          <br />
        </Row>
      </Container>
    </>
  );
}
