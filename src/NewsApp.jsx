import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NewsApp() {
  const [data, setdata] = useState();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">News App</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <nav class="navbar navbar-light ">
            <form class="form-inline flex flex-row gap-2">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setdata(e.target.value)}
                value={data}
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NewsApp;
