import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { BurgerMenu } from "./components/burgerMenu";
import { SearchInput } from "./components/searchInput";
import { Input } from "../../ui/input/Input";

import { RootState } from "../../store";

import arrow from "/images/header/arrow.svg";
import searchInputImg from "/images/header/searchInput.svg";
import cartImg from "/images/header/cart.svg";
import user from "/images/header/user.svg";

import styles from "./Header.module.scss";

// Header component with navigation, search, and icons
export const Header: React.FC = () => {
   const { cart } = useSelector((state: RootState) => state.yourCartSlice);

   const [dropdownStatus, setDropdownStatus] = useState(false);

   const menuRef = useRef<HTMLUListElement>(null); // Ref for dropdown menu container

   // Close dropdown if clicked outside
   const handleClickOutside = (e: MouseEvent) => {
      if (
         menuRef.current &&
         e.target instanceof Node &&
         !menuRef.current.contains(e.target)
      ) {
         setDropdownStatus(false);
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
                           <button
                              onClick={() => setDropdownStatus(!dropdownStatus)}
                           >
                              Shop
                              {/* Toggle dropdown icon rotation */}
                              <img
                                 style={
                                    dropdownStatus
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
                  <Input
                     img={searchInputImg}
                     className="searchInput"
                     placeholder="Search for products..."
                  />
                  {/* <form className={styles.form}>
                     <img src={searchInputImg} alt="searchInput" />{" "}
                     <input
                        value={searchInput}
                        onChange={e => dispatch(setSearchInput(e.target.value))}
                        type="text"
                        placeholder="Search for products..."
                     />
                  </form> */}
                  <div className={styles.icons}>
                     <SearchInput /> {/* Additional search input component */}
                     <Link to="/cart">
                        <img src={cartImg} alt="cartImg" />
                        <span>{cart.length}</span>
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
            {dropdownStatus && (
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
         {dropdownStatus && <div className={styles.overlay}></div>}
      </>
   );
};
