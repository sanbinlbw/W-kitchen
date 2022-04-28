import React from 'react';
import '../../common/main.css';
import '../../common/util.css';
import '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import logo from '../../assets/image/img-01.png';
import { login } from '../../request';

function Login() {
  const form = document.querySelector('.validate-form');
  return (
    <div className="wrap-login100">
      <div className="login100-pic js-tilt" data-tilt>
        <img src={logo} />
      </div>

      <form className="login100-form validate-form">
        <span className="login100-form-title">会员登陆</span>

        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="text"
            name="account"
            placeholder="账号"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>
        </div>

        <div className="wrap-input100 validate-input">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="密码"
          />
          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true"></i>
          </span>
        </div>

        <div className="container-login100-form-btn">
          <button
            className="login100-form-btn"
            onClick={ev => {
              ev.preventDefault();
              const formData = new FormData(form);
              const account = formData.get('account');
              const password = formData.get('password');
              console.log(typeof password);
              login(account, password).then(res => {
                console.log(res);
              });
            }}
          >
            登陆
          </button>
        </div>

        <div className="text-center p-t-12">
          <a className="txt2">忘记密码？</a>
        </div>

        <div className="text-center p-t-136">
          <a className="txt2" target="_blank">
            还没有账号？立即注册
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
