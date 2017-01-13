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
    root.OrderCloud.XpIndex = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XpIndex model module.
   * @module model/XpIndex
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XpIndex</code>.
   * @alias module:model/XpIndex
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>XpIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XpIndex} obj Optional instance to populate.
   * @return {module:model/XpIndex} The populated <code>XpIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ThingType')) {
        obj['ThingType'] = ApiClient.convertToType(data['ThingType'], 'String');
      }
      if (data.hasOwnProperty('Key')) {
        obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ThingType
   */
  exports.prototype['ThingType'] = undefined;
  /**
   * @member {String} Key
   */
  exports.prototype['Key'] = undefined;



  return exports;
}));


