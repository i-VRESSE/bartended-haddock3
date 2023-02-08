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
 * Command to run application.
 * 
 * `$config` in command string will be replaced with value of
 * ApplicatonConfiguration.config.
 * 
 * The config value must be a path relative to the job directory.
 * 
 * .. code-block:: yaml
 * 
 *     command: wc $config
 *     config: README.md
 * @export
 * @interface ApplicatonConfiguration
 */
export interface ApplicatonConfiguration {
    /**
     * 
     * @type {string}
     * @memberof ApplicatonConfiguration
     */
    command: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicatonConfiguration
     */
    config: string;
}

/**
 * Check if a given object implements the ApplicatonConfiguration interface.
 */
export function instanceOfApplicatonConfiguration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "command" in value;
    isInstance = isInstance && "config" in value;

    return isInstance;
}

export function ApplicatonConfigurationFromJSON(json: any): ApplicatonConfiguration {
    return ApplicatonConfigurationFromJSONTyped(json, false);
}

export function ApplicatonConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicatonConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'command': json['command'],
        'config': json['config'],
    };
}

export function ApplicatonConfigurationToJSON(value?: ApplicatonConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'command': value.command,
        'config': value.config,
    };
}
