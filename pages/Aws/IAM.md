```mermaid
A-->|text|B
```
- Manages the users login access.
- What Resources can be accessed by the logged in user.
- Initially Root Account is created which has complete access.
- By Default New IAM user cant access anything.
- [[IAM Roles]]
- [[Attribute-based access control (ABAC)]]
- [[IAM Identity Center]]
- 

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

### IAM Architecture 
![[Pasted image 20230722080843.png]]

### AWS Request 

- Actions or operations – The actions or operations that the principal wants to perform. This can be an action in the AWS Management Console, or an operation in the AWS CLI or AWS API.

- Resources – The AWS resource object upon which the actions or operations are performed.

- Principal – The person or application that used an entity (user or role) to send the request. Information about the principal includes the policies that are associated with the entity that the principal used to sign in.

- Environment data – Information about the IP address, user agent, SSL enabled status, or the time of day.

- Resource data – Data related to the resource that is being requested. This can include information such as a DynamoDB table name or a tag on an Amazon EC2 instance.

### IAM Identity Center vs IAM
- IAM users are granted long-term credentials to your AWS resources.
- IAM Identity Center have temporary credentials that are established each time the user signs-in to AWS.

### Identity based policy vs Resource based policy
- Identity-based policies are permissions policies that you attach to an IAM identity, such as an IAM user, group, or role. Resource-based policies are permissions policies that you attach to a resource such as an Amazon S3 bucket or an IAM role trust policy.

### Managed policies 
Standalone identity-based policies that you can attach to multiple users, groups, and roles in your AWS account. You can use two types of managed policies:

- AWS managed policies – Managed policies that are created and managed by AWS. If you are new to using policies, we recommend that you start by using AWS managed policies.

- Customer managed policies – Managed policies that you create and manage in your AWS account. Customer managed policies provide more precise control over your policies than AWS managed policies. You can create, edit, and validate an IAM policy in the visual editor or by creating the JSON policy document directly. For more information, see Creating IAM policies and Editing IAM policies.

- Inline policies – Policies that you create and manage and that are embedded directly into a single user, group, or role. In most cases, we don't recommend using inline policies.

Resource-based policies are inline policies, and there are no managed resource-based policies. To enable cross-account access, you can specify an entire account or IAM entities in another account as the principal in a resource-based policy.

The IAM service supports only one type of resource-based policy called a role trust policy, which is attached to an IAM role. Because an IAM role is both an identity and a resource that supports resource-based policies, you must attach both a trust policy and an identity-based policy to an IAM role. Trust policies define which principal entities (accounts, users, roles, and federated users) can assume the role. To learn how IAM roles are different from other resource-based policies, see Cross account resource access in IAM.

### IMP Points
Only service control policies (SCPs) in organizations can restrict the permissions that are granted to the root user. 

### Federating Existing users 
![[Pasted image 20230722091747.png]]