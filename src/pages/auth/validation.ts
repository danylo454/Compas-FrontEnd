import * as Yup from "yup";

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{6,}$/;
const phoneRegExp = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email address"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
    .label("Password"),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email address"),
});

export const RegisterSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  firstName: Yup.string().max(255).required("First name is required"),
  lastName: Yup.string().max(255).required("Last name is required"),
  password: Yup.string()
    .max(255)
    .min(6)
    .required("Password is required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
  confirmPassword: Yup.string()
    .max(255)
    .min(6)
    .required("Confirm password is required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});

export const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(6)
    .max(255)
    .required("Old password is required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
    .label("Old password"),
  currentPassword: Yup.string()
    .min(6)
    .max(255)
    .required("New password is required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9"),
  confirmPassword: Yup.string()
    .min(6)
    .max(255)
    .required("Confirm password is required")
    .matches(passwordRegExp, "Password must contains A-Z, a-z, 0-9")
    .oneOf([Yup.ref("currentPassword"), null], "Passwords must match."),
});

export const ChangeProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
    .label("Email address"),
  name: Yup.string().required("Name is required").label("Name"),
  surname: Yup.string().required("Surname is required").label("Surname"),
  phone: Yup.string().required("Phone is required").label("Phone")
});
export const EditSchema = Yup.object().shape({
  name: Yup.string().required("Required").label('Name').min(3, "Name must be at least 3 characters "),
  surname: Yup.string().min(3, "Surname must be at least 3 characters").required("Required").label("Surname"),
  // phone: Yup.string().matches(/^(0)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/g, 'Enter pls 0000000000')
  phone: Yup.string().min(9, 'Min valid length 9 char !!!').required("Required")
});
