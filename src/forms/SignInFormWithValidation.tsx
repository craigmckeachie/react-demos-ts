import { useForm } from 'react-hook-form';

interface ISignInFormValues {
  username: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormValues>({mode: "onBlur"});

  function signin(data: ISignInFormValues) {
    console.log(data);
  }

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(signin)}>
      <fieldset>
        <label>Username</label>
        <input
          {...register('username', { required: 'Username is required' })}
          aria-invalid={errors?.username ? 'true' : 'false'}
          // className={`form-control ${errors?.username && 'is-invalid'} `}
        />
        <small role="alert">{errors.username?.message}</small>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: `Password format is incorrect.`,
            },
          })}
          aria-invalid={errors?.password ? 'true' : 'false'}
        />
        <small>{errors.password?.message}</small>
        <p>
          Must be at least 6 characters and contain one number and one special
          character.
        </p>
        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  );
}
