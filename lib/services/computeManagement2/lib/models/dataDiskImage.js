/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DataDiskImage class.
 * @constructor
 * Contains the data disk images information.
 * @member {number} lun Gets the LUN number for a data disk.This value is used
 * to identify data disk image inside the VMImage therefore it must be unique
 * for each data disk.The allowed character for the value is digit.
 * 
 */
function DataDiskImage(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.lun !== undefined) {
      this.lun = parameters.lun;
    }
  }    
}


/**
 * Validate the payload against the DataDiskImage schema
 *
 * @param {JSON} payload
 *
 */
DataDiskImage.prototype.serialize = function () {
  var payload = {};
  if (this['lun'] === null || this['lun'] === undefined || typeof this['lun'] !== 'number') {
    throw new Error('this[\'lun\'] cannot be null or undefined and it must be of type number.');
  }
  payload['lun'] = this['lun'];

  return payload;
};

/**
 * Deserialize the instance to DataDiskImage schema
 *
 * @param {JSON} instance
 *
 */
DataDiskImage.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['lun'] !== undefined) {
      this['lun'] = instance['lun'];
    }
  }

  return this;
};

module.exports = DataDiskImage;