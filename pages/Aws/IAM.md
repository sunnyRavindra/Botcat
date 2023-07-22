- Manages the users login access.
- What Resources can be accessed by the logged in user.
- Initially Root Account is created which has complete access.
- By Default New IAM user cant access anything.
- [[IAM Roles]]

### Usage 
- You can grant other people permission to administer and use resources in your AWS account without having to share your password or access key.
- You can grant different permissions to different people for different resources. 
- You can use IAM features to securely provide credentials for applications that run on EC2 instances. 
- You can add two-factor authentication to your account and to individual users for extra security. 
-  You can allow users who already have passwords elsewhere—for example, in your corporate network or with an internet identity provider—to get temporary access to your AWS account.
- If you use [AWS CloudTrail](https://aws.amazon.com/cloudtrail/) , you receive log records that include information about those who made requests for resources in your account. That information is based on IAM identities.
- IAM supports the processing, storage, and transmission of credit card data by a merchant or service provider, and has been validated as being compliant with Payment Card Industry (PCI) Data Security Standard (DSS). For more information about PCI DSS, including how to request a copy of the AWS PCI Compliance Package, see [PCI DSS Level 1](https://aws.amazon.com/compliance/pci-dss-level-1-faqs/)
- Changes to IAM may get replicated in some time, hence eventual consistancy. 
- (IAM) and AWS Security Token Service (AWS STS) are features of your AWS account offered at no additional charge.

### Accessing IAM
- AWS Management Console
- AWS Command Line Tools
- (AWS CLI) and the AWS Tools for Windows PowerShell
- AWS SDKs
- IAM Query API

![[Screenshot 2023-07-22 at 03-49-01 AWS Skill Builder.png]]
![[Screenshot 2023-07-22 at 03-59-57 AWS Skill Builder.png]]
![[Pasted image 20230722042455.png]]
![[Pasted image 20230722042946.png]]





