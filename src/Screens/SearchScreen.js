import React, { useState } from "react";
import SundarHeader from "../component/Header";
import { InputGroupText, InputGroup, Input, Row, Col } from "reactstrap";

const SearchScreen = () => {
  console.log(" Hello !SearchScreen ..");

  return (
    <>
      <SundarHeader />
      <div
        style={{
          backgroundColor: "yellow",
          flex: 1,
          height: "150px",
          width: "80%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <InputGroup>
          <InputGroupText>
            <i class="fa fa-search" aria-hidden="true"></i>
          </InputGroupText>
          <Input placeholder="Search for a Web Show,Movie & Genre etc." />
          <InputGroupText>
            <i class="fa fa-times" aria-hidden="true"></i>
          </InputGroupText>
        </InputGroup>
        <Row
          style={{
            flex: 1,
            height: "40%",
            width: "80%",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <div
              style={{
                backgroundColor: "red",
                flex: 1,
                height: "80%",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              WEB SHOW
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "red",
                flex: 1,
                height: "80%",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              MOVIES
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "red",
                flex: 1,
                height: "80%",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              SHORT FILMS
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "red",
                flex: 1,
                height: "80%",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              MUSIC
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "red",
                flex: 1,
                height: "80%",
                width: "80%",
                margin: "auto",
                marginTop: "20px",
                borderRadius: "5px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              LIVE TV
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchScreen;
