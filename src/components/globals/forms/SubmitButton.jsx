import { useFormikContext } from 'formik';

const SubmitButton = ({ title, className }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={className}
      disabled={isSubmitting ? true : false}
      style={{ background: isSubmitting ? '#333 !mportant' : '' }}
    >
      <span>{title}</span>
    </button>
  );
};

export default SubmitButton;
