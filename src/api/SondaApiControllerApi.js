/**
 * Sonda Saque e Pague
 * Modelo de API para o serviço de sonda da Saque e Pague.
 *
 * OpenAPI spec version: 1.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SondaReq', 'model/SondaResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SondaReq'), require('../model/SondaResp'));
  } else {
    // Browser globals (root is window)
    if (!root.SondaSaqueEPague) {
      root.SondaSaqueEPague = {};
    }
    root.SondaSaqueEPague.SondaApiControllerApi = factory(root.SondaSaqueEPague.ApiClient, root.SondaSaqueEPague.SondaReq, root.SondaSaqueEPague.SondaResp);
  }
}(this, function(ApiClient, SondaReq, SondaResp) {
  'use strict';

  /**
   * SondaApiController service.
   * @module api/SondaApiControllerApi
   * @version 1.0.2
   */

  /**
   * Constructs a new SondaApiControllerApi. 
   * @alias module:api/SondaApiControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sondaPost operation.
     * @callback module:api/SondaApiControllerApi~sondaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SondaResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna o estado de uma transação.
     * Serviço de consulta da sonda.
     * @param {module:model/SondaReq} sondaReq Requisição de sonda de transação.
     * @param {module:api/SondaApiControllerApi~sondaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SondaResp}
     */
    this.sondaPost = function(sondaReq, callback) {
      var postBody = sondaReq;

      // verify the required parameter 'sondaReq' is set
      if (sondaReq === undefined || sondaReq === null) {
        throw new Error("Missing the required parameter 'sondaReq' when calling sondaPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SondaResp;

      return this.apiClient.callApi(
        '/sonda', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
