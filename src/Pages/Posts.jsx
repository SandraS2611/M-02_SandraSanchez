export const Posts = () => {
  return (
    <div className="postPage">
      <h1 className="posts">Posts</h1>

<a
href="/profile"
className="btn btn-lg btn btn-outline-success"
role="button"
data-bs-toggle="button"
>
Profile
</a>

<a
href="/register"
className="btn btn-lg btn btn-outline-success"
role="button"
data-bs-toggle="button"
>
Register
</a>

<a
href="/"
className="btn btn-lg btn btn-outline-success"
role="button"
data-bs-toggle="button"
>
Logout
</a>
  </div>
  )
}