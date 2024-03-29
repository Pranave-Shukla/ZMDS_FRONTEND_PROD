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
import { SearchByOperation, SearchProductsByField } from './';
/**
 *
 * @export
 * @interface SearchProductsBy
 */
export interface SearchProductsBy {
    /**
     *
     * @type {SearchProductsByField}
     * @memberof SearchProductsBy
     */
    field?: SearchProductsByField;
    /**
     *
     * @type {SearchByOperation}
     * @memberof SearchProductsBy
     */
    operation?: SearchByOperation;
    /**
     *
     * @type {Array<string>}
     * @memberof SearchProductsBy
     */
    values?: Array<string>;
}
export declare function SearchProductsByFromJSON(json: any): SearchProductsBy;
export declare function SearchProductsByFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchProductsBy;
export declare function SearchProductsByToJSON(value?: SearchProductsBy | null): any;
