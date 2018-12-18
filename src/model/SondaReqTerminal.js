/**
 * Sonda Saque e Pague
 * Modelo de API para o serviço de sonda da Saque e Pague
 *
 * OpenAPI spec version: 1.0.1
 * Contact: captura_atm@saqueepague.com.br
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SondaSaqueEPague) {
      root.SondaSaqueEPague = {};
    }
    root.SondaSaqueEPague.SondaReqTerminal = factory(root.SondaSaqueEPague.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SondaReqTerminal model module.
   * @module model/SondaReqTerminal
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>SondaReqTerminal</code>.
   * @alias module:model/SondaReqTerminal
   * @class
   * @param codEstab {Number} Código do estabelecimento da transação original
   */
  var exports = function(codEstab) {
    var _this = this;

    _this['codEstab'] = codEstab;
  };

  /**
   * Constructs a <code>SondaReqTerminal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SondaReqTerminal} obj Optional instance to populate.
   * @return {module:model/SondaReqTerminal} The populated <code>SondaReqTerminal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('codEstab')) {
        obj['codEstab'] = ApiClient.convertToType(data['codEstab'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Código do estabelecimento da transação original
   * @member {Number} codEstab
   */
  exports.prototype['codEstab'] = undefined;



  return exports;
}));


