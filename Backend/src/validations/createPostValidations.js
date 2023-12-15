import { body } from "express-validator";

export const createPostValidations = [
  body("place")
    .notEmpty()
    .withMessage("debe ser un string")
    .isString()
    .withMessage("El lugar debe ser un string."),
  body("comments")
    .notEmpty()
    .withMessage("debe ser un string")
    .isString()
    .withMessage("Los comentarios debe ser string."),
  body("image")
    .notEmpty()
    .withMessage("debe ser una url")
    .isURL()
    .withMessage("La imagen debe ser una url."),
];
