export const Perfil = () => {
  return ( 
    <div class="containerComents">
    <form action="/posts" method="post" />
        <label for="place">Lugares:</label>
        <input type="text" name="place" /><br />
        <label for="comments">Comentarios:</label><br />
        <textarea name="comments" cols="30" rows="10"></textarea><br />
        <label for="">Imagen:</label>
        <input type="url" name="image" />
        <a
          href="/posts"
          class="btn btn-lg btn btn-outline-success"
          role="button"
          data-bs-toggle="button"
        >
          Postear
        </a>
</div>
  )
}