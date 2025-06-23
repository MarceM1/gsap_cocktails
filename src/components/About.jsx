import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {

    useGSAP(()=>{
        const titleSplit = SplitText.create("#about h2", {
            type: 'words'
        });

        

        const scrollTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrollTimeLine.from(titleSplit.words, {
            opacity:0,
            duration: 1,
            yPercent: 100,
            ease: "expo.out",
            stagger:0.02
        }).from('.top-grid div, .bottom-grid div', {
            opacity:0,
            duration: 1,
            ease: "power1.inOut",
            stagger:0.04
        }, '-=0.5' )


    },[])

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              waht turns a simple drink into something truly memorable.
            </p>
            <div className="">
              <p className="md:text-3xl text-xl font-bold">
                <span>4.7</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
            <div className=""/>
            <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-3">
            <div className="noisy"/>
            <div className="flex flex-col w-full h-full px-12 py-12 text-center gap-5">
                <h3 className="text-4xl font-modern-negra border-b-[1px] border-gray-400 pb-2 text-white">Crafted to Impress</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" 
                        className="size-4"
                        />
                        <p className="text-lg">Perfectly balanced blends</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" 
                        className="size-4"
                        />
                        <p className="text-lg">Garnish to perfection</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" 
                        className="size-4"
                        />
                        <p className="text-lg">Ice-cold every time</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/check.png" alt="check" 
                        className="size-4"
                        />
                        <p className="text-lg">Expert shaken $ stirred</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:col-span-6">
            <div className="noisy"/>
            <img src="/images/abt2.png" alt="grid-img-2" />
        </div>
        
        
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
            <div className="noisy"/>
            <img src="/images/abt3.png" alt="grid-img-3" />
        </div>
        <div className="md:col-span-4">
            <div className=""/>
            <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
