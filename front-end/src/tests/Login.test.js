import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Login from '../pages/Login';

describe('Testando a tela Login', () => {
  const testIdEmail = 'common_login__input-email';
  const testIdPassword = 'common_login__input-password';
  const testIdButton = 'common_login__button-login';
  const testIdError = 'common_login__element-invalid-email';

  it('Verifica se tem na tela de login um campo de email e senha', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId(testIdEmail);
    const passwordInput = getByTestId(testIdPassword);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se o botão de login está desabilitado', () => {
    const { getByTestId } = render(<Login />);
    const buttonLogin = getByTestId(testIdButton);
    expect(buttonLogin).toBeDisabled();
  });

  it('Verifica se o botão de login está habilitado', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId(testIdEmail);
    const passwordInput = getByTestId(testIdPassword);
    const buttonSubmit = getByTestId(testIdButton);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'teste123');
    expect(buttonSubmit).toBeEnabled();
  });

  it('Verifica se aparece o erro caso as informações não estejam no db', () => {
    const { getByTestId } = render(<Login />);
    const emailInput = getByTestId(testIdEmail);
    const passwordInput = getByTestId(testIdPassword);
    const buttonSubmit = getByTestId(testIdButton);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'teste123');
    userEvent.click(buttonSubmit);
    const errorMessage = getByTestId(testIdError);
    expect(errorMessage).toBeInTheDocument();
  });
});
