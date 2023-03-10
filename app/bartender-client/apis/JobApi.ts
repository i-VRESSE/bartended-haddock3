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
  HTTPValidationError,
  JobModelDTO,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    JobModelDTOFromJSON,
    JobModelDTOToJSON,
} from '../models';

export interface RetrieveJobApiJobJobidGetRequest {
    jobid: number;
}

export interface RetrieveJobFilesApiJobJobidFilesPathGetRequest {
    path: string;
    jobid: number;
}

export interface RetrieveJobStderrApiJobJobidStderrGetRequest {
    jobid: number;
}

export interface RetrieveJobStdoutApiJobJobidStdoutGetRequest {
    jobid: number;
}

export interface RetrieveJobsApiJobGetRequest {
    limit?: number;
    offset?: number;
}

/**
 * 
 */
export class JobApi extends runtime.BaseAPI {

    /**
     * Retrieve specific job from the database.  Args:     jobid: identifier of job instance.     job_dao: JobDAO object.     user: Current active user.     context: Context with destinations.  Raises:     HTTPException: When job is not found or user is not allowed to see job.  Returns:     job models.
     * Retrieve Job
     */
    async retrieveJobApiJobJobidGetRaw(requestParameters: RetrieveJobApiJobJobidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JobModelDTO>> {
        if (requestParameters.jobid === null || requestParameters.jobid === undefined) {
            throw new runtime.RequiredError('jobid','Required parameter requestParameters.jobid was null or undefined when calling retrieveJobApiJobJobidGet.');
        }

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
            path: `/api/job/{jobid}`.replace(`{${"jobid"}}`, encodeURIComponent(String(requestParameters.jobid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobModelDTOFromJSON(jsonValue));
    }

    /**
     * Retrieve specific job from the database.  Args:     jobid: identifier of job instance.     job_dao: JobDAO object.     user: Current active user.     context: Context with destinations.  Raises:     HTTPException: When job is not found or user is not allowed to see job.  Returns:     job models.
     * Retrieve Job
     */
    async retrieveJobApiJobJobidGet(requestParameters: RetrieveJobApiJobJobidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JobModelDTO> {
        const response = await this.retrieveJobApiJobJobidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve files from a completed job.  Args:     path: Path to file that job has produced.     job_dir: Directory with job output files.  Raises:     HTTPException: When file is not found or is outside job directory.  Returns:     The file content.
     * Retrieve Job Files
     */
    async retrieveJobFilesApiJobJobidFilesPathGetRaw(requestParameters: RetrieveJobFilesApiJobJobidFilesPathGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.path === null || requestParameters.path === undefined) {
            throw new runtime.RequiredError('path','Required parameter requestParameters.path was null or undefined when calling retrieveJobFilesApiJobJobidFilesPathGet.');
        }

        if (requestParameters.jobid === null || requestParameters.jobid === undefined) {
            throw new runtime.RequiredError('jobid','Required parameter requestParameters.jobid was null or undefined when calling retrieveJobFilesApiJobJobidFilesPathGet.');
        }

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
            path: `/api/job/{jobid}/files/{path}`.replace(`{${"path"}}`, encodeURIComponent(String(requestParameters.path))).replace(`{${"jobid"}}`, encodeURIComponent(String(requestParameters.jobid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve files from a completed job.  Args:     path: Path to file that job has produced.     job_dir: Directory with job output files.  Raises:     HTTPException: When file is not found or is outside job directory.  Returns:     The file content.
     * Retrieve Job Files
     */
    async retrieveJobFilesApiJobJobidFilesPathGet(requestParameters: RetrieveJobFilesApiJobJobidFilesPathGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.retrieveJobFilesApiJobJobidFilesPathGetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the jobs standard error.  Args:     job_dir: Directory with job output files.  Returns:     Content of standard error.
     * Retrieve Job Stderr
     */
    async retrieveJobStderrApiJobJobidStderrGetRaw(requestParameters: RetrieveJobStderrApiJobJobidStderrGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobid === null || requestParameters.jobid === undefined) {
            throw new runtime.RequiredError('jobid','Required parameter requestParameters.jobid was null or undefined when calling retrieveJobStderrApiJobJobidStderrGet.');
        }

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
            path: `/api/job/{jobid}/stderr`.replace(`{${"jobid"}}`, encodeURIComponent(String(requestParameters.jobid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve the jobs standard error.  Args:     job_dir: Directory with job output files.  Returns:     Content of standard error.
     * Retrieve Job Stderr
     */
    async retrieveJobStderrApiJobJobidStderrGet(requestParameters: RetrieveJobStderrApiJobJobidStderrGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.retrieveJobStderrApiJobJobidStderrGetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve the jobs standard output.  Args:     job_dir: Directory with job output files.  Returns:     Content of standard output.
     * Retrieve Job Stdout
     */
    async retrieveJobStdoutApiJobJobidStdoutGetRaw(requestParameters: RetrieveJobStdoutApiJobJobidStdoutGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.jobid === null || requestParameters.jobid === undefined) {
            throw new runtime.RequiredError('jobid','Required parameter requestParameters.jobid was null or undefined when calling retrieveJobStdoutApiJobJobidStdoutGet.');
        }

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
            path: `/api/job/{jobid}/stdout`.replace(`{${"jobid"}}`, encodeURIComponent(String(requestParameters.jobid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Retrieve the jobs standard output.  Args:     job_dir: Directory with job output files.  Returns:     Content of standard output.
     * Retrieve Job Stdout
     */
    async retrieveJobStdoutApiJobJobidStdoutGet(requestParameters: RetrieveJobStdoutApiJobJobidStdoutGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.retrieveJobStdoutApiJobJobidStdoutGetRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve all jobs of user from the database.  Args:     limit: limit of jobs.     offset: offset of jobs.     job_dao: JobDAO object.     user: Current active user.     context: Context with destinations.  Returns:     stream of jobs.
     * Retrieve Jobs
     */
    async retrieveJobsApiJobGetRaw(requestParameters: RetrieveJobsApiJobGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<JobModelDTO>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
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
            path: `/api/job/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobModelDTOFromJSON));
    }

    /**
     * Retrieve all jobs of user from the database.  Args:     limit: limit of jobs.     offset: offset of jobs.     job_dao: JobDAO object.     user: Current active user.     context: Context with destinations.  Returns:     stream of jobs.
     * Retrieve Jobs
     */
    async retrieveJobsApiJobGet(requestParameters: RetrieveJobsApiJobGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<JobModelDTO>> {
        const response = await this.retrieveJobsApiJobGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
