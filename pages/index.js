import Head from "next/head";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import { useEffect, createRef, useRef } from "react";

export default function Home() {
  const main = createRef();
  const sectionAboutImg0 = createRef();
  const sectionAboutImg1 = createRef();
  const sectionAboutImg2 = createRef();
  const sectionAboutImg3 = createRef();
  const sectionLoveImg0 = createRef();
  const sectionLoveImg1 = createRef();
  const sectionQuickImg0 = createRef();
  const sectionQuickImg1 = createRef();
  const sectionStatsImg0 = createRef();

  const sectionHero = createRef();
  const sectionAbout = createRef();
  const sectionPast = createRef();
  const sectionTracks = createRef();
  const sectionSchedule = createRef();
  const sectionFaq = createRef();
  const footer = createRef();
  const nav = createRef();

  const sectionAboutHeader = createRef();
  const sectionAboutBody = createRef();
  const sectionLoveHeader = createRef();
  const sectionLoveBody = createRef();
  const sectionQuickHeader = createRef();
  const sectionQuickBody = createRef();
  const sectionStatsItem1 = createRef();
  const sectionStatsItem2 = createRef();
  const sectionStatsItem3 = createRef();
  const sectionStatsItem4 = createRef();
  const sectionScheduleSunday = createRef();
  const sectionReadyHeader = createRef();
  const sectionReadyBody = createRef();
  const sectionReadyButton = createRef();
  const fadeElements = useRef([]);

  let scrollY = 0;
  let wrapperY = 0;
  let pointerPosX = useRef(0);
  let pointerPosY = useRef(0);
  let cursorX = useRef(0);
  let cursorY = useRef(0);
  let body;

  const cursor = createRef();

  useEffect(() => {
    initPage();
    return () => {
      cleanupPage();
    };
  });

  const initPage = () => {
    const mediaQuery = window.matchMedia("(min-width: 520px)");
    if (mediaQuery.matches) {
      main.current.style.position = "fixed";
      body = document.body;

      fadeElements.current = [
        sectionAboutHeader,
        sectionAboutBody,
        sectionLoveHeader,
        sectionLoveBody,
        sectionQuickHeader,
        sectionQuickBody,
        sectionStatsItem1,
        sectionStatsItem2,
        sectionStatsItem3,
        sectionStatsItem4,
        sectionReadyHeader,
        sectionReadyBody,
        sectionReadyButton,
      ];

      fadeElements.current.forEach((element) => {
        element.current.style.opacity = 0;
        element.current.style.transition =
          "all 4s cubic-bezier(0.22, 1, 0.36, 1)";
      });

      window.addEventListener("scroll", scroll);
      window.addEventListener("mousemove", findPointerPosition);
      window.requestAnimationFrame(render);
    }
  };

  const cleanupPage = () => {
    window.cancelAnimationFrame(render);
    window.removeEventListener("scroll", scroll);
    console.log("Cleaned up.");
  };

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  const scroll = () => {
    scrollY = window.scrollY;

    if (sectionHero.current.getBoundingClientRect().bottom <= 0) {
      nav.current.style.opacity = 1;
      nav.current.style.pointerEvents = "auto";
    } else {
      nav.current.style.opacity = 0;
      nav.current.style.pointerEvents = "none";
    }

    fadeElements.current.forEach((element) => {
      if (checkInView(element)) {
        fadeIn(element);
      }
    });
  };

  const fadeIn = (element) => {
    element.current.style.opacity = 1;
  };

  const cursorEnter = () => {
    cursor.current.style.background = "rgb(255, 0, 0)";
  };

  const cursorLeave = () => {
    cursor.current.style.background = "rgb(255, 255, 255)";
  };

  const checkInView = (element) => {
    let bounding = element.current.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= window.innerHeight &&
      bounding.right <= window.innerWidth
    );
  };

  const updateRefs = () => {
    sectionAboutImg0.current.style.transform = `translate(0px, ${
      sectionAboutImg0.current.getBoundingClientRect().y * 1.2 -
      sectionAboutImg0.current.getBoundingClientRect().y
    }px)`;

    sectionAboutImg1.current.style.transform = `translate(0px, ${
      sectionAboutImg1.current.getBoundingClientRect().y * 0.8 -
      sectionAboutImg1.current.getBoundingClientRect().y
    }px)`;

    sectionAboutImg2.current.style.transform = `translate(0px, ${
      sectionAboutImg2.current.getBoundingClientRect().y * 1.2 -
      sectionAboutImg2.current.getBoundingClientRect().y
    }px)`;

    sectionAboutImg3.current.style.transform = `translate(0px, ${
      sectionAboutImg3.current.getBoundingClientRect().y * 1.1 -
      sectionAboutImg3.current.getBoundingClientRect().y
    }px)`;

    sectionLoveImg0.current.style.transform = `translate(0px, ${
      sectionLoveImg0.current.getBoundingClientRect().y * 1.2 -
      sectionLoveImg0.current.getBoundingClientRect().y
    }px)`;

    sectionLoveImg1.current.style.transform = `translate(0px, ${
      sectionLoveImg1.current.getBoundingClientRect().y * 1.1 -
      sectionLoveImg1.current.getBoundingClientRect().y
    }px)`;

    sectionQuickImg0.current.style.transform = `translate(0px, ${
      sectionQuickImg0.current.getBoundingClientRect().y * 1.1 -
      sectionQuickImg0.current.getBoundingClientRect().y
    }px)`;

    sectionQuickImg1.current.style.transform = `translate(0px, ${
      sectionQuickImg1.current.getBoundingClientRect().y * 1.2 -
      sectionQuickImg1.current.getBoundingClientRect().y
    }px)`;

    sectionStatsImg0.current.style.transform = `translate(0px, ${
      sectionStatsImg0.current.getBoundingClientRect().y * 0.8 -
      sectionStatsImg0.current.getBoundingClientRect().y
    }px)`;

    sectionScheduleSunday.current.style.transform = `translate(0px, ${
      sectionScheduleSunday.current.getBoundingClientRect().y * 1.1 -
      sectionScheduleSunday.current.getBoundingClientRect().y
    }px)`;
  };

  const findPointerPosition = (e) => {
    try {
      pointerPosX.current = e.clientX - cursor.current.clientWidth / 2;
      pointerPosY.current = e.clientY - cursor.current.clientHeight / 2;
    } catch (error) {
      console.log(error);
    }
  };

  const scrollTo = (section) => {
    window.scrollBy(0, section.current.getBoundingClientRect().top);
  };

  const updatePointerPosition = () => {
    cursorX.current = lerp(cursorX.current, pointerPosX.current, 0.2);
    cursorY.current = lerp(cursorY.current, pointerPosY.current, 0.2);
    cursorX.current = Math.floor(cursorX.current * 100) / 100;
    cursorY.current = Math.floor(cursorY.current * 100) / 100;

    cursor.current.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px)`;
  };

  const render = () => {
    try {
      scroll();
      body.style.height = main.current.clientHeight + "px";
      wrapperY = lerp(wrapperY, scrollY, 0.1);
      wrapperY = Math.floor(wrapperY * 100) / 100;
      main.current.style.transform = `translate(0px, -${wrapperY}px)`;

      updateRefs();
      updatePointerPosition();

      window.requestAnimationFrame(render);
    } catch (error) {
      console.log(
        "Failed to cleanup before next animation frame render.\n" + error
      );
    }
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Prototypical - a Rapid Prototyping Make-a-thon</title>
        <link rel="canonical" href="https://prototypical.hexlabs.org" />
        <meta
          name="description"
          content="Join us April 2-3 for Prototypical, a rapid prototyping make-a-thon, to build fun cardboard and soft good prototypes, make new friends, eat free food, collect swag, and win awesome prizes."
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:url" content="https://prototypical.hexlabs.org" />
        <meta
          property="og:title"
          content="Prototypical - a Rapid Prototyping Make-a-thon"
        />
        <meta
          property="og:description"
          content="Join us April 2-3 for Prototypical, a rapid prototyping make-a-thon, to build fun cardboard and soft good prototypes, make new friends, eat free food, collect swag, and win awesome prizes."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icon/favicon-16x16.png"
        />
      </Head>
      <div id={styles.cursor} ref={cursor}></div>
      <nav id={styles.navigation} ref={nav}>
        <a
          href="#register"
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>Register</p>
        </a>
        <a
          href="#about"
          onClick={() => {
            scrollTo(sectionAbout);
          }}
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>About</p>
        </a>
        <a
          href="#prototypical-21"
          onClick={() => {
            scrollTo(sectionPast);
          }}
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>Prototypical &apos;21</p>
        </a>
        <a
          href="#tracks"
          onClick={() => {
            scrollTo(sectionTracks);
          }}
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>Tracks</p>
        </a>
        <a
          href="#schedule"
          onClick={() => {
            scrollTo(sectionSchedule);
          }}
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>Schedule</p>
        </a>
        <a
          href="#faq"
          onClick={() => {
            scrollTo(sectionFaq);
          }}
          onMouseEnter={() => {
            cursorEnter();
          }}
          onMouseLeave={() => {
            cursorLeave();
          }}
        >
          <p>FAQ</p>
        </a>
      </nav>
      <main className={styles.home_container} ref={main}>
        <section id={styles.section_hero} ref={sectionHero}>
          <img
            className={`${styles.icon}`}
            src="/icon/prototypical_logo.svg"
            alt="alt"
          />
          <h1>
            <strong>THINK OUTSIDE THE BOX</strong>
          </h1>
          <div className={styles.body}>
            <p>
              Join us April 2-3 for Prototypical, a rapid-prototyping
              make-a-thon, to build fun cardboard and textile prototypes, make
              new friends, eat free food, collect swag, and win awesome prizes.
            </p>
            <a
              className={styles.button}
              href="/home"
              ref={sectionReadyButton}
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>
                <strong>REGISTER</strong>
              </p>
            </a>
          </div>
        </section>
        <section id={styles.section_about} ref={sectionAbout}>
          <h2 ref={sectionAboutHeader}>
            ABOUT <strong>PROTOTYPICAL</strong>
          </h2>
          <p ref={sectionAboutBody}>
            We are all born with a fascination and excitment to imagine, design,
            and build the never-before-seen. Embrace your inner engineer and
            think outside the box for HexLab&apos;s premier rapid prototyping
            make-a-thon.
          </p>
          <img
            className={`${styles.img_0}`}
            src="/img/section-about-img-0.png"
            alt="alt"
            ref={sectionAboutImg0}
          />
          <img
            className={`${styles.img_1}`}
            src="/img/section-about-img-1.png"
            alt="alt"
            ref={sectionAboutImg1}
          />
          <img
            className={`${styles.img_2}`}
            src="/img/section-about-img-2.png"
            alt="alt"
            ref={sectionAboutImg2}
          />
          <img
            className={`${styles.img_3}`}
            src="/img/section-about-img-3.png"
            alt="alt"
            ref={sectionAboutImg3}
          />
        </section>

        <section id={styles.section_something_you_love}>
          <div className={styles.content}>
            <h2 ref={sectionLoveHeader}>
              MAKE SOMETHING <strong>YOU&apos;LL LOVE</strong>
            </h2>
            <p ref={sectionLoveBody}>
              At Prototypical, we&apos;ll give you the tools, materials,
              workshops, and makerspaces you&apos;ll need to start making that
              special something.
            </p>
          </div>
          <div className={styles.images}>
            <img
              className={`${styles.img_0}`}
              src="/img/section-love-img-0.png"
              alt="alt"
              ref={sectionLoveImg0}
            />
            <img
              className={`${styles.img_1}`}
              src="/img/section-love-img-1.png"
              alt="alt"
              ref={sectionLoveImg1}
            />
          </div>
        </section>

        <section id={styles.section_quick_look} ref={sectionPast}>
          <div className={styles.content}>
            <h2 ref={sectionQuickHeader}>
              a QUICK Look at <strong>Prototypical 2021</strong>
            </h2>
            <p ref={sectionQuickBody}>
              Take a look at last year&apos;s Prototypical. (It&apos;ll be even
              more awesome this year!)
            </p>
          </div>
          <div className={styles.images}>
            <img
              className={`${styles.img_0}`}
              src="/img/section-quick-img-0.png"
              alt="alt"
              ref={sectionQuickImg0}
            />
            <img
              className={`${styles.img_1}`}
              src="/img/section-quick-img-1.png"
              alt="alt"
              ref={sectionQuickImg1}
            />
          </div>
        </section>

        <section id={styles.section_stats}>
          <img
            className={`${styles.img_0}`}
            src="/img/section-stats-img-0.png"
            alt="alt"
            ref={sectionStatsImg0}
          />
          <div className={styles.content}>
            <p ref={sectionStatsItem1}>
              <strong>1000+</strong> cardboard boxes
            </p>
            <p ref={sectionStatsItem2}>
              <strong>200+</strong> bánh mì sandwiches
            </p>
            <p ref={sectionStatsItem3}>
              <strong>40%</strong> female &amp; non-binary attendees
            </p>
            <p ref={sectionStatsItem4}>
              <strong>21</strong> attending majors
            </p>
          </div>
        </section>

        <section id={styles.section_tracks} ref={sectionTracks}>
          <h2>
            Two <strong>Tracks</strong>
          </h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img
                className={`${styles.icon_box}`}
                src="/icon/box.svg"
                alt="alt"
              />
              <p>
                <strong>CARDBOARD</strong>
              </p>
              <p>
                Participate in a Prototypical classic. Your task is to create an
                original prototype with nothing but adhesives and an unlimited
                supply of recycled cardboard.
              </p>
            </div>
            <div className={styles.card}>
              <img
                className={`${styles.icon_needle}`}
                src="/icon/needle.svg"
                alt="alt"
              />
              <p>
                <strong>TEXTILES</strong>
              </p>
              <p>
                Have you ever sewn your own backpack? Your task is to prototype
                a soft good or textile-based product with upcycled clothing and
                fabric.
              </p>
            </div>
          </div>
        </section>

        <section id={styles.section_schedule} ref={sectionSchedule}>
          <h2>
            Our <strong>Schedule</strong>
          </h2>
          <div className={styles.schedule_container}>
            <div id={styles.saturday}>
              <h2>SAT - 4/2</h2>
              <div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>5:00PM - 6:00PM</strong>
                  </p>
                  <p>Check-In</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>6:00PM - 6:30PM</strong>
                  </p>
                  <p>Opening Ceremony</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>6:30PM - 7:00PM</strong>
                  </p>
                  <p>Ideation Workshop</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>7:00PM - 7:30PM</strong>
                  </p>
                  <p>Featured Speaker</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>7:00PM - 8:00PM</strong>
                  </p>
                  <p>Dinner</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>8:00PM - 8:30PM</strong>
                  </p>
                  <p>Workshop 1 &amp; 2</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>9:00PM - 10:00PM</strong>
                  </p>
                  <p>Workshop 3</p>
                </div>
              </div>
            </div>
            <div id={styles.sunday} ref={sectionScheduleSunday}>
              <h2>SUN - 4/3</h2>
              <div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>9:00AM - 10:00AM</strong>
                  </p>
                  <p>Breakfast Refreshments</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>11:00AM - 12:00PM</strong>
                  </p>
                  <p>Mini-Event + Small Snacks</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>1:00PM - 2:00PM</strong>
                  </p>
                  <p>Lunch</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>3:00PM - 4:00PM</strong>
                  </p>
                  <p>Presentation Workshop &amp; Photo Booth</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>4:00PM - 5:00PM</strong>
                  </p>
                  <p>Judging</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>6:00PM - 6:30PM</strong>
                  </p>
                  <p>Closing Ceremony</p>
                </div>
                <div className={styles.schedule_item}>
                  <p>
                    <strong>6:30PM - 7:00PM</strong>
                  </p>
                  <p>Expo + Surprise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.section_faq} ref={sectionFaq}>
          <h2>
            Frequently Asked <strong>Questions</strong>
          </h2>
          <div className={styles.faq_item}>
            <h3>01.</h3>
            <div>
              <p>
                <strong>What is Prototypical?</strong>
              </p>
              <p>
                Prototypical is HexLab&apos;s newest rapid prototyping event for
                engineers and designers.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>02.</h3>
            <div>
              <p>
                <strong>When is Prototypical?</strong>
              </p>
              <p>Saturday, April 2nd at 5PM to Sunday, April 3rd at 7PM</p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>03.</h3>
            <div>
              <p>
                <strong>Where is Prototypical?</strong>
              </p>
              <p>
                Clough Undergraduate Learning Commons (CULC) - 266 4th St NW,
                Atlanta, GA 30313
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>04.</h3>
            <div>
              <p>
                <strong>What happens at Prototypical?</strong>
              </p>
              <p>
                Participants may attend workshops, join us for mini-events, and
                compete for prizes by creating original cardboard and soft goods
                prototypes.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>05.</h3>
            <div>
              <p>
                <strong>Can my project combine two tracks?</strong>
              </p>
              <p>
                Your project should qualify for only one track. If you are
                uncertain about the eligibility of your project, you may ask an
                organizer for clarification.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>06.</h3>
            <div>
              <p>
                <strong>Are materials and supplies provided?</strong>
              </p>
              <p>
                We will provide an appropriate “starter kit” toolbox for each
                team according to their preferred track. Teams participating in
                the cardbaord track will receive box cutters, x-acto knives,
                cutting mats, tape, and hot glue. Teams participating in the
                sewing track will receive sewing needles, thread, scissors,
                pins, buttons, zippers, fabric glue, and other common sewing
                tools. Although we will provide cardboard and cloth to all
                participants, we encourage participants to bring their own
                materials as well!
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>07.</h3>
            <div>
              <p>
                <strong>Can we build our project at a makerspace?</strong>
              </p>
              <p>
                We will be partnering with several on-campus makerspaces, where
                participants may use any machinery or supplies for their
                projects. However, access to these makerspaces will not be
                provided until Saturday, April 2 at 9AM. Despite this, we hope
                that participants utilize their provided toolkits and materials
                to begin ideation and iteration.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>08.</h3>
            <div>
              <p>
                <strong>When is the “prototyping period”?</strong>
              </p>
              <p>
                You may begin prototyping Saturday, April 2 at 6:30PM after the
                opening ceremony. Prototyping concludes Sunday, April 3 at
                4:00PM for judging.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>09.</h3>
            <div>
              <p>
                <strong>Will there be prizes?</strong>
              </p>
              <p>
                Yes, there will be prizes for the top teams. We will also award
                a special prize for the mini-event winners.
              </p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>10.</h3>
            <div>
              <p>
                <strong>How many people are needed to form a team?</strong>
              </p>
              <p>We accept teams of up to 4 people.</p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>11.</h3>
            <div>
              <p>
                <strong>Does it cost money to sign up?</strong>
              </p>
              <p>No, this is a free event.</p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>12.</h3>
            <div>
              <p>
                <strong>Will there be swag?</strong>
              </p>
              <p>All participants will receive swag while supplies last.</p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>13.</h3>
            <div>
              <p>
                <strong>Will there be food?</strong>
              </p>
              <p>Yes, we will be serving food during the event.</p>
            </div>
          </div>
          <div className={styles.faq_item}>
            <h3>14.</h3>
            <div>
              <p>
                <strong>Can I attend virtually?</strong>
              </p>
              <p>No, this is an in-person event.</p>
            </div>
          </div>
          <p className={styles.email}>
            Still got questions?
            <a
              href="mailto:kimberlydo@hexlabs.org"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              Email Us
            </a>
          </p>
        </section>
        <section id={styles.section_ready}>
          <h2 ref={sectionReadyHeader}>
            Ready for <strong>Prototypical?</strong>
          </h2>
          <h3 ref={sectionReadyBody}>
            Register for Georgia Tech&apos;s premier rapid prototyping
            make-a-thon today!
          </h3>
          <a
            className={styles.button}
            href="/home"
            ref={sectionReadyButton}
            onMouseEnter={() => {
              cursorEnter();
            }}
            onMouseLeave={() => {
              cursorLeave();
            }}
          >
            <p>
              <strong>REGISTER</strong>
            </p>
          </a>
        </section>

        <footer ref={footer}>
          <div>
            <h2>
              Made with {`<3`} <strong>from Hexlabs</strong>
            </h2>
            <a
              href="https://hexlabs.org/"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>About Hexlabs</p>
            </a>
            <a
              href="https://www.facebook.com/TheHexLabs"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/thehexlabs/"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/company/thehexlabs/"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>LinkedIn</p>
            </a>
            <a
              href="https://twitter.com/TheHexLabs"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>Twitter</p>
            </a>
            <a
              href="https://github.com/HackGT"
              onMouseEnter={() => {
                cursorEnter();
              }}
              onMouseLeave={() => {
                cursorLeave();
              }}
            >
              <p>Github</p>
            </a>
          </div>
          <img className={`${styles.logo}`} src="/icon/logo.svg" alt="alt" />
        </footer>
      </main>
    </>
  );
}
