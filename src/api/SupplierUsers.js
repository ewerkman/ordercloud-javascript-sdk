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
    define(['ApiClient', 'model/AccessToken', 'model/ImpersonateTokenRequest', 'model/ListUser', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AccessToken'), require('../model/ImpersonateTokenRequest'), require('../model/ListUser'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SupplierUsers = factory(root.OrderCloud.ApiClient, root.OrderCloud.AccessToken, root.OrderCloud.ImpersonateTokenRequest, root.OrderCloud.ListUser, root.OrderCloud.User);
  }
}(this, function(ApiClient, AccessToken, ImpersonateTokenRequest, ListUser, User) {
  'use strict';

  /**
   * SupplierUser service.
   * @module api/SupplierUsers
   * @version 1.0.51
   */

  /**
   * Constructs a new SupplierUsers. 
   * @alias module:api/SupplierUsers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Create = function(supplierID, user) {
      var postBody = user;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Create");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Create");
      }


      var pathParams = {
        'supplierID': supplierID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(supplierID, userID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Delete");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Delete");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userID': userID
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

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Get = function(supplierID, userID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Get");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Get");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users/{userID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userID ID of the user.
     * @param {module:model/ImpersonateTokenRequest} tokenRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccessToken}
     */
    this.GetAccessToken = function(supplierID, userID, tokenRequest) {
      var postBody = tokenRequest;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling GetAccessToken");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling GetAccessToken");
      }

      // verify the required parameter 'tokenRequest' is set
      if (tokenRequest == undefined || tokenRequest == null) {
        throw new Error("Missing the required parameter 'tokenRequest' when calling GetAccessToken");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userID': userID
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
      var returnType = AccessToken;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users/{userID}/accesstoken', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.search Search of the supplier user.
     * @param {Array.<String>} opts.searchOn Search on of the supplier user.
     * @param {Array.<String>} opts.sortBy Sort by of the supplier user.
     * @param {Number} opts.page Page of the supplier user.
     * @param {Number} opts.pageSize Page size of the supplier user.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the supplier user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUser}
     */
    this.List = function(supplierID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling List");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'search': opts['search'],
        'searchOn': this.apiClient.buildCollectionParam(opts['searchOn'], 'csv'),
        'sortBy': this.apiClient.buildCollectionParam(opts['sortBy'], 'csv'),
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
      var returnType = ListUser;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Patch = function(supplierID, userID, user) {
      var postBody = user;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Patch");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Patch");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Patch");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users/{userID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userID ID of the user.
     * @param {module:model/User} user 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    this.Update = function(supplierID, userID, user) {
      var postBody = user;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Update");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling Update");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling Update");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userID': userID
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
      var returnType = User;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/users/{userID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
