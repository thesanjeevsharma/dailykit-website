import React, { PureComponent } from "react";
import "./style.css";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div style={{ position: "fixed", top: "0", width: "100vw", zIndex: "1" }}>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            border: "0px solid black",
            boxShadow: "5px 5px 5px #888888",
          }}
        >
          <div className="container-fluid mt-2 mb-2">
            <a
              className="navbar-brand"
              href="/"
              style={{ marginLeft: "1.5rem", marginRight: "15rem" }}
            >
              <img
                src="https://www.dailykit.org/hs-fs/hubfs/Group%2056-1.png?name=Group%2056-1.png"
                alt=""
                width="181"
                height="54"
              />
            </a>

            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sell
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/sells/on-demand-online-store"
                      >
                        onDemand Store
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="#"
                      >
                        Subscription Store
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="#"
                      >
                        Menu Management
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Operate
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/AboutUs/OurPhilosophy"
                      >
                        Centralized Order Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/Tools/Revenue_Calculator"
                      >
                        Order Routing & KDS
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/Meal_Kit_Guides/Meal_Kit_Packaging"
                      >
                        Order Fulfillment Management
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/Tools/Revenue_Calculator"
                      >
                        Packaging Management
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/Meal_Kit_Guides/Meal_Kit_Packaging"
                      >
                        Portion Control
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="/market"
                  >
                    Market
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="#"
                  >
                    We Serve
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Start a Meal Kit Brand
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/For_Restaurants"
                      >
                        For Restaurants
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="For_Enterprise"
                      >
                        For Enterprise
                      </a>
                    </li>

                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/cloud_kitchen"
                      >
                        Cloud Kitchen
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/bakerypage"
                      >
                        Bakery
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="How_to_start_a_meal_kit_service"
                      >
                        Meal Kit Guides
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="How_to_start_a_meal_kit_service"
                      >
                        Start Meal Kit Brand
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="How_to_start_a_meal_kit_service"
                      >
                        Case study
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="Recipe_Provider"
                      >
                        Do more
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/AboutUs/OurPhilosophy"
                      >
                        Our Philosophy
                      </a>
                    </li>
                    <li>
                      <a
                        style={{
                          color: "#113D63",
                          fontWeight: "600",
                          fontSize: "12px",
                        }}
                        className="dropdown-item"
                        href="/AboutUs/Blog"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    style={{
                      color: "#113D63",
                      fontWeight: "600",
                      marginLeft: "0.7rem",
                      fontSize: "14px",
                    }}
                    href="/ScheduleDemo"
                  >
                    Schedule Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
