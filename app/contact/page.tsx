'use client'
import { title } from "@/components/primitives";
import { Card, CardBody } from "@nextui-org/react";

export default function ContactPage() {
	return (
    		<div className="grid grid-row-3 gap-8 mt-10">

          <div className="flex flex-col space-y-10">
  				  <h1 className={title({ color: "violet" })}>Contact Us.&nbsp;</h1>
            <p>We're here to assist you on your journey with BotCat. Whether you have questions, feedback, or need support, feel free to reach out to us. Our dedicated team is ready to provide the help you need.
            </p>
  				  <h1 className={title({ color: "violet" })}>Get in Touch.&nbsp;</h1>
            <p>


**Email**: contact@botcat.com

**Phone**: +1 (123) 456-7890

## Support

For technical assistance or inquiries about our products, please contact our support team:

**Email**: support@botcat.com

**Phone**: +1 (123) 456-7890

## Visit Us

BotCat Headquarters:
123 Tech Street, Suite 456
Innovation City, IT 12345
United States

## Connect With Us

Stay updated with the latest news, features, and announcements by following us on social media:

- [Twitter](https://twitter.com/botcatofficial)
- [LinkedIn](https://www.linkedin.com/company/botcat)
- [Facebook](https://www.facebook.com/botcatofficial)

Feel free to reach out to us through any of the above channels. We value your input and are excited to support you on your journey with BotCat. Let's achieve automation excellence and elevate your professional presence together!


            </p>
         </div>
      </div>
	);
}
