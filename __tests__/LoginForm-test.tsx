import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from '../src/LoginForm';

describe('LoginForm', () => {
  it('displays a username input field', () => {
    const { getByTestId } = render(<LoginForm />);
    const usernameInput = getByTestId('username-input');
    expect(usernameInput).toBeTruthy();
  });

  it('displays a password input field', () => {
    const { getByTestId } = render(<LoginForm />);
    const passwordInput = getByTestId('password-input');
    expect(passwordInput).toBeTruthy();
  });

  it('displays a login button', () => {
    const { getByTestId } = render(<LoginForm />);
    const loginButton = getByTestId('login-button');
    expect(loginButton).toBeTruthy();
  });

  // test('calls handleLogin when the login button is clicked', () => {
  //   const handleLogin = jest.fn();
  //   const { getByTestId } = render(<LoginForm handleLogin={handleLogin} />);
  //   fireEvent.press(getByTestId('login-button'));
  //   expect(handleLogin).toHaveBeenCalled();
  // });


  it('updates the username state when the username input field is changed', () => {
    const { getByTestId } = render(<LoginForm />);
    const usernameInput = getByTestId('username-input');
    fireEvent.changeText(usernameInput, 'testuser');
    expect(usernameInput.props.value).toBe('testuser');
  });

  it('updates the password state when the password input field is changed', () => {
    const { getByTestId } = render(<LoginForm />);
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'testpass');
    expect(passwordInput.props.value).toBe('testpass');
  });
});
