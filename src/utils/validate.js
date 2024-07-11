import * as yup from 'yup';

export const validateRegister = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    title: yup.string().trim().required('Please select your title'),
    first_name: yup.string().trim().required('First Name is missing'),
    last_name: yup.string().trim().required('Last Name is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
      .required('Phone number is missing'),
    address: yup.string().trim().required('Your address is missing'),
    city: yup.string().trim().required('In which city do you live?'),
    state: yup.string().trim().required('YWhat state?'),
    zip_code: yup.string().trim().required('Zip code is missing'),
    country: yup.string().trim().required('Select the country of residence'),
    info: yup.string().trim().required('Tell us about yourself'),
  });
  return validationSchema;
};

export const validateContact = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First Name is missing'),
    last_name: yup.string().trim().required('Last Name is missing'),
    address: yup.string().trim().required('Your address is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
      .required('Phone number is missing'),
    question: yup.string().trim().required('What is your request?'),
  });
  return validationSchema;
};

export const validateDonate = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First Name is missing'),
    last_name: yup.string().trim().required('Last Name is missing'),
    address: yup.string().trim().required('Your address is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
      .required('Phone number is missing'),
    amount: yup.string().trim().required('How much are you donatingt?'),
  });
  return validationSchema;
};
