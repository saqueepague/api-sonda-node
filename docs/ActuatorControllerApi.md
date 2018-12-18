# SondaSaqueEPague.ActuatorControllerApi

All URIs are relative to *https://localhost/saqueepague*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatusUsingGET**](ActuatorControllerApi.md#getStatusUsingGET) | **GET** /actuator/health | getStatus


<a name="getStatusUsingGET"></a>
# **getStatusUsingGET**
> {&#39;String&#39;: &#39;String&#39;} getStatusUsingGET()

getStatus

### Example
```javascript
var SondaSaqueEPague = require('sonda_saque_e_pague');

var apiInstance = new SondaSaqueEPague.ActuatorControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatusUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

