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
    define(['ApiClient', 'model/SondaReqInfTransacao', 'model/SondaReqTerminal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SondaReqInfTransacao'), require('./SondaReqTerminal'));
  } else {
    // Browser globals (root is window)
    if (!root.SondaSaqueEPague) {
      root.SondaSaqueEPague = {};
    }
    root.SondaSaqueEPague.SondaReq = factory(root.SondaSaqueEPague.ApiClient, root.SondaSaqueEPague.SondaReqInfTransacao, root.SondaSaqueEPague.SondaReqTerminal);
  }
}(this, function(ApiClient, SondaReqInfTransacao, SondaReqTerminal) {
  'use strict';




  /**
   * The SondaReq model module.
   * @module model/SondaReq
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>SondaReq</code>.
   * @alias module:model/SondaReq
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SondaReq</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SondaReq} obj Optional instance to populate.
   * @return {module:model/SondaReq} The populated <code>SondaReq</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InfTransacao')) {
        obj['InfTransacao'] = SondaReqInfTransacao.constructFromObject(data['InfTransacao']);
      }
      if (data.hasOwnProperty('Terminal')) {
        obj['Terminal'] = SondaReqTerminal.constructFromObject(data['Terminal']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SondaReqInfTransacao} InfTransacao
   */
  exports.prototype['InfTransacao'] = undefined;
  /**
   * @member {module:model/SondaReqTerminal} Terminal
   */
  exports.prototype['Terminal'] = undefined;



  return exports;
}));


