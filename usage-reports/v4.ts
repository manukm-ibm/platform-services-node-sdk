/**
 * (C) Copyright IBM Corp. 2023.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * IBM OpenAPI SDK Code Generator Version: 3.75.0-726bc7e3-20230713-221716
 */

/* eslint-disable max-classes-per-file */
/* eslint-disable no-await-in-loop */

import * as extend from 'extend';
import { IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import {
  Authenticator,
  BaseService,
  getAuthenticatorFromEnvironment,
  validateParams,
  UserOptions,
} from 'ibm-cloud-sdk-core';
import { getSdkHeaders } from '../lib/common';
import { getQueryParam } from 'ibm-cloud-sdk-core';

/**
 * Usage reports for IBM Cloud accounts
 *
 * API Version: 4.0.6
 */

class UsageReportsV4 extends BaseService {
  static DEFAULT_SERVICE_URL: string = 'https://billing.cloud.ibm.com';

  static DEFAULT_SERVICE_NAME: string = 'usage_reports';

  /*************************
   * Factory method
   ************************/

  /**
   * Constructs an instance of UsageReportsV4 with passed in options and external configuration.
   *
   * @param {UserOptions} [options] - The parameters to send to the service.
   * @param {string} [options.serviceName] - The name of the service to configure
   * @param {Authenticator} [options.authenticator] - The Authenticator object used to authenticate requests to the service
   * @param {string} [options.serviceUrl] - The URL for the service
   * @returns {UsageReportsV4}
   */

  public static newInstance(options: UserOptions): UsageReportsV4 {
    options = options || {};

    if (!options.serviceName) {
      options.serviceName = this.DEFAULT_SERVICE_NAME;
    }
    if (!options.authenticator) {
      options.authenticator = getAuthenticatorFromEnvironment(options.serviceName);
    }
    const service = new UsageReportsV4(options);
    service.configureService(options.serviceName);
    if (options.serviceUrl) {
      service.setServiceUrl(options.serviceUrl);
    }
    return service;
  }

  /**
   * Construct a UsageReportsV4 object.
   *
   * @param {Object} options - Options for the service.
   * @param {string} [options.serviceUrl] - The base url to use when contacting the service. The base url may differ between IBM Cloud regions.
   * @param {OutgoingHttpHeaders} [options.headers] - Default headers that shall be included with every request to the service.
   * @param {Authenticator} options.authenticator - The Authenticator object used to authenticate requests to the service
   * @constructor
   * @returns {UsageReportsV4}
   */
  constructor(options: UserOptions) {
    options = options || {};

    super(options);
    if (options.serviceUrl) {
      this.setServiceUrl(options.serviceUrl);
    } else {
      this.setServiceUrl(UsageReportsV4.DEFAULT_SERVICE_URL);
    }
  }

  /*************************
   * accountOperations
   ************************/

  /**
   * Get account summary.
   *
   * Returns the summary for the account for a given month. Account billing managers are authorized to access this
   * report. The usage report can also be retrieved in CSV format. For more information, see [Exporting your account
   * summary CSV report by using the
   * API](https://cloud.ibm.com/docs/billing-usage?topic=billing-usage-viewingusage&interface=api#export-csv-api-acc-summary).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {string} [params.accept] - The type of the response: application/json or text/csv. A character encoding can
   * be specified by including a `charset` parameter. For example, 'text/csv;charset=utf-8'.
   * @param {string} [params.format] - Return a usage report in the desired format. Only supports `csv` and is to be
   * passed only if CSV reports are desired.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.AccountSummary>>}
   */
  public getAccountSummary(
    params: UsageReportsV4.GetAccountSummaryParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.AccountSummary>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'billingmonth'];
    const _validParams = ['accountId', 'billingmonth', 'accept', 'format', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'format': _params.format,
    };

    const path = {
      'account_id': _params.accountId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getAccountSummary'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/summary/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': _params.accept,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get account usage.
   *
   * Usage for all the resources and plans in an account for a given month. Account billing managers are authorized to
   * access this report.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.AccountUsage>>}
   */
  public getAccountUsage(
    params: UsageReportsV4.GetAccountUsageParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.AccountUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'billingmonth'];
    const _validParams = ['accountId', 'billingmonth', 'names', 'acceptLanguage', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      '_names': _params.names,
    };

    const path = {
      'account_id': _params.accountId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getAccountUsage'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * resourceOperations
   ************************/

  /**
   * Get resource group usage.
   *
   * Usage for all the resources and plans in a resource group in a given month. Account billing managers or resource
   * group billing managers are authorized to access this report.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.resourceGroupId - Resource group for which the usage report is requested.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.ResourceGroupUsage>>}
   */
  public getResourceGroupUsage(
    params: UsageReportsV4.GetResourceGroupUsageParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.ResourceGroupUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'resourceGroupId', 'billingmonth'];
    const _validParams = ['accountId', 'resourceGroupId', 'billingmonth', 'names', 'acceptLanguage', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      '_names': _params.names,
    };

    const path = {
      'account_id': _params.accountId,
      'resource_group_id': _params.resourceGroupId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getResourceGroupUsage'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/resource_groups/{resource_group_id}/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get resource instance usage in an account.
   *
   * Query for resource instance usage in an account. Filter the results with query parameters. Account billing
   * administrator is authorized to access this report. The usage report can also be retrieved in CSV format but the
   * filters do not apply for CSV response. CSV response is always per account_id and month. For more information, see
   * [Exporting your instance CSV report by using the
   * API](https://cloud.ibm.com/docs/billing-usage?topic=billing-usage-viewingusage&interface=api#export-csv-api-instance).
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {string} [params.accept] - The type of the response: application/json or text/csv. A character encoding can
   * be specified by including a `charset` parameter. For example, 'text/csv;charset=utf-8'.
   * @param {string} [params.format] - Return a usage report in the desired format. Only supports `csv` and is to be
   * passed only if CSV reports are desired.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {boolean} [params.tags] - Include the user tags associated with every resource instance. By default it is
   * always `true`. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {number} [params.limit] - Number of usage records returned. The default value is 30. Maximum value is 200.
   * ```This parameter is applicable only for JSON response```.
   * @param {string} [params.start] - The offset from which the records must be fetched. Offset information is included
   * in the response. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.resourceGroupId] - Filter by resource group. ```This parameter is applicable only for JSON
   * response```.
   * @param {string} [params.organizationId] - Filter by organization_id. ```This parameter is applicable only for JSON
   * response```.
   * @param {string} [params.resourceInstanceId] - Filter by resource instance_id. ```This parameter is applicable only
   * for JSON response```.
   * @param {string} [params.resourceId] - Filter by resource_id. ```This parameter is applicable only for JSON
   * response```.
   * @param {string} [params.planId] - Filter by plan_id. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.region] - Region in which the resource instance is provisioned. ```This parameter is
   * applicable only for JSON response```.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>>}
   */
  public getResourceUsageAccount(
    params: UsageReportsV4.GetResourceUsageAccountParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'billingmonth'];
    const _validParams = ['accountId', 'billingmonth', 'accept', 'format', 'names', 'tags', 'acceptLanguage', 'limit', 'start', 'resourceGroupId', 'organizationId', 'resourceInstanceId', 'resourceId', 'planId', 'region', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'format': _params.format,
      '_names': _params.names,
      '_tags': _params.tags,
      '_limit': _params.limit,
      '_start': _params.start,
      'resource_group_id': _params.resourceGroupId,
      'organization_id': _params.organizationId,
      'resource_instance_id': _params.resourceInstanceId,
      'resource_id': _params.resourceId,
      'plan_id': _params.planId,
      'region': _params.region,
    };

    const path = {
      'account_id': _params.accountId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getResourceUsageAccount'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/resource_instances/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': _params.accept,
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get resource instance usage in a resource group.
   *
   * Query for resource instance usage in a resource group. Filter the results with query parameters. Account billing
   * administrator and resource group billing administrators are authorized to access this report.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.resourceGroupId - Resource group for which the usage report is requested.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {boolean} [params.tags] - Include the user tags associated with every resource instance. By default it is
   * always `true`. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {number} [params.limit] - Number of usage records returned. The default value is 30. Maximum value is 200.
   * @param {string} [params.start] - The offset from which the records must be fetched. Offset information is included
   * in the response.
   * @param {string} [params.resourceInstanceId] - Filter by resource instance id.
   * @param {string} [params.resourceId] - Filter by resource_id.
   * @param {string} [params.planId] - Filter by plan_id.
   * @param {string} [params.region] - Region in which the resource instance is provisioned.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>>}
   */
  public getResourceUsageResourceGroup(
    params: UsageReportsV4.GetResourceUsageResourceGroupParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'resourceGroupId', 'billingmonth'];
    const _validParams = ['accountId', 'resourceGroupId', 'billingmonth', 'names', 'tags', 'acceptLanguage', 'limit', 'start', 'resourceInstanceId', 'resourceId', 'planId', 'region', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      '_names': _params.names,
      '_tags': _params.tags,
      '_limit': _params.limit,
      '_start': _params.start,
      'resource_instance_id': _params.resourceInstanceId,
      'resource_id': _params.resourceId,
      'plan_id': _params.planId,
      'region': _params.region,
    };

    const path = {
      'account_id': _params.accountId,
      'resource_group_id': _params.resourceGroupId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getResourceUsageResourceGroup'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/resource_groups/{resource_group_id}/resource_instances/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Get resource instance usage in an organization.
   *
   * Query for resource instance usage in an organization. Filter the results with query parameters. Account billing
   * administrator and organization billing administrators are authorized to access this report.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.organizationId - ID of the organization.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {boolean} [params.tags] - Include the user tags associated with every resource instance. By default it is
   * always `true`. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {number} [params.limit] - Number of usage records returned. The default value is 30. Maximum value is 200.
   * @param {string} [params.start] - The offset from which the records must be fetched. Offset information is included
   * in the response.
   * @param {string} [params.resourceInstanceId] - Filter by resource instance id.
   * @param {string} [params.resourceId] - Filter by resource_id.
   * @param {string} [params.planId] - Filter by plan_id.
   * @param {string} [params.region] - Region in which the resource instance is provisioned.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>>}
   */
  public getResourceUsageOrg(
    params: UsageReportsV4.GetResourceUsageOrgParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.InstancesUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'organizationId', 'billingmonth'];
    const _validParams = ['accountId', 'organizationId', 'billingmonth', 'names', 'tags', 'acceptLanguage', 'limit', 'start', 'resourceInstanceId', 'resourceId', 'planId', 'region', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      '_names': _params.names,
      '_tags': _params.tags,
      '_limit': _params.limit,
      '_start': _params.start,
      'resource_instance_id': _params.resourceInstanceId,
      'resource_id': _params.resourceId,
      'plan_id': _params.planId,
      'region': _params.region,
    };

    const path = {
      'account_id': _params.accountId,
      'organization_id': _params.organizationId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getResourceUsageOrg'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/organizations/{organization_id}/resource_instances/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * organizationOperations
   ************************/

  /**
   * Get organization usage.
   *
   * Usage for all the resources and plans in an organization in a given month. Account billing managers or organization
   * billing managers are authorized to access this report.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the usage report is requested.
   * @param {string} params.organizationId - ID of the organization.
   * @param {string} params.billingmonth - The billing month for which the usage report is requested.  Format is
   * yyyy-mm.
   * @param {boolean} [params.names] - Include the name of every resource, plan, resource instance, organization, and
   * resource group. ```This parameter is applicable only for JSON response```.
   * @param {string} [params.acceptLanguage] - Prioritize the names returned in the order of the specified languages.
   * Language will default to English. ```This parameter is applicable only for JSON response```.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.OrgUsage>>}
   */
  public getOrgUsage(
    params: UsageReportsV4.GetOrgUsageParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.OrgUsage>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'organizationId', 'billingmonth'];
    const _validParams = ['accountId', 'organizationId', 'billingmonth', 'names', 'acceptLanguage', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      '_names': _params.names,
    };

    const path = {
      'account_id': _params.accountId,
      'organization_id': _params.organizationId,
      'billingmonth': _params.billingmonth,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getOrgUsage'
    );

    const parameters = {
      options: {
        url: '/v4/accounts/{account_id}/organizations/{organization_id}/usage/{billingmonth}',
        method: 'GET',
        qs: query,
        path,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Accept-Language': _params.acceptLanguage,
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
  /*************************
   * billingReportsSnapshot
   ************************/

  /**
   * Setup the snapshot configuration.
   *
   * Snapshots of the billing reports would be taken on a periodic interval and stored based on the configuration setup
   * by the customer for the given Account Id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which billing report snapshot is configured.
   * @param {string} params.interval - Frequency of taking the snapshot of the billing reports.
   * @param {string} params.cosBucket - The name of the COS bucket to store the snapshot of the billing reports.
   * @param {string} params.cosLocation - Region of the COS instance.
   * @param {string} [params.cosReportsFolder] - The billing reports root folder to store the billing reports snapshots.
   * Defaults to "IBMCloud-Billing-Reports".
   * @param {string[]} [params.reportTypes] - The type of billing reports to take snapshot of. Possible values are
   * [account_summary, enterprise_summary, account_resource_instance_usage].
   * @param {string} [params.versioning] - A new version of report is created or the existing report version is
   * overwritten with every update. Defaults to "new".
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>>}
   */
  public createReportsSnapshotConfig(
    params: UsageReportsV4.CreateReportsSnapshotConfigParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'interval', 'cosBucket', 'cosLocation'];
    const _validParams = ['accountId', 'interval', 'cosBucket', 'cosLocation', 'cosReportsFolder', 'reportTypes', 'versioning', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'account_id': _params.accountId,
      'interval': _params.interval,
      'cos_bucket': _params.cosBucket,
      'cos_location': _params.cosLocation,
      'cos_reports_folder': _params.cosReportsFolder,
      'report_types': _params.reportTypes,
      'versioning': _params.versioning,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'createReportsSnapshotConfig'
    );

    const parameters = {
      options: {
        url: '/v1/billing-reports-snapshot-config',
        method: 'POST',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Fetch the snapshot configuration.
   *
   * Returns the configuration of snapshot of the billing reports setup by the customer for the given Account Id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the billing report snapshot is configured.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>>}
   */
  public getReportsSnapshotConfig(
    params: UsageReportsV4.GetReportsSnapshotConfigParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>> {
    const _params = { ...params };
    const _requiredParams = ['accountId'];
    const _validParams = ['accountId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'account_id': _params.accountId,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getReportsSnapshotConfig'
    );

    const parameters = {
      options: {
        url: '/v1/billing-reports-snapshot-config',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Update the snapshot configuration.
   *
   * Updates the configuration of snapshot of the billing reports setup by the customer for the given Account Id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which billing report snapshot is configured.
   * @param {string} [params.interval] - Frequency of taking the snapshot of the billing reports.
   * @param {string} [params.cosBucket] - The name of the COS bucket to store the snapshot of the billing reports.
   * @param {string} [params.cosLocation] - Region of the COS instance.
   * @param {string} [params.cosReportsFolder] - The billing reports root folder to store the billing reports snapshots.
   * @param {string[]} [params.reportTypes] - The type of billing reports to take snapshot of. Possible values are
   * [account_summary, enterprise_summary, account_resource_instance_usage].
   * @param {string} [params.versioning] - A new version of report is created or the existing report version is
   * overwritten with every update.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>>}
   */
  public updateReportsSnapshotConfig(
    params: UsageReportsV4.UpdateReportsSnapshotConfigParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotConfig>> {
    const _params = { ...params };
    const _requiredParams = ['accountId'];
    const _validParams = ['accountId', 'interval', 'cosBucket', 'cosLocation', 'cosReportsFolder', 'reportTypes', 'versioning', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const body = {
      'account_id': _params.accountId,
      'interval': _params.interval,
      'cos_bucket': _params.cosBucket,
      'cos_location': _params.cosLocation,
      'cos_reports_folder': _params.cosReportsFolder,
      'report_types': _params.reportTypes,
      'versioning': _params.versioning,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'updateReportsSnapshotConfig'
    );

    const parameters = {
      options: {
        url: '/v1/billing-reports-snapshot-config',
        method: 'PATCH',
        body,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Delete the snapshot configuration.
   *
   * Delete the configuration of snapshot of the billing reports setup by the customer for the given Account Id.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the billing report snapshot is configured.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.EmptyObject>>}
   */
  public deleteReportsSnapshotConfig(
    params: UsageReportsV4.DeleteReportsSnapshotConfigParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.EmptyObject>> {
    const _params = { ...params };
    const _requiredParams = ['accountId'];
    const _validParams = ['accountId', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'account_id': _params.accountId,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'deleteReportsSnapshotConfig'
    );

    const parameters = {
      options: {
        url: '/v1/billing-reports-snapshot-config',
        method: 'DELETE',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }

  /**
   * Fetch the current or past snapshots.
   *
   * Returns the billing reports snapshots captured for the given Account Id in the specific time period.
   *
   * @param {Object} params - The parameters to send to the service.
   * @param {string} params.accountId - Account ID for which the billing report snapshot is requested.
   * @param {string} params.month - The month for which billing report snapshot is requested.  Format is yyyy-mm.
   * @param {number} [params.dateFrom] - Timestamp in milliseconds for which billing report snapshot is requested.
   * @param {number} [params.dateTo] - Timestamp in milliseconds for which billing report snapshot is requested.
   * @param {OutgoingHttpHeaders} [params.headers] - Custom request headers
   * @returns {Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotList>>}
   */
  public getReportsSnapshot(
    params: UsageReportsV4.GetReportsSnapshotParams
  ): Promise<UsageReportsV4.Response<UsageReportsV4.SnapshotList>> {
    const _params = { ...params };
    const _requiredParams = ['accountId', 'month'];
    const _validParams = ['accountId', 'month', 'dateFrom', 'dateTo', 'headers'];
    const _validationErrors = validateParams(_params, _requiredParams, _validParams);
    if (_validationErrors) {
      return Promise.reject(_validationErrors);
    }

    const query = {
      'account_id': _params.accountId,
      'month': _params.month,
      'date_from': _params.dateFrom,
      'date_to': _params.dateTo,
    };

    const sdkHeaders = getSdkHeaders(
      UsageReportsV4.DEFAULT_SERVICE_NAME,
      'v4',
      'getReportsSnapshot'
    );

    const parameters = {
      options: {
        url: '/v1/billing-reports-snapshots',
        method: 'GET',
        qs: query,
      },
      defaultOptions: extend(true, {}, this.baseOptions, {
        headers: extend(
          true,
          sdkHeaders,
          {
            'Accept': 'application/json',
          },
          _params.headers
        ),
      }),
    };

    return this.createRequest(parameters);
  }
}

/*************************
 * interfaces
 ************************/

namespace UsageReportsV4 {
  /** An operation response. */
  export interface Response<T = any> {
    result: T;
    status: number;
    statusText: string;
    headers: IncomingHttpHeaders;
  }

  /** The callback for a service request. */
  export type Callback<T> = (error: any, response?: Response<T>) => void;

  /** The body of a service request that returns no response data. */
  export interface EmptyObject {}

  /** A standard JS object, defined to avoid the limitations of `Object` and `object` */
  export interface JsonObject {
    [key: string]: any;
  }

  /*************************
   * request interfaces
   ************************/

  /** Parameters for the `getAccountSummary` operation. */
  export interface GetAccountSummaryParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** The type of the response: application/json or text/csv. A character encoding can be specified by including a
     *  `charset` parameter. For example, 'text/csv;charset=utf-8'.
     */
    accept?: GetAccountSummaryConstants.Accept | string;
    /** Return a usage report in the desired format. Only supports `csv` and is to be passed only if CSV reports are
     *  desired.
     */
    format?: GetAccountSummaryConstants.Format | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getAccountSummary` operation. */
  export namespace GetAccountSummaryConstants {
    /** The type of the response: application/json or text/csv. A character encoding can be specified by including a `charset` parameter. For example, 'text/csv;charset=utf-8'. */
    export enum Accept {
      APPLICATION_JSON = 'application/json',
      TEXT_CSV = 'text/csv',
    }
    /** Return a usage report in the desired format. Only supports `csv` and is to be passed only if CSV reports are desired. */
    export enum Format {
      CSV = 'csv',
    }
  }

  /** Parameters for the `getAccountUsage` operation. */
  export interface GetAccountUsageParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getResourceGroupUsage` operation. */
  export interface GetResourceGroupUsageParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** Resource group for which the usage report is requested. */
    resourceGroupId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getResourceUsageAccount` operation. */
  export interface GetResourceUsageAccountParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** The type of the response: application/json or text/csv. A character encoding can be specified by including a
     *  `charset` parameter. For example, 'text/csv;charset=utf-8'.
     */
    accept?: GetResourceUsageAccountConstants.Accept | string;
    /** Return a usage report in the desired format. Only supports `csv` and is to be passed only if CSV reports are
     *  desired.
     */
    format?: GetResourceUsageAccountConstants.Format | string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Include the user tags associated with every resource instance. By default it is always `true`. ```This
     *  parameter is applicable only for JSON response```.
     */
    tags?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    /** Number of usage records returned. The default value is 30. Maximum value is 200. ```This parameter is
     *  applicable only for JSON response```.
     */
    limit?: number;
    /** The offset from which the records must be fetched. Offset information is included in the response. ```This
     *  parameter is applicable only for JSON response```.
     */
    start?: string;
    /** Filter by resource group. ```This parameter is applicable only for JSON response```. */
    resourceGroupId?: string;
    /** Filter by organization_id. ```This parameter is applicable only for JSON response```. */
    organizationId?: string;
    /** Filter by resource instance_id. ```This parameter is applicable only for JSON response```. */
    resourceInstanceId?: string;
    /** Filter by resource_id. ```This parameter is applicable only for JSON response```. */
    resourceId?: string;
    /** Filter by plan_id. ```This parameter is applicable only for JSON response```. */
    planId?: string;
    /** Region in which the resource instance is provisioned. ```This parameter is applicable only for JSON
     *  response```.
     */
    region?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `getResourceUsageAccount` operation. */
  export namespace GetResourceUsageAccountConstants {
    /** The type of the response: application/json or text/csv. A character encoding can be specified by including a `charset` parameter. For example, 'text/csv;charset=utf-8'. */
    export enum Accept {
      APPLICATION_JSON = 'application/json',
      TEXT_CSV = 'text/csv',
    }
    /** Return a usage report in the desired format. Only supports `csv` and is to be passed only if CSV reports are desired. */
    export enum Format {
      CSV = 'csv',
    }
  }

  /** Parameters for the `getResourceUsageResourceGroup` operation. */
  export interface GetResourceUsageResourceGroupParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** Resource group for which the usage report is requested. */
    resourceGroupId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Include the user tags associated with every resource instance. By default it is always `true`. ```This
     *  parameter is applicable only for JSON response```.
     */
    tags?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    /** Number of usage records returned. The default value is 30. Maximum value is 200. */
    limit?: number;
    /** The offset from which the records must be fetched. Offset information is included in the response. */
    start?: string;
    /** Filter by resource instance id. */
    resourceInstanceId?: string;
    /** Filter by resource_id. */
    resourceId?: string;
    /** Filter by plan_id. */
    planId?: string;
    /** Region in which the resource instance is provisioned. */
    region?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getResourceUsageOrg` operation. */
  export interface GetResourceUsageOrgParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** ID of the organization. */
    organizationId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Include the user tags associated with every resource instance. By default it is always `true`. ```This
     *  parameter is applicable only for JSON response```.
     */
    tags?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    /** Number of usage records returned. The default value is 30. Maximum value is 200. */
    limit?: number;
    /** The offset from which the records must be fetched. Offset information is included in the response. */
    start?: string;
    /** Filter by resource instance id. */
    resourceInstanceId?: string;
    /** Filter by resource_id. */
    resourceId?: string;
    /** Filter by plan_id. */
    planId?: string;
    /** Region in which the resource instance is provisioned. */
    region?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getOrgUsage` operation. */
  export interface GetOrgUsageParams {
    /** Account ID for which the usage report is requested. */
    accountId: string;
    /** ID of the organization. */
    organizationId: string;
    /** The billing month for which the usage report is requested.  Format is yyyy-mm. */
    billingmonth: string;
    /** Include the name of every resource, plan, resource instance, organization, and resource group. ```This
     *  parameter is applicable only for JSON response```.
     */
    names?: boolean;
    /** Prioritize the names returned in the order of the specified languages. Language will default to English.
     *  ```This parameter is applicable only for JSON response```.
     */
    acceptLanguage?: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `createReportsSnapshotConfig` operation. */
  export interface CreateReportsSnapshotConfigParams {
    /** Account ID for which billing report snapshot is configured. */
    accountId: string;
    /** Frequency of taking the snapshot of the billing reports. */
    interval: CreateReportsSnapshotConfigConstants.Interval | string;
    /** The name of the COS bucket to store the snapshot of the billing reports. */
    cosBucket: string;
    /** Region of the COS instance. */
    cosLocation: string;
    /** The billing reports root folder to store the billing reports snapshots. Defaults to
     *  "IBMCloud-Billing-Reports".
     */
    cosReportsFolder?: string;
    /** The type of billing reports to take snapshot of. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    reportTypes?: CreateReportsSnapshotConfigConstants.ReportTypes | string[];
    /** A new version of report is created or the existing report version is overwritten with every update. Defaults
     *  to "new".
     */
    versioning?: CreateReportsSnapshotConfigConstants.Versioning | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `createReportsSnapshotConfig` operation. */
  export namespace CreateReportsSnapshotConfigConstants {
    /** Frequency of taking the snapshot of the billing reports. */
    export enum Interval {
      DAILY = 'daily',
    }
    /** ReportTypes */
    export enum ReportTypes {
      ACCOUNT_SUMMARY = 'account_summary',
      ENTERPRISE_SUMMARY = 'enterprise_summary',
      ACCOUNT_RESOURCE_INSTANCE_USAGE = 'account_resource_instance_usage',
    }
    /** A new version of report is created or the existing report version is overwritten with every update. Defaults to "new". */
    export enum Versioning {
      NEW = 'new',
      OVERWRITE = 'overwrite',
    }
  }

  /** Parameters for the `getReportsSnapshotConfig` operation. */
  export interface GetReportsSnapshotConfigParams {
    /** Account ID for which the billing report snapshot is configured. */
    accountId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `updateReportsSnapshotConfig` operation. */
  export interface UpdateReportsSnapshotConfigParams {
    /** Account ID for which billing report snapshot is configured. */
    accountId: string;
    /** Frequency of taking the snapshot of the billing reports. */
    interval?: UpdateReportsSnapshotConfigConstants.Interval | string;
    /** The name of the COS bucket to store the snapshot of the billing reports. */
    cosBucket?: string;
    /** Region of the COS instance. */
    cosLocation?: string;
    /** The billing reports root folder to store the billing reports snapshots. */
    cosReportsFolder?: string;
    /** The type of billing reports to take snapshot of. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    reportTypes?: UpdateReportsSnapshotConfigConstants.ReportTypes | string[];
    /** A new version of report is created or the existing report version is overwritten with every update. */
    versioning?: UpdateReportsSnapshotConfigConstants.Versioning | string;
    headers?: OutgoingHttpHeaders;
  }

  /** Constants for the `updateReportsSnapshotConfig` operation. */
  export namespace UpdateReportsSnapshotConfigConstants {
    /** Frequency of taking the snapshot of the billing reports. */
    export enum Interval {
      DAILY = 'daily',
    }
    /** ReportTypes */
    export enum ReportTypes {
      ACCOUNT_SUMMARY = 'account_summary',
      ENTERPRISE_SUMMARY = 'enterprise_summary',
      ACCOUNT_RESOURCE_INSTANCE_USAGE = 'account_resource_instance_usage',
    }
    /** A new version of report is created or the existing report version is overwritten with every update. */
    export enum Versioning {
      NEW = 'new',
      OVERWRITE = 'overwrite',
    }
  }

  /** Parameters for the `deleteReportsSnapshotConfig` operation. */
  export interface DeleteReportsSnapshotConfigParams {
    /** Account ID for which the billing report snapshot is configured. */
    accountId: string;
    headers?: OutgoingHttpHeaders;
  }

  /** Parameters for the `getReportsSnapshot` operation. */
  export interface GetReportsSnapshotParams {
    /** Account ID for which the billing report snapshot is requested. */
    accountId: string;
    /** The month for which billing report snapshot is requested.  Format is yyyy-mm. */
    month: string;
    /** Timestamp in milliseconds for which billing report snapshot is requested. */
    dateFrom?: number;
    /** Timestamp in milliseconds for which billing report snapshot is requested. */
    dateTo?: number;
    headers?: OutgoingHttpHeaders;
  }

  /*************************
   * model interfaces
   ************************/

  /** A summary of charges and credits for an account. */
  export interface AccountSummary {
    /** The ID of the account. */
    account_id: string;
    /** The list of account resources for the month. */
    account_resources?: Resource[];
    /** The month in which usages were incurred. Represented in yyyy-mm format. */
    month: string;
    /** Country. */
    billing_country_code: string;
    /** The currency in which the account is billed. */
    billing_currency_code: string;
    /** Charges related to cloud resources. */
    resources: ResourcesSummary;
    /** The list of offers applicable for the account for the month. */
    offers: Offer[];
    /** Support-related charges. */
    support: SupportSummary[];
    /** The list of support resources for the month. */
    support_resources?: any[];
    /** A summary of charges and credits related to a subscription. */
    subscription: SubscriptionSummary;
  }

  /** The aggregated usage and charges for all the plans in the account. */
  export interface AccountUsage {
    /** The ID of the account. */
    account_id: string;
    /** The target country pricing that should be used. */
    pricing_country: string;
    /** The currency for the cost fields in the resources, plans and metrics. */
    currency_code: string;
    /** The month. */
    month: string;
    /** All the resource used in the account. */
    resources: Resource[];
    /** The value of the account's currency in USD. */
    currency_rate?: number;
  }

  /** Information about a discount that is associated with a metric. */
  export interface Discount {
    /** The reference ID of the discount. */
    ref: string;
    /** The name of the discount indicating category. */
    name?: string;
    /** The name of the discount. */
    display_name?: string;
    /** The discount percentage. */
    discount: number;
  }

  /** The aggregated usage and charges for an instance. */
  export interface InstanceUsage {
    /** The ID of the account. */
    account_id: string;
    /** The ID of the resource instance. */
    resource_instance_id: string;
    /** The name of the resource instance. */
    resource_instance_name?: string;
    /** The ID of the resource. */
    resource_id: string;
    /** The name of the resource. */
    resource_name?: string;
    /** The ID of the resource group. */
    resource_group_id?: string;
    /** The name of the resource group. */
    resource_group_name?: string;
    /** The ID of the organization. */
    organization_id?: string;
    /** The name of the organization. */
    organization_name?: string;
    /** The ID of the space. */
    space_id?: string;
    /** The name of the space. */
    space_name?: string;
    /** The ID of the consumer. */
    consumer_id?: string;
    /** The region where instance was provisioned. */
    region?: string;
    /** The pricing region where the usage that was submitted was rated. */
    pricing_region?: string;
    /** The target country pricing that should be used. */
    pricing_country: string;
    /** The currency for the cost fields in the resources, plans and metrics. */
    currency_code: string;
    /** Is the cost charged to the account. */
    billable: boolean;
    /** The ID of the plan where the instance was provisioned and rated. */
    plan_id: string;
    /** The name of the plan where the instance was provisioned and rated. */
    plan_name?: string;
    /** The ID of the pricing plan used to rate the usage. */
    pricing_plan_id?: string;
    /** The month. */
    month: string;
    /** All the resource used in the account. */
    usage: Metric[];
    /** Pending charge from classic infrastructure. */
    pending?: boolean;
    /** The value of the account's currency in USD. */
    currency_rate?: number;
    /** The user tags associated with a resource instance. */
    tags?: any[];
  }

  /** The link to the first page of the search query. */
  export interface InstancesUsageFirst {
    /** A link to a page of query results. */
    href?: string;
  }

  /** The link to the next page of the search query. */
  export interface InstancesUsageNext {
    /** A link to a page of query results. */
    href?: string;
    /** The value of the `_start` query parameter to fetch the next page. */
    offset?: string;
  }

  /** The list of instance usage reports. */
  export interface InstancesUsage {
    /** The max number of reports in the response. */
    limit?: number;
    /** The number of reports in the response. */
    count?: number;
    /** The link to the first page of the search query. */
    first?: InstancesUsageFirst;
    /** The link to the next page of the search query. */
    next?: InstancesUsageNext;
    /** The list of instance usage reports. */
    resources?: InstanceUsage[];
  }

  /** Information about a metric. */
  export interface Metric {
    /** The ID of the metric. */
    metric: string;
    /** The name of the metric. */
    metric_name?: string;
    /** The aggregated value for the metric. */
    quantity: number;
    /** The quantity that is used for calculating charges. */
    rateable_quantity?: number;
    /** The cost incurred by the metric. */
    cost: number;
    /** Pre-discounted cost incurred by the metric. */
    rated_cost: number;
    /** The price with which the cost was calculated. */
    price?: any[];
    /** The unit that qualifies the quantity. */
    unit?: string;
    /** The name of the unit. */
    unit_name?: string;
    /** When set to `true`, the cost is for informational purpose and is not included while calculating the plan
     *  charges.
     */
    non_chargeable?: boolean;
    /** All the discounts applicable to the metric. */
    discounts: Discount[];
  }

  /** Information about an individual offer. */
  export interface Offer {
    /** The ID of the offer. */
    offer_id: string;
    /** The total credits before applying the offer. */
    credits_total: number;
    /** The template with which the offer was generated. */
    offer_template: string;
    /** The date from which the offer is valid. */
    valid_from: string;
    /** The date until the offer is valid. */
    expires_on: string;
    /** Credit information related to an offer. */
    credits: OfferCredits;
  }

  /** Credit information related to an offer. */
  export interface OfferCredits {
    /** The available credits in the offer at the beginning of the month. */
    starting_balance: number;
    /** The credits used in this month. */
    used: number;
    /** The remaining credits in the offer. */
    balance: number;
  }

  /** The aggregated usage and charges for all the plans in the org. */
  export interface OrgUsage {
    /** The ID of the account. */
    account_id: string;
    /** The ID of the organization. */
    organization_id: string;
    /** The name of the organization. */
    organization_name?: string;
    /** The target country pricing that should be used. */
    pricing_country: string;
    /** The currency for the cost fields in the resources, plans and metrics. */
    currency_code: string;
    /** The month. */
    month: string;
    /** All the resource used in the account. */
    resources: Resource[];
    /** The value of the account's currency in USD. */
    currency_rate?: number;
  }

  /** The aggregated values for the plan. */
  export interface Plan {
    /** The ID of the plan. */
    plan_id: string;
    /** The name of the plan. */
    plan_name?: string;
    /** The pricing region for the plan. */
    pricing_region?: string;
    /** The ID of the pricing plan used to rate the usage. */
    pricing_plan_id?: string;
    /** Indicates if the plan charges are billed to the customer. */
    billable: boolean;
    /** The total cost incurred by the plan. */
    cost: number;
    /** Total pre-discounted cost incurred by the plan. */
    rated_cost: number;
    /** All the metrics in the plan. */
    usage: Metric[];
    /** All the discounts applicable to the plan. */
    discounts: Discount[];
    /** Pending charge from classic infrastructure. */
    pending?: boolean;
  }

  /** The container for all the plans in the resource. */
  export interface Resource {
    /** The ID of the resource. */
    resource_id: string;
    /** The name of the resource. */
    resource_name?: string;
    /** The billable charges for the account. */
    billable_cost: number;
    /** The pre-discounted billable charges for the account. */
    billable_rated_cost: number;
    /** The non-billable charges for the account. */
    non_billable_cost: number;
    /** The pre-discounted non-billable charges for the account. */
    non_billable_rated_cost: number;
    /** All the plans in the resource. */
    plans: Plan[];
    /** All the discounts applicable to the resource. */
    discounts: Discount[];
  }

  /** The aggregated usage and charges for all the plans in the resource group. */
  export interface ResourceGroupUsage {
    /** The ID of the account. */
    account_id: string;
    /** The ID of the resource group. */
    resource_group_id: string;
    /** The name of the resource group. */
    resource_group_name?: string;
    /** The target country pricing that should be used. */
    pricing_country: string;
    /** The currency for the cost fields in the resources, plans and metrics. */
    currency_code: string;
    /** The month. */
    month: string;
    /** All the resource used in the account. */
    resources: Resource[];
    /** The value of the account's currency in USD. */
    currency_rate?: number;
  }

  /** Charges related to cloud resources. */
  export interface ResourcesSummary {
    /** The billable charges for all cloud resources used in the account. */
    billable_cost: number;
    /** Non-billable charges for all cloud resources used in the account. */
    non_billable_cost: number;
  }

  /** SnapshotConfigHistoryItem. */
  export interface SnapshotConfigHistoryItem {
    /** Timestamp in milliseconds when the snapshot configuration was created. */
    start_time?: number;
    /** Timestamp in milliseconds when the snapshot configuration ends. */
    end_time?: number;
    /** Account that updated the billing snapshot configuration. */
    updated_by?: string;
    /** Account ID for which billing report snapshot is configured. */
    account_id?: string;
    /** Status of the billing snapshot configuration. Possible values are [enabled, disabled]. */
    state?: string;
    /** Type of account. Possible values [enterprise, account]. */
    account_type?: string;
    /** Frequency of taking the snapshot of the billing reports. */
    interval?: string;
    /** A new version of report is created or the existing report version is overwritten with every update. */
    versioning?: string;
    /** The type of billing reports to take snapshot of. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    report_types?: string[];
    /** Compression format of the snapshot report. */
    compression?: string;
    /** Type of content stored in snapshot report. */
    content_type?: string;
    /** The billing reports root folder to store the billing reports snapshots. Defaults to
     *  "IBMCloud-Billing-Reports".
     */
    cos_reports_folder?: string;
    /** The name of the COS bucket to store the snapshot of the billing reports. */
    cos_bucket?: string;
    /** Region of the COS instance. */
    cos_location?: string;
    /** The endpoint of the COS instance. */
    cos_endpoint?: string;
  }

  /** List of billing reports snapshots. */
  export interface SnapshotList {
    /** Number of total snapshots. */
    count?: number;
    /** Reference to the first page of the search query. */
    first?: SnapshotListFirst;
    /** Reference to the next page of the search query if any. */
    next?: SnapshotListNext;
    snapshots?: SnapshotListSnapshotsItem[];
  }

  /** Reference to the first page of the search query. */
  export interface SnapshotListFirst {
    href?: string;
  }

  /** Reference to the next page of the search query if any. */
  export interface SnapshotListNext {
    href?: string;
  }

  /** Snapshot Schema. */
  export interface SnapshotListSnapshotsItem {
    /** Account ID for which billing report snapshot is configured. */
    account_id?: string;
    /** Month of captured snapshot. */
    month?: string;
    /** Type of account. Possible values are [enterprise, account]. */
    account_type?: string;
    /** Timestamp of snapshot processed. */
    expected_processed_at?: number;
    /** Status of the billing snapshot configuration. Possible values are [enabled, disabled]. */
    state?: string;
    /** Period of billing in snapshot. */
    billing_period?: SnapshotListSnapshotsItemBillingPeriod;
    /** Id of the snapshot captured. */
    snapshot_id?: string;
    /** Character encoding used. */
    charset?: string;
    /** Compression format of the snapshot report. */
    compression?: string;
    /** Type of content stored in snapshot report. */
    content_type?: string;
    /** The name of the COS bucket to store the snapshot of the billing reports. */
    bucket?: string;
    /** Version of the snapshot. */
    version?: string;
    /** Date and time of creation of snapshot. */
    created_on?: string;
    /** List of report types configured for the snapshot. */
    report_types?: SnapshotListSnapshotsItemReportTypesItem[];
    /** List of location of reports. */
    files?: SnapshotListSnapshotsItemFilesItem[];
    /** Timestamp at which snapshot is captured. */
    processed_at?: number;
  }

  /** Period of billing in snapshot. */
  export interface SnapshotListSnapshotsItemBillingPeriod {
    /** Date and time of start of billing in the respective snapshot. */
    start?: string;
    /** Date and time of end of billing in the respective snapshot. */
    end?: string;
  }

  /** SnapshotListSnapshotsItemFilesItem. */
  export interface SnapshotListSnapshotsItemFilesItem {
    /** The type of billing report stored. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    report_types?: string;
    /** Absolute path of the billing report in the COS instance. */
    location?: string;
    /** Account ID for which billing report is captured. */
    account_id?: string;
  }

  /** SnapshotListSnapshotsItemReportTypesItem. */
  export interface SnapshotListSnapshotsItemReportTypesItem {
    /** The type of billing report of the snapshot. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    type?: string;
    /** Version of the snapshot. */
    version?: string;
  }

  /** Billing reports snapshot configuration. */
  export interface SnapshotConfig {
    /** Account ID for which billing report snapshot is configured. */
    account_id?: string;
    /** Status of the billing snapshot configuration. Possible values are [enabled, disabled]. */
    state?: string;
    /** Type of account. Possible values are [enterprise, account]. */
    account_type?: string;
    /** Frequency of taking the snapshot of the billing reports. */
    interval?: string;
    /** A new version of report is created or the existing report version is overwritten with every update. */
    versioning?: string;
    /** The type of billing reports to take snapshot of. Possible values are [account_summary, enterprise_summary,
     *  account_resource_instance_usage].
     */
    report_types?: string[];
    /** Compression format of the snapshot report. */
    compression?: string;
    /** Type of content stored in snapshot report. */
    content_type?: string;
    /** The billing reports root folder to store the billing reports snapshots. Defaults to
     *  "IBMCloud-Billing-Reports".
     */
    cos_reports_folder?: string;
    /** The name of the COS bucket to store the snapshot of the billing reports. */
    cos_bucket?: string;
    /** Region of the COS instance. */
    cos_location?: string;
    /** The endpoint of the COS instance. */
    cos_endpoint?: string;
    /** Timestamp in milliseconds when the snapshot configuration was created. */
    created_at?: number;
    /** Timestamp in milliseconds when the snapshot configuration was last updated. */
    last_updated_at?: number;
    /** List of previous versions of the snapshot configurations. */
    history?: SnapshotConfigHistoryItem[];
  }

  /** Subscription. */
  export interface Subscription {
    /** The ID of the subscription. */
    subscription_id: string;
    /** The charge agreement number of the subsciption. */
    charge_agreement_number: string;
    /** Type of the subscription. */
    type: string;
    /** The credits available in the subscription for the month. */
    subscription_amount: number;
    /** The date from which the subscription was active. */
    start: string;
    /** The date until which the subscription is active. End time is unavailable for PayGO accounts. */
    end?: string;
    /** The total credits available in the subscription. */
    credits_total: number;
    /** The terms through which the subscription is split into. */
    terms: SubscriptionTerm[];
  }

  /** A summary of charges and credits related to a subscription. */
  export interface SubscriptionSummary {
    /** The charges after exhausting subscription credits and offers credits. */
    overage?: number;
    /** The list of subscriptions applicable for the month. */
    subscriptions?: Subscription[];
  }

  /** SubscriptionTerm. */
  export interface SubscriptionTerm {
    /** The start date of the term. */
    start: string;
    /** The end date of the term. */
    end: string;
    /** Information about credits related to a subscription. */
    credits: SubscriptionTermCredits;
  }

  /** Information about credits related to a subscription. */
  export interface SubscriptionTermCredits {
    /** The total credits available for the term. */
    total: number;
    /** The unused credits in the term at the beginning of the month. */
    starting_balance: number;
    /** The credits used in this month. */
    used: number;
    /** The remaining credits in this term. */
    balance: number;
  }

  /** SupportSummary. */
  export interface SupportSummary {
    /** The monthly support cost. */
    cost: number;
    /** The type of support. */
    type: string;
    /** Additional support cost for the month. */
    overage: number;
  }

  /*************************
   * pager classes
   ************************/

  /**
   * GetResourceUsageAccountPager can be used to simplify the use of getResourceUsageAccount().
   */
  export class GetResourceUsageAccountPager {
    protected _hasNext: boolean;
    protected pageContext: any;

    protected client: UsageReportsV4;

    protected params: UsageReportsV4.GetResourceUsageAccountParams;

    /**
     * Construct a GetResourceUsageAccountPager object.
     *
     * @param {UsageReportsV4}  client - The service client instance used to invoke getResourceUsageAccount()
     * @param {Object} params - The parameters to be passed to getResourceUsageAccount()
     * @constructor
     * @returns {GetResourceUsageAccountPager}
     */
    constructor(
      client: UsageReportsV4,
      params: UsageReportsV4.GetResourceUsageAccountParams
    ) {
      if (params && params.start) {
        throw new Error(`the params.start field should not be set`);
      }

      this._hasNext = true;
      this.pageContext = { next: undefined };
      this.client = client;
      this.params = JSON.parse(JSON.stringify(params || {}));
    }

    /**
     * Returns true if there are potentially more results to be retrieved by invoking getNext().
     * @returns {boolean}
     */
    public hasNext(): boolean {
      return this._hasNext;
    }

    /**
     * Returns the next page of results by invoking getResourceUsageAccount().
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getNext(): Promise<UsageReportsV4.InstanceUsage[]> {
      if (!this.hasNext()) {
        throw new Error('No more results available');
      }

      if (this.pageContext.next) {
        this.params.start = this.pageContext.next;
      }
      const response = await this.client.getResourceUsageAccount(this.params);
      const { result } = response;

      let next = null;
      if (result && result.next) {
        if (result.next.href) {
          next = getQueryParam(result.next.href, '_start');
        }
      }
      this.pageContext.next = next;
      if (!this.pageContext.next) {
        this._hasNext = false;
      }
      return result.resources;
    }

    /**
     * Returns all results by invoking getResourceUsageAccount() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getAll(): Promise<UsageReportsV4.InstanceUsage[]> {
      const results: InstanceUsage[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }

  /**
   * GetResourceUsageResourceGroupPager can be used to simplify the use of getResourceUsageResourceGroup().
   */
  export class GetResourceUsageResourceGroupPager {
    protected _hasNext: boolean;
    protected pageContext: any;

    protected client: UsageReportsV4;

    protected params: UsageReportsV4.GetResourceUsageResourceGroupParams;

    /**
     * Construct a GetResourceUsageResourceGroupPager object.
     *
     * @param {UsageReportsV4}  client - The service client instance used to invoke getResourceUsageResourceGroup()
     * @param {Object} params - The parameters to be passed to getResourceUsageResourceGroup()
     * @constructor
     * @returns {GetResourceUsageResourceGroupPager}
     */
    constructor(
      client: UsageReportsV4,
      params: UsageReportsV4.GetResourceUsageResourceGroupParams
    ) {
      if (params && params.start) {
        throw new Error(`the params.start field should not be set`);
      }

      this._hasNext = true;
      this.pageContext = { next: undefined };
      this.client = client;
      this.params = JSON.parse(JSON.stringify(params || {}));
    }

    /**
     * Returns true if there are potentially more results to be retrieved by invoking getNext().
     * @returns {boolean}
     */
    public hasNext(): boolean {
      return this._hasNext;
    }

    /**
     * Returns the next page of results by invoking getResourceUsageResourceGroup().
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getNext(): Promise<UsageReportsV4.InstanceUsage[]> {
      if (!this.hasNext()) {
        throw new Error('No more results available');
      }

      if (this.pageContext.next) {
        this.params.start = this.pageContext.next;
      }
      const response = await this.client.getResourceUsageResourceGroup(this.params);
      const { result } = response;

      let next = null;
      if (result && result.next) {
        if (result.next.href) {
          next = getQueryParam(result.next.href, '_start');
        }
      }
      this.pageContext.next = next;
      if (!this.pageContext.next) {
        this._hasNext = false;
      }
      return result.resources;
    }

    /**
     * Returns all results by invoking getResourceUsageResourceGroup() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getAll(): Promise<UsageReportsV4.InstanceUsage[]> {
      const results: InstanceUsage[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }

  /**
   * GetResourceUsageOrgPager can be used to simplify the use of getResourceUsageOrg().
   */
  export class GetResourceUsageOrgPager {
    protected _hasNext: boolean;
    protected pageContext: any;

    protected client: UsageReportsV4;

    protected params: UsageReportsV4.GetResourceUsageOrgParams;

    /**
     * Construct a GetResourceUsageOrgPager object.
     *
     * @param {UsageReportsV4}  client - The service client instance used to invoke getResourceUsageOrg()
     * @param {Object} params - The parameters to be passed to getResourceUsageOrg()
     * @constructor
     * @returns {GetResourceUsageOrgPager}
     */
    constructor(
      client: UsageReportsV4,
      params: UsageReportsV4.GetResourceUsageOrgParams
    ) {
      if (params && params.start) {
        throw new Error(`the params.start field should not be set`);
      }

      this._hasNext = true;
      this.pageContext = { next: undefined };
      this.client = client;
      this.params = JSON.parse(JSON.stringify(params || {}));
    }

    /**
     * Returns true if there are potentially more results to be retrieved by invoking getNext().
     * @returns {boolean}
     */
    public hasNext(): boolean {
      return this._hasNext;
    }

    /**
     * Returns the next page of results by invoking getResourceUsageOrg().
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getNext(): Promise<UsageReportsV4.InstanceUsage[]> {
      if (!this.hasNext()) {
        throw new Error('No more results available');
      }

      if (this.pageContext.next) {
        this.params.start = this.pageContext.next;
      }
      const response = await this.client.getResourceUsageOrg(this.params);
      const { result } = response;

      let next = null;
      if (result && result.next) {
        if (result.next.href) {
          next = getQueryParam(result.next.href, '_start');
        }
      }
      this.pageContext.next = next;
      if (!this.pageContext.next) {
        this._hasNext = false;
      }
      return result.resources;
    }

    /**
     * Returns all results by invoking getResourceUsageOrg() repeatedly until all pages of results have been retrieved.
     * @returns {Promise<UsageReportsV4.InstanceUsage[]>}
     */
    public async getAll(): Promise<UsageReportsV4.InstanceUsage[]> {
      const results: InstanceUsage[] = [];
      while (this.hasNext()) {
        const nextPage = await this.getNext();
        results.push(...nextPage);
      }
      return results;
    }
  }
}

export = UsageReportsV4;
