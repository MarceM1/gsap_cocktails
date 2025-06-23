import gsap from "gsap";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        end: "bottom top",
        scrub: true,
      },
    });
    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        webkitBackdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div className="">
        <a href="#hero" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
