# SaqueEPagueSonda.AuthControllerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saqueepagueOauthTokenPost**](AuthControllerApi.md#saqueepagueOauthTokenPost) | **POST** /saqueepague/oauth/token | Retorna o token de autenticação do serviço.


<a name="saqueepagueOauthTokenPost"></a>
# **saqueepagueOauthTokenPost**
> AuthResp saqueepagueOauthTokenPost(grantType, password, username)

Retorna o token de autenticação do serviço.

Autentica o usuário e gera um token para a requisição de sonda.

### Example
```javascript
var SaqueEPagueSonda = require('saque_e_pague_sonda');
var defaultClient = SaqueEPagueSonda.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new SaqueEPagueSonda.AuthControllerApi();

var grantType = "grantType_example"; // String | Constante passada para este tipo de autenticação: password.

var password = "password_example"; // String | Senha disponibilizada pela SEP.

var username = "username_example"; // String | Usuário disponibilizado pela SEP.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saqueepagueOauthTokenPost(grantType, password, username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Constante passada para este tipo de autenticação: password. | 
 **password** | **String**| Senha disponibilizada pela SEP. | 
 **username** | **String**| Usuário disponibilizado pela SEP. | 

### Return type

[**AuthResp**](AuthResp.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

