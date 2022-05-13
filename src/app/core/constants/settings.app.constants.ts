export const SETTINGS_APP = {

  PRODUCT_VERSION: '0.0.1',

  // urls + redirect
  URL_RETURN_KEY: 'returnUrl',
  URL_LOGIN: '/login',

  URL_HOME_CLIENT: '/app/dashboard/',
  URL_HOME_ADMIN: '/app/admin/dashboard/',

  VALIDATION_EMAIL: RegExp(/^[a-zA-Z!#$%&'*\/=?^`]+[a-zA-Z0-9.!+#$%&'*\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?){2,61}$/),

  // Local Storage Keys
  STORE_DATA_KEYS: {
    AUTH: 'authUserData',
    PRODUCT_VERSION: 'productVersion',
  },
};
