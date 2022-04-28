import axios from 'axios';

const instance = axios.create({
  // baseURL 将自动加在 url`前面，除非 url 是一个绝对 URL。
  // 它可以通过设置一个 baseURL 便于为 axios 实例的方法传递相对 URL
  baseURL: '/api',
  // timeout设置一个请求超时时间，如果请求时间超过了timeout，请求将被中断，单位为毫秒（ms）
  timeout: 60000,
  // headers是被发送的自定义请求头，请求头内容需要根据后端要求去设置，这里我们使用本项目请求头。
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// http request 请求拦截器
instance.interceptors.request.use(
  config => {
    if (localStorage.jwtToken) {
      config.headers.Authorization = getLocalStorage('jwtToken');
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('response', response);
    if (response.data.token) {
      return setLocalStorage('jwtToken', response.data.token);
    }
    return response.data;
  },
  error => {
    if (
      error.response.data.code === 401 &&
      (error.response.data.message === 'token out time' ||
        error.response.data.message === '登录失败或未登录')
    ) {
      setLocalStorage('jwtToken');
      // Todo:弹出登录框
    }
  }
);

const getLocalStorage = function (name) {
  try {
    let o = JSON.parse(localStorage[name]);
    if (!o || o.expires < Date.now()) {
      return '';
    } else {
      return JSON.parse(o.value);
    }
  } catch (e) {
    // 兼容其他localstorage
    return localStorage[name];
  }
};

// 设置LocalStorage过期
const setLocalStorage = function (key, value, days) {
  value = JSON.stringify(value);
  // 设置过期原则
  if (!value) {
    localStorage.removeItem(key);
  } else {
    const Days = days || 24; // 以小时为单位，默认24小时
    const exp = new Date();
    localStorage[key] = JSON.stringify({
      value,
      // 和后端协商做了失效时间
      expires: exp.getTime() + Days * 1000 * 60 * 60,
    });
  }
};

export const register = (account, password) => {
  return instance.post('/register', {
    account,
    password,
  });
};

export const login = (account, password) => {
  return instance.post('/login', {
    account,
    password,
  });
};

export const getSchema = (pageId, userId) => {
  return instance.get('/getSchema', {
    pageId,
    userId,
  });
};

export const setSchemaData = (userId, pageId, schema, schemaMap) => {
  return instance.post('/setSchema', {
    userId,
    pageId,
    schema,
    schemaMap,
  });
};
