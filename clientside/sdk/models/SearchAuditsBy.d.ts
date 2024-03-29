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
import { SearchAuditsByField, SearchByOperation } from './';
/**
 *
 * @export
 * @interface SearchAuditsBy
 */
export interface SearchAuditsBy {
    /**
     *
     * @type {SearchAuditsByField}
     * @memberof SearchAuditsBy
     */
    field?: SearchAuditsByField;
    /**
     *
     * @type {SearchByOperation}
     * @memberof SearchAuditsBy
     */
    operation?: SearchByOperation;
    /**
     *
     * @type {Array<string>}
     * @memberof SearchAuditsBy
     */
    values?: Array<string>;
}
export declare function SearchAuditsByFromJSON(json: any): SearchAuditsBy;
export declare function SearchAuditsByFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchAuditsBy;
export declare function SearchAuditsByToJSON(value?: SearchAuditsBy | null): any;
