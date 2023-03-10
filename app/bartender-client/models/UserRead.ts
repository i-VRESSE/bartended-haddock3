/* tslint:disable */
/* eslint-disable */
/**
 * bartender
 * Job middleware for i-VRESSE
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * DTO for read user.
 * @export
 * @interface UserRead
 */
export interface UserRead {
    /**
     * 
     * @type {any}
     * @memberof UserRead
     */
    id?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UserRead
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserRead
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserRead
     */
    isSuperuser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserRead
     */
    isVerified?: boolean;
}

/**
 * Check if a given object implements the UserRead interface.
 */
export function instanceOfUserRead(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;

    return isInstance;
}

export function UserReadFromJSON(json: any): UserRead {
    return UserReadFromJSONTyped(json, false);
}

export function UserReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': json['email'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'isSuperuser': !exists(json, 'is_superuser') ? undefined : json['is_superuser'],
        'isVerified': !exists(json, 'is_verified') ? undefined : json['is_verified'],
    };
}

export function UserReadToJSON(value?: UserRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'is_active': value.isActive,
        'is_superuser': value.isSuperuser,
        'is_verified': value.isVerified,
    };
}

