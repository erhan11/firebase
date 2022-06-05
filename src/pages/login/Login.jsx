import "./login.scss";

const Login = () => {
  return (
    <div classname="login">
      <form>
        <input type="email" placeholder="email" />;
        <input type="password" placeholder="password" />;
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
