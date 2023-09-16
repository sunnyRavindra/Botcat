---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Selenium ^jwqbN7E2

WebDriver ^uvHKXawK

IDE ^QppzSOTr

Grid ^Wu097SYn

Record and Play ^RN1IPkP4

Chrome and Firefox Extentions ^dM7TfLsZ

desktop website automation ^L8MnLeKv

mobile website automation ^rXmdcWme

Run tests in Multiple 
OS combinations remotely ^YKI6FGun

Bindings
Java
JavaScript
Python
Ruby
C# ^fhAsy4Yl

ChromeDriver
IEDriver
FirefoxDriver
(Gekodriver)
SafariDriver ^MlDfXhir

Browser ^jhQxRW6F

Framework ^J9Ux3rb0

WebDriver ^SALwcAtu

LocalHost ^o48sXRCh

ChromeDriver
IEDriver
FirefoxDriver
(Gekodriver)
SafariDriver ^jWKENudI

Browser ^Eon8Kb6z

WebDriver ^Y2UvfPuJ

Remote Server ^ar8VVwX9

Remote Webdriver ^ymRT2HFb

Selenium  Server ^LUGH38oC

Selenium Grid ^1DC09nsQ

        // Set the path to WebDriver executables (adjust the paths accordingly)
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        System.setProperty("webdriver.gecko.driver", "path/to/geckodriver");
        System.setProperty("webdriver.edge.driver", "path/to/msedgedriver");
        System.setProperty("webdriver.ie.driver", "path/to/IEDriverServer.exe");
        System.setProperty("webdriver.opera.driver", "path/to/operadriver");
        
        // Initialize ChromeDriver
        WebDriver chromeDriver = new ChromeDriver();

        // Initialize FirefoxDriver
        WebDriver firefoxDriver = new FirefoxDriver();

        // Initialize EdgeDriver (for Microsoft Edge)
        WebDriver edgeDriver = new EdgeDriver();

        // Initialize InternetExplorerDriver (for Internet Explorer)
        WebDriver ieDriver = new InternetExplorerDriver();

        // Initialize OperaDriver (for Opera)
        WebDriver operaDriver = new OperaDriver();

        // Initialize SafariDriver (for Safari - macOS only)
        WebDriver safariDriver = new SafariDriver(); ^VCoa2JTf

use when you need specific Driver Version ^43Tq60xz

Initialize Driver ^fficySVo

		//Browser Options
		FirefoxOptions options = new FirefoxOptions();

		options.setCapability("browserName", "firefox");
		options.setPlatformName("Mac OS X");
		options.setBrowserVersion("1.2.0");
		options.setCapability("acceptInsecureCerts", true);
		options.setPageLoadTimeout(Duration.ofSeconds(30));
		options.setImplicitWaitTimeout(Duration.ofSeconds(30));
		options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT);
		options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT_AND_NOTIFY);
		options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS);
		options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS_AND_NOTIFY);
		options.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.IGNORE);
		options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
		options.setPageLoadStrategy(PageLoadStrategy.NONE);
		options.setPageLoadStrategy(PageLoadStrategy.EAGER);

	    Proxy proxy = new Proxy();
	    proxy.setHttpProxy("<HOST:PORT>");
		options.setProxy(proxy);

		FirefoxDriver driver = new FirefoxDriver(options); ^54eiZXgt

Accept Certificats ^TJaL2J2n

Implicit wait ^B606aNRH

Remote Alerts behaviour ^nSsJmWnL

Page Load Strategy ^WGmCQqhX

Proxy ^LnH7pDvc

Selenium Manager ^ihfBZQCr

Check Version ^fOiNTCir

Check Browser Instaled ^MNJGiNHc

Yes ^UMzSIt5q

No ^4uDFA9MZ

Download Checked Version Driver ^defgJigN

Download Latest Browser Driver ^kyI0jqPV

Browser Saved in - ~/.cache/selenium/ ^3Bc2q47l

Browser Versions can be controlled vis Browser Options "BrowserVersion"  ^P0iSz2Cz

    --clear-cache: To remove the cache folder.
    --clear-metadata: To remove the metadata file.
 ^nhkmyTx1

Node ^FtARG6Xk

Node ^eCVG4mgU

Router ^W0e133XC

Distributor ^oGIJXj41

Session Map ^n2Qy7BLY

New Session Queue ^SzdmftVX

Event bus ^35qk8Qq0

Hub ^DxhyFt2l

Node ^IRDOMAoK

Set up Browser Driver automatically ^nYuB4nzk

Connect to hub ^59lCr0fY

Start node on port
But Optional ^9KjXm9xF

Facts ^3FIYMumI

One CPU ^4JKRLEE7

One Browser Instance ^FroG2EgQ

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.17",
	"elements": [
		{
			"type": "rectangle",
			"version": 939,
			"versionNonce": 1950264791,
			"isDeleted": false,
			"id": "VjHcQemuiT6tpIhV_XuT6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -302.71864957204133,
			"y": 76.49318257824063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 162,
			"height": 278,
			"seed": 432274615,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "DosvPzC3jTzC4pDQOLUW9",
					"type": "arrow"
				},
				{
					"id": "4ZdTY85ztr_jYwSbQ08Pr",
					"type": "arrow"
				}
			],
			"updated": 1694838533693,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 308,
			"versionNonce": 1991048985,
			"isDeleted": false,
			"id": "VLK2FwEhNIT447rPQ0aJK",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -72.306640625,
			"y": -334.5703125,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 149,
			"height": 35,
			"seed": 1807863863,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jwqbN7E2"
				},
				{
					"id": "QqsxZMuDl25kdC_fP5BNj",
					"type": "arrow"
				},
				{
					"id": "GEO6z_yFP7__TCgcGAdaz",
					"type": "arrow"
				},
				{
					"id": "iIJwi03Sqzw2AifyTvjGr",
					"type": "arrow"
				}
			],
			"updated": 1694838533693,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 280,
			"versionNonce": 1442372343,
			"isDeleted": false,
			"id": "jwqbN7E2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -36.32659912109375,
			"y": -329.5703125,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 77.0399169921875,
			"height": 25,
			"seed": 596586969,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533693,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Selenium",
			"rawText": "Selenium",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "VLK2FwEhNIT447rPQ0aJK",
			"originalText": "Selenium",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 373,
			"versionNonce": 1188017145,
			"isDeleted": false,
			"id": "BP28mTouZFTxAZAkoN6WG",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -326.94140625,
			"y": -189.94140625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 149,
			"height": 35,
			"seed": 86251865,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "uvHKXawK"
				},
				{
					"id": "QqsxZMuDl25kdC_fP5BNj",
					"type": "arrow"
				}
			],
			"updated": 1694838533694,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 354,
			"versionNonce": 372270103,
			"isDeleted": false,
			"id": "uvHKXawK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -299.7413635253906,
			"y": -184.94140625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 94.59991455078125,
			"height": 25,
			"seed": 602506809,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "WebDriver",
			"rawText": "WebDriver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "BP28mTouZFTxAZAkoN6WG",
			"originalText": "WebDriver",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 521,
			"versionNonce": 1854459097,
			"isDeleted": false,
			"id": "ZPCNXjIXq62NtBSTCfi6c",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -62.96875,
			"y": -192.234375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 149,
			"height": 35,
			"seed": 1474902871,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "QppzSOTr"
				},
				{
					"id": "GEO6z_yFP7__TCgcGAdaz",
					"type": "arrow"
				}
			],
			"updated": 1694838533694,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 505,
			"versionNonce": 886688055,
			"isDeleted": false,
			"id": "QppzSOTr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -8.458740234375,
			"y": -187.234375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 39.97998046875,
			"height": 25,
			"seed": 1341503607,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "IDE",
			"rawText": "IDE",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ZPCNXjIXq62NtBSTCfi6c",
			"originalText": "IDE",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 582,
			"versionNonce": 1969998265,
			"isDeleted": false,
			"id": "6uFOXTRBvgkk8hoCbXZBT",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 234.2109375,
			"y": -192.51171875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 149,
			"height": 35,
			"seed": 344396377,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Wu097SYn"
				},
				{
					"id": "iIJwi03Sqzw2AifyTvjGr",
					"type": "arrow"
				}
			],
			"updated": 1694838533694,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 576,
			"versionNonce": 1062832727,
			"isDeleted": false,
			"id": "Wu097SYn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 288.64095306396484,
			"y": -187.51171875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 40.13996887207031,
			"height": 25,
			"seed": 512057145,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Grid",
			"rawText": "Grid",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "6uFOXTRBvgkk8hoCbXZBT",
			"originalText": "Grid",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 271,
			"versionNonce": 600775360,
			"isDeleted": false,
			"id": "QqsxZMuDl25kdC_fP5BNj",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 11.811473978878155,
			"y": -294.16015625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 289.9629507920625,
			"height": 101.7578125,
			"seed": 1186171031,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729323,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "VLK2FwEhNIT447rPQ0aJK",
				"gap": 5.41015625,
				"focus": -0.6022622608821167
			},
			"endBinding": {
				"elementId": "BP28mTouZFTxAZAkoN6WG",
				"gap": 2.4609375,
				"focus": -0.6640796441144755
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-289.9629507920625,
					101.7578125
				]
			]
		},
		{
			"type": "arrow",
			"version": 339,
			"versionNonce": 223832768,
			"isDeleted": false,
			"id": "GEO6z_yFP7__TCgcGAdaz",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 12.627199708274034,
			"y": -290.68102538201333,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 0.646438462953622,
			"height": 91.89453125,
			"seed": 1198854553,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729324,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "VLK2FwEhNIT447rPQ0aJK",
				"gap": 8.889287117986669,
				"focus": -0.14230817132813026
			},
			"endBinding": {
				"elementId": "ZPCNXjIXq62NtBSTCfi6c",
				"gap": 6.552119132013331,
				"focus": 0.0037564095300861165
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.646438462953622,
					91.89453125
				]
			]
		},
		{
			"type": "arrow",
			"version": 318,
			"versionNonce": 1292614336,
			"isDeleted": false,
			"id": "iIJwi03Sqzw2AifyTvjGr",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 12.838616069595389,
			"y": -292.6015625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 308.55284174609045,
			"height": 88.1953125,
			"seed": 1618384151,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729327,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "VLK2FwEhNIT447rPQ0aJK",
				"gap": 6.96875,
				"focus": 0.5522903974642277
			},
			"endBinding": {
				"elementId": "6uFOXTRBvgkk8hoCbXZBT",
				"gap": 11.89453125,
				"focus": 0.8511225282128071
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					308.55284174609045,
					88.1953125
				]
			]
		},
		{
			"type": "text",
			"version": 151,
			"versionNonce": 1016995991,
			"isDeleted": false,
			"id": "RN1IPkP4",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -50.5,
			"y": -130.9296875,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 128.68792724609375,
			"height": 20,
			"seed": 1265000761,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Record and Play",
			"rawText": "Record and Play",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Record and Play",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 162,
			"versionNonce": 2084771929,
			"isDeleted": false,
			"id": "dM7TfLsZ",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -100.32421875,
			"y": -101.85546875,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 240.6398468017578,
			"height": 20,
			"seed": 2055458937,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Chrome and Firefox Extentions",
			"rawText": "Chrome and Firefox Extentions",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Chrome and Firefox Extentions",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 288,
			"versionNonce": 794555831,
			"isDeleted": false,
			"id": "L8MnLeKv",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -383.2578125,
			"y": -131.7890625,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 220.07986450195312,
			"height": 20,
			"seed": 1961287191,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "desktop website automation",
			"rawText": "desktop website automation",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "desktop website automation",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 314,
			"versionNonce": 2094048569,
			"isDeleted": false,
			"id": "rXmdcWme",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -376.3694305419922,
			"y": -98.7421875,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 203.535888671875,
			"height": 20,
			"seed": 283989913,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "mobile website automation",
			"rawText": "mobile website automation",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "mobile website automation",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "text",
			"version": 156,
			"versionNonce": 1910646487,
			"isDeleted": false,
			"id": "YKI6FGun",
			"fillStyle": "cross-hatch",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 236.14453125,
			"y": -126.63671875,
			"strokeColor": "#ff8787",
			"backgroundColor": "transparent",
			"width": 195.83990478515625,
			"height": 40,
			"seed": 1766691961,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Run tests in Multiple \nOS combinations remotely",
			"rawText": "Run tests in Multiple \nOS combinations remotely",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Run tests in Multiple \nOS combinations remotely",
			"lineHeight": 1.25,
			"baseline": 34
		},
		{
			"type": "rectangle",
			"version": 858,
			"versionNonce": 836343321,
			"isDeleted": false,
			"id": "Dwl7w2o2GoUins4eRBO7j",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -290.42204136383657,
			"y": 171.05539728591128,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 136,
			"height": 150,
			"seed": 1170781143,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "fhAsy4Yl"
				},
				{
					"id": "DosvPzC3jTzC4pDQOLUW9",
					"type": "arrow"
				},
				{
					"id": "4ZdTY85ztr_jYwSbQ08Pr",
					"type": "arrow"
				},
				{
					"id": "ptRr-MQSjN9KR3CAunZEu",
					"type": "arrow"
				}
			],
			"updated": 1694838533694,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 580,
			"versionNonce": 583349239,
			"isDeleted": false,
			"id": "fhAsy4Yl",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -264.88601536286,
			"y": 186.05539728591128,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 84.92794799804688,
			"height": 120,
			"seed": 745573015,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Bindings\nJava\nJavaScript\nPython\nRuby\nC#",
			"rawText": "Bindings\nJava\nJavaScript\nPython\nRuby\nC#",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Dwl7w2o2GoUins4eRBO7j",
			"originalText": "Bindings\nJava\nJavaScript\nPython\nRuby\nC#",
			"lineHeight": 1.25,
			"baseline": 114
		},
		{
			"type": "rectangle",
			"version": 127,
			"versionNonce": 1045523193,
			"isDeleted": false,
			"id": "weVuestqbR45KvyMgKQKO",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -0.489949045272283,
			"y": 168.92658336344186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 170,
			"height": 141,
			"seed": 600714681,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "MlDfXhir"
				},
				{
					"id": "DosvPzC3jTzC4pDQOLUW9",
					"type": "arrow"
				},
				{
					"id": "4ZdTY85ztr_jYwSbQ08Pr",
					"type": "arrow"
				},
				{
					"id": "PSjzWWgp8GzDC3XAVnUZp",
					"type": "arrow"
				},
				{
					"id": "W2y1-3nDrRI5TByLFL1jQ",
					"type": "arrow"
				}
			],
			"updated": 1694838533694,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 191,
			"versionNonce": 436837655,
			"isDeleted": false,
			"id": "MlDfXhir",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 34.10209197035272,
			"y": 189.42658336344186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100.81591796875,
			"height": 100,
			"seed": 554831513,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533694,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"rawText": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "weVuestqbR45KvyMgKQKO",
			"originalText": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"lineHeight": 1.25,
			"baseline": 94
		},
		{
			"type": "rectangle",
			"version": 388,
			"versionNonce": 448504793,
			"isDeleted": false,
			"id": "Gxn6DTbaWYON6MZhiFDey",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 347.74215307788734,
			"y": 167.99482694293891,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 175,
			"height": 135,
			"seed": 1990875767,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jhQxRW6F"
				},
				{
					"id": "PSjzWWgp8GzDC3XAVnUZp",
					"type": "arrow"
				},
				{
					"id": "W2y1-3nDrRI5TByLFL1jQ",
					"type": "arrow"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 369,
			"versionNonce": 992207415,
			"isDeleted": false,
			"id": "jhQxRW6F",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 404.52218237476234,
			"y": 225.49482694293891,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 61.43994140625,
			"height": 20,
			"seed": 864416663,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Browser",
			"rawText": "Browser",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Gxn6DTbaWYON6MZhiFDey",
			"originalText": "Browser",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "arrow",
			"version": 2186,
			"versionNonce": 586701504,
			"isDeleted": false,
			"id": "DosvPzC3jTzC4pDQOLUW9",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -113.60976344886551,
			"y": 210.4819451352302,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 104.6580060455812,
			"height": 16.06989518947904,
			"seed": 708918937,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729331,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "VjHcQemuiT6tpIhV_XuT6",
				"gap": 27.108886123175807,
				"focus": -0.14270596517590178
			},
			"endBinding": {
				"elementId": "weVuestqbR45KvyMgKQKO",
				"gap": 8.461808358012021,
				"focus": -0.017665907006086466
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					104.6580060455812,
					16.06989518947904
				]
			]
		},
		{
			"type": "arrow",
			"version": 2101,
			"versionNonce": 1127262912,
			"isDeleted": false,
			"id": "4ZdTY85ztr_jYwSbQ08Pr",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -6.457220042578683,
			"y": 273.4050165636388,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 112.17170083915363,
			"height": 18.415548339398413,
			"seed": 891025239,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729333,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "weVuestqbR45KvyMgKQKO",
				"gap": 5.9672709973064,
				"focus": -0.5791601180248243
			},
			"endBinding": {
				"elementId": "VjHcQemuiT6tpIhV_XuT6",
				"gap": 22.089728690309016,
				"focus": 0.14820779273717227
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-112.17170083915363,
					-18.415548339398413
				]
			]
		},
		{
			"type": "arrow",
			"version": 1019,
			"versionNonce": 1960942272,
			"isDeleted": false,
			"id": "PSjzWWgp8GzDC3XAVnUZp",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 186.5804371766601,
			"y": 209.6493354498666,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 155.279676805367,
			"height": 2.6178289160545205,
			"seed": 1540727513,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729335,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "weVuestqbR45KvyMgKQKO",
				"gap": 17.07038622193238,
				"focus": -0.39003606902059884
			},
			"endBinding": {
				"elementId": "Gxn6DTbaWYON6MZhiFDey",
				"gap": 5.88203909586025,
				"focus": 0.4354848328988205
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					155.279676805367,
					-2.6178289160545205
				]
			]
		},
		{
			"type": "arrow",
			"version": 1086,
			"versionNonce": 466217664,
			"isDeleted": false,
			"id": "W2y1-3nDrRI5TByLFL1jQ",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 330.3839341072214,
			"y": 263.86850686040265,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 146.03279440405902,
			"height": 4.192136920008409,
			"seed": 1538870583,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729335,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Gxn6DTbaWYON6MZhiFDey",
				"gap": 17.358218970665916,
				"focus": -0.36227489040668104
			},
			"endBinding": {
				"elementId": "weVuestqbR45KvyMgKQKO",
				"gap": 14.841088748434686,
				"focus": 0.431863806749415
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-146.03279440405902,
					4.192136920008409
				]
			]
		},
		{
			"type": "text",
			"version": 124,
			"versionNonce": 1849403001,
			"isDeleted": false,
			"id": "J9Ux3rb0",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -273.7770323818262,
			"y": 105.36750999667134,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 98.61991882324219,
			"height": 25,
			"seed": 435391287,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Framework",
			"rawText": "Framework",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Framework",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 76,
			"versionNonce": 1637013911,
			"isDeleted": false,
			"id": "SALwcAtu",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 40.571105132895354,
			"y": 129.30674316719978,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 75.67994689941406,
			"height": 20,
			"seed": 648856025,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "WebDriver",
			"rawText": "WebDriver",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "WebDriver",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 226,
			"versionNonce": 1490186073,
			"isDeleted": false,
			"id": "6OXI9l1dqvMyZthRilsb2",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -318.2243254860357,
			"y": 48.08887696179215,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 873.9136621361868,
			"height": 319.3081363258588,
			"seed": 1202489239,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 44,
			"versionNonce": 659656375,
			"isDeleted": false,
			"id": "o48sXRCh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 37.63241145166137,
			"y": 71.30805486663945,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 95.95991516113281,
			"height": 25,
			"seed": 301701113,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "LocalHost",
			"rawText": "LocalHost",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "LocalHost",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 902,
			"versionNonce": 1532828729,
			"isDeleted": false,
			"id": "-ll0whM4uWG9IMrjGk0ET",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -279.9851922402165,
			"y": 525.8914429068438,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 136,
			"height": 212.85103069769383,
			"seed": 1367332473,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "vt63EP0CxnhrchO80WDkA",
					"type": "arrow"
				},
				{
					"id": "df8OJWHej-2vsqW-8azhm",
					"type": "arrow"
				},
				{
					"id": "ptRr-MQSjN9KR3CAunZEu",
					"type": "arrow"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 224,
			"versionNonce": 1773969367,
			"isDeleted": false,
			"id": "uQ0Xeu21pTursLqJuIeJ_",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2.8020608609957662,
			"y": 565.4483353443244,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 170,
			"height": 141,
			"seed": 2136296505,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "jWKENudI"
				},
				{
					"id": "vt63EP0CxnhrchO80WDkA",
					"type": "arrow"
				},
				{
					"id": "df8OJWHej-2vsqW-8azhm",
					"type": "arrow"
				},
				{
					"id": "YgyEuNDubiKtp1kZP1M0M",
					"type": "arrow"
				},
				{
					"id": "mhoZ-hAmpDk7-GVJJcKPZ",
					"type": "arrow"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 288,
			"versionNonce": 364850457,
			"isDeleted": false,
			"id": "jWKENudI",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 37.394101876620766,
			"y": 585.9483353443244,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100.81591796875,
			"height": 100,
			"seed": 1798397209,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"rawText": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "uQ0Xeu21pTursLqJuIeJ_",
			"originalText": "ChromeDriver\nIEDriver\nFirefoxDriver\n(Gekodriver)\nSafariDriver",
			"lineHeight": 1.25,
			"baseline": 94
		},
		{
			"type": "rectangle",
			"version": 486,
			"versionNonce": 183012599,
			"isDeleted": false,
			"id": "eZ4rrcFkVpEJEkW0Rke1Q",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 351.0341629841553,
			"y": 564.5165789238214,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 175,
			"height": 135,
			"seed": 655905273,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "Eon8Kb6z"
				},
				{
					"id": "YgyEuNDubiKtp1kZP1M0M",
					"type": "arrow"
				},
				{
					"id": "mhoZ-hAmpDk7-GVJJcKPZ",
					"type": "arrow"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 467,
			"versionNonce": 1600922105,
			"isDeleted": false,
			"id": "Eon8Kb6z",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 407.8141922810303,
			"y": 622.0165789238214,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 61.43994140625,
			"height": 20,
			"seed": 940419801,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Browser",
			"rawText": "Browser",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "eZ4rrcFkVpEJEkW0Rke1Q",
			"originalText": "Browser",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "arrow",
			"version": 2070,
			"versionNonce": 1088305856,
			"isDeleted": false,
			"id": "vt63EP0CxnhrchO80WDkA",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -135.70004199472146,
			"y": 616.1548915794756,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 130.0402944977052,
			"height": 2.1438331442813023,
			"seed": 916776889,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729336,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-ll0whM4uWG9IMrjGk0ET",
				"gap": 8.28515024549506,
				"focus": -0.16197354451716378
			},
			"endBinding": {
				"elementId": "uQ0Xeu21pTursLqJuIeJ_",
				"gap": 8.461808358012036,
				"focus": 0.22404054801192622
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					130.0402944977052,
					2.1438331442813023
				]
			]
		},
		{
			"type": "arrow",
			"version": 2066,
			"versionNonce": 1226738368,
			"isDeleted": false,
			"id": "df8OJWHej-2vsqW-8azhm",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -3.158492951538392,
			"y": 671.1140538671855,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 130.04590269175335,
			"height": 5.333795813722077,
			"seed": 1560381593,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729336,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "uQ0Xeu21pTursLqJuIeJ_",
				"gap": 5.960553812534158,
				"focus": -0.42487620103574414
			},
			"endBinding": {
				"elementId": "-ll0whM4uWG9IMrjGk0ET",
				"gap": 10.780796596924802,
				"focus": 0.43366088282672427
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-130.04590269175335,
					5.333795813722077
				]
			]
		},
		{
			"type": "arrow",
			"version": 1310,
			"versionNonce": 1726446272,
			"isDeleted": false,
			"id": "YgyEuNDubiKtp1kZP1M0M",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 189.87244708292815,
			"y": 606.1710874307491,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 155.27967680536688,
			"height": 2.6178289160545773,
			"seed": 1423379833,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729337,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "uQ0Xeu21pTursLqJuIeJ_",
				"gap": 17.07038622193238,
				"focus": -0.3900360690205981
			},
			"endBinding": {
				"elementId": "eZ4rrcFkVpEJEkW0Rke1Q",
				"gap": 5.88203909586025,
				"focus": 0.4354848328988208
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					155.27967680536688,
					-2.6178289160545773
				]
			]
		},
		{
			"type": "arrow",
			"version": 1377,
			"versionNonce": 1842858688,
			"isDeleted": false,
			"id": "mhoZ-hAmpDk7-GVJJcKPZ",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 333.67594401348936,
			"y": 660.3902588412852,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 146.0327944040589,
			"height": 4.1921369200084655,
			"seed": 1164506713,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729338,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "eZ4rrcFkVpEJEkW0Rke1Q",
				"gap": 17.358218970665916,
				"focus": -0.3622748904066811
			},
			"endBinding": {
				"elementId": "uQ0Xeu21pTursLqJuIeJ_",
				"gap": 14.841088748434686,
				"focus": 0.43186380674941616
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-146.0327944040589,
					4.1921369200084655
				]
			]
		},
		{
			"type": "text",
			"version": 173,
			"versionNonce": 1968077911,
			"isDeleted": false,
			"id": "Y2UvfPuJ",
			"fillStyle": "cross-hatch",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 43.863115039163404,
			"y": 525.8284951480823,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 75.67994689941406,
			"height": 20,
			"seed": 899675161,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "WebDriver",
			"rawText": "WebDriver",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "WebDriver",
			"lineHeight": 1.25,
			"baseline": 14
		},
		{
			"type": "rectangle",
			"version": 342,
			"versionNonce": 707221657,
			"isDeleted": false,
			"id": "yctsiJGueNYkJYdi3-c0q",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -314.93231557976765,
			"y": 444.6106289426747,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 873.9136621361868,
			"height": 359.07584032133894,
			"seed": 1973160185,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 170,
			"versionNonce": 1896536439,
			"isDeleted": false,
			"id": "ar8VVwX9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 26.545011818455237,
			"y": 465.91741267710063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 142.17987060546875,
			"height": 25,
			"seed": 184713689,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Remote Server",
			"rawText": "Remote Server",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Remote Server",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 833,
			"versionNonce": 1206651584,
			"isDeleted": false,
			"id": "ptRr-MQSjN9KR3CAunZEu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -220.84199551265976,
			"y": 340.5954539315094,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 2.375484313647064,
			"height": 169.55253065792618,
			"seed": 1920391481,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729330,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Dwl7w2o2GoUins4eRBO7j",
				"gap": 19.5400566455981,
				"focus": -0.0037003192282361853
			},
			"endBinding": {
				"elementId": "-ll0whM4uWG9IMrjGk0ET",
				"gap": 15.74345831740834,
				"focus": -0.06863751302998741
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.375484313647064,
					169.55253065792618
				]
			]
		},
		{
			"type": "rectangle",
			"version": 205,
			"versionNonce": 729715351,
			"isDeleted": false,
			"id": "7ECI3wdwdTPHe5Z0r5zOt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -263.13836922743644,
			"y": 538.6768677124095,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103,
			"height": 60,
			"seed": 367654425,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ymRT2HFb"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 189,
			"versionNonce": 1062913625,
			"isDeleted": false,
			"id": "ymRT2HFb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -256.8283258924755,
			"y": 543.6768677124095,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 90.37991333007812,
			"height": 50,
			"seed": 543766233,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Remote \nWebdriver",
			"rawText": "Remote Webdriver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "7ECI3wdwdTPHe5Z0r5zOt",
			"originalText": "Remote Webdriver",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 272,
			"versionNonce": 224274359,
			"isDeleted": false,
			"id": "Eb52Fq2R09ngT78ecsqIN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -260.4430562636512,
			"y": 605.6481509990898,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103,
			"height": 60,
			"seed": 1609832153,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "LUGH38oC"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 70,
			"versionNonce": 482513721,
			"isDeleted": false,
			"id": "LUGH38oC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -252.46301475974496,
			"y": 610.6481509990898,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 87.0399169921875,
			"height": 50,
			"seed": 2137830073,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Selenium \nServer",
			"rawText": "Selenium  Server",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Eb52Fq2R09ngT78ecsqIN",
			"originalText": "Selenium  Server",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 1959663831,
			"isDeleted": false,
			"id": "9NTb4ZblfhVrncfKat8NO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -262.1928128066761,
			"y": 671.4210507958734,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103,
			"height": 60,
			"seed": 1286293241,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "1DC09nsQ"
				}
			],
			"updated": 1694838533695,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 67,
			"versionNonce": 425575449,
			"isDeleted": false,
			"id": "1DC09nsQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -254.21277130276985,
			"y": 676.4210507958734,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 87.0399169921875,
			"height": 50,
			"seed": 112526839,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533695,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Selenium \nGrid",
			"rawText": "Selenium Grid",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "9NTb4ZblfhVrncfKat8NO",
			"originalText": "Selenium Grid",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 108,
			"versionNonce": 123921911,
			"isDeleted": false,
			"id": "pbMyvoVJExuHs7SlGk8z4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -443.19710125171173,
			"y": 1268.5216480867261,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1963,
			"height": 1047,
			"seed": 1498718487,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "VCoa2JTf"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 70,
			"versionNonce": 1092606201,
			"isDeleted": false,
			"id": "VCoa2JTf",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -438.19710125171173,
			"y": 1273.621648086726,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1687.5,
			"height": 1036.8,
			"seed": 1007644921,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 3,
			"text": "        // Set the path to WebDriver executables (adjust the paths accordingly)\n        System.setProperty(\"webdriver.chrome.driver\", \"path/to/chromedriver\");\n        System.setProperty(\"webdriver.gecko.driver\", \"path/to/geckodriver\");\n        System.setProperty(\"webdriver.edge.driver\", \"path/to/msedgedriver\");\n        System.setProperty(\"webdriver.ie.driver\", \"path/to/IEDriverServer.exe\");\n        System.setProperty(\"webdriver.opera.driver\", \"path/to/operadriver\");\n        \n        // Initialize ChromeDriver\n        WebDriver chromeDriver = new ChromeDriver();\n\n        // Initialize FirefoxDriver\n        WebDriver firefoxDriver = new FirefoxDriver();\n\n        // Initialize EdgeDriver (for Microsoft Edge)\n        WebDriver edgeDriver = new EdgeDriver();\n\n        // Initialize InternetExplorerDriver (for Internet Explorer)\n        WebDriver ieDriver = new InternetExplorerDriver();\n\n        // Initialize OperaDriver (for Opera)\n        WebDriver operaDriver = new OperaDriver();\n\n        // Initialize SafariDriver (for Safari - macOS only)\n        WebDriver safariDriver = new SafariDriver();",
			"rawText": "        // Set the path to WebDriver executables (adjust the paths accordingly)\n        System.setProperty(\"webdriver.chrome.driver\", \"path/to/chromedriver\");\n        System.setProperty(\"webdriver.gecko.driver\", \"path/to/geckodriver\");\n        System.setProperty(\"webdriver.edge.driver\", \"path/to/msedgedriver\");\n        System.setProperty(\"webdriver.ie.driver\", \"path/to/IEDriverServer.exe\");\n        System.setProperty(\"webdriver.opera.driver\", \"path/to/operadriver\");\n        \n        // Initialize ChromeDriver\n        WebDriver chromeDriver = new ChromeDriver();\n\n        // Initialize FirefoxDriver\n        WebDriver firefoxDriver = new FirefoxDriver();\n\n        // Initialize EdgeDriver (for Microsoft Edge)\n        WebDriver edgeDriver = new EdgeDriver();\n\n        // Initialize InternetExplorerDriver (for Internet Explorer)\n        WebDriver ieDriver = new InternetExplorerDriver();\n\n        // Initialize OperaDriver (for Opera)\n        WebDriver operaDriver = new OperaDriver();\n\n        // Initialize SafariDriver (for Safari - macOS only)\n        WebDriver safariDriver = new SafariDriver();",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "pbMyvoVJExuHs7SlGk8z4",
			"originalText": "        // Set the path to WebDriver executables (adjust the paths accordingly)\n        System.setProperty(\"webdriver.chrome.driver\", \"path/to/chromedriver\");\n        System.setProperty(\"webdriver.gecko.driver\", \"path/to/geckodriver\");\n        System.setProperty(\"webdriver.edge.driver\", \"path/to/msedgedriver\");\n        System.setProperty(\"webdriver.ie.driver\", \"path/to/IEDriverServer.exe\");\n        System.setProperty(\"webdriver.opera.driver\", \"path/to/operadriver\");\n        \n        // Initialize ChromeDriver\n        WebDriver chromeDriver = new ChromeDriver();\n\n        // Initialize FirefoxDriver\n        WebDriver firefoxDriver = new FirefoxDriver();\n\n        // Initialize EdgeDriver (for Microsoft Edge)\n        WebDriver edgeDriver = new EdgeDriver();\n\n        // Initialize InternetExplorerDriver (for Internet Explorer)\n        WebDriver ieDriver = new InternetExplorerDriver();\n\n        // Initialize OperaDriver (for Opera)\n        WebDriver operaDriver = new OperaDriver();\n\n        // Initialize SafariDriver (for Safari - macOS only)\n        WebDriver safariDriver = new SafariDriver();",
			"lineHeight": 1.2,
			"baseline": 1028
		},
		{
			"type": "rectangle",
			"version": 366,
			"versionNonce": 593706967,
			"isDeleted": false,
			"id": "yOVHZK8SNw0vKa_gjZ9IG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1175.4837266578604,
			"y": 990.9032110721942,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 236,
			"height": 89,
			"seed": 1725783703,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "43Tq60xz"
				},
				{
					"id": "JCY8xMqGOJ00blo_W8xc5",
					"type": "arrow"
				}
			],
			"updated": 1694851191620,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 435,
			"versionNonce": 381365495,
			"isDeleted": false,
			"id": "43Tq60xz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1186.3138353004385,
			"y": 1010.4032110721942,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 214.33978271484375,
			"height": 50,
			"seed": 1515168535,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694851191620,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "use when you need \nspecific Driver Version",
			"rawText": "use when you need specific Driver Version",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "yOVHZK8SNw0vKa_gjZ9IG",
			"originalText": "use when you need specific Driver Version",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 442,
			"versionNonce": 1578136256,
			"isDeleted": false,
			"id": "JCY8xMqGOJ00blo_W8xc5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1192.577954034138,
			"y": 1417.975013217047,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 304.3649292130615,
			"height": 329.43882714043684,
			"seed": 1908750137,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729345,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "yOVHZK8SNw0vKa_gjZ9IG",
				"gap": 8.895495435766406,
				"focus": -0.7336767854507655
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					304.3649292130615,
					-116.55411783632007
				],
				[
					221.05090236825322,
					-329.43882714043684
				]
			]
		},
		{
			"type": "rectangle",
			"version": 402,
			"versionNonce": 464957113,
			"isDeleted": false,
			"id": "hxsRvTnzJaLUo-D4k2mHH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1669.1277492024142,
			"y": 1804.7008655047707,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 236,
			"height": 89,
			"seed": 905623129,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "fficySVo"
				},
				{
					"id": "vFb-BiaJXP9WXD7lg0ry7",
					"type": "arrow"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 488,
			"versionNonce": 593196375,
			"isDeleted": false,
			"id": "fficySVo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1710.0078227497775,
			"y": 1836.7008655047707,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 154.23985290527344,
			"height": 25,
			"seed": 434406201,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Initialize Driver",
			"rawText": "Initialize Driver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "hxsRvTnzJaLUo-D4k2mHH",
			"originalText": "Initialize Driver",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 295,
			"versionNonce": 284433088,
			"isDeleted": false,
			"id": "vFb-BiaJXP9WXD7lg0ry7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 823.4180135456388,
			"y": 1929.601449042811,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 839.2496698532836,
			"height": 140.3188534814144,
			"seed": 630354647,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729346,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "hxsRvTnzJaLUo-D4k2mHH",
				"gap": 6.460065803491716,
				"focus": -0.2809554714950619
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					504.5551608942726,
					-140.3188534814144
				],
				[
					839.2496698532836,
					-83.42041182443336
				]
			]
		},
		{
			"type": "rectangle",
			"version": 452,
			"versionNonce": 621851255,
			"isDeleted": false,
			"id": "DnMUQaIDvBOXsXeSpw82u",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -494.91399113266436,
			"y": 2669.3832431281844,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1147,
			"height": 562,
			"seed": 1448398487,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "54eiZXgt"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 261,
			"versionNonce": 2002982009,
			"isDeleted": false,
			"id": "54eiZXgt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -489.91399113266436,
			"y": 2674.3832431281844,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1136.71875,
			"height": 552,
			"seed": 1488727865,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "\t\t//Browser Options\n\t\tFirefoxOptions options = new FirefoxOptions();\n\n\t\toptions.setCapability(\"browserName\", \"firefox\");\n\t\toptions.setPlatformName(\"Mac OS X\");\n\t\toptions.setBrowserVersion(\"1.2.0\");\n\t\toptions.setCapability(\"acceptInsecureCerts\", true);\n\t\toptions.setPageLoadTimeout(Duration.ofSeconds(30));\n\t\toptions.setImplicitWaitTimeout(Duration.ofSeconds(30));\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.IGNORE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NORMAL);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NONE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.EAGER);\n\n\t    Proxy proxy = new Proxy();\n\t    proxy.setHttpProxy(\"<HOST:PORT>\");\n\t\toptions.setProxy(proxy);\n\n\t\tFirefoxDriver driver = new FirefoxDriver(options);",
			"rawText": "\t\t//Browser Options\n\t\tFirefoxOptions options = new FirefoxOptions();\n\n\t\toptions.setCapability(\"browserName\", \"firefox\");\n\t\toptions.setPlatformName(\"Mac OS X\");\n\t\toptions.setBrowserVersion(\"1.2.0\");\n\t\toptions.setCapability(\"acceptInsecureCerts\", true);\n\t\toptions.setPageLoadTimeout(Duration.ofSeconds(30));\n\t\toptions.setImplicitWaitTimeout(Duration.ofSeconds(30));\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.IGNORE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NORMAL);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NONE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.EAGER);\n\n\t    Proxy proxy = new Proxy();\n\t    proxy.setHttpProxy(\"<HOST:PORT>\");\n\t\toptions.setProxy(proxy);\n\n\t\tFirefoxDriver driver = new FirefoxDriver(options);",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "DnMUQaIDvBOXsXeSpw82u",
			"originalText": "\t\t//Browser Options\n\t\tFirefoxOptions options = new FirefoxOptions();\n\n\t\toptions.setCapability(\"browserName\", \"firefox\");\n\t\toptions.setPlatformName(\"Mac OS X\");\n\t\toptions.setBrowserVersion(\"1.2.0\");\n\t\toptions.setCapability(\"acceptInsecureCerts\", true);\n\t\toptions.setPageLoadTimeout(Duration.ofSeconds(30));\n\t\toptions.setImplicitWaitTimeout(Duration.ofSeconds(30));\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.ACCEPT_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.DISMISS_AND_NOTIFY);\n\t\toptions.setUnhandledPromptBehaviour(UnexpectedAlertBehaviour.IGNORE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NORMAL);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.NONE);\n\t\toptions.setPageLoadStrategy(PageLoadStrategy.EAGER);\n\n\t    Proxy proxy = new Proxy();\n\t    proxy.setHttpProxy(\"<HOST:PORT>\");\n\t\toptions.setProxy(proxy);\n\n\t\tFirefoxDriver driver = new FirefoxDriver(options);",
			"lineHeight": 1.2,
			"baseline": 548
		},
		{
			"type": "arrow",
			"version": 111,
			"versionNonce": 1935756183,
			"isDeleted": false,
			"id": "zIe7vWG8d8Bts8Q3WyjUE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 139.63642631051584,
			"y": 2830.0187277607397,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 601.0379464285712,
			"height": 127.99665178571422,
			"seed": 635920217,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					601.0379464285712,
					-127.99665178571422
				]
			]
		},
		{
			"type": "text",
			"version": 34,
			"versionNonce": 1725701465,
			"isDeleted": false,
			"id": "TJaL2J2n",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 742.2368727390871,
			"y": 2719.8423884750255,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 183.03982543945312,
			"height": 25,
			"seed": 645895607,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Accept Certificats",
			"rawText": "Accept Certificats",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Accept Certificats",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 93,
			"versionNonce": 444711095,
			"isDeleted": false,
			"id": "qSR_qP9d3OtmXfLvkcwVy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 178.81611381051596,
			"y": 2878.5399331178824,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 573.5491071428569,
			"height": 11.038932550360641,
			"seed": 1038149273,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "B606aNRH",
				"focus": 0.43026040841324714,
				"gap": 6.8785247802734375
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					573.5491071428569,
					-11.038932550360641
				]
			]
		},
		{
			"type": "text",
			"version": 174,
			"versionNonce": 402721337,
			"isDeleted": false,
			"id": "B606aNRH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 759.2437457336463,
			"y": 2859.58904026074,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 119.97988891601562,
			"height": 25,
			"seed": 347674105,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "qSR_qP9d3OtmXfLvkcwVy",
					"type": "arrow"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Implicit wait",
			"rawText": "Implicit wait",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Implicit wait",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 198,
			"versionNonce": 739676631,
			"isDeleted": false,
			"id": "ypLLW5yMtELP4rvz-cW4L",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -476.0276361894839,
			"y": 2893.3111384750255,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 990.0111607142854,
			"height": 116.93080357142844,
			"seed": 573960249,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "RyE9ZKBKBsoOsKHj61VI3",
					"type": "arrow"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 40,
			"versionNonce": 867523353,
			"isDeleted": false,
			"id": "RyE9ZKBKBsoOsKHj61VI3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 518.3083013105157,
			"y": 2945.2586831178824,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 202.78459821428578,
			"height": 54.83816964285734,
			"seed": 335927673,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ypLLW5yMtELP4rvz-cW4L",
				"focus": -0.7359817129824716,
				"gap": 4.324776785714221
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					202.78459821428578,
					54.83816964285734
				]
			]
		},
		{
			"type": "text",
			"version": 245,
			"versionNonce": 288636663,
			"isDeleted": false,
			"id": "nSsJmWnL",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 744.8473747096508,
			"y": 2995.3926116893113,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 240.75978088378906,
			"height": 25,
			"seed": 494754423,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533696,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Remote Alerts behaviour",
			"rawText": "Remote Alerts behaviour",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Remote Alerts behaviour",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 124,
			"versionNonce": 2053935097,
			"isDeleted": false,
			"id": "2dPTtuYxlHUHA_EKfrmXs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -470.51424333234104,
			"y": 3014.974084903597,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 644.6707589285712,
			"height": 78.14174107142844,
			"seed": 437634743,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "zB1I9BaLDRooP0rysIX0v",
					"type": "arrow"
				}
			],
			"updated": 1694838533696,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 95,
			"versionNonce": 476006423,
			"isDeleted": false,
			"id": "zB1I9BaLDRooP0rysIX0v",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 179.68106916765896,
			"y": 3048.4979398239943,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 540.6819789558888,
			"height": 59.438367980638304,
			"seed": 118553591,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "2dPTtuYxlHUHA_EKfrmXs",
				"focus": -0.5601417373792479,
				"gap": 5.524553571428669
			},
			"endBinding": {
				"elementId": "WGmCQqhX",
				"focus": 0.10618123735285201,
				"gap": 2.8404017857142208
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					540.6819789558888,
					59.438367980638304
				]
			]
		},
		{
			"type": "text",
			"version": 376,
			"versionNonce": 1378494681,
			"isDeleted": false,
			"id": "WGmCQqhX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 722.8335447971925,
			"y": 3109.337924189311,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 202.33984375,
			"height": 25,
			"seed": 2095392855,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "zB1I9BaLDRooP0rysIX0v",
					"type": "arrow"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Page Load Strategy",
			"rawText": "Page Load Strategy",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Page Load Strategy",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 34,
			"versionNonce": 1535913271,
			"isDeleted": false,
			"id": "07QiAi5OwCaaaXeorzCXE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -61.3568772609126,
			"y": 3158.7352456178824,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 400.44084821428567,
			"height": 137.00334821428578,
			"seed": 764741529,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					400.44084821428567,
					137.00334821428578
				]
			]
		},
		{
			"type": "text",
			"version": 35,
			"versionNonce": 344040889,
			"isDeleted": false,
			"id": "LnH7pDvc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 373.2134352390875,
			"y": 3278.9975224035966,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 53.51994323730469,
			"height": 25,
			"seed": 112262775,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Proxy",
			"rawText": "Proxy",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Proxy",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 43,
			"versionNonce": 706702935,
			"isDeleted": false,
			"id": "_eqSWghtXVI4qDEYVytPy",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1129.7795810634666,
			"y": -40.933656563406146,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 186,
			"height": 62,
			"seed": 958478553,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ihfBZQCr"
				},
				{
					"id": "buRXq61ioX7qgBPggGhfa",
					"type": "arrow"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 30,
			"versionNonce": 479626905,
			"isDeleted": false,
			"id": "ihfBZQCr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1138.8096485073143,
			"y": -22.433656563406146,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 167.9398651123047,
			"height": 25,
			"seed": 1901758809,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Selenium Manager",
			"rawText": "Selenium Manager",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_eqSWghtXVI4qDEYVytPy",
			"originalText": "Selenium Manager",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "diamond",
			"version": 95,
			"versionNonce": 49122167,
			"isDeleted": false,
			"id": "wFQHOTQ2Fp36RYAUxuOkS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1193.036344659049,
			"y": 182.61923541349142,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 70.73152715463539,
			"height": 74.41898480713917,
			"seed": 616621529,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "buRXq61ioX7qgBPggGhfa",
					"type": "arrow"
				},
				{
					"id": "SLmpk9_zZJUtrepGwVAXM",
					"type": "arrow"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 138,
			"versionNonce": 893151936,
			"isDeleted": false,
			"id": "buRXq61ioX7qgBPggGhfa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1223.6810938768194,
			"y": 29.714913415442766,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 7.056075421303831,
			"height": 146.18186923958908,
			"seed": 1152154297,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "MNJGiNHc"
				}
			],
			"updated": 1694862729351,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_eqSWghtXVI4qDEYVytPy",
				"gap": 8.648569978848911,
				"focus": 0.01071247994509351
			},
			"endBinding": {
				"elementId": "wFQHOTQ2Fp36RYAUxuOkS",
				"gap": 7.116451450818207,
				"focus": 0.12598678825614407
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					7.056075421303831,
					146.18186923958908
				]
			]
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 305857687,
			"isDeleted": false,
			"id": "MNJGiNHc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1151.9718550626,
			"y": 77.81289759426193,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 150.27987670898438,
			"height": 50,
			"seed": 857927705,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Check Browser \nInstaled",
			"rawText": "Check Browser Instaled",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "buRXq61ioX7qgBPggGhfa",
			"originalText": "Check Browser Instaled",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 149,
			"versionNonce": 2142288576,
			"isDeleted": false,
			"id": "SLmpk9_zZJUtrepGwVAXM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1188.4266687410973,
			"y": 231.1722790979626,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 195.98876485106643,
			"height": 137.64091271322343,
			"seed": 527718457,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "fOiNTCir"
				}
			],
			"updated": 1694862729353,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "UMzSIt5q",
				"gap": 2.3823005749577533,
				"focus": -1.0365249248206196
			},
			"endBinding": {
				"elementId": "vRFYigtQKPzRL9497AouW",
				"gap": 10.142200038721853,
				"focus": -0.3619524517892657
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-195.98876485106643,
					137.64091271322343
				]
			]
		},
		{
			"type": "text",
			"version": 77,
			"versionNonce": 129784247,
			"isDeleted": false,
			"id": "fOiNTCir",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1024.9067338825862,
			"y": 279.5260760672631,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 129.01988220214844,
			"height": 25,
			"seed": 2099600055,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Check Version",
			"rawText": "Check Version",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "SLmpk9_zZJUtrepGwVAXM",
			"originalText": "Check Version",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 6,
			"versionNonce": 605585721,
			"isDeleted": false,
			"id": "UMzSIt5q",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1158.462200430985,
			"y": 203.78997852300483,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 32.119964599609375,
			"height": 25,
			"seed": 880304377,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "SLmpk9_zZJUtrepGwVAXM",
					"type": "arrow"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Yes",
			"rawText": "Yes",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Yes",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 5,
			"versionNonce": 680921815,
			"isDeleted": false,
			"id": "4uDFA9MZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1274.5122438360263,
			"y": 202.05788832292956,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 23.959976196289062,
			"height": 25,
			"seed": 1011887545,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "P6VtiZtNDdUAgQM0KwadU",
					"type": "arrow"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "No",
			"rawText": "No",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "No",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 372,
			"versionNonce": 1431374528,
			"isDeleted": false,
			"id": "P6VtiZtNDdUAgQM0KwadU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1275.28416273008,
			"y": 231.76700855438412,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 174.73714658406675,
			"height": 139.20076767679996,
			"seed": 1712849623,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729354,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "4uDFA9MZ",
				"gap": 4.709120231454563,
				"focus": 1.185731215394587
			},
			"endBinding": {
				"elementId": "McMdMb28YoEgXjuhQ2eoU",
				"gap": 10.380035112713472,
				"focus": 0.4958745952394489
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					174.73714658406675,
					139.20076767679996
				]
			]
		},
		{
			"type": "rectangle",
			"version": 59,
			"versionNonce": 559716343,
			"isDeleted": false,
			"id": "vRFYigtQKPzRL9497AouW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 878.8249627662808,
			"y": 378.95539184990787,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 224,
			"height": 61,
			"seed": 479798551,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "SLmpk9_zZJUtrepGwVAXM",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "defgJigN"
				}
			],
			"updated": 1694838533697,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 41,
			"versionNonce": 575817465,
			"isDeleted": false,
			"id": "defgJigN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 898.2950326515347,
			"y": 384.45539184990787,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 185.0598602294922,
			"height": 50,
			"seed": 1738167609,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Download Checked \nVersion Driver",
			"rawText": "Download Checked Version Driver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "vRFYigtQKPzRL9497AouW",
			"originalText": "Download Checked Version Driver",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 273,
			"versionNonce": 403996951,
			"isDeleted": false,
			"id": "McMdMb28YoEgXjuhQ2eoU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1314.8143938504559,
			"y": 381.34781134389755,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 224,
			"height": 61,
			"seed": 1574519575,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "kyI0jqPV"
				},
				{
					"id": "P6VtiZtNDdUAgQM0KwadU",
					"type": "arrow"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 299,
			"versionNonce": 37814233,
			"isDeleted": false,
			"id": "kyI0jqPV",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1337.3244570218426,
			"y": 386.84781134389755,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 178.97987365722656,
			"height": 50,
			"seed": 1913571383,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Download Latest \nBrowser Driver",
			"rawText": "Download Latest Browser Driver",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "McMdMb28YoEgXjuhQ2eoU",
			"originalText": "Download Latest Browser Driver",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 349,
			"versionNonce": 2117223991,
			"isDeleted": false,
			"id": "7GDVSD1oDTp-ix_y1pL9X",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 911.6393469202629,
			"y": 471.2693608650933,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 644.6081935217527,
			"height": 118.43803260674962,
			"seed": 2116281623,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 150,
			"versionNonce": 1772461241,
			"isDeleted": false,
			"id": "3Bc2q47l",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1067.5545288364106,
			"y": 484.90280521334205,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 379.2997131347656,
			"height": 25,
			"seed": 43759351,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Browser Saved in - ~/.cache/selenium/",
			"rawText": "Browser Saved in - ~/.cache/selenium/",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Browser Saved in - ~/.cache/selenium/",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 119,
			"versionNonce": 580544343,
			"isDeleted": false,
			"id": "jVaw84sjJCtyTJXi8SHIU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 917.7993111865364,
			"y": 605.8573614897571,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 629,
			"height": 93,
			"seed": 609442457,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "P0iSz2Cz"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 217,
			"versionNonce": 941858201,
			"isDeleted": false,
			"id": "P0iSz2Cz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 954.7295480029427,
			"y": 627.3573614897571,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 555.1395263671875,
			"height": 50,
			"seed": 2062985561,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Browser Versions can be controlled vis Browser Options \n\"BrowserVersion\" ",
			"rawText": "Browser Versions can be controlled vis Browser Options \"BrowserVersion\" ",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "jVaw84sjJCtyTJXi8SHIU",
			"originalText": "Browser Versions can be controlled vis Browser Options \"BrowserVersion\" ",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "text",
			"version": 116,
			"versionNonce": 60908663,
			"isDeleted": false,
			"id": "nhkmyTx1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 958.2095689793173,
			"y": 527.8261654839565,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 538.2981567382812,
			"height": 77.28372287888823,
			"seed": 1404365561,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20.60899276770353,
			"fontFamily": 1,
			"text": "    --clear-cache: To remove the cache folder.\n    --clear-metadata: To remove the metadata file.\n",
			"rawText": "    --clear-cache: To remove the cache folder.\n    --clear-metadata: To remove the metadata file.\n",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "    --clear-cache: To remove the cache folder.\n    --clear-metadata: To remove the metadata file.\n",
			"lineHeight": 1.25,
			"baseline": 70
		},
		{
			"type": "rectangle",
			"version": 561,
			"versionNonce": 2091714681,
			"isDeleted": false,
			"id": "xFfw_QcYqjpeMnvMA5knk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1833.792521517392,
			"y": 677.8978605562198,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 126,
			"height": 52,
			"seed": 1810546873,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "FtARG6Xk"
				},
				{
					"id": "HoCho2JxsGtzkVGbesC9H",
					"type": "arrow"
				}
			],
			"updated": 1694846853756,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 593,
			"versionNonce": 382177625,
			"isDeleted": false,
			"id": "FtARG6Xk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1873.6525450159272,
			"y": 691.3978605562198,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 46.27995300292969,
			"height": 25,
			"seed": 2116305305,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694846853756,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Node",
			"rawText": "Node",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xFfw_QcYqjpeMnvMA5knk",
			"originalText": "Node",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 576,
			"versionNonce": 403241017,
			"isDeleted": false,
			"id": "y_FfTecbsOflb1BrlwTcj",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2885.2865119020084,
			"y": 669.1526682485276,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 126,
			"height": 52,
			"seed": 349366391,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "eCVG4mgU"
				},
				{
					"id": "Da2LKQXOBpdZ2mWhNCJ5M",
					"type": "arrow"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 608,
			"versionNonce": 55346135,
			"isDeleted": false,
			"id": "eCVG4mgU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2925.1465354005436,
			"y": 682.6526682485276,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 46.27995300292969,
			"height": 25,
			"seed": 1500299671,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Node",
			"rawText": "Node",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "y_FfTecbsOflb1BrlwTcj",
			"originalText": "Node",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 1916,
			"versionNonce": 1528650432,
			"isDeleted": false,
			"id": "HoCho2JxsGtzkVGbesC9H",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2418.387878235667,
			"y": 335.01805286391186,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 453.8850201798132,
			"height": 372.82052561025523,
			"seed": 755852601,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729356,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cKUI3xcsdlwsleNebhfOH",
				"gap": 14.841346153845961,
				"focus": -0.3756030548875536
			},
			"endBinding": {
				"elementId": "xFfw_QcYqjpeMnvMA5knk",
				"gap": 4.710336538461661,
				"focus": 0.7660365301723553
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-453.8850201798132,
					372.82052561025523
				]
			]
		},
		{
			"type": "arrow",
			"version": 3081,
			"versionNonce": 1421200665,
			"isDeleted": false,
			"id": "5Bc6ra43ssnex-fKumRCs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2425.184471101401,
			"y": 327.14545671006573,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.830887014285054,
			"height": 492.47836538461644,
			"seed": 1100050327,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694846914617,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cKUI3xcsdlwsleNebhfOH",
				"gap": 6.9687499999998295,
				"focus": 0.019857518409372065
			},
			"endBinding": {
				"elementId": "pbXQTLAeyvWv8Jp667f81",
				"gap": 19.896334134614904,
				"focus": -0.010746829308872026
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					12.830887014285054,
					492.47836538461644
				]
			]
		},
		{
			"type": "arrow",
			"version": 1957,
			"versionNonce": 1981131456,
			"isDeleted": false,
			"id": "Da2LKQXOBpdZ2mWhNCJ5M",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2422.287022551688,
			"y": 335.89545671006573,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 456.73987396570465,
			"height": 366.4721273341294,
			"seed": 1568600793,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729357,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cKUI3xcsdlwsleNebhfOH",
				"gap": 15.71874999999983,
				"focus": 0.4068007465404797
			},
			"endBinding": {
				"elementId": "y_FfTecbsOflb1BrlwTcj",
				"gap": 6.259615384615699,
				"focus": -0.820212055961541
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					456.73987396570465,
					366.4721273341294
				]
			]
		},
		{
			"type": "rectangle",
			"version": 353,
			"versionNonce": 483448537,
			"isDeleted": false,
			"id": "2DGeputgzm_45QyC3cmlX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2017.8622330558546,
			"y": 56.04930286391202,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 108,
			"height": 64,
			"seed": 365753975,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "W0e133XC"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 297,
			"versionNonce": 1987010359,
			"isDeleted": false,
			"id": "W0e133XC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2038.4422654044874,
			"y": 75.54930286391202,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 66.83993530273438,
			"height": 25,
			"seed": 200609687,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Router",
			"rawText": "Router",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "2DGeputgzm_45QyC3cmlX",
			"originalText": "Router",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 417,
			"versionNonce": 1914868665,
			"isDeleted": false,
			"id": "O8pk-ra9ZlRfUk6bDNbHm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2173.114636902008,
			"y": 56.66829324852745,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 122,
			"height": 64,
			"seed": 1208050999,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "oGIJXj41"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 388,
			"versionNonce": 634150999,
			"isDeleted": false,
			"id": "oGIJXj41",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2180.3047003785705,
			"y": 76.16829324852745,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 107.619873046875,
			"height": 25,
			"seed": 1127065175,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Distributor",
			"rawText": "Distributor",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "O8pk-ra9ZlRfUk6bDNbHm",
			"originalText": "Distributor",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 401,
			"versionNonce": 870954137,
			"isDeleted": false,
			"id": "x8BVvDp-iuVvCOsVt7471",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2334.119444594315,
			"y": 58.61540863314286,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 122,
			"height": 64,
			"seed": 481032023,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "n2Qy7BLY"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 384,
			"versionNonce": 539770231,
			"isDeleted": false,
			"id": "n2Qy7BLY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2355.309485182694,
			"y": 65.61540863314286,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 79.61991882324219,
			"height": 50,
			"seed": 1694561399,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Session \nMap",
			"rawText": "Session Map",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "x8BVvDp-iuVvCOsVt7471",
			"originalText": "Session Map",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 552,
			"versionNonce": 1977203065,
			"isDeleted": false,
			"id": "Ei-H_PGeUKokOgPDwVdOL",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2489.0954061327766,
			"y": 56.77646632545054,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 186,
			"height": 60,
			"seed": 106420471,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "SzdmftVX"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 549,
			"versionNonce": 953382551,
			"isDeleted": false,
			"id": "SzdmftVX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2519.2854619799446,
			"y": 61.77646632545054,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 125.61988830566406,
			"height": 50,
			"seed": 503292439,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "New Session \nQueue",
			"rawText": "New Session Queue",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Ei-H_PGeUKokOgPDwVdOL",
			"originalText": "New Session Queue",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "rectangle",
			"version": 567,
			"versionNonce": 154542681,
			"isDeleted": false,
			"id": "gY6lzpHUvQ0MFZpspzdz3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2725.814156132777,
			"y": 53.33776440237364,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 122,
			"height": 60,
			"seed": 322650553,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "35qk8Qq0"
				}
			],
			"updated": 1694838533699,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 579,
			"versionNonce": 1719045047,
			"isDeleted": false,
			"id": "35qk8Qq0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2737.8641973315075,
			"y": 70.83776440237364,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 97.89991760253906,
			"height": 25,
			"seed": 1237099161,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533699,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Event bus",
			"rawText": "Event bus",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "gY6lzpHUvQ0MFZpspzdz3",
			"originalText": "Event bus",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "text",
			"version": 8,
			"versionNonce": 1255305017,
			"isDeleted": false,
			"id": "DxhyFt2l",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2406.2131945943156,
			"y": -66.15742790531868,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.571990966796875,
			"height": 45,
			"seed": 1646117849,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694838533700,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Hub",
			"rawText": "Hub",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Hub",
			"lineHeight": 1.25,
			"baseline": 32
		},
		{
			"type": "line",
			"version": 40,
			"versionNonce": 1429863639,
			"isDeleted": false,
			"id": "xMVbC8mRGNvIu8CTAkNM1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2130.0893965173923,
			"y": 84.25723555621977,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 41.550480769230944,
			"height": 0.486778846153868,
			"seed": 2091080665,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533700,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					41.550480769230944,
					-0.486778846153868
				]
			]
		},
		{
			"type": "line",
			"version": 23,
			"versionNonce": 823271449,
			"isDeleted": false,
			"id": "GYZ0RgmEXisfUKT-Esr5a",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2297.0845888250847,
			"y": 88.77646632545054,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 40.20432692307713,
			"height": 0.3064903846153584,
			"seed": 2064601305,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533700,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					40.20432692307713,
					0.3064903846153584
				]
			]
		},
		{
			"type": "line",
			"version": 48,
			"versionNonce": 951208439,
			"isDeleted": false,
			"id": "Pu0HRXhY7rh1rTr6HBBLW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2455.8706465173927,
			"y": 89.67189901775822,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 28.515625,
			"height": 0.3665865384615472,
			"seed": 722752727,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533700,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					28.515625,
					-0.3665865384615472
				]
			]
		},
		{
			"type": "line",
			"version": 26,
			"versionNonce": 434681081,
			"isDeleted": false,
			"id": "59IMLOd5OK3fiQmiG-Tyr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2679.957184978931,
			"y": 87.03367786391203,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 50.12019230769238,
			"height": 1.7728365384614904,
			"seed": 352212057,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694838533700,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					50.12019230769238,
					-1.7728365384614904
				]
			]
		},
		{
			"type": "rectangle",
			"version": 768,
			"versionNonce": 2101573687,
			"isDeleted": false,
			"id": "cKUI3xcsdlwsleNebhfOH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1997.805742671239,
			"y": -84.15021636685702,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 861.1899038461538,
			"height": 404.3269230769229,
			"seed": 1120979639,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "5Bc6ra43ssnex-fKumRCs",
					"type": "arrow"
				},
				{
					"id": "HoCho2JxsGtzkVGbesC9H",
					"type": "arrow"
				},
				{
					"id": "Da2LKQXOBpdZ2mWhNCJ5M",
					"type": "arrow"
				}
			],
			"updated": 1694838533700,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 963,
			"versionNonce": 1458638681,
			"isDeleted": false,
			"id": "pbXQTLAeyvWv8Jp667f81",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2163.952377286623,
			"y": 839.520156229297,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 560,
			"height": 183,
			"seed": 167508279,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "5Bc6ra43ssnex-fKumRCs",
					"type": "arrow"
				}
			],
			"updated": 1694846914617,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 229,
			"versionNonce": 1606611799,
			"isDeleted": false,
			"id": "IRDOMAoK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2371.597809978931,
			"y": 842.7007451716046,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 83.30397033691406,
			"height": 45,
			"seed": 1025362711,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694846897764,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Node",
			"rawText": "Node",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Node",
			"lineHeight": 1.25,
			"baseline": 32
		},
		{
			"type": "text",
			"version": 994,
			"versionNonce": 1601164633,
			"isDeleted": false,
			"id": "nYuB4nzk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2526.07497344047,
			"y": 1065.2136658446814,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 363.0396728515625,
			"height": 25,
			"seed": 924291863,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "CLg4SSrU9cNpQ1b580Reh",
					"type": "arrow"
				}
			],
			"updated": 1694846996964,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Set up Browser Driver automatically",
			"rawText": "Set up Browser Driver automatically",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Set up Browser Driver automatically",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 693,
			"versionNonce": 895337017,
			"isDeleted": false,
			"id": "CLg4SSrU9cNpQ1b580Reh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2469.278098440469,
			"y": 979.2917908446811,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 294.02925753056934,
			"height": 73.94888983985015,
			"seed": 1798654071,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694846996964,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "nYuB4nzk",
				"focus": 0.4021716645935964,
				"gap": 11.972985160150074
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					232.46394230769283,
					4.7055288461540385
				],
				[
					294.02925753056934,
					73.94888983985015
				]
			]
		},
		{
			"type": "text",
			"version": 1172,
			"versionNonce": 1645567479,
			"isDeleted": false,
			"id": "59lCr0fY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2823.5335023993034,
			"y": 950.2353004600659,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 148.6998748779297,
			"height": 25,
			"seed": 33245177,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "vsNKqu7kv1sdsHq9goHs7",
					"type": "arrow"
				}
			],
			"updated": 1694847032182,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Connect to hub",
			"rawText": "Connect to hub",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Connect to hub",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 141,
			"versionNonce": 298092311,
			"isDeleted": false,
			"id": "vsNKqu7kv1sdsHq9goHs7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2591.7901176712385,
			"y": 955.9023677677582,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 225.7091346153843,
			"height": 4.034097775625128,
			"seed": 802312025,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694847032182,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "59lCr0fY",
				"focus": 0.09849903035081246,
				"gap": 6.034250112680638
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					225.7091346153843,
					4.034097775625128
				]
			]
		},
		{
			"type": "text",
			"version": 1391,
			"versionNonce": 309492313,
			"isDeleted": false,
			"id": "9KjXm9xF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2827.65652638612,
			"y": 848.1619831523736,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 190.69984436035156,
			"height": 50,
			"seed": 142667095,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "8WrP0qdwM65vjTRIKTcEi",
					"type": "arrow"
				}
			],
			"updated": 1694847069675,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Start node on port\nBut Optional",
			"rawText": "Start node on port\nBut Optional",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Start node on port\nBut Optional",
			"lineHeight": 1.25,
			"baseline": 43
		},
		{
			"type": "arrow",
			"version": 361,
			"versionNonce": 2133261337,
			"isDeleted": false,
			"id": "8WrP0qdwM65vjTRIKTcEi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2325.1555022866232,
			"y": 927.8795312292967,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 601.6706730769233,
			"height": 20.600961538461547,
			"seed": 1884486775,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694847082477,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "9KjXm9xF",
				"focus": -0.9507446605996851,
				"gap": 9.116586538461547
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					509.2848557692305,
					-9.591346153846189
				],
				[
					601.6706730769233,
					-20.600961538461547
				]
			]
		},
		{
			"type": "rectangle",
			"version": 142,
			"versionNonce": 1228654912,
			"isDeleted": false,
			"id": "hg0wtVWkw2a3vfQBxwIVi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2402.2264994930897,
			"y": 1281.1942860878141,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 182,
			"height": 43,
			"seed": 1452761792,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "3FIYMumI"
				}
			],
			"updated": 1694856665592,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 106,
			"versionNonce": 1500553536,
			"isDeleted": false,
			"id": "3FIYMumI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2464.716520245043,
			"y": 1290.1942860878141,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.01995849609375,
			"height": 25,
			"seed": 377733440,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694856665593,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Facts",
			"rawText": "Facts",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "hg0wtVWkw2a3vfQBxwIVi",
			"originalText": "Facts",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 166,
			"versionNonce": 2088948416,
			"isDeleted": false,
			"id": "yHZJGjYMnJX_BcplwAhaB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2152.999330965988,
			"y": 1410.4186289094837,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 182,
			"height": 43,
			"seed": 918512320,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "4JKRLEE7"
				},
				{
					"id": "J38VqpqEjkyaBPyIZEqDa",
					"type": "arrow"
				}
			],
			"updated": 1694856713589,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 152,
			"versionNonce": 60322496,
			"isDeleted": false,
			"id": "4JKRLEE7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2201.409357516281,
			"y": 1419.4186289094837,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 85.17994689941406,
			"height": 25,
			"seed": 1447365312,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694856681304,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "One CPU",
			"rawText": "One CPU",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "yHZJGjYMnJX_BcplwAhaB",
			"originalText": "One CPU",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "rectangle",
			"version": 350,
			"versionNonce": 789774656,
			"isDeleted": false,
			"id": "1PrRMqY1h7Lz5AM6riTgU",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2595.2069945654234,
			"y": 1406.3143902842155,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 275,
			"height": 42,
			"seed": 711444800,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "FroG2EgQ"
				},
				{
					"id": "J38VqpqEjkyaBPyIZEqDa",
					"type": "arrow"
				}
			],
			"updated": 1694856716786,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 393,
			"versionNonce": 1872812352,
			"isDeleted": false,
			"id": "FroG2EgQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2623.8770766577086,
			"y": 1414.8143902842155,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 217.6598358154297,
			"height": 25,
			"seed": 891068736,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694856716786,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "One Browser Instance",
			"rawText": "One Browser Instance",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "1PrRMqY1h7Lz5AM6riTgU",
			"originalText": "One Browser Instance",
			"lineHeight": 1.25,
			"baseline": 18
		},
		{
			"type": "arrow",
			"version": 137,
			"versionNonce": 1066027712,
			"isDeleted": false,
			"id": "J38VqpqEjkyaBPyIZEqDa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2347.2866643382117,
			"y": 1430.4961383708924,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 242.02182143377377,
			"height": 2.8795402239484247,
			"seed": 2044029248,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694862729365,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "yHZJGjYMnJX_BcplwAhaB",
				"gap": 12.287333372223657,
				"focus": -0.008610523673560253
			},
			"endBinding": {
				"elementId": "1PrRMqY1h7Lz5AM6riTgU",
				"gap": 5.898508793437941,
				"focus": 0.06202197446865025
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					242.02182143377377,
					-2.8795402239484247
				]
			]
		},
		{
			"type": "text",
			"version": 25,
			"versionNonce": 1938204992,
			"isDeleted": true,
			"id": "XEnsixrr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2167.01247344047,
			"y": 166.4798352786718,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 503.90625,
			"height": 24,
			"seed": 2132102297,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694862786196,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "java -jar selenium-server-<version>.jar hub",
			"rawText": "java -jar selenium-server-<version>.jar hub",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "java -jar selenium-server-<version>.jar hub",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "text",
			"version": 114,
			"versionNonce": 289682112,
			"isDeleted": true,
			"id": "mn1UVFcq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2137.757665748161,
			"y": 232.5156490177582,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 597.65625,
			"height": 24,
			"seed": 854238137,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694862787956,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "listen for RemoteWebDriver on http://localhost:4444",
			"rawText": "listen for RemoteWebDriver on http://localhost:4444",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "listen for RemoteWebDriver on http://localhost:4444",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "text",
			"version": 880,
			"versionNonce": 1504635584,
			"isDeleted": true,
			"id": "s679g1mr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 2185.61824267124,
			"y": 893.839285287345,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 527.34375,
			"height": 96,
			"seed": 839449783,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694862776293,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "java -jar selenium-server-<version>.jar node \n--port 5555 \n--hub https://HubIPAdress:HubPort\n--selenium-manager true ",
			"rawText": "java -jar selenium-server-<version>.jar node \n--port 5555 \n--hub https://HubIPAdress:HubPort\n--selenium-manager true ",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "java -jar selenium-server-<version>.jar node \n--port 5555 \n--hub https://HubIPAdress:HubPort\n--selenium-manager true ",
			"lineHeight": 1.2,
			"baseline": 92
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": -1336.8129955307322,
		"scrollY": 252.71286274827355,
		"zoom": {
			"value": 0.46846220314502723
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%