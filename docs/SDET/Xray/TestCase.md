---
title: Test Case
---
### TestCase 
![XrayTypes.png](./static/TestCase1.png)

![XrayTypes.png](./static/TestCase2.png)

![XrayTypes.png](./static/TestCase3.png)

![XrayTypes.png](./static/TestCase.png)

### Test Types
- **Cucumber**: of the Gherkin Kind;
- **Generic**: of the Unstructured Kind;
- **Manual**: of the Steps Kind.

### Preconditions 
- A Precondition is like defining the step "0" for your tests.

### Precondition Types
    - Manual Type
    - Generic Type
    - Cucumber Type

### Cucumber 
![Precondition1.png](./static/Precondition1.png)

### Manual and Generic
![Precondition2.png](./static/Precondition2.png)

### Import Steps

- Test
- CSV
- JSON
- Clipboard

### Export Steps

- To CSV
### Cucumber Tests
![CucumberPrecondition.png](./static/CucumberPrecondition.png)

### Export to Cucumber 

1. Feature file can be exported from xray itself. 

![CucumberPrecondition1.png](./static/CucumberPrecondition1.png)
**Export to Cucumber**

### Parameterized Test
![ManualParams.png](./static/ManualParams.png)

### Datasets

The parameters, along with their values, are defined within a **dataset**. A dataset is a collection of data represented with a tabular view where every column of the table represents a particular variable (or **parameter**), and each row corresponds to a given record (or **iteration**) of the dataset.

The number of rows in the dataset determines the number of iterations to execute. If the dataset contains a single row, there will be a single execution parameterized with the values defined on the dataset row.

Datasets can be defined in different [entities and scopes](https://docs.getxray.app/display/XRAYCLOUD/Parameterized+Tests#ParameterizedTests-Datasetscopes). A dataset can be defined, edited, or simply viewed using the "**Dataset**" button located in each Xray [entity or scope](https://docs.getxray.app/display/XRAYCLOUD/Parameterized+Tests#ParameterizedTests-Datasetscopes).
  
![DataDriven.png](./static/DataDriven.png)

### Test Case Versioning 
![TestCaseVersion.png](./static/TestCaseVersion.png)