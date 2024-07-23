import { useState } from "react";
import cart from "./Cart.svg";
import user from "./User.png";
import logo from "./logo.png";
import "./NavBar.css";
import "../App.css";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
export default function NavBar() {
  const [Menu, setMenu] = useState("dashboard");

  const [Count, setCount] = useState(0);
  const [mystyle, setMystyle] = useState({
    display: "none",
  });

  const Show = () => {
    let burger = document.getElementById("burger");
    burger.addEventListener("click", () => {
      if (mystyle.display === "none") {
        setMystyle({
          display: "block",
        });
      } else {
        setMystyle({
          display: "none",
        });
      }
    });
  };

  const [dropdownDefaultButton, setdropdownDefaultButton] = useState({
    display: "none",
  });

  const Dropdown_lists = () => {
    let dropdownDefaultButtonn = document.getElementById(
      "dropdownDefaultButton"
    );
    dropdownDefaultButtonn.addEventListener("click", () => {
      if (dropdownDefaultButton.display === "none") {
        setdropdownDefaultButton({
          display: "block",
        });
      } else {
        setdropdownDefaultButton({
          display: "none",
        });
      }
    });
  };

  const [dropdownDefaultButton1, setdropdownDefaultButton1] = useState({
    display: "none",
  });

  const Dropdown_lists1 = () => {
    let user_menu_button = document.getElementById("user-menu-button");
    user_menu_button.addEventListener("click", () => {
      console.log("hello  ");
    });
  };

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 " src={logo} alt="Your Company" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      to="/"
                      style={linkStyle}
                      className="bg-gray-900 rounded-md  px-3 py-2 text-sm font-medium text-white"
                      aria-current="page"
                      id="m1"
                      onClick={() => {
                        setMenu("dashboard");
                      }}
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/male"
                      style={linkStyle}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      id="m2"
                      onClick={() => {
                        setMenu("males");
                      }}
                    >
                      Male's
                    </Link>

                    <Link
                      to="/female"
                      style={linkStyle}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      aria-current="page"
                      id="m3"
                      onClick={() => {
                        setMenu("dashboard");
                      }}
                    >
                      Female's
                    </Link>
                    <Link
                      to="/kids"
                      style={linkStyle}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                      aria-current="page"
                      id="m4"
                      onClick={() => {
                        setMenu("dashboard");
                      }}
                    >
                      Kid's
                    </Link>
                    {/* <a
                      href="#"
                      className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      More
                    </a> */}
                    <div className="relative ml-3 hhh">
                      <div>
                        <button
                          type="button"
                          className="relative bb flex max-w-xs rounded-md  text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          id="user-menu-button "
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={Dropdown_lists1}
                        >
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">Open user menu</span>
                          <a
                            href="#"
                            className="rounded-md flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            More
                            <svg
                              className="w-2.5 h-2.5 ms-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 4 4 4-4"
                              ></path>
                            </svg>
                          </a>
                        </button>
                      </div>

                      <div
                        className="hh hidden top-7 absolute left-3 z-10 mt-2 w-60 origin-top-right rounded-md text-white bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                      >
                        <Link
                          to="/newarrivals"
                          style={linkStyle}
                          className="block px-4 py-2 text-sm text-white-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          New arrivals
                          {/* Best seller */}
                        </Link>

                        <Link
                          to="/bestseller"
                          style={linkStyle}
                          className="block px-4 py-2 text-sm text-white-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          Best seller
                          {/* Glossary */}
                        </Link>
                        <Link
                          to="/glossary"
                          style={linkStyle}
                          className="block px-4 py-2 text-sm text-white-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          Glossary
                        </Link>
                        <Link
                          to="/Contact_support"
                          style={linkStyle}
                          className="block px-4 py-2 text-sm text-white-700"
                          role="menuitem"
                          tabindex="-1"
                          id="user-menu-item-0"
                        >
                          Contact support
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="count_cart relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id=""
                  >
                    <span className="absolute -inset-1.5"></span>
                  </button>


                  {/* offcanvas */}
                  <button
                    type="button"
                    className="btn position-relative"
                    typeof="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <img src={cart} alt="" className="h-6 w-6" />

                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {Count}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>

                  <div
                    className="offcanvas offcanvas-end w-50"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div className="offcanvas-header">
                      <h5
                        id="offcanvasRightLabel"
                        className="text-2xl text-gray-800 font-bold"
                      >
                        Shopping Cart
                      </h5>
                      <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <hr />
                    <div className="offcanvas-body h-screen ">
                      {/* body of offcanvas   */}
                      <Cart />
                      {/* body of offcanvas   */}
                    </div>
                  </div>

                  {/* offcanvas */}

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button "
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={Dropdown_lists1}
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user}
                          alt=""
                        />
                      </button>
                    </div>

                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                      style={dropdownDefaultButton1}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden" id="burger" onClick={Show}>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="" id="mobile-menu" style={mystyle}>
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {/* search bar for mobile screen  */}
              <form class="max-w-md mb-3 mx-auto">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" class="block h-14 w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>

              <a href="#">
                <Link
                  to="/"
                  style={linkStyle}
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </a>
              <a href="#">
                <Link
                  to="/male"
                  style={linkStyle}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Male's
                </Link>
              </a>
              <a href="#">
                <Link
                  to="/female"
                  style={linkStyle}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Female's
                </Link>
              </a>
              <a href="#">
                <Link
                  to="/kids"
                  style={linkStyle}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Kid's
                </Link>
              </a>

              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {/* dropdownlist */}

                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white text-center inline-flex items-center "
                  type="button"
                  onClick={Dropdown_lists}
                >
                  {" "}
                  More{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdown"
                >
                  <ul
                    className="py-2 hidden text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                    style={dropdownDefaultButton}
                  >

                    <li >
                      <a
                        href="#"
                        style={linkStyle}
                      >
                        <Link
                          to="/newarrivals"
                          style={linkStyle}
                          // className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

                        >
                          New arrivals
                        </Link>
                      </a>
                    </li>
                    <li >
                      <a
                        href="#"
                        style={linkStyle}
                      >
                        <Link
                          to="/bestseller"
                          style={linkStyle}
                          // className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

                        >
                          Best Seller
                        </Link>
                      </a>
                    </li>
                    <li >
                      <a
                        href="#"
                        style={linkStyle}
                      >
                        <Link
                          to="/glossary"
                          style={linkStyle}
                          // className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

                        >
                          Glossary
                        </Link>
                      </a>
                    </li>
                    <li >
                      <a
                        href="#"
                        style={linkStyle}
                      >
                        <Link
                          to="/Contact_support"
                          style={linkStyle}
                          // className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"

                        >
                          Contact support
                        </Link>
                      </a>
                    </li>



                  </ul>
                </div>

                {/* dropdownlist */}
              </a>
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    Shrutii
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    shrutii@gmail.com
                  </div>
                </div>
                <button
                  type="button"
                  className="count_cart relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id=""
                // onClick={() => setCount((Count) => Count + 1)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                </button>
                <button
                  class="btn position-relative"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >

                  <img src={cart} alt="" className="h-6 w-6" />
                  {/* Inbox */}
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {Count}
                    <span className="visually-hidden">unread messages</span>
                  </span>

                </button>

                <div
                  class="offcanvas offcanvas-top offcanvas-h"
                  tabindex="-1"
                  id="offcanvasTop"
                  aria-labelledby="offcanvasTopLabel"
                >
                  <div class="offcanvas-header ">
                    <h5 id="offcanvasTopLabel" className="text-3xl">
                      {/* heading of offcanvas */}
                      Shopping Cart
                    </h5>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    {/* body of offcanvas in phone */}
                    <Cart />

                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header> */}
        {/* <main> */}

        {/* <div className="px-4 py-6 sm:px-6 lg:px-8">
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" fdprocessedid="zgl3q">Enable both scrolling &amp; backdrop</button>
    
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" fdprocessedid="boetos"></button>
      </div>
      <div className="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
          </div> */}

        {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    ...
  </div>
</div> */}

        {/* </main> */}
      </div>
    </>
  );
}
