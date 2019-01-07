# SaqueEPagueSonda.ActuatorControllerApi

All URIs are relative to *https://localhost/saqueepague-sonda/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actuatorHealthGet**](ActuatorControllerApi.md#actuatorHealthGet) | **GET** /actuator/health | Retorna o estado do serviço.


<a name="actuatorHealthGet"></a>
# **actuatorHealthGet**
> {&#39;String&#39;: &#39;String&#39;} actuatorHealthGet()

Retorna o estado do serviço.

Verifica a disponibilidade do serviço de sonda.

### Example
```javascript
var SaqueEPagueSonda = require('saque_e_pague_sonda');
var defaultClient = SaqueEPagueSonda.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SaqueEPagueSonda.ActuatorControllerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actuatorHealthGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**{&#39;String&#39;: &#39;String&#39;}**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

