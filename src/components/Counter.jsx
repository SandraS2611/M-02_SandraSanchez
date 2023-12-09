// import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  let initialValue = 0;

  const { contador, incrementar, decrementar, resetear } =
    useCounter(initialValue);

  const {
    contador: contador2,
    incrementar: incrementar2,
    decrementar: decrementar2,
    resetear: resetear2,
  } = useCounter(initialValue);

  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  // .then((res) => res.json())
  // .then((data) => console.log(data))

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={resetear}>Resetear</button>

      <p>Contador2: {contador2} </p>
      <button onClick={incrementar2}>Incrementar</button>
      <button onClick={decrementar2}>Decrementar</button>
      <button onClick={resetear2}>Resetear</button>

      <p>suma: {contador + contador2} </p>
    </div>
  );
};
