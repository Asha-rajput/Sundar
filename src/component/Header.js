import { Row, Col, CardHeader, Nav, NavItem, NavLink } from "reactstrap";
import MoviesDropDown from "./MoviesDropDown";
import ShowDropDown from "./ShowDropDown";
import MusicDropDown from "./MusicDropDown";

const SundarHeader = (props) => {
  return (
    <CardHeader>
      <Row>
        <Col
          style={{
            color: "#FF3E80",
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: "20px",
            // backgroundColor:'yellow',
          }}
          xs="2"
        >
          <i class="fa fa-play-circle" aria-hidden="true" />
          <text
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Sundar..
          </text>
        </Col>

        <Col
          style={{
            color: "#FF3E80",
            fontSize: "auto",
            fontWeight: "bolder",
          }}
          xs="auto"
        >
          <Nav>
            <NavItem>
              <NavLink active href="/">
                <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            <ShowDropDown />
            <MoviesDropDown />

            {/* <NavItem>
              <NavLink href="#"> Shows</NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink href="#">Movies</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/MXGoldPage">MX Gold</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/NewRelease">New Release</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/MXVdesi">MX VDesi</NavLink>
            </NavItem>
            <MusicDropDown />
            {/* <NavItem>
              <NavLink href="#">Music</NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink href="#">Others</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col
          style={{
            color: "#FF3E80",
            fontSize: "auto",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
          xs="auto"
        >
          <Nav>
            <NavItem>
              <NavLink active href="SearchScreen">
                <i class="fa fa-search" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"> Shows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i class="fa fa-bars" aria-hidden="true"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
      {props.children}
    </CardHeader>
  );
};
export default SundarHeader;
