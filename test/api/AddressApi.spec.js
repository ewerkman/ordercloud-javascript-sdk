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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.AddressApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AddressApi', function() {
    describe('Create', function() {
      it('should call Create successfully', function(done) {
        //uncomment below and update the code to test Create
        //instance.Create(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Delete', function() {
      it('should call Delete successfully', function(done) {
        //uncomment below and update the code to test Delete
        //instance.Delete(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('DeleteAssignment', function() {
      it('should call DeleteAssignment successfully', function(done) {
        //uncomment below and update the code to test DeleteAssignment
        //instance.DeleteAssignment(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Get', function() {
      it('should call Get successfully', function(done) {
        //uncomment below and update the code to test Get
        //instance.Get(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('List', function() {
      it('should call List successfully', function(done) {
        //uncomment below and update the code to test List
        //instance.List(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ListAssignments', function() {
      it('should call ListAssignments successfully', function(done) {
        //uncomment below and update the code to test ListAssignments
        //instance.ListAssignments(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Patch', function() {
      it('should call Patch successfully', function(done) {
        //uncomment below and update the code to test Patch
        //instance.Patch(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('SaveAssignment', function() {
      it('should call SaveAssignment successfully', function(done) {
        //uncomment below and update the code to test SaveAssignment
        //instance.SaveAssignment(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('Update', function() {
      it('should call Update successfully', function(done) {
        //uncomment below and update the code to test Update
        //instance.Update(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
