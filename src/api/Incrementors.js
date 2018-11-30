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
    define(['Sdk', 'model/Incrementor', 'model/ListIncrementor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/Incrementor'), require('../model/ListIncrementor'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Incrementors = factory(root.OrderCloud.Sdk, root.OrderCloud.Incrementor, root.OrderCloud.ListIncrementor);
  }
}(this, function(Sdk, Incrementor, ListIncrementor) {
  'use strict';

  /**
   * Incrementor service.
   * @module api/Incrementors
   */

  /**
   * Constructs a new Incrementors. 
   * @alias module:api/Incrementors
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {module:model/Incrementor} incrementor 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incrementor}
     */
    this.Create = function(incrementor) {
      var postBody = incrementor;

      // verify the required parameter 'incrementor' is set
      if (incrementor == undefined || incrementor == null) {
        throw new Error("Missing the required parameter 'incrementor' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Incrementor;

      return this.sdk.callApi(
        '/incrementors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} incrementorID ID of the incrementor.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(incrementorID) {
      var postBody = null;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID == undefined || incrementorID == null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling Delete");
      }


      var pathParams = {
        'incrementorID': incrementorID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.sdk.callApi(
        '/incrementors/{incrementorID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} incrementorID ID of the incrementor.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incrementor}
     */
    this.Get = function(incrementorID) {
      var postBody = null;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID == undefined || incrementorID == null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling Get");
      }


      var pathParams = {
        'incrementorID': incrementorID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Incrementor;

      return this.sdk.callApi(
        '/incrementors/{incrementorID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListIncrementor}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListIncrementor;

      return this.sdk.callApi(
        '/incrementors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:model/Incrementor} partialIncrementor 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incrementor}
     */
    this.Patch = function(incrementorID, partialIncrementor) {
      var postBody = partialIncrementor;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID == undefined || incrementorID == null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling Patch");
      }

      // verify the required parameter 'partialIncrementor' is set
      if (partialIncrementor == undefined || partialIncrementor == null) {
        throw new Error("Missing the required parameter 'partialIncrementor' when calling Patch");
      }


      var pathParams = {
        'incrementorID': incrementorID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Incrementor;

      return this.sdk.callApi(
        '/incrementors/{incrementorID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} incrementorID ID of the incrementor.
     * @param {module:model/Incrementor} incrementor 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incrementor}
     */
    this.Save = function(incrementorID, incrementor) {
      var postBody = incrementor;

      // verify the required parameter 'incrementorID' is set
      if (incrementorID == undefined || incrementorID == null) {
        throw new Error("Missing the required parameter 'incrementorID' when calling Save");
      }

      // verify the required parameter 'incrementor' is set
      if (incrementor == undefined || incrementor == null) {
        throw new Error("Missing the required parameter 'incrementor' when calling Save");
      }


      var pathParams = {
        'incrementorID': incrementorID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Incrementor;

      return this.sdk.callApi(
        '/incrementors/{incrementorID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));