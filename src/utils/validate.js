import * as yup from 'yup';

export const validateContact = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First Name is missing'),
    last_name: yup.string().trim().required('Last Name is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
      .required('Phone number is missing'),
    message: yup.string().trim().required('What is your request?'),
  });
  return validationSchema;
};
