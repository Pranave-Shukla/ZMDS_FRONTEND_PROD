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
import { BooleanValue } from './';
/**
 *
 * @export
 * @interface LocalizedBooleanValue
 */
export interface LocalizedBooleanValue {
    /**
     *
     * @type {BooleanValue}
     * @memberof LocalizedBooleanValue
     */
    value?: BooleanValue;
    /**
     *
     * @type {string}
     * @memberof LocalizedBooleanValue
     */
    localizedValue?: string;
}
export declare function LocalizedBooleanValueFromJSON(json: any): LocalizedBooleanValue;
export declare function LocalizedBooleanValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalizedBooleanValue;
export declare function LocalizedBooleanValueToJSON(value?: LocalizedBooleanValue | null): any;