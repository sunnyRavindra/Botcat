---
title : Browser Cookies
---

Cookies are the small encripted text files in the browser directory.

### Cookies vs Session Cookies
1. Session cookies tracks the information about the logged in session, hence the appliaction dont have to authenticate over and over again.
2. Cookies stores customers web applications settings and preferences for further use.

### Cookies Security
1. Secure Atrribute should be enabled to make sure the authentication cookies are not passed to HTTP connection calls.
2. HTTP Only flag makes sure that the cookies are retried only when HTTP call is made, if there is any cross site scripting code 
trying to access the cookie (like document.getCookies) then those calls will not contain the Cookies linked to them.
3. Make sure that the accessed domian name in commplete so that attacker cant acess subdomains, example .accenture.com can access all the subdomans like employee.accenture.com, info.accenture.com 
hence the naming for full domain will make sure that the only that domain cookies are accessed and not anything else.
