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
/**
 *
 * @export
 * @enum {string}
 */
export declare enum SearchByOperation {
    IN = "IN",
    LIKE = "LIKE"
}
export declare function SearchByOperationFromJSON(json: any): SearchByOperation;
export declare function SearchByOperationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchByOperation;
export declare function SearchByOperationToJSON(value?: SearchByOperation | null): any;
