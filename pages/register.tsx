import Link from "next/link";

export default function Register() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    const login = event.currentTarget.login.value;
    const displayName = event.currentTarget.displayName.value;
    
    
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Login:
          <input name="login" required />
        </label>
        <br />
        <label>
          Name to display
          <input name="displayName" required />
        </label>
        <br />
        <button>Register</button>
      </form>
      <br />
      <br />
      <Link href="/login">Login</Link>
    </main>
  );
}
