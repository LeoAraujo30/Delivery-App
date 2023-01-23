import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import Register from '../pages/Register';

describe('Testando a tela Register', () => {
  const testIdName = 'common_register__input-name';
  const testIdEmail = 'common_register__input-email';
  const testIdPassword = 'common_register__input-password';
  const testIdButton = 'common_register__button-register';

  it('Verifica se tem na tela de Register um campo de nome, email e senha', () => {
    const { getByTestId } = render(<Register />);
    const nameInput = getByTestId(testIdName);
    const emailInput = getByTestId(testIdEmail);
    const passwordInput = getByTestId(testIdPassword);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se o botão de Register está desabilitado', () => {
    const { getByTestId } = render(<Register />);
    const buttonRegister = getByTestId(testIdButton);
    expect(buttonRegister).toBeDisabled();
  });

  it('Verifica se o botão de Register está habilitado', () => {
    const { getByTestId } = render(<Register />);
    const nameInput = getByTestId(testIdName);
    const emailInput = getByTestId(testIdEmail);
    const passwordInput = getByTestId(testIdPassword);
    const buttonSubmit = getByTestId(testIdButton);
    userEvent.type(nameInput, 'anderson da silva mendes');
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, 'teste123');
    expect(buttonSubmit).toBeEnabled();
  });
});
