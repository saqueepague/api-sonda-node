# SondaSaqueEPague.SondaApiControllerApi

All URIs are relative to *https://localhost/saqueepague*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sondaPostUsingPOST**](SondaApiControllerApi.md#sondaPostUsingPOST) | **POST** /sonda | sondaPost


<a name="sondaPostUsingPOST"></a>
# **sondaPostUsingPOST**
> SondaResp sondaPostUsingPOST(sondaReq)

sondaPost

Operação de sonda

### Example
```javascript
var SondaSaqueEPague = require('sonda_saque_e_pague');

var apiInstance = new SondaSaqueEPague.SondaApiControllerApi();

var sondaReq = new SondaSaqueEPague.SondaReq(); // SondaReq | Requisição de sonda


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sondaPostUsingPOST(sondaReq, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sondaReq** | [**SondaReq**](SondaReq.md)| Requisição de sonda | 

### Return type

[**SondaResp**](SondaResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

