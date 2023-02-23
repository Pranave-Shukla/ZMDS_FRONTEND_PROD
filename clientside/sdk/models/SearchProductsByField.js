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
var SearchProductsByField;
(function (SearchProductsByField) {
    SearchProductsByField["ISVISIBLE"] = "IS_VISIBLE";
    SearchProductsByField["AVAILABILITY"] = "AVAILABILITY";
    SearchProductsByField["PRODUCTID"] = "PRODUCT_ID";
    SearchProductsByField["DESCRIPTION"] = "DESCRIPTION";
    SearchProductsByField["MINIMUMORDERQUANTITY"] = "MINIMUM_ORDER_QUANTITY";
    SearchProductsByField["MAXIMUMORDERQUANTITY"] = "MAXIMUM_ORDER_QUANTITY";
    SearchProductsByField["HASMEDIA"] = "HAS_MEDIA";
    SearchProductsByField["SOURCE"] = "SOURCE";
})(SearchProductsByField = exports.SearchProductsByField || (exports.SearchProductsByField = {}));
function SearchProductsByFieldFromJSON(json) {
    return SearchProductsByFieldFromJSONTyped(json, false);
}
exports.SearchProductsByFieldFromJSON = SearchProductsByFieldFromJSON;
function SearchProductsByFieldFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SearchProductsByFieldFromJSONTyped = SearchProductsByFieldFromJSONTyped;
function SearchProductsByFieldToJSON(value) {
    return value;
}
exports.SearchProductsByFieldToJSON = SearchProductsByFieldToJSON;