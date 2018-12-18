# SondaSaqueEPague.SondaApiControllerApi

All URIs are relative to *https://localhost/saqueepague*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sondaPost**](SondaApiControllerApi.md#sondaPost) | **POST** /sonda | Retorna o estado de uma transação.


<a name="sondaPost"></a>
# **sondaPost**
> SondaResp sondaPost(sondaReq)

Retorna o estado de uma transação.

Serviço de consulta da sonda.

### Example
```javascript
var SondaSaqueEPague = require('sonda_saque_e_pague');
var defaultClient = SondaSaqueEPague.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SondaSaqueEPague.SondaApiControllerApi();

var sondaReq = new SondaSaqueEPague.SondaReq(); // SondaReq | Requisição de sonda de transação.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sondaPost(sondaReq, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sondaReq** | [**SondaReq**](SondaReq.md)| Requisição de sonda de transação. | 

### Return type

[**SondaResp**](SondaResp.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

