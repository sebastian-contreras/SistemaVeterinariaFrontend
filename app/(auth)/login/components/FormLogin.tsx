"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function FormLogin() {
  const [errors, setErrors] = useState<string[]>([]);
  const [username, setUsername] = useState("test");
  const [password, setPassword] = useState("123123");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="user">
        <div className="form-group">
          {/* {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>} */}
          <input
            type="text"
            name="username"
            className="form-control form-control-user"
            id="exampleInputusername"
            aria-describedby="usernameHelp"
            placeholder="Enter username Address..."
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control form-control-user"
            id="exampleInputPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-user btn-block">
          Login
        </button>
        <hr />
      </form>
      {errors.length > 0 && (
        <div className="alert alert-danger mt-2">
          <ul className="mb-0">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default FormLogin;
