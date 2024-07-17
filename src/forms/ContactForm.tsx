import { useForm } from 'react-hook-form';

interface IContactFormValues {
  department: string;
  message: string;
  agreedToTerms: boolean;
}

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormValues>();

  function send(values: IContactFormValues) {
    console.log('values', values);
  }

  return (
    <form onSubmit={handleSubmit(send)}>
      <label>Department</label>
      <select
        {...register('department', { required: 'Department is required' })}
        aria-invalid={errors.department ? 'true' : 'false'}
        role="combobox"
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <small role="alert">{errors?.department?.message}</small>
      <label>Message</label>
      <textarea
        {...register('message', { required: 'Message is required' })}
        cols={30}
        rows={10}
        placeholder="What is on your mind?"
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      <small role="alert">{errors?.message?.message}</small>
      <label htmlFor="">
        <input
          type="checkbox"
          {...register('agreedToTerms', {
            validate: (value) =>
              value === true || 'You must agree to the terms.',
          })}
          aria-invalid={errors.agreedToTerms ? 'true' : 'false'}
        />
        I agree to the terms and conditions.
        <br />
        <small role="alert">{errors?.agreedToTerms?.message}</small>
      </label>
      <br />
      <button>Send</button>
    </form>
  );
}
