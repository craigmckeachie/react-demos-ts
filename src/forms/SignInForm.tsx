import { useForm } from 'react-hook-form';

interface ISignInFormValues {
  username: string;
  password: string;
}

export default function SignInForm() {
  const { register, handleSubmit } = useForm<ISignInFormValues>();
  // const signin: SubmitHandler<ISignInFormValues> = (data) => console.log(data);
  // const signin = (data: ISignInFormValues) => console.log(data);

  function signin(data: ISignInFormValues) {
    console.log(data);
  }

  // console.log(register('username'));

  return (
    <form onSubmit={handleSubmit(signin)}>
      <fieldset>
        <label>Username</label>
        <input {...register('username')} />
        <label>Password</label>
        <input type="password" {...register('password')} />
        <button type="submit">Sign In</button>
      </fieldset>
    </form>
  );
}
