export const Button = ({
  children,
  texto = "default",
  variante = "blue",
  onClick,
  hidden,
}) => {
  if (hidden) return null; //renderizado condicional (apartir de una condicion renderiza null o componente)

  let clase = "";

  if (variante === "blue") clase = "btn-primary";
  if (variante === "green") clase = "btn-success";
  if (variante === "red") clase = "btn-danger";

  return (
    <button onClick={onClick} className={"btn " + clase}>
      {children || texto}
    </button>
  );
};
