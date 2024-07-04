import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

export function Footer() {
   const socials = [
      {
         name: "X",
         image: "/images/footer/1.svg",
         link: "https://www.x.com",
      },
      {
         name: "Facebook",
         image: "/images/footer/2.svg",
         link: "https://www.facebook.com",
      },
      {
         name: "Instagram",
         image: "/images/footer/3.svg",
         link: "https://www.instagram.com",
      },
      {
         name: "GitHub",
         image: "/images/footer/4.svg",
         link: "https://www.github.com",
      },
   ];

   const menu = [
      {
         title: "Company",
         name: [
            {
               name: "About",
               link: "/about",
            },
            {
               name: "Features",
               link: "/features",
            },
            {
               name: "About",
               link: "/works",
            },
            {
               name: "About",
               link: "/career",
            },
         ],
      },
      {
         title: "Help",
         name: [
            {
               name: "Customer Support",
               link: "/customer_support",
            },
            {
               name: "Delivery Details",
               link: "/delivery_details",
            },
            {
               name: "Terms & Conditions",
               link: "/terms&conditions",
            },
            {
               name: "Privacy Policy",
               link: "/privacy_policy",
            },
         ],
      },
      {
         title: "FAQ",
         name: [
            {
               name: "Account",
               link: "/account",
            },
            {
               name: "Manage Deliveries",
               link: "/manage_deliveries",
            },
            {
               name: "Orders",
               link: "/orders",
            },
            {
               name: "Payments",
               link: "/payments",
            },
         ],
      },
      {
         title: "Resources",
         name: [
            {
               name: "Free eBooks",
               link: "/free_ebooks",
            },
            {
               name: "Development Tutorial",
               link: "/development_tutorial",
            },
            {
               name: "How to - Blog",
               link: "/how_to_Blog",
            },
            {
               name: "Youtube Playlist",
               link: "/youtube_playlist",
            },
         ],
      },
   ];

   return (
      <footer>
         <div className={styles.wrapper}>
            <form className={styles.form}>
               <h2 className="title"></h2>
               <input type="text" />
               <button></button>
            </form>
            <div className={styles.footerBody}>
               <div>
                  <Link to="/">Shop.Co</Link>
                  <p>
                     We have clothes that suits your style and which you’re
                     proud to wear. From women to men.
                  </p>
                  <ul>
                     {socials.map(social => (
                        <li key={social.name}>
                           <Link to={social.link}>
                              <img src={social.image} alt="social.image" />
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}
