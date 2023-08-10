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

/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */

const UsageReportsV4 = require('../../dist/usage-reports/v4');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'usage_reports_v4.env';

const describe = authHelper.prepareTests(configFile);

describe('UsageReportsV4_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let usageReportsService;

  test('Initialize service', async () => {
    usageReportsService = UsageReportsV4.newInstance();

    expect(usageReportsService).not.toBeNull();

    const config = readExternalSources(UsageReportsV4.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();
  
    usageReportsService.enableRetries();
  });

  test('getAccountSummary()', async () => {
    const params = {
      accountId: 'testString',
      billingmonth: 'testString',
      accept: 'application/json',
      format: 'csv',
    };

    const res = await usageReportsService.getAccountSummary(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getAccountUsage()', async () => {
    const params = {
      accountId: 'testString',
      billingmonth: 'testString',
      names: true,
      acceptLanguage: 'testString',
    };

    const res = await usageReportsService.getAccountUsage(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourceGroupUsage()', async () => {
    const params = {
      accountId: 'testString',
      resourceGroupId: 'testString',
      billingmonth: 'testString',
      names: true,
      acceptLanguage: 'testString',
    };

    const res = await usageReportsService.getResourceGroupUsage(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourceUsageAccount()', async () => {
    const params = {
      accountId: 'testString',
      billingmonth: 'testString',
      accept: 'application/json',
      format: 'csv',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      start: 'testString',
      resourceGroupId: 'testString',
      organizationId: 'testString',
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const res = await usageReportsService.getResourceUsageAccount(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourceUsageAccount() via GetResourceUsageAccountPager', async () => {
    const params = {
      accountId: 'testString',
      billingmonth: 'testString',
      accept: 'application/json',
      format: 'csv',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      resourceGroupId: 'testString',
      organizationId: 'testString',
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const allResults = [];

    // Test getNext().
    let pager = new UsageReportsV4.GetResourceUsageAccountPager(usageReportsService, params);
    while (pager.hasNext()) {
      const nextPage = await pager.getNext();
      expect(nextPage).not.toBeNull();
      allResults.push(...nextPage);
    }

    // Test getAll().
    pager = new UsageReportsV4.GetResourceUsageAccountPager(usageReportsService, params);
    const allItems = await pager.getAll();
    expect(allItems).not.toBeNull();
    expect(allItems).toHaveLength(allResults.length);
    console.log(`Retrieved a total of ${allResults.length} items(s) with pagination.`);
  });

  test('getResourceUsageResourceGroup()', async () => {
    const params = {
      accountId: 'testString',
      resourceGroupId: 'testString',
      billingmonth: 'testString',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      start: 'testString',
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const res = await usageReportsService.getResourceUsageResourceGroup(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourceUsageResourceGroup() via GetResourceUsageResourceGroupPager', async () => {
    const params = {
      accountId: 'testString',
      resourceGroupId: 'testString',
      billingmonth: 'testString',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const allResults = [];

    // Test getNext().
    let pager = new UsageReportsV4.GetResourceUsageResourceGroupPager(usageReportsService, params);
    while (pager.hasNext()) {
      const nextPage = await pager.getNext();
      expect(nextPage).not.toBeNull();
      allResults.push(...nextPage);
    }

    // Test getAll().
    pager = new UsageReportsV4.GetResourceUsageResourceGroupPager(usageReportsService, params);
    const allItems = await pager.getAll();
    expect(allItems).not.toBeNull();
    expect(allItems).toHaveLength(allResults.length);
    console.log(`Retrieved a total of ${allResults.length} items(s) with pagination.`);
  });

  test('getResourceUsageOrg()', async () => {
    const params = {
      accountId: 'testString',
      organizationId: 'testString',
      billingmonth: 'testString',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      start: 'testString',
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const res = await usageReportsService.getResourceUsageOrg(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getResourceUsageOrg() via GetResourceUsageOrgPager', async () => {
    const params = {
      accountId: 'testString',
      organizationId: 'testString',
      billingmonth: 'testString',
      names: true,
      tags: true,
      acceptLanguage: 'testString',
      limit: 30,
      resourceInstanceId: 'testString',
      resourceId: 'testString',
      planId: 'testString',
      region: 'testString',
    };

    const allResults = [];

    // Test getNext().
    let pager = new UsageReportsV4.GetResourceUsageOrgPager(usageReportsService, params);
    while (pager.hasNext()) {
      const nextPage = await pager.getNext();
      expect(nextPage).not.toBeNull();
      allResults.push(...nextPage);
    }

    // Test getAll().
    pager = new UsageReportsV4.GetResourceUsageOrgPager(usageReportsService, params);
    const allItems = await pager.getAll();
    expect(allItems).not.toBeNull();
    expect(allItems).toHaveLength(allResults.length);
    console.log(`Retrieved a total of ${allResults.length} items(s) with pagination.`);
  });

  test('getOrgUsage()', async () => {
    const params = {
      accountId: 'testString',
      organizationId: 'testString',
      billingmonth: 'testString',
      names: true,
      acceptLanguage: 'testString',
    };

    const res = await usageReportsService.getOrgUsage(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createReportsSnapshotConfig()', async () => {
    const params = {
      accountId: 'abc',
      interval: 'daily',
      cosBucket: 'bucket_name',
      cosLocation: 'us-south',
      cosReportsFolder: 'IBMCloud-Billing-Reports',
      reportTypes: ['account_summary', 'enterprise_summary', 'account_resource_instance_usage'],
      versioning: 'new',
    };

    const res = await usageReportsService.createReportsSnapshotConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('updateReportsSnapshotConfig()', async () => {
    const params = {
      accountId: 'abc',
      interval: 'daily',
      cosBucket: 'bucket_name',
      cosLocation: 'us-south',
      cosReportsFolder: 'IBMCloud-Billing-Reports',
      reportTypes: ['account_summary', 'enterprise_summary', 'account_resource_instance_usage'],
      versioning: 'new',
    };

    const res = await usageReportsService.updateReportsSnapshotConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getReportsSnapshotConfig()', async () => {
    const params = {
      accountId: 'abc',
    };

    const res = await usageReportsService.getReportsSnapshotConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getReportsSnapshot()', async () => {
    const params = {
      accountId: 'abc',
      month: '2023-02',
      dateFrom: 1675209600000,
      dateTo: 1675987200000,
    };

    const res = await usageReportsService.getReportsSnapshot(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteReportsSnapshotConfig()', async () => {
    const params = {
      accountId: 'abc',
    };

    const res = await usageReportsService.deleteReportsSnapshotConfig(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(204);
    expect(res.result).toBeDefined();
  });
});
