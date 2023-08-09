'use client'
import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export default function AboutPage() {
	return (
	    <>
    		<div className="grid grid-cols-2 gap-8 mt-10">

          <div className="col-span-2">
  				  <h1 className={title()}>About.&nbsp;</h1>
          </div>

          <div className="col-span-2">
  				  <h1 className={title({ color: "violet" })}>Welcome to BotCat.&nbsp;</h1>
          </div>

          <div className="col-span-2 hover:drop-shadow-2xl">
            <p>BotCat is your gateway to cutting-edge solutions that redefine the way you approach automation and professional portfolio presentation. Our mission is to empower IT professionals like you with innovative tools that streamline processes, enhance productivity, and elevate your digital presence.
            </p>
          </div>

           <div className="flex flex-col col-span-2">
  				  <h1 className={title({ color: "violet" })}>BotCat Automation.&nbsp;</h1>
  				  <h1 className={title()}>Simplify Testing.&nbsp;</h1>
  				  <h1 className={title()}>Amplify Efficiency.&nbsp;</h1>
          </div>                   

          <div className="col-span-2 hover:drop-shadow-2xl">
            <p>BotCat Automation is your ultimate testing automation companion. Our powerful tool is designed to seamlessly integrate with a diverse range of testing tools and frameworks, making test automation a breeze for QA engineers and developers alike. With an intuitive user interface and comprehensive reporting, BotCat Automation ensures efficient test management and accurate results, enabling you to deliver high-quality software with confidence.
            </p>
          </div>

           <div className="flex flex-col col-span-2">
  				  <h1 className={title({ color: "violet" })}>BotCat Profiles.&nbsp;</h1>
  				  <h1 className={title()}>Showcase Excellence,&nbsp;</h1>
  				  <h1 className={title()}>Leave a Lasting Impression&nbsp;</h1>
          </div>                   

          <div className="col-span-2 hover:drop-shadow-2xl">
            <p>BotCat Profiles is the platform where your professional journey comes to life. Craft visually captivating portfolios that showcase your skills, projects, and achievements with elegance and sophistication. Whether you're a seasoned IT professional or an aspiring talent, BotCat Profiles empowers you to create an impactful online presence that resonates with potential employers, collaborators, and clients. Unleash the power of effective storytelling and let your achievements shine in the digital world.
            </p>
          </div>
          <div className="col-span-2 hover:drop-shadow-2xl">
            <p>At BotCat, innovation is at the core of everything we do. We're driven by a team of dedicated developers and designers who are passionate about simplifying complexity and enhancing user experiences. Our products reflect a commitment to excellence, efficiency, and effectiveness, aiming to transform your automation processes and digital representation.

Join us on this exciting journey as we embark on a mission to revolutionize automation and redefine professionalism. Discover the future of automation and portfolio presentation with BotCat today!
            </p>
          </div>






		    </div>
		</>	
	);
}
