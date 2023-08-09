export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "BotCat",
	description: "Catering to IT professionals.",
	navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	links: {
		github: "https://github.com/sunnyRavindra",
		twitter: "https://twitter.com/SunnyRavv",
		docs: "https://botcat.org",
		linkedin: "https://www.linkedin.com/in/sunnybharne/",
    sponsor: "https://botcat.org"
	},
};
