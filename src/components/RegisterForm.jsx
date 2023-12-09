// avatar, email, username, password

export const RegisterForm = () => {
  return (
<div>
    <h2>Registro</h2>

<form>
    <input type="url" placeholder="www.my-avatar.com" />
    <input type="email" placeholder="my-email@email.com" />
    <input type="text" placeholder="Lohana Cor" />
    <input type="password" placeholder="********" />
    <button>Register</button>
</form>
    </div>
  )
}