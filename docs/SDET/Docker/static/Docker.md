---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Dockerd
Listens for Docker API requests ^9270rDPe

Cloud Image Storage
 ^VHArH6TV

If image not available locally
then will be downloaded.
`docker pull getting-started` ^MFKKXZG1

Run in detached mode ^kzwDhhFP

Creates a file system ^94ihU5Jm

Creates a Network ^RcjIwrmH

Run in interactive mode using bash
Use exit command to get out of the bash mode ^228dPctR

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000 ^p9Zw2dqs

Build docker Image from docker file  ^3Bjsl1VO

base Image ^7jo9CEM4

Working Dir ^GjqcCTJV

Copy from form current   folder from local to app dit in Container ^2fma5mSP

Exposed Port ^ogXut6V6

Runs while building ^QkORUDyn

Runs while Running the container ^prTWPeZq

docker run -it -dp 127.0.0.1:3000:3000 --name containerName getting-started bin/bash ^0UBCU88w

Systems port ^MO4Zz6S9

Systems port ^0gHoYMqn

Mapping  ^9CnutzHN

Container Name ^PocvIs7o


# Embedded files
6bed56c619e7e71e257c3ea40c270367b9222757: [[Pasted Image 20230916182415_492.png]]

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.17",
	"elements": [
		{
			"type": "image",
			"version": 253,
			"versionNonce": 2100963648,
			"isDeleted": false,
			"id": "8TijH0bstLdy02eMdhzRg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -516.3282330069123,
			"y": -203.39122596153845,
			"strokeColor": "transparent",
			"backgroundColor": "transparent",
			"width": 892.0783410138248,
			"height": 471,
			"seed": 1005095616,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "HcGGL9QMvkL7-QcLsMOeO",
					"type": "arrow"
				}
			],
			"updated": 1694874743655,
			"link": null,
			"locked": false,
			"status": "pending",
			"fileId": "6bed56c619e7e71e257c3ea40c270367b9222757",
			"scale": [
				1,
				1
			]
		},
		{
			"type": "rectangle",
			"version": 1150,
			"versionNonce": 700975808,
			"isDeleted": false,
			"id": "shSSetTE38WX30dL1JrFY",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -30.53515625,
			"y": -307.880859375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 280,
			"height": 78,
			"seed": 243874496,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "9270rDPe"
				},
				{
					"id": "S3SUJfkb_X9BHlWP8LKq7",
					"type": "arrow"
				}
			],
			"updated": 1694874743655,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 553,
			"versionNonce": 1050870080,
			"isDeleted": false,
			"id": "9270rDPe",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -3.02734375,
			"y": -287.280859375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 224.984375,
			"height": 36.8,
			"seed": 1900270272,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743655,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 2,
			"text": "Dockerd\nListens for Docker API requests",
			"rawText": "Dockerd\nListens for Docker API requests",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "shSSetTE38WX30dL1JrFY",
			"originalText": "Dockerd\nListens for Docker API requests",
			"lineHeight": 1.15,
			"baseline": 33
		},
		{
			"type": "arrow",
			"version": 468,
			"versionNonce": 579692864,
			"isDeleted": false,
			"id": "S3SUJfkb_X9BHlWP8LKq7",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -35.1875,
			"y": -255.10727267814235,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 153.3945312499999,
			"height": 98.68539767814235,
			"seed": 368662848,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694879889225,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "shSSetTE38WX30dL1JrFY",
				"gap": 4.65234375,
				"focus": 0.015803686717124156
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
					-99.73828125,
					10.076022678142351
				],
				[
					-153.3945312499999,
					98.68539767814235
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1608,
			"versionNonce": 221305152,
			"isDeleted": false,
			"id": "H2aXPuX3qCrSdRBrshXxo",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 5.5625,
			"y": 332.75390625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 163,
			"height": 47,
			"seed": 1938449088,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "VHArH6TV"
				},
				{
					"id": "HcGGL9QMvkL7-QcLsMOeO",
					"type": "arrow"
				}
			],
			"updated": 1694874743655,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 905,
			"versionNonce": 1037327040,
			"isDeleted": false,
			"id": "VHArH6TV",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 11.4609375,
			"y": 337.85390625,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 151.203125,
			"height": 36.8,
			"seed": 1102056128,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743655,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 2,
			"text": "Cloud Image Storage\n",
			"rawText": "Cloud Image Storage\n",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "H2aXPuX3qCrSdRBrshXxo",
			"originalText": "Cloud Image Storage\n",
			"lineHeight": 1.15,
			"baseline": 33
		},
		{
			"type": "arrow",
			"version": 870,
			"versionNonce": 1468940608,
			"isDeleted": false,
			"id": "HcGGL9QMvkL7-QcLsMOeO",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 171.69921875,
			"y": 353.61489376299744,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 143.7993776581738,
			"height": 70.54518222453584,
			"seed": 1075609920,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694879889226,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "H2aXPuX3qCrSdRBrshXxo",
				"gap": 3.13671875,
				"focus": -0.02588797980545651
			},
			"endBinding": {
				"elementId": "8TijH0bstLdy02eMdhzRg",
				"focus": -0.8891521510063313,
				"gap": 15.4609375
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
					126.22265624999997,
					-2.95473751299744
				],
				[
					143.7993776581738,
					-70.54518222453584
				]
			]
		},
		{
			"type": "rectangle",
			"version": 716,
			"versionNonce": 1078982976,
			"isDeleted": false,
			"id": "w79vH0Jdd2Kil5EcsjfJ4",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -660.6968258859547,
			"y": 804.7349221376819,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1423,
			"height": 50,
			"seed": 1937088832,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "0UBCU88w"
				},
				{
					"id": "3Oyo0lfPEuhPxuwGuP2yd",
					"type": "arrow"
				},
				{
					"id": "MUAB9yla6Usnd9fyeAXdC",
					"type": "arrow"
				},
				{
					"id": "qQE6ZsRsL-kjqo3ULoYuC",
					"type": "arrow"
				},
				{
					"id": "k1YXVvybJUzLa9uq50RY7",
					"type": "arrow"
				},
				{
					"id": "wavb4rAhjBs5F9KL7sThz",
					"type": "arrow"
				},
				{
					"id": "8DaGL4isBTQ5crUzD1-LH",
					"type": "arrow"
				},
				{
					"id": "pvaFKFuI2PutQrvcRFZWK",
					"type": "arrow"
				},
				{
					"id": "yu0tVZ3xJUgb1hNCPH8Bc",
					"type": "arrow"
				},
				{
					"id": "bcga8UrswoPLSpV4ZtYZL",
					"type": "arrow"
				}
			],
			"updated": 1694880115458,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1069,
			"versionNonce": 1048498496,
			"isDeleted": false,
			"id": "0UBCU88w",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -638.2593258859547,
			"y": 812.934922137682,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1378.125,
			"height": 33.6,
			"seed": 135838016,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694880115458,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 3,
			"text": "docker run -it -dp 127.0.0.1:3000:3000 --name containerName getting-started bin/bash",
			"rawText": "docker run -it -dp 127.0.0.1:3000:3000 --name containerName getting-started bin/bash",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "w79vH0Jdd2Kil5EcsjfJ4",
			"originalText": "docker run -it -dp 127.0.0.1:3000:3000 --name containerName getting-started bin/bash",
			"lineHeight": 1.2,
			"baseline": 27
		},
		{
			"type": "arrow",
			"version": 1432,
			"versionNonce": 608889152,
			"isDeleted": false,
			"id": "wavb4rAhjBs5F9KL7sThz",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 341.87112980775566,
			"y": 654.46207694815,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 138.20113781883913,
			"height": 136.89984889771893,
			"seed": 679682752,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "NBpLPqqh14U-Ma8Ht0VzT",
				"gap": 9.606224925596848,
				"focus": 0.23565847513090912
			},
			"endBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 13.372996291813138,
				"focus": 0.6771377125144303
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
					65.17048526586262,
					59.993304494535664
				],
				[
					138.20113781883913,
					136.89984889771893
				]
			]
		},
		{
			"type": "rectangle",
			"version": 467,
			"versionNonce": 1836605760,
			"isDeleted": false,
			"id": "NBpLPqqh14U-Ma8Ht0VzT",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 174.9340373151574,
			"y": 557.8558520225531,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 315,
			"height": 87,
			"seed": 1145799360,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "MFKKXZG1"
				},
				{
					"id": "wavb4rAhjBs5F9KL7sThz",
					"type": "arrow"
				}
			],
			"updated": 1694874743656,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 531,
			"versionNonce": 229200576,
			"isDeleted": false,
			"id": "MFKKXZG1",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 191.8090373151574,
			"y": 572.5558520225532,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 281.25,
			"height": 57.599999999999994,
			"seed": 2083658432,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743656,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "If image not available locally\nthen will be downloaded.\n`docker pull getting-started`",
			"rawText": "If image not available locally\nthen will be downloaded.\n`docker pull getting-started`",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "NBpLPqqh14U-Ma8Ht0VzT",
			"originalText": "If image not available locally\nthen will be downloaded.\n`docker pull getting-started`",
			"lineHeight": 1.2,
			"baseline": 53
		},
		{
			"type": "rectangle",
			"version": 818,
			"versionNonce": 98468544,
			"isDeleted": false,
			"id": "P_FfHpEgcaTCWtGZE-mUi",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -296.9174102951366,
			"y": 1079.0513304743506,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 211,
			"height": 40,
			"seed": 1985635008,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "kzwDhhFP"
				},
				{
					"id": "qQE6ZsRsL-kjqo3ULoYuC",
					"type": "arrow"
				}
			],
			"updated": 1694879744249,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 926,
			"versionNonce": 880814784,
			"isDeleted": false,
			"id": "kzwDhhFP",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -285.1674102951366,
			"y": 1089.4513304743507,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 187.5,
			"height": 19.2,
			"seed": 1786776256,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879744249,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Run in detached mode",
			"rawText": "Run in detached mode",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "P_FfHpEgcaTCWtGZE-mUi",
			"originalText": "Run in detached mode",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 1311,
			"versionNonce": 1754806592,
			"isDeleted": false,
			"id": "qQE6ZsRsL-kjqo3ULoYuC",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -324.3471048597404,
			"y": 863.3690579559683,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 82.10928496142168,
			"height": 210.0422092013888,
			"seed": 499333440,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 8.634135818286381,
				"focus": 0.6116636025075183
			},
			"endBinding": {
				"elementId": "P_FfHpEgcaTCWtGZE-mUi",
				"gap": 5.640063316993519,
				"focus": -0.44672836468786503
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
					65.37460495063328,
					53.26538883782655
				],
				[
					82.10928496142168,
					210.0422092013888
				]
			]
		},
		{
			"type": "rectangle",
			"version": 743,
			"versionNonce": 1381310784,
			"isDeleted": false,
			"id": "cK8insmVHdE5QrziIrEfv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -810.9690915144993,
			"y": 1016.183057904906,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 227,
			"height": 31,
			"seed": 486447424,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "94ihU5Jm"
				},
				{
					"id": "3Oyo0lfPEuhPxuwGuP2yd",
					"type": "arrow"
				}
			],
			"updated": 1694879677648,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 854,
			"versionNonce": 631175488,
			"isDeleted": false,
			"id": "94ihU5Jm",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -795.9065915144993,
			"y": 1022.083057904906,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 196.875,
			"height": 19.2,
			"seed": 1280930112,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879677648,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Creates a file system",
			"rawText": "Creates a file system",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "cK8insmVHdE5QrziIrEfv",
			"originalText": "Creates a file system",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 1728,
			"versionNonce": 2029619520,
			"isDeleted": false,
			"id": "3Oyo0lfPEuhPxuwGuP2yd",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -638.1203877733939,
			"y": 865.5181592631576,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 83.7338247806781,
			"height": 139.7450711527723,
			"seed": 1783126720,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 10.783237125475694,
				"focus": 0.8833615646091869
			},
			"endBinding": {
				"elementId": "cK8insmVHdE5QrziIrEfv",
				"gap": 10.919827488976125,
				"focus": 0.8000143708568893
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
					-68.01890007484735,
					65.15395858864383
				],
				[
					15.714924705830754,
					139.7450711527723
				]
			]
		},
		{
			"type": "rectangle",
			"version": 762,
			"versionNonce": 1453179200,
			"isDeleted": false,
			"id": "TfycOSfcYxWVzzVCCj7Gj",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -613.8169966921953,
			"y": 591.8868147982886,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 181,
			"height": 30,
			"seed": 717318848,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "RcjIwrmH"
				},
				{
					"id": "MUAB9yla6Usnd9fyeAXdC",
					"type": "arrow"
				}
			],
			"updated": 1694874743656,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 885,
			"versionNonce": 1007284928,
			"isDeleted": false,
			"id": "RcjIwrmH",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -603.0044966921953,
			"y": 597.2868147982886,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 159.375,
			"height": 19.2,
			"seed": 214307520,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743656,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Creates a Network",
			"rawText": "Creates a Network",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "TfycOSfcYxWVzzVCCj7Gj",
			"originalText": "Creates a Network",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 1271,
			"versionNonce": 1266049344,
			"isDeleted": false,
			"id": "MUAB9yla6Usnd9fyeAXdC",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -641.188720358882,
			"y": 800.0759041058867,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 192.1591605392157,
			"height": 163.05545268937794,
			"seed": 2026078528,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 4.659018031795199,
				"focus": -0.8903510258781597
			},
			"endBinding": {
				"elementId": "TfycOSfcYxWVzzVCCj7Gj",
				"gap": 15.13363661822018,
				"focus": -0.5482861005286045
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
					-64.42941501795383,
					-57.17307495915054
				],
				[
					127.72974552126186,
					-163.05545268937794
				]
			]
		},
		{
			"type": "rectangle",
			"version": 904,
			"versionNonce": 1941805760,
			"isDeleted": false,
			"id": "CbVEXXZDoF5lGFb7-q7z0",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 64.87636268280471,
			"y": 1008.1134921879943,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 181,
			"height": 106,
			"seed": 1612249792,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "228dPctR"
				},
				{
					"id": "yu0tVZ3xJUgb1hNCPH8Bc",
					"type": "arrow"
				},
				{
					"id": "k1YXVvybJUzLa9uq50RY7",
					"type": "arrow"
				}
			],
			"updated": 1694874743656,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1126,
			"versionNonce": 1687056704,
			"isDeleted": false,
			"id": "228dPctR",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 71.00136268280471,
			"y": 1013.1134921879943,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 168.75,
			"height": 96,
			"seed": 1353425600,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743656,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Run in interactive\nmode using bash\nUse exit command \nto get out of the \nbash mode",
			"rawText": "Run in interactive mode using bash\nUse exit command to get out of the bash mode",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "CbVEXXZDoF5lGFb7-q7z0",
			"originalText": "Run in interactive mode using bash\nUse exit command to get out of the bash mode",
			"lineHeight": 1.2,
			"baseline": 92
		},
		{
			"type": "arrow",
			"version": 649,
			"versionNonce": 1376854336,
			"isDeleted": false,
			"id": "yu0tVZ3xJUgb1hNCPH8Bc",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -307.8203270127628,
			"y": 865.70211683056,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 369.50582598028967,
			"height": 160.55334124115757,
			"seed": 2135779648,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 10.967194692878138,
				"focus": 0.794915690967399
			},
			"endBinding": {
				"elementId": "CbVEXXZDoF5lGFb7-q7z0",
				"gap": 3.1908637152778283,
				"focus": -0.2708263254578048
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
					231.67752864573077,
					62.5094464869278
				],
				[
					369.50582598028967,
					160.55334124115757
				]
			]
		},
		{
			"type": "arrow",
			"version": 804,
			"versionNonce": 868159808,
			"isDeleted": false,
			"id": "k1YXVvybJUzLa9uq50RY7",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 544.1448060423596,
			"y": 867.8759896348901,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 386.932611400402,
			"height": 136.0812717013888,
			"seed": 1846950208,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 13.141067497208155,
				"focus": -0.8990682445559717
			},
			"endBinding": {
				"elementId": "CbVEXXZDoF5lGFb7-q7z0",
				"gap": 4.156230851715463,
				"focus": -0.7154849072509174
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
					-193.92536354950607,
					80.32587188521211
				],
				[
					-386.932611400402,
					136.0812717013888
				]
			]
		},
		{
			"type": "rectangle",
			"version": 296,
			"versionNonce": 329640640,
			"isDeleted": false,
			"id": "Am3Yc6T-StpBIJFTSjfK8",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -308.4660660855777,
			"y": 1226.6626757530219,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 339,
			"height": 157,
			"seed": 827044160,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"type": "text",
					"id": "p9Zw2dqs"
				}
			],
			"updated": 1694874743656,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 250,
			"versionNonce": 1376985408,
			"isDeleted": false,
			"id": "p9Zw2dqs",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -303.4660660855777,
			"y": 1247.562675753022,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 271.875,
			"height": 115.19999999999999,
			"seed": 2124202688,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN yarn install --production\nCMD [\"node\", \"src/index.js\"]\nEXPOSE 3000",
			"rawText": "FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN yarn install --production\nCMD [\"node\", \"src/index.js\"]\nEXPOSE 3000",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "Am3Yc6T-StpBIJFTSjfK8",
			"originalText": "FROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN yarn install --production\nCMD [\"node\", \"src/index.js\"]\nEXPOSE 3000",
			"lineHeight": 1.2,
			"baseline": 111
		},
		{
			"type": "text",
			"version": 182,
			"versionNonce": 1696240320,
			"isDeleted": false,
			"id": "3Bjsl1VO",
			"fillStyle": "solid",
			"strokeWidth": 4,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -336.9992692105777,
			"y": 1162.1620898155218,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 421.875,
			"height": 24,
			"seed": 1138504384,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Build docker Image from docker file ",
			"rawText": "Build docker Image from docker file ",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Build docker Image from docker file ",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "rectangle",
			"version": 724,
			"versionNonce": 2107439424,
			"isDeleted": false,
			"id": "HLf8_uN3Bc7-JizzhT0yT",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 93.80151203942228,
			"y": 1206.4029101280219,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 30,
			"seed": 1397379392,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "7jo9CEM4"
				},
				{
					"id": "p71IejEVq4FfZnb0pBaRN",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 807,
			"versionNonce": 1908030144,
			"isDeleted": false,
			"id": "7jo9CEM4",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 112.42651203942228,
			"y": 1211.802910128022,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 93.75,
			"height": 19.2,
			"seed": 812525888,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "base Image",
			"rawText": "base Image",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "HLf8_uN3Bc7-JizzhT0yT",
			"originalText": "base Image",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 91,
			"versionNonce": 247044416,
			"isDeleted": false,
			"id": "p71IejEVq4FfZnb0pBaRN",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 84.65112141442228,
			"y": 1221.1230367340813,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 201.357421875,
			"height": 33.526943706440534,
			"seed": 1481845056,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "HLf8_uN3Bc7-JizzhT0yT",
				"gap": 9.150390625,
				"focus": 0.49059997977129083
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
					-201.357421875,
					33.526943706440534
				]
			]
		},
		{
			"type": "rectangle",
			"version": 845,
			"versionNonce": 472179392,
			"isDeleted": false,
			"id": "A11zWayyr--rBcK3-n38k",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 94.49780110192228,
			"y": 1252.3159960655219,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 30,
			"seed": 1470929216,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "GjqcCTJV"
				},
				{
					"id": "97hkX8sAEGLwE3XQWsv0X",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 948,
			"versionNonce": 1327475008,
			"isDeleted": false,
			"id": "GjqcCTJV",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 108.43530110192228,
			"y": 1257.715996065522,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103.125,
			"height": 19.2,
			"seed": 21459264,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Working Dir",
			"rawText": "Working Dir",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "A11zWayyr--rBcK3-n38k",
			"originalText": "Working Dir",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 290,
			"versionNonce": 1320448320,
			"isDeleted": false,
			"id": "97hkX8sAEGLwE3XQWsv0X",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 89.77807453942228,
			"y": 1271.7677517209509,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 273.57421875,
			"height": 5.665431844571003,
			"seed": 772700864,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "A11zWayyr--rBcK3-n38k",
				"gap": 4.7197265625,
				"focus": -0.18326606733190456
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
					-273.57421875,
					5.665431844571003
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1038,
			"versionNonce": 936935744,
			"isDeleted": false,
			"id": "-OIWGnmNOjRe7D5exrXk2",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -537.2014176480777,
			"y": 1276.0415820030219,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 126,
			"seed": 562625216,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "2fma5mSP"
				},
				{
					"id": "zD_IoCLYuh67eGnHKVD_J",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1227,
			"versionNonce": 819671744,
			"isDeleted": false,
			"id": "2fma5mSP",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -527.9514176480777,
			"y": 1281.441582003022,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 112.5,
			"height": 115.19999999999999,
			"seed": 1679532736,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Copy from \nform current\n  folder \nfrom local \nto app dit \nin Container",
			"rawText": "Copy from form current   folder from local to app dit in Container",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "-OIWGnmNOjRe7D5exrXk2",
			"originalText": "Copy from form current   folder from local to app dit in Container",
			"lineHeight": 1.2,
			"baseline": 111
		},
		{
			"type": "arrow",
			"version": 58,
			"versionNonce": 2039761216,
			"isDeleted": false,
			"id": "zD_IoCLYuh67eGnHKVD_J",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -393.4006363980777,
			"y": 1337.7261523155219,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 87.939453125,
			"height": 41.474609375,
			"seed": 1438227136,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "-OIWGnmNOjRe7D5exrXk2",
				"gap": 12.80078125,
				"focus": 0.3793027073925613
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
					87.939453125,
					-41.474609375
				]
			]
		},
		{
			"type": "rectangle",
			"version": 926,
			"versionNonce": 1013373632,
			"isDeleted": false,
			"id": "r02AydU2A2yz6Xzsg0lhD",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -497.4699723355777,
			"y": 1430.2014510287572,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 83,
			"height": 49,
			"seed": 66677440,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "ogXut6V6"
				},
				{
					"id": "vGb6z2NdnWgHwOVlrAaKQ",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1040,
			"versionNonce": 1176056128,
			"isDeleted": false,
			"id": "ogXut6V6",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -488.7824723355777,
			"y": 1435.5014510287572,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 65.625,
			"height": 38.4,
			"seed": 2130580160,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Exposed\nPort",
			"rawText": "Exposed Port",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "r02AydU2A2yz6Xzsg0lhD",
			"originalText": "Exposed Port",
			"lineHeight": 1.2,
			"baseline": 34
		},
		{
			"type": "arrow",
			"version": 216,
			"versionNonce": 1790517568,
			"isDeleted": false,
			"id": "vGb6z2NdnWgHwOVlrAaKQ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -402.0842301480777,
			"y": 1464.8637641933055,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 101.84765625,
			"height": 106.61026812778368,
			"seed": 1776234816,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "r02AydU2A2yz6Xzsg0lhD",
				"gap": 12.3857421875,
				"focus": 0.9797946945126873
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
					101.84765625,
					-106.61026812778368
				]
			]
		},
		{
			"type": "rectangle",
			"version": 892,
			"versionNonce": 643893568,
			"isDeleted": false,
			"id": "7aQexl1t1g98M27MYmxUv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 101.07413071863334,
			"y": 1333.830792150408,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 49,
			"seed": 1812427072,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "QkORUDyn"
				},
				{
					"id": "LisoDmy9AgNloH5_BYtxv",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1020,
			"versionNonce": 855583424,
			"isDeleted": false,
			"id": "QkORUDyn",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 115.01163071863334,
			"y": 1339.1307921504078,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103.125,
			"height": 38.4,
			"seed": 1955023168,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Runs while \nbuilding",
			"rawText": "Runs while building",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "7aQexl1t1g98M27MYmxUv",
			"originalText": "Runs while building",
			"lineHeight": 1.2,
			"baseline": 34
		},
		{
			"type": "arrow",
			"version": 79,
			"versionNonce": 293796160,
			"isDeleted": false,
			"id": "LisoDmy9AgNloH5_BYtxv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 99.52449836569225,
			"y": 1356.5746869843274,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 127.61948529411758,
			"height": 42.02238748097807,
			"seed": 241402560,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "7aQexl1t1g98M27MYmxUv",
				"gap": 1.549632352941103,
				"focus": -0.4411309699784461
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
					-127.61948529411758,
					-42.02238748097807
				]
			]
		},
		{
			"type": "rectangle",
			"version": 929,
			"versionNonce": 1196151488,
			"isDeleted": false,
			"id": "2mrrBeyyy-Y8FOaVCoCtQ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -61.724582516660575,
			"y": 1432.8418215621728,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 68,
			"seed": 1210936000,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "prTWPeZq"
				},
				{
					"id": "If8-7O99Tnmy4n9ZoJYi_",
					"type": "arrow"
				}
			],
			"updated": 1694874743657,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1084,
			"versionNonce": 35633472,
			"isDeleted": false,
			"id": "prTWPeZq",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -52.474582516660575,
			"y": 1438.0418215621728,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 112.5,
			"height": 57.599999999999994,
			"seed": 481432256,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874743657,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Runs while \nRunning the \ncontainer",
			"rawText": "Runs while Running the container",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "2mrrBeyyy-Y8FOaVCoCtQ",
			"originalText": "Runs while Running the container",
			"lineHeight": 1.2,
			"baseline": 53
		},
		{
			"type": "arrow",
			"version": 70,
			"versionNonce": 1901187392,
			"isDeleted": false,
			"id": "If8-7O99Tnmy4n9ZoJYi_",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -20.268700163719494,
			"y": 1428.9181083268786,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 66.97150735294107,
			"height": 83.46047794117635,
			"seed": 1588070720,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879889231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "2mrrBeyyy-Y8FOaVCoCtQ",
				"gap": 3.9237132352941444,
				"focus": 0.06883985714755704
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
					-66.97150735294107,
					-83.46047794117635
				]
			]
		},
		{
			"type": "rectangle",
			"version": 892,
			"versionNonce": 2134885056,
			"isDeleted": false,
			"id": "XQRJY65PWviAUB_LEMfrW",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -224.84039134018997,
			"y": 617.4584346136439,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 30,
			"seed": 131238592,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "MO4Zz6S9"
				},
				{
					"id": "8DaGL4isBTQ5crUzD1-LH",
					"type": "arrow"
				}
			],
			"updated": 1694874759721,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1027,
			"versionNonce": 1874422464,
			"isDeleted": false,
			"id": "MO4Zz6S9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -215.59039134018997,
			"y": 622.8584346136439,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 112.5,
			"height": 19.2,
			"seed": 1790128832,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874759721,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Systems port",
			"rawText": "Systems port",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "XQRJY65PWviAUB_LEMfrW",
			"originalText": "Systems port",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 240,
			"versionNonce": 923900224,
			"isDeleted": false,
			"id": "8DaGL4isBTQ5crUzD1-LH",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -142.06550019047032,
			"y": 655.3214860842323,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 7.7121675303065444,
			"height": 144.7804330065361,
			"seed": 598380864,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "XQRJY65PWviAUB_LEMfrW",
				"gap": 7.8630514705884025,
				"focus": -0.24218998575881096
			},
			"endBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 4.633003046913586,
				"focus": -0.25753346142519384
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
					7.7121675303065444,
					144.7804330065361
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1014,
			"versionNonce": 28676800,
			"isDeleted": false,
			"id": "nb4jwim6Yc0F2Y2oIdToQ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 5.021741012751136,
			"y": 613.9034918031865,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 30,
			"seed": 1041089216,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "0gHoYMqn"
				},
				{
					"id": "pvaFKFuI2PutQrvcRFZWK",
					"type": "arrow"
				}
			],
			"updated": 1694879701850,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1149,
			"versionNonce": 1123367616,
			"isDeleted": false,
			"id": "0gHoYMqn",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 14.271741012751136,
			"y": 619.3034918031865,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 112.5,
			"height": 19.2,
			"seed": 617048768,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879701850,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Systems port",
			"rawText": "Systems port",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "nb4jwim6Yc0F2Y2oIdToQ",
			"originalText": "Systems port",
			"lineHeight": 1.2,
			"baseline": 15
		},
		{
			"type": "arrow",
			"version": 323,
			"versionNonce": 1810647360,
			"isDeleted": false,
			"id": "pvaFKFuI2PutQrvcRFZWK",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": 87.41140849793794,
			"y": 652.0009182737748,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 137.2154112643891,
			"height": 145.10876225490222,
			"seed": 1227127104,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694880121559,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "nb4jwim6Yc0F2Y2oIdToQ",
				"gap": 8.097426470588289,
				"focus": -0.4860576107723307
			},
			"endBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 7.625241609004888,
				"focus": -0.17881997320421195
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
					-137.2154112643891,
					145.10876225490222
				]
			]
		},
		{
			"type": "line",
			"version": 81,
			"versionNonce": 1011288768,
			"isDeleted": false,
			"id": "aIY47ZN9gPRdHVYt_XcFv",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -87.15289134019008,
			"y": 631.7690963783499,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 91.15808823529426,
			"height": 0.2297794117647527,
			"seed": 1855222464,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874765254,
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
					91.15808823529426,
					-0.2297794117647527
				]
			]
		},
		{
			"type": "text",
			"version": 49,
			"versionNonce": 1289956032,
			"isDeleted": false,
			"id": "9CnutzHN",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"angle": 0,
			"x": -79.90564869313118,
			"y": 605.0411552018794,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 93.75,
			"height": 24,
			"seed": 2090031808,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694874771940,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 3,
			"text": "Mapping ",
			"rawText": "Mapping ",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Mapping ",
			"lineHeight": 1.2,
			"baseline": 20
		},
		{
			"type": "rectangle",
			"version": 1052,
			"versionNonce": 1232501440,
			"isDeleted": false,
			"id": "TpiE7G7Gok_k5O64Yi1eF",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 137.83197185532867,
			"y": 680.1436755380311,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 131,
			"height": 49,
			"seed": 1139966656,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "PocvIs7o"
				},
				{
					"id": "bcga8UrswoPLSpV4ZtYZL",
					"type": "arrow"
				}
			],
			"updated": 1694879902018,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1217,
			"versionNonce": 853547328,
			"isDeleted": false,
			"id": "PocvIs7o",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 156.45697185532867,
			"y": 685.443675538031,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 93.75,
			"height": 38.4,
			"seed": 269757120,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1694879897869,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 3,
			"text": "Container \nName",
			"rawText": "Container Name",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "TpiE7G7Gok_k5O64Yi1eF",
			"originalText": "Container Name",
			"lineHeight": 1.2,
			"baseline": 34
		},
		{
			"id": "bcga8UrswoPLSpV4ZtYZL",
			"type": "arrow",
			"x": 212.7655928513685,
			"y": 735.6211060935864,
			"width": 34.627636609175966,
			"height": 65.52951388888914,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 0,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 639289664,
			"version": 64,
			"versionNonce": 1655296320,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1694880121560,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-34.627636609175966,
					65.52951388888914
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "TpiE7G7Gok_k5O64Yi1eF",
				"gap": 6.4774305555553156,
				"focus": -0.3289597127397901
			},
			"endBinding": {
				"elementId": "w79vH0Jdd2Kil5EcsjfJ4",
				"gap": 3.5843021552063874,
				"focus": 0.1548618410329065
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#ffc9c9",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 0,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 3,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 1435.9996253668937,
		"scrollY": 451.88757446196905,
		"zoom": {
			"value": 0.45
		},
		"currentItemRoundness": "sharp",
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