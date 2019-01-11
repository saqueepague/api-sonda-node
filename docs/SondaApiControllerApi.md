# SaqueEPagueSonda.SondaApiControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saqueepagueSondaPost**](SondaApiControllerApi.md#saqueepagueSondaPost) | **POST** /saqueepague/sonda | Retorna o estado de uma transação.


<a name="saqueepagueSondaPost"></a>
# **saqueepagueSondaPost**
> SondaResp saqueepagueSondaPost(sondaReq)

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
apiInstance.saqueepagueSondaPost(sondaReq, callback);
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

