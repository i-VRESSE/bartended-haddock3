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
import type { OAuthAccountName } from './OAuthAccountName';
import {
    OAuthAccountNameFromJSON,
    OAuthAccountNameFromJSONTyped,
    OAuthAccountNameToJSON,
} from './OAuthAccountName';

/**
 * DTO for user in a list.
 * @export
 * @interface UserAsListItem
 */
export interface UserAsListItem {
    /**
     * 
     * @type {string}
     * @memberof UserAsListItem
     */
    email: string;
    /**
     * 
     * @type {Array<OAuthAccountName>}
     * @memberof UserAsListItem
     */
    oauthAccounts: Array<OAuthAccountName>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserAsListItem
     */
    roles: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserAsListItem
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserAsListItem
     */
    isActive: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserAsListItem
     */
    isSuperuser: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserAsListItem
     */
    isVerified: boolean;
}

/**
 * Check if a given object implements the UserAsListItem interface.
 */
export function instanceOfUserAsListItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "oauthAccounts" in value;
    isInstance = isInstance && "roles" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "isActive" in value;
    isInstance = isInstance && "isSuperuser" in value;
    isInstance = isInstance && "isVerified" in value;

    return isInstance;
}

export function UserAsListItemFromJSON(json: any): UserAsListItem {
    return UserAsListItemFromJSONTyped(json, false);
}

export function UserAsListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAsListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'oauthAccounts': ((json['oauth_accounts'] as Array<any>).map(OAuthAccountNameFromJSON)),
        'roles': json['roles'],
        'id': json['id'],
        'isActive': json['is_active'],
        'isSuperuser': json['is_superuser'],
        'isVerified': json['is_verified'],
    };
}

export function UserAsListItemToJSON(value?: UserAsListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'oauth_accounts': ((value.oauthAccounts as Array<any>).map(OAuthAccountNameToJSON)),
        'roles': value.roles,
        'id': value.id,
        'is_active': value.isActive,
        'is_superuser': value.isSuperuser,
        'is_verified': value.isVerified,
    };
}

