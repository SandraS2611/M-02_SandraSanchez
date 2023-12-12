export const Profile = () => {
  return ( 
    <div class="containerComents">
    <form action="/posts" method="post" />
        <label for="place">Place:</label>
        <input type="text" name="place" /><br />
        <label for="comments">Comments:</label><br />
        <textarea name="comments" cols="30" rows="10"></textarea><br />
        <label for="">Image:</label>
        <input type="url" name="image" />
           <a
          href="/posts"
          class="btn btn-lg btn btn-outline-success"
          role="button"
          data-bs-toggle="button"
        >
          Submit
        </a>
</div>
  )
}