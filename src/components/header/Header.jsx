import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import arrow from "/images/header/arrow.svg";
import search from "/images/header/search.svg";
import cart from "/images/header/cart.svg";
import user from "/images/header/user.svg";

import styles from "./Header.module.scss";

function Dropdown({ children, open }) {
   return open && createPortal(<div>{children}</div>, document.body);
}

function Header() {
   const [dropdown, setDropdown] = useState(false);
   const [input, setInput] = useState("");

   const menuRef = useRef(null);

   const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
         setDropdown(false);
      }
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <>
         <header className={styles.header}>
            <div className="container">
               <div className={styles.wrapper}>
                  <Link className={styles.logo} to="/">
                     shop.co
                  </Link>
                  <nav>
                     <ul className={styles.list}>
                        <li>
                           <button onClick={() => setDropdown(!dropdown)}>
                              Shop
                              <img
                                 style={
                                    dropdown
                                       ? { transform: "rotate(180deg)" }
                                       : null
                                 }
                                 src={arrow}
                                 alt="arrow"
                              />
                           </button>
                           <Dropdown open={dropdown}>
                              <ul ref={menuRef} className={styles.dropdown}>
                                 <li>
                                    <Link to="/shop">All</Link>
                                 </li>
                                 <li>
                                    <Link to="/onSale">On Sale</Link>
                                 </li>
                                 <li>
                                    <Link to="/newArrivals">New Arrivals</Link>
                                 </li>
                                 <li>
                                    <Link to="/brands">Brands</Link>
                                 </li>
                              </ul>
                           </Dropdown>
                        </li>
                        <li>
                           <Link to="/onSale">On Sale</Link>
                        </li>
                        <li>
                           <Link to="/newArrivals">New Arrivals</Link>
                        </li>
                        <li>
                           <Link to="/brands">Brands</Link>
                        </li>
                     </ul>
                  </nav>
                  <form>
                     <img src={search} alt="search" />
                     <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="Search for products..."
                     />
                     {/* <ul className={styles.searchList}>{input}</ul>
							итемс есть? показать */}
                  </form>
                  <Link style={{ marginRight: "5px" }} to="/cart">
                     <img src={cart} alt="cart" />
                  </Link>
                  <Link to="/user">
                     <img src={user} alt="user" />
                  </Link>
               </div>
            </div>
         </header>
         {dropdown && <div className={styles.overlay}></div>}
      </>
   );
}

export default Header;
