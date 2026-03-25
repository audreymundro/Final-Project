import LoginButton from "../components/buttons/LoginButton";

function Login() {
  return (
    <div>
      <h1 className="text-4xl font-bold font-serif text-center py-4">Login or Signup</h1>
      <div className="flex justify-center">
        <LoginButton />
        <LoginButton />
      </div>
    </div>
  );
}

export default Login;


