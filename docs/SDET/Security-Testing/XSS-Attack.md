---
title : XSS Attack
---

Xross site scripting also know as XSS , as one of the most common we application vulneribility that 
allows attackers to run his own client side script(specially javascript) in the web page viewed by the user.

### Vulnerable cases
- Url post string 
- Input Elements eg - sending html tags in the input elements.
- From submission
- Any html tags passed in the input should convert to encoded format for the website to be secure.

### Reflective XSS
1. This is when the passed input is only valied for the active browser session.
2. Also when malessios code is entered in the input, Website should not give any indication on what are allowed 
characters and patterns hence the attacker is not fully aware of the exploits.

### Persistence XSS
1. In Persistence XSS attack the injected script gets altered or injected on the server.
2. Hence anyone can then exploit the application from any device after this attack.

