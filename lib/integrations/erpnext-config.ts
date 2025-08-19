/**
 * ERPNext Configuration for Integrated Mono Repo
 */

export const erpnextConfig = {
  // Database configuration
  database: {
    type: 'postgresql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    name: process.env.DB_NAME || 'erpnext_db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || ''
  },
  
  // API configuration
  api: {
    baseUrl: process.env.ERPNEXT_URL || 'http://localhost:8000',
    version: 'v1',
    timeout: 30000
  },
  
  // Module configurations
  modules: {
    accounts: {
      enabled: true,
      defaultCurrency: 'USD',
      fiscalYearStart: '04-01'
    },
    stock: {
      enabled: true,
      defaultWarehouse: 'Main - Company',
      allowNegativeStock: false
    },
    selling: {
      enabled: true,
      defaultCustomerGroup: 'All Customer Groups',
      defaultTerritory: 'All Territories'
    },
    buying: {
      enabled: true,
      defaultSupplierGroup: 'All Supplier Groups'
    },
    hr: {
      enabled: true,
      defaultHolidayList: 'Standard Holiday List'
    },
    projects: {
      enabled: true,
      defaultProjectType: 'Internal'
    },
    manufacturing: {
      enabled: true,
      defaultWorkstation: 'Main Workstation'
    }
  },
  
  // Integration settings
  integration: {
    syncInterval: 300000, // 5 minutes
    batchSize: 100,
    retryAttempts: 3,
    webhookSecret: process.env.ERPNEXT_WEBHOOK_SECRET
  },
  
  // Security settings
  security: {
    apiKey: process.env.ERPNEXT_API_KEY,
    apiSecret: process.env.ERPNEXT_API_SECRET,
    encryptionKey: process.env.ERPNEXT_ENCRYPTION_KEY
  }
};