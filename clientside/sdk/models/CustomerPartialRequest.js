"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * ZMDS API documentation
 * API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
function CustomerPartialRequestFromJSON(json) {
    return CustomerPartialRequestFromJSONTyped(json, false);
}
exports.CustomerPartialRequestFromJSON = CustomerPartialRequestFromJSON;
function CustomerPartialRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customerPartial': _1.CustomerPartialFromJSON(json['customerPartial']),
    };
}
exports.CustomerPartialRequestFromJSONTyped = CustomerPartialRequestFromJSONTyped;
function CustomerPartialRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customerPartial': _1.CustomerPartialToJSON(value.customerPartial),
    };
}
exports.CustomerPartialRequestToJSON = CustomerPartialRequestToJSON;
