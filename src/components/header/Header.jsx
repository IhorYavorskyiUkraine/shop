import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { BurgerMenu } from "./components/burgerMenu/BurgerMenu";
import { SearchInput } from "./components/searchInput/SearchInput";

import arrow from "/images/header/arrow.svg";
import searchInput from "/images/header/searchInput.svg";
import cart from "/images/header/cart.svg";
import user from "/images/header/user.svg";

import styles from "./Header.module.scss";

export function Header() {
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
                  <BurgerMenu />
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
                  <form className={styles.form}>
                     <img src={searchInput} alt="searchInput" />
                     <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder="Search for products..."
                     />
                     {/* <ul className={styles.searchList}>{input}</ul>
							итемс есть? показать */}
                  </form>
                  <div className={styles.icons}>
                     <SearchInput />
                     <Link to="/cart">
                        <img src={cart} alt="cart" />
                     </Link>
                     <Link to="/user">
                        <img src={user} alt="user" />
                     </Link>
                  </div>
               </div>
            </div>
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
         {dropdown && <div className={styles.overlay}></div>}
      </>
   );
}
