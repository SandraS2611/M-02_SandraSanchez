import { param } from "express-validator";

export const findPostValidations = [
  param("postId")
   .isNumeric()
   .withMessage("La id debe ser un número.")
   .toInt()
];
