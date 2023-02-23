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
function CustomerDetailsResponseFromJSON(json) {
    return CustomerDetailsResponseFromJSONTyped(json, false);
}
exports.CustomerDetailsResponseFromJSON = CustomerDetailsResponseFromJSON;
function CustomerDetailsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customer': !runtime_1.exists(json, 'customer') ? undefined : _1.CustomerDetailsFromJSON(json['customer']),
    };
}
exports.CustomerDetailsResponseFromJSONTyped = CustomerDetailsResponseFromJSONTyped;
function CustomerDetailsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customer': _1.CustomerDetailsToJSON(value.customer),
    };
}
exports.CustomerDetailsResponseToJSON = CustomerDetailsResponseToJSON;