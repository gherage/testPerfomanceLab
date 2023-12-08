import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from '../../redux/reducers/authSlice';

const Auth = (): JSX.Element => {
  const [name, setName] = useState('');

  const dispatch = useAppDispatch();

  const onHandleUserAdd = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    dispatch(signIn({ name }));
  };

  return (
    <div className="auth__container">
      <form onSubmit={onHandleUserAdd}>
        <input
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
        />
        <button type="submit">Представиться</button>
      </form>
    </div>
  );
};

export default Auth;
