// import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

export default function NavVar() {
  const router = useRouter();
  // let last_known_scroll_position = 0;
  // let ticking = false;
  // const [changing, setChanging] = useState(false);
  // const [scrolling, setScrolling] = useState(false);

  // const doSomething = (scroll_pos) => {
  //   if (scroll_pos >= 10) {
  //     setChanging(true);
  //     setScrolling(true);
  //   } else {
  //     setChanging(false);
  //     setScrolling(false);
  //   }
  // };

  // window.addEventListener("scroll", function (e) {
  //   last_known_scroll_position = window.scrollY;

  //   if (!ticking) {
  //     window.requestAnimationFrame(function () {
  //       doSomething(last_known_scroll_position);
  //       ticking = false;
  //     });
  //     ticking = true;
  //   }
  // });

  // const onMouseOverOut = () => {
  //   if (scrolling) return;
  //   setChanging((current) => !current);
  // };

  return (
    <nav
    // style={
    //   changing
    //     ? {
    //         backgroundColor: "#7cb4ec",
    //         boxShadow:
    //           "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    //       }
    //     : { backgroundColor: "transparent" }
    // }
    // onMouseOver={onMouseOverOut}
    // onMouseOut={onMouseOverOut}
    >
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <ul className="icon__list">
        <li>
          <Link
            href="https://twitter.com/?lang=ko"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #fff;
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          z-index: 10;
          transition: 0.4s ease;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .icon__list {
          padding: 0;
          list-style: none;
          display: flex;
        }
        .icon__list li {
          font-size: 24px;
          padding: 4px 8px 2px 8px;
          list-style: none;
        }
        .icon__list li a {
          text-decoration: none;
          color: #b5cce4;
        }
      `}</style>
    </nav>
  );
}
