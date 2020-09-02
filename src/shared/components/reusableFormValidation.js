import * as Yup from "yup";

export const reusableFormValidation = Yup.object().shape({
  firstName: Yup.string()
    .label("First Name")
    .min(3)
    .required(),
  lastName: Yup.string()
    .label("Last Name")
    .min(3)
    .required(),
  house: Yup.string()
    .label("House")
    .min(3)
    .required(),
  knownAs: Yup.string()
    .label("Known as")
    .min(3)
    .required(),
});
