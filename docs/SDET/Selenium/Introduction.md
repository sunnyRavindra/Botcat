---
title : Selenium
---

### [Selenium Basics](https://www.selenium.dev/documentation/)

### [Architecture](https://www.selenium.dev/documentation/overview/components/#the-parts-and-pieces)

### [Selenium Basic Commands](https://www.selenium.dev/documentation/webdriver/getting_started/first_script/#eight-basic-components) 

### [Executing using maven](https://www.selenium.dev/documentation/webdriver/getting_started/using_selenium/#executing) 

### [Driver Configurations](https://www.selenium.dev/documentation/webdriver/drivers/)

### [Grid Components](https://www.selenium.dev/documentation/grid/components/)

### [Starting Grid](https://www.selenium.dev/documentation/grid/getting_started/#standalone)

### [Grid Docker Image](https://hub.docker.com/r/selenium/hub)

Install docker
```bash
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user
docker network create Grid
docker run -d -p 4442-4444:4442-4444 --net Grid --name selenium-hub selenium/hub:latest
```


34.203.238.57 
