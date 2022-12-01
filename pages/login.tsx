import Link from "next/link";

export default function Login() {
  return (
    <main>
      <form>
        <label>
          Login:
          <input name="login" />
        </label>
        <br />
        <button>Login</button>
      </form>
      <br />
      <br />
      <Link href="/register">Register</Link>
    </main>
  );
}
