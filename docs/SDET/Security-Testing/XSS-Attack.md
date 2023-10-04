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
3. Who ever visits the website the mellisous script will get downloaded to the clients machine.

### Session Hijacking and CSRF(Cross site request forgrery)
1. malicious links can be used to access saved auth cookies to access sensitive applications from your own system , so never click on a suspicious linkes.

### Cryptography tokens
1. On login two tokens gets generated
2. Lets say for submitting a form attacker might be able to replicate with endpoints with params but if the form submission is using cryptographi token which was generate at the time of login will be needed to move forward.
hence the attacker will not be able to attack the website.
3. Confidential data should not go as a part of get request, it should alwasys go in post request.
4. Request should not be successfull on manually changing the token value.
5. Try hitting the token ID from another system and with other user, this should not work.
6. Check if the both the Cryptography token are required not just one.
7. Make sure Cryptography tokens are used for sensitive data on the website.

### Bruteforce attach handler mechanisim
1. make sure that automation scripts to do not try cmbinations and understand the password, lock account after 3 or 5 attempts.
