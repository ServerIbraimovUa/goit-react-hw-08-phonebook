export const toggleClick = (toggle, setInput, setIcon) => {
  if (toggle === 'password') {
    setIcon(true);
    return setInput('text');
  }
  if (toggle === 'text') {
    setIcon(false);
    return setInput('password');
  }
};
