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
import { CustomerNativeStatus, RejectionReason } from './';
/**
 *
 * @export
 * @interface CustomerPartial
 */
export interface CustomerPartial {
    /**
     *
     * @type {CustomerNativeStatus}
     * @memberof CustomerPartial
     */
    nativeStatus?: CustomerNativeStatus;
    /**
     *
     * @type {RejectionReason}
     * @memberof CustomerPartial
     */
    rejectionReason?: RejectionReason;
    /**
     *
     * @type {string}
     * @memberof CustomerPartial
     */
    freeText?: string;
}
export declare function CustomerPartialFromJSON(json: any): CustomerPartial;
export declare function CustomerPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPartial;
export declare function CustomerPartialToJSON(value?: CustomerPartial | null): any;
