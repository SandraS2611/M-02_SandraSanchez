import { Container } from "../components/Container";

export const Form2 = () => {
  return (
    <>
      <h1>Welcome Travelers!!!</h1>
      <div class="d-grid gap-2 col-6 mx-auto">
        <a
          href="/profile"
          class="btn btn-lg btn btn-success"
          role="button"
          data-bs-toggle="button"
        >
          Login
        </a>
      </div>

      <br />

      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />

      <Container>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          repellendus iusto aliquid autem velit? Amet ratione molestiae error
          asperiores animi voluptatem omnis neque facere, itaque officia, soluta
          quasi deserunt dolore.
        </p>
      </Container>
    </>
  );
};
