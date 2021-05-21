import React, { PureComponent } from "react";
import "./style.css";
import "./dropdown.css";
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
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="special-styling navbar-nav">
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
                    className=" special-styling dropdown-menu"
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
                        href="/sells/subscription-online-store"
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
                        href="/menu/overview"
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
                    className=" special-styling dropdown-menu"
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
                        href="/operate/centralized-order-dashboard"
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
                        href="/operate/order-routing-and-kitchen-display-system"
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
                        href="/operate/order-fulfillment"
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
                        href="/operate/packaging-management"
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
                        href="/operate/portion-control"
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
                    href="/we_serve"
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
                    className=" special-styling dropdown-menu"
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
                        href="#"
                      >
                        For Restaurants
                      </a>
                      <ul className="special-styling">
                        <li>
                          <a href="/restaurants/fine-dine-restaurants">
                            Casual and Fine Dining
                          </a>
                        </li>
                        <li>
                          <a href="/restaurants/cafes">QSR, Cafes</a>
                        </li>
                      </ul>
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
                        For Enterprise
                      </a>
                      <ul className="special-styling">
                        <li>
                          <a href="/enterprise/grocers">Grocers</a>
                        </li>
                        <li>
                          <a href="/enterprise/meal-kit-startups">
                            Meal kit Startups
                          </a>
                        </li>
                        <li>
                          <a href="/enterprise/how-dailykit-can-help-franchisees">
                            Franchisees
                          </a>
                        </li>
                      </ul>
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
                        href="#"
                      >
                        Meal Kit Guides
                      </a>{" "}
                      <ul className="special-styling">
                        <li>
                          <a href="/meal-kit-guides/meal-kit-packaging">
                            Meal Kit Packaging
                          </a>
                        </li>
                        <li>
                          <a href="#">The Meal Kit Marketing Guide</a>
                          <ul className="special-styling">
                            <li>
                              <a href="/meal-kit-guides/meal-kit-guides/how-to-decide-your-meal-kits">
                                How to decide your meal kits
                              </a>
                            </li>
                            <li>
                              <a href="/meal-kit-guides/meal-kit-guides/how-to-price-your-meal-kits">
                                How to price your meal kits
                              </a>
                            </li>
                            <li>
                              <a href="/meal-kit-guides/meal-kit-guides/how-to-promote-your-meal-kits">
                                How to promote your meal kits
                              </a>
                            </li>
                            <li>
                              <a href="/meal-kit-guides/meal-kit-guides/how-to-sell-your-meal-kits">
                                How to sell your meal kits
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
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
                    className=" special-styling dropdown-menu"
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
