'use client'
import NextLink from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
import {
  CompanyIcon,
} from "@/components/icons";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Empowering. &nbsp;</h1>
				<h1 className={title({ color: "violet" })}>Your&nbsp;</h1>
				<br />
				<h1 className={title()}>
				Digital Journey
        </h1>
				<h2 className={subtitle({ class: "mt-4" })}>
          Unleash Automation with Botcat Automations Showcase Excellence with Botcat Profiles.
				</h2>
			</div>

    <div className="grid grid-cols-2 gap-9" >
    <Card className="flex justify-center max-w-[400px] drop-shadow-2xl my-20 hover:drop-shadow-sm">
      <CardHeader className="flex justify-center gap-3 ">
         <Image
            src="/Auto.svg"
            width={400}
            height={400}
            alt="Botcat Automations"
          />
      </CardHeader>
      <Divider/>
      <CardBody className="text-center">
        <p>Effortlessly Automate Tests Across Diverse Tools and Applications.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-center">
      <Button
        href="/auto"
        as={Link}
        color="primary"
        variant="bordered"
      >
       Automate Test 
      </Button>
      </CardFooter>
    </Card> 

    <Card className="flex justify-center max-w-[400px] drop-shadow-2xl my-20 hover:drop-shadow-sm">
      <CardHeader className="flex justify-center gap-3">
         <Image
            src="/Profile.svg"
            width={400}
            height={400}
            alt="Botcat Automations"
          />
      </CardHeader>
      <Divider/>
      <CardBody className="text-center">
        <p>Showcase Excellence with Botcat Profiles.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-center">
      <Button
        href="/profile"
        as={Link}
        color="primary"
        variant="bordered"
      >
        Make Profiles
      </Button>
      </CardFooter>
    </Card>



    </div>

    <Card className="col-span-2 drop-shadow-2xl my-20">
      <CardBody>
        <p>Experience the Future of Digital Solutions at the Crossroads of Botcat's Versatility.</p>
      </CardBody>
    </Card>
		</section>
	);
}
