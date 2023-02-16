import { useRouter } from "next/router";
import styles from "../../styles/home/Hero.module.css";

const Hero = () => {
    const router = useRouter();

    const handleJoin = () => {
        router.replace(
            {
                pathname: router.pathname,
                query: { action: "signup" },
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
              className={styles.astronaut}
              src="/animations/astronaut.gif"
              alt="Animation"
            />

            <div className={styles.content}>
              <h1>
                <span>Studying</span> Online is now much easier
              </h1>

              <p>
                AnsrCoach is an Platfrom that will teach you in more interactive
                way
              </p>

              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={styles.primary}
                  onClick={handleJoin}>
                  Join for free
                </button>
                <a
                  href="https://www.youtube.com/watch?v=Vmoq4NaRhSE"
                  target="_blank">
                  <button type="button" className={styles.secondary}>
                    <img src="/icons/play.webp" alt="Play Icon" />
                    Watch how it works
                  </button>
                </a>
              </div>
            </div>

            <img
              className={styles.rocket}
              src="/animations/rocket.gif"
              alt="Animation"
            />
          </div>
        </div>
      </>
    );
};

export default Hero;
