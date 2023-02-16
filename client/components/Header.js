import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
const Header = () => {
    const router = useRouter();

    const [currentUrl, setCurrentUrl] = useState("");

    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setCurrentUrl(router.pathname);
            setShowSignup(router.query.action === "signup");
            setShowLogin(router.query.action === "login");
            setShowPayment(router.query.action === "payment")
        }
    }, [router]);

    const handleLogin = () => {
        router.replace(
            {
                pathname: router.pathname,
                query: { action: "login" },
            },
            undefined,
            { scroll: false }
        );
    };

    return (
      <>
        <div className={styles.main}>
          <div className={styles.container}>
            <img
              className={styles.logo}
              src="/images/10xlearning.png"
              alt="10xlearning Logo"
            />

            <div className={styles.links}>
              <ul>
                <li
                  className={currentUrl === "/" ? styles.selected : undefined}>
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={
                    currentUrl === "/blogs" ? styles.selected : undefined
                  }>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li
                  className={
                    currentUrl === "/cohort/63db981b03a11e00680c002a"
                      ? styles.selected
                      : undefined
                  }>
                  <Link href="/cohort/63db981b03a11e00680c002a">Courses</Link>
                </li>
                <li
                  className={
                    currentUrl === "/contact" ? styles.selected : undefined
                  }>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <button
                type="button"
                className={styles.login}
                onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>

        {showSignup && <Signup />}
        {showLogin && <Login />}
        {showPayment && <Payment />}
      </>
    );
};

export default Header;
