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
    define(['Sdk'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.OrderPromotion = factory(root.OrderCloud.Sdk);
  }
}(this, function(Sdk) {
  'use strict';




  /**
   * The OrderPromotion model module.
   * @module model/OrderPromotion
   */

  /**
   * Constructs a new <code>OrderPromotion</code>.
   * @alias module:model/OrderPromotion
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>OrderPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderPromotion} obj Optional instance to populate.
   * @return {module:model/OrderPromotion} The populated <code>OrderPromotion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = Sdk.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = Sdk.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = Sdk.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RedemptionLimit')) {
        obj['RedemptionLimit'] = Sdk.convertToType(data['RedemptionLimit'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionLimitPerUser')) {
        obj['RedemptionLimitPerUser'] = Sdk.convertToType(data['RedemptionLimitPerUser'], 'Number');
      }
      if (data.hasOwnProperty('RedemptionCount')) {
        obj['RedemptionCount'] = Sdk.convertToType(data['RedemptionCount'], 'Number');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = Sdk.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('FinePrint')) {
        obj['FinePrint'] = Sdk.convertToType(data['FinePrint'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = Sdk.convertToType(data['StartDate'], 'String');
      }
      if (data.hasOwnProperty('ExpirationDate')) {
        obj['ExpirationDate'] = Sdk.convertToType(data['ExpirationDate'], 'String');
      }
      if (data.hasOwnProperty('EligibleExpression')) {
        obj['EligibleExpression'] = Sdk.convertToType(data['EligibleExpression'], 'String');
      }
      if (data.hasOwnProperty('ValueExpression')) {
        obj['ValueExpression'] = Sdk.convertToType(data['ValueExpression'], 'String');
      }
      if (data.hasOwnProperty('CanCombine')) {
        obj['CanCombine'] = Sdk.convertToType(data['CanCombine'], 'Boolean');
      }
      if (data.hasOwnProperty('AllowAllBuyers')) {
        obj['AllowAllBuyers'] = Sdk.convertToType(data['AllowAllBuyers'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = Sdk.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} RedemptionLimit
   */
  exports.prototype['RedemptionLimit'] = undefined;
  /**
   * @member {Number} RedemptionLimitPerUser
   */
  exports.prototype['RedemptionLimitPerUser'] = undefined;
  /**
   * @member {Number} RedemptionCount
   */
  exports.prototype['RedemptionCount'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {String} FinePrint
   */
  exports.prototype['FinePrint'] = undefined;
  /**
   * @member {String} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {String} ExpirationDate
   */
  exports.prototype['ExpirationDate'] = undefined;
  /**
   * @member {String} EligibleExpression
   */
  exports.prototype['EligibleExpression'] = undefined;
  /**
   * @member {String} ValueExpression
   */
  exports.prototype['ValueExpression'] = undefined;
  /**
   * @member {Boolean} CanCombine
   */
  exports.prototype['CanCombine'] = undefined;
  /**
   * @member {Boolean} AllowAllBuyers
   */
  exports.prototype['AllowAllBuyers'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


