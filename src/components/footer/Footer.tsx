import { Link } from "react-router-dom";

import { Button } from "../../ui/button/Button";

import email from "/images/footer/email.svg";

import styles from "./Footer.module.scss";

// Footer component with subscription form, company info, and payment options
export const Footer: React.FC = () => {
   // Social media links
   const socials = [
      { name: "X", image: "/images/footer/1.svg", link: "https://www.x.com" },
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

   // Footer menu items
   const menu = [
      {
         title: "Company",
         name: [
            { name: "About", link: "/about" },
            { name: "Features", link: "/features" },
            { name: "Works", link: "/works" },
            { name: "Career", link: "/career" },
         ],
      },
      {
         title: "Help",
         name: [
            { name: "Customer Support", link: "/customer_support" },
            { name: "Delivery Details", link: "/delivery_details" },
            { name: "Terms & Conditions", link: "/terms&conditions" },
            { name: "Privacy Policy", link: "/privacy_policy" },
         ],
      },
      {
         title: "FAQ",
         name: [
            { name: "Account", link: "/account" },
            { name: "Manage Deliveries", link: "/manage_deliveries" },
            { name: "Orders", link: "/orders" },
            { name: "Payments", link: "/payments" },
         ],
      },
      {
         title: "Resources",
         name: [
            { name: "Free eBooks", link: "/free_ebooks" },
            { name: "Development Tutorial", link: "/development_tutorial" },
            { name: "How to - Blog", link: "/how_to_Blog" },
            { name: "Youtube Playlist", link: "/youtube_playlist" },
         ],
      },
   ];

   // Payment methods
   const payments = [
      { name: "Visa", image: "/images/footer/payments/1.svg" },
      { name: "MasterCard", image: "/images/footer/payments/2.svg" },
      { name: "PayPal", image: "/images/footer/payments/3.svg" },
      { name: "Apple Pay", image: "/images/footer/payments/4.svg" },
      { name: "Google Pay", image: "/images/footer/payments/5.svg" },
   ];

   return (
      <footer data-aos="fade-right" data-aos-duration="500" data-aos-once>
         <div className="container">
            <div className={styles.wrapper}>
               <div className={styles.footerTop}>
                  <h2 className="title">
                     Stay Upto Date About Our Latest Offers
                  </h2>
                  <form action="">
                     <div className={styles.input}>
                        <img src={email} alt="email" />{" "}
                        {/* Email icon for subscription */}
                        <input
                           placeholder="Enter your email address"
                           type="text"
                        />{" "}
                        {/* Email input field */}
                     </div>
                     <Button text="Subscribe to Newsletter" type="submit" />{" "}
                     {/* Subscription button */}
                  </form>
               </div>
               <div className={styles.footerBody}>
                  <div className={styles.info}>
                     <Link className={styles.logo} to="/">
                        Shop.Co {/* Logo link */}
                     </Link>
                     <p className="text">
                        We have clothes that suit your style and which you’re
                        proud to wear. From women to men.
                     </p>
                     <ul className={styles.socials}>
                        {/* Social media icons */}
                        {socials.map(social => (
                           <li key={social.name}>
                              <Link to={social.link}>
                                 <img src={social.image} alt={social.name} />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className={styles.menuList}>
                     {/* Footer menu sections */}
                     {menu.map(item => (
                        <li className={styles.menu} key={item.title}>
                           <h4>{item.title}</h4>
                           <ul>
                              {item.name.map(name => (
                                 <li className={styles.li} key={name.name}>
                                    <Link className="text" to={name.link}>
                                       {name.name}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </li>
                     ))}
                  </div>
               </div>
               <div className={styles.rights}>
                  <p className="text">
                     Shop.co © 2000-2023, All Rights Reserved
                  </p>
                  <ul className={styles.payments}>
                     {/* Payment method icons */}
                     {payments.map(payment => (
                        <li key={payment.name}>
                           <img src={payment.image} alt={payment.name} />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};
