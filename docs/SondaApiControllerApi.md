# SaqueEPagueSonda.SondaApiControllerApi

All URIs are relative to *https://localhost/saqueepague-sonda/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sondaPost**](SondaApiControllerApi.md#sondaPost) | **POST** /sonda | Retorna o estado de uma transação.


<a name="sondaPost"></a>
# **sondaPost**
> SondaResp sondaPost(sondaReq)

Retorna o estado de uma transação.

Procura o último estado conhecido de uma transação específica dos últimos 7 dias (casos que a sonda pode tentar verificar em finais de semana ou feriado).

### Example
```javascript
var SaqueEPagueSonda = require('saque_e_pague_sonda');
var defaultClient = SaqueEPagueSonda.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SaqueEPagueSonda.SondaApiControllerApi();

var sondaReq = new SaqueEPagueSonda.SondaReq(); // SondaReq | Objeto com dados de procura da transação.


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
 **sondaReq** | [**SondaReq**](SondaReq.md)| Objeto com dados de procura da transação. | 

### Return type

[**SondaResp**](SondaResp.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

