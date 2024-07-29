import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { BurgerMenu } from "./components/burgerMenu";
import { SearchInput } from "./components/searchInput";

import arrow from "/images/header/arrow.svg";
import searchInput from "/images/header/searchInput.svg";
import cart from "/images/header/cart.svg";
import user from "/images/header/user.svg";

import styles from "./Header.module.scss";

// Header component with navigation, search, and icons
export const Header: React.FC = () => {
   const [dropdown, setDropdown] = useState(false); // State for dropdown menu visibility
   const [input, setInput] = useState(""); // State for search input value

   const menuRef = useRef<HTMLUListElement>(null); // Ref for dropdown menu container

   // Close dropdown if clicked outside
   const handleClickOutside = (e: MouseEvent) => {
      if (
         menuRef.current &&
         e.target instanceof Node &&
         !menuRef.current.contains(e.target)
      ) {
         setDropdown(false);
      }
   };

   // Add and remove event listener for clicks outside dropdown
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
                  <BurgerMenu /> {/* Burger menu component for mobile */}
                  <Link className={styles.logo} to="/">
                     shop.co {/* Logo linking to home page */}
                  </Link>
                  <nav>
                     <ul className={styles.list}>
                        <li>
                           <button onClick={() => setDropdown(!dropdown)}>
                              Shop
                              {/* Toggle dropdown icon rotation */}
                              <img
                                 style={
                                    dropdown
                                       ? { transform: "rotate(180deg)" }
                                       : undefined
                                 }
                                 src={arrow}
                                 alt="arrow"
                              />
                           </button>
                        </li>
                        <li>
                           <Link to="/on_sale">On Sale</Link>
                        </li>
                        <li>
                           <Link to="/new-arrivals">New Arrivals</Link>
                        </li>
                        <li>
                           <Link to="/brands">Brands</Link>
                        </li>
                     </ul>
                  </nav>
                  <form className={styles.form}>
                     <img src={searchInput} alt="searchInput" />{" "}
                     {/* Search input icon */}
                     <input
                        value={input}
                        onChange={e => setInput(e.target.value)} // Update search input value
                        type="text"
                        placeholder="Search for products..."
                     />
                     {/* Search suggestions list (currently commented out) */}
                  </form>
                  <div className={styles.icons}>
                     <SearchInput /> {/* Additional search input component */}
                     <Link to="/cart">
                        <img src={cart} alt="cart" />{" "}
                        {/* Cart icon linking to cart page */}
                     </Link>
                     <Link to="/user">
                        <img src={user} alt="user" />{" "}
                        {/* User icon linking to user profile */}
                     </Link>
                  </div>
               </div>
            </div>
            {/* Dropdown menu for 'Shop' button */}
            {dropdown && (
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
            )}
         </header>
         {/* Overlay to cover the rest of the page when dropdown is active */}
         {dropdown && <div className={styles.overlay}></div>}
      </>
   );
};
