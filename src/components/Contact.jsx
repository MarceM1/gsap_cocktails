import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titlleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "powe1.inOut",
    });

    timeline
      .from(titlleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-left-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      }, '<' /* Si agrego < (before) esta animacion sucede al mismo tiempo  que la ultima, y no despues*/ );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div className="">
          <h3>Visit Our Bar</h3>
          <p>Nicaragua 435. CP1075, Buenos Aires, Argentina</p>
        </div>
        <div className="">
          <h3>Contact Us</h3>
          <p>{`(+54) 9 11 3575-1731 `}</p>
          <p>marcelomelogno1986@gmail.com</p>
        </div>
        <div className="">
          <h3>Open Every DAy</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>
        <div className="">
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blanck"
                rel="noopener noreferrer"
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
