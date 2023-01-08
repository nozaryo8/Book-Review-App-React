import React, { useState } from "react";
import axios from "axios";
// import { useCookies } from "react-cookie";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { signIn } from "../authSlice";
// import { url } from "../const";
import { url } from "../const";

export const SignIn = () => {
    //   const auth = useSelector((state) => state.auth.isSignIn);
    //   const dispatch = useDispatch();
    //   const history = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    //   const [cookies, setCookie, removeCookie] = useCookies();
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const onSignIn = () => {
        console.log(process.env);
        console.log(url);
        if(checkForm(email, password)) {
            axios
            .post(`https://ifrbzeaz2b.execute-api.ap-northeast-1.amazonaws.com/signin`, { email: email, password: password })
            .then((res) => {
                // setCookie("token", res.data.token);
                // dispatch(signIn());
                // history('/');
            })
            .catch((err) => {
                setErrorMessage(`サインインに失敗しました。${err}`);
            });
        }
    };
    const checkForm = (email, password) => {
        const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

        if (!pattern.test(email)) {
            setErrorMessage("正式なメールアドレスではありません");
            return false;
        }
        return true;
    }

    //   if (auth) return <Navigate to="/" />;
    return (
        <div>
            <main className="signin">
                <h2>サインイン</h2>
                <p className="error-message">{errorMessage}</p>
                <form className="signin-form">
                    <label className="email-label">メールアドレス</label>
                    <br />
                    <input
                        id="input-email"
                        type="email"
                        className="email-input"
                        onChange={handleEmailChange}
                    />
                    <br />
                    <label className="password-label">パスワード</label>
                    <br />
                    <input
                    type="password"
                    className="password-input"
                    onChange={handlePasswordChange}
                    />
                    <br />
                    <button type="button" className="signin-button" id="submit" onClick={onSignIn}>
                        サインイン
                    </button>
                </form>
                {/* <Link to="/signup">新規作成</Link> */}
            </main>
        </div>
    );
};
