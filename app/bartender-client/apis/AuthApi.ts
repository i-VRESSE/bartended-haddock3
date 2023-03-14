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


import * as runtime from '../runtime';
import type {
  BearerResponse,
  ErrorModel,
  HTTPValidationError,
  OAuth2AuthorizeResponse,
  UserCreate,
  UserRead,
} from '../models';
import {
    BearerResponseFromJSON,
    BearerResponseToJSON,
    ErrorModelFromJSON,
    ErrorModelToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    OAuth2AuthorizeResponseFromJSON,
    OAuth2AuthorizeResponseToJSON,
    UserCreateFromJSON,
    UserCreateToJSON,
    UserReadFromJSON,
    UserReadToJSON,
} from '../models';

export interface AuthLocalLoginAuthJwtLoginPostRequest {
    username: string;
    password: string;
    grantType?: string;
    scope?: string;
    clientId?: string;
    clientSecret?: string;
}

export interface OauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGetRequest {
    scopes?: Array<string>;
}

export interface OauthAssociateGithubCallbackAuthAssociateGithubCallbackGetRequest {
    code?: string;
    codeVerifier?: string;
    state?: string;
    error?: string;
}

export interface OauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGetRequest {
    scopes?: Array<string>;
}

export interface OauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGetRequest {
    code?: string;
    codeVerifier?: string;
    state?: string;
    error?: string;
}

export interface OauthGithubRemoteAuthorizeAuthGithubAuthorizeGetRequest {
    scopes?: Array<string>;
}

export interface OauthGithubRemoteCallbackAuthGithubCallbackGetRequest {
    code?: string;
    codeVerifier?: string;
    state?: string;
    error?: string;
}

export interface OauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGetRequest {
    scopes?: Array<string>;
}

export interface OauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGetRequest {
    code?: string;
    codeVerifier?: string;
    state?: string;
    error?: string;
}

export interface RegisterRegisterAuthRegisterPostRequest {
    userCreate: UserCreate;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Auth:Local.Login
     */
    async authLocalLoginAuthJwtLoginPostRaw(requestParameters: AuthLocalLoginAuthJwtLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BearerResponse>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling authLocalLoginAuthJwtLoginPost.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling authLocalLoginAuthJwtLoginPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.grantType !== undefined) {
            formParams.append('grant_type', requestParameters.grantType as any);
        }

        if (requestParameters.username !== undefined) {
            formParams.append('username', requestParameters.username as any);
        }

        if (requestParameters.password !== undefined) {
            formParams.append('password', requestParameters.password as any);
        }

        if (requestParameters.scope !== undefined) {
            formParams.append('scope', requestParameters.scope as any);
        }

        if (requestParameters.clientId !== undefined) {
            formParams.append('client_id', requestParameters.clientId as any);
        }

        if (requestParameters.clientSecret !== undefined) {
            formParams.append('client_secret', requestParameters.clientSecret as any);
        }

        const response = await this.request({
            path: `/auth/jwt/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BearerResponseFromJSON(jsonValue));
    }

    /**
     * Auth:Local.Login
     */
    async authLocalLoginAuthJwtLoginPost(requestParameters: AuthLocalLoginAuthJwtLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BearerResponse> {
        const response = await this.authLocalLoginAuthJwtLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Auth:Local.Logout
     */
    async authLocalLogoutAuthJwtLogoutPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const response = await this.request({
            path: `/auth/jwt/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Auth:Local.Logout
     */
    async authLocalLogoutAuthJwtLogoutPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.authLocalLogoutAuthJwtLogoutPostRaw(initOverrides);
        return await response.value();
    }

    /**
     * Oauth-Associate:Github.Authorize
     */
    async oauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGetRaw(requestParameters: OauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2AuthorizeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.scopes) {
            queryParameters['scopes'] = requestParameters.scopes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const response = await this.request({
            path: `/auth/associate/github/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2AuthorizeResponseFromJSON(jsonValue));
    }

    /**
     * Oauth-Associate:Github.Authorize
     */
    async oauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGet(requestParameters: OauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2AuthorizeResponse> {
        const response = await this.oauthAssociateGithubAuthorizeAuthAssociateGithubAuthorizeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth-Associate:Github.Callback
     */
    async oauthAssociateGithubCallbackAuthAssociateGithubCallbackGetRaw(requestParameters: OauthAssociateGithubCallbackAuthAssociateGithubCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRead>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.codeVerifier !== undefined) {
            queryParameters['code_verifier'] = requestParameters.codeVerifier;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.error !== undefined) {
            queryParameters['error'] = requestParameters.error;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const response = await this.request({
            path: `/auth/associate/github/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserReadFromJSON(jsonValue));
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth-Associate:Github.Callback
     */
    async oauthAssociateGithubCallbackAuthAssociateGithubCallbackGet(requestParameters: OauthAssociateGithubCallbackAuthAssociateGithubCallbackGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRead> {
        const response = await this.oauthAssociateGithubCallbackAuthAssociateGithubCallbackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Oauth-Associate:Sandbox.Orcid.Org.Authorize
     */
    async oauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGetRaw(requestParameters: OauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2AuthorizeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.scopes) {
            queryParameters['scopes'] = requestParameters.scopes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const response = await this.request({
            path: `/auth/associate/orcidsandbox/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2AuthorizeResponseFromJSON(jsonValue));
    }

    /**
     * Oauth-Associate:Sandbox.Orcid.Org.Authorize
     */
    async oauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGet(requestParameters: OauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2AuthorizeResponse> {
        const response = await this.oauthAssociateSandboxOrcidOrgAuthorizeAuthAssociateOrcidsandboxAuthorizeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth-Associate:Sandbox.Orcid.Org.Callback
     */
    async oauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGetRaw(requestParameters: OauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRead>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.codeVerifier !== undefined) {
            queryParameters['code_verifier'] = requestParameters.codeVerifier;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.error !== undefined) {
            queryParameters['error'] = requestParameters.error;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("HTTPBearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearer", []);
        }

        const response = await this.request({
            path: `/auth/associate/orcidsandbox/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserReadFromJSON(jsonValue));
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth-Associate:Sandbox.Orcid.Org.Callback
     */
    async oauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGet(requestParameters: OauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRead> {
        const response = await this.oauthAssociateSandboxOrcidOrgCallbackAuthAssociateOrcidsandboxCallbackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Oauth:Github.Remote.Authorize
     */
    async oauthGithubRemoteAuthorizeAuthGithubAuthorizeGetRaw(requestParameters: OauthGithubRemoteAuthorizeAuthGithubAuthorizeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2AuthorizeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.scopes) {
            queryParameters['scopes'] = requestParameters.scopes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/github/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2AuthorizeResponseFromJSON(jsonValue));
    }

    /**
     * Oauth:Github.Remote.Authorize
     */
    async oauthGithubRemoteAuthorizeAuthGithubAuthorizeGet(requestParameters: OauthGithubRemoteAuthorizeAuthGithubAuthorizeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2AuthorizeResponse> {
        const response = await this.oauthGithubRemoteAuthorizeAuthGithubAuthorizeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth:Github.Remote.Callback
     */
    async oauthGithubRemoteCallbackAuthGithubCallbackGetRaw(requestParameters: OauthGithubRemoteCallbackAuthGithubCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.codeVerifier !== undefined) {
            queryParameters['code_verifier'] = requestParameters.codeVerifier;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.error !== undefined) {
            queryParameters['error'] = requestParameters.error;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/github/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth:Github.Remote.Callback
     */
    async oauthGithubRemoteCallbackAuthGithubCallbackGet(requestParameters: OauthGithubRemoteCallbackAuthGithubCallbackGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.oauthGithubRemoteCallbackAuthGithubCallbackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Oauth:Sandbox.Orcid.Org.Remote.Authorize
     */
    async oauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGetRaw(requestParameters: OauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2AuthorizeResponse>> {
        const queryParameters: any = {};

        if (requestParameters.scopes) {
            queryParameters['scopes'] = requestParameters.scopes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/orcidsandbox/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2AuthorizeResponseFromJSON(jsonValue));
    }

    /**
     * Oauth:Sandbox.Orcid.Org.Remote.Authorize
     */
    async oauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGet(requestParameters: OauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2AuthorizeResponse> {
        const response = await this.oauthSandboxOrcidOrgRemoteAuthorizeAuthOrcidsandboxAuthorizeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth:Sandbox.Orcid.Org.Remote.Callback
     */
    async oauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGetRaw(requestParameters: OauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.codeVerifier !== undefined) {
            queryParameters['code_verifier'] = requestParameters.codeVerifier;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.error !== undefined) {
            queryParameters['error'] = requestParameters.error;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/auth/orcidsandbox/callback`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * The response varies based on the authentication backend used.
     * Oauth:Sandbox.Orcid.Org.Remote.Callback
     */
    async oauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGet(requestParameters: OauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.oauthSandboxOrcidOrgRemoteCallbackAuthOrcidsandboxCallbackGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Register:Register
     */
    async registerRegisterAuthRegisterPostRaw(requestParameters: RegisterRegisterAuthRegisterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRead>> {
        if (requestParameters.userCreate === null || requestParameters.userCreate === undefined) {
            throw new runtime.RequiredError('userCreate','Required parameter requestParameters.userCreate was null or undefined when calling registerRegisterAuthRegisterPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCreateToJSON(requestParameters.userCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserReadFromJSON(jsonValue));
    }

    /**
     * Register:Register
     */
    async registerRegisterAuthRegisterPost(requestParameters: RegisterRegisterAuthRegisterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRead> {
        const response = await this.registerRegisterAuthRegisterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
