'use client'
import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function ContactPage() {
	return (
    		<div className="grid grid-row-2 gap-8 mt-10">
        <h1 className={title({ color: "violet" })}>Contact Us.&nbsp;</h1>
            <p>We're here to assist you on your journey with BotCat. Whether you have questions, feedback, or need support, feel free to reach out to us. Our dedicated team is ready to provide the help you need.
            </p>
            <h1 className={title({ color: "violet" })}>Get in Touch.&nbsp;</h1>
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                  <p className="text-md">Email:</p>
                  <p className="text-small text-default-500">sunnyravbusiness@gmail.com</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                <p>Feel free to reach out to us. We value your input and are excited to support you on your journey with BotCat. Let's achieve automation excellence and elevate your professional presence together!</p>
              </CardBody>
              <Divider/>
              <CardFooter>
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
	);
}
