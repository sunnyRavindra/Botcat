'use client'
import NextLink from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

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
      <CardHeader className="flex justify-center gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">BotCat Automations</p>
          <p className="text-small text-default-500">botcat.org/Automations</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className="text-center">
        <p>Effortlessly Automate Tests Across Diverse Tools and Applications.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>

    <Card className="max-w-[400px] drop-shadow-2xl my-20 hover:drop-shadow-sm">
      <CardHeader className="flex justify-center gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">BotCat Profiles</p>
          <p className="text-small text-default-500">botcat.org/profiles</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className="text-center">
        <p>Showcase Excellence with Botcat Profiles.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
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
