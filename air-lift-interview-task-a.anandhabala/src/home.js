import shop from "./shop.jpg";
import { Container } from "react-bootstrap";
import "./styles.css";
import "./project.css";

export default function Home() {
  return (
    <>
      <div id="whiteboderhome">
        <Container className="homeblackContainerborder">
          <div>
            <img id="homeimagemmain" variant="top" src={shop} />
          </div>
          <h4 id="hometextii">People First, Its'a Promise. </h4>
        </Container>
      </div>
    </>
  );
}
