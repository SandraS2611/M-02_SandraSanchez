import { body, param } from "express-validator";

export const updatePostValidations = [
  param("postId").isNumeric().withMessage("La id debe ser un número").toInt(),
  body("place")
    .optional()
    .isString("Los comentarios debe ser string.")
    .withMessage("no hay comentarios."),
  body("comments")
    .optional()
    .isString("Los comentarios debe ser string.")
    .withMessage("no hay comentarios."),
  body("image").optional().isURL().withMessage("La imagen debe ser una url."),
];
