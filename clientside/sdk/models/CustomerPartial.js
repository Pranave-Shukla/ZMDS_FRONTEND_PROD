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
var runtime_1 = require("../runtime");
var _1 = require("./");
function CustomerPartialFromJSON(json) {
    return CustomerPartialFromJSONTyped(json, false);
}
exports.CustomerPartialFromJSON = CustomerPartialFromJSON;
function CustomerPartialFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nativeStatus': !runtime_1.exists(json, 'nativeStatus') ? undefined : _1.CustomerNativeStatusFromJSON(json['nativeStatus']),
        'rejectionReason': !runtime_1.exists(json, 'rejectionReason') ? undefined : _1.RejectionReasonFromJSON(json['rejectionReason']),
        'freeText': !runtime_1.exists(json, 'freeText') ? undefined : json['freeText'],
    };
}
exports.CustomerPartialFromJSONTyped = CustomerPartialFromJSONTyped;
function CustomerPartialToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nativeStatus': _1.CustomerNativeStatusToJSON(value.nativeStatus),
        'rejectionReason': _1.RejectionReasonToJSON(value.rejectionReason),
        'freeText': value.freeText,
    };
}
exports.CustomerPartialToJSON = CustomerPartialToJSON;
