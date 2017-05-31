/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.BuyerCreditCard = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BuyerCreditCard model module.
   * @module model/BuyerCreditCard
   * @version 1.0.51
   */

  /**
   * Constructs a new <code>BuyerCreditCard</code>.
   * @alias module:model/BuyerCreditCard
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>BuyerCreditCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BuyerCreditCard} obj Optional instance to populate.
   * @return {module:model/BuyerCreditCard} The populated <code>BuyerCreditCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Editable')) {
        obj['Editable'] = ApiClient.convertToType(data['Editable'], 'Boolean');
      }
      if (data.hasOwnProperty('Token')) {
        obj['Token'] = ApiClient.convertToType(data['Token'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CardType')) {
        obj['CardType'] = ApiClient.convertToType(data['CardType'], 'String');
      }
      if (data.hasOwnProperty('PartialAccountNumber')) {
        obj['PartialAccountNumber'] = ApiClient.convertToType(data['PartialAccountNumber'], 'String');
      }
      if (data.hasOwnProperty('CardholderName')) {
        obj['CardholderName'] = ApiClient.convertToType(data['CardholderName'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = ApiClient.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {Boolean} Editable
   */
  exports.prototype['Editable'] = undefined;
  /**
   * @member {String} Token
   */
  exports.prototype['Token'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CardType
   */
  exports.prototype['CardType'] = undefined;
  /**
   * @member {String} PartialAccountNumber
   */
  exports.prototype['PartialAccountNumber'] = undefined;
  /**
   * @member {String} CardholderName
   */
  exports.prototype['CardholderName'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


