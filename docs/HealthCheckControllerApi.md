# SaqueEPagueSonda.HealthCheckControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actuatorHealthGet**](HealthCheckControllerApi.md#actuatorHealthGet) | **GET** /actuator/health | Retorna o estado do serviço.


<a name="actuatorHealthGet"></a>
# **actuatorHealthGet**
> {&#39;String&#39;: &#39;String&#39;} actuatorHealthGet()

Retorna o estado do serviço.

Verifica a disponibilidade do serviço de sonda.

### Example
```javascript
var SaqueEPagueSonda = require('saque_e_pague_sonda');

var apiInstance = new SaqueEPagueSonda.HealthCheckControllerApi();

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

