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
/**
 *
 * @export
 * @enum {string}
 */
var ProductAvailability;
(function (ProductAvailability) {
    ProductAvailability["AVAILABLE"] = "AVAILABLE";
    ProductAvailability["NOTAVAILABLE"] = "NOT_AVAILABLE";
    ProductAvailability["SHORTTERMNOTAVAILABLE"] = "SHORT_TERM_NOT_AVAILABLE";
    ProductAvailability["MEDIUMTERMNOTAVAILABLE"] = "MEDIUM_TERM_NOT_AVAILABLE";
    ProductAvailability["LONGTERMNOTAVAILABLE"] = "LONG_TERM_NOT_AVAILABLE";
})(ProductAvailability = exports.ProductAvailability || (exports.ProductAvailability = {}));
function ProductAvailabilityFromJSON(json) {
    return ProductAvailabilityFromJSONTyped(json, false);
}
exports.ProductAvailabilityFromJSON = ProductAvailabilityFromJSON;
function ProductAvailabilityFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ProductAvailabilityFromJSONTyped = ProductAvailabilityFromJSONTyped;
function ProductAvailabilityToJSON(value) {
    return value;
}
exports.ProductAvailabilityToJSON = ProductAvailabilityToJSON;
