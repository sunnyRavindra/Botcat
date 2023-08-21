- Trust policy – Defines which principals can assume the role, and under which conditions. A trust policy is a specific type of resource-based policy for IAM roles. A role can have only one trust policy.

- Identity-based policies (inline and managed) – These policies define the permissions that the user of the role is able to perform (or is denied from performing), and on which resources.

![[Pasted image 20230722063934.png]]

### Attribute-based access control (ABAC)
it is an authorization strategy that defines permissions based on attributes. In AWS, these attributes are called tags. You can attach tags to IAM resources, including IAM entities (users or roles) and to AWS resources. You can create a single ABAC policy or small set of policies for your IAM principals. These ABAC policies can be designed to allow operations when the principal's tag matches the resource tag. ABAC is helpful in environments that are growing rapidly and helps with situations where policy management becomes cumbersome.