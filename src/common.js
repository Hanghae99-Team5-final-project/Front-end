export const emailCheck = (email) => {
  let emailreg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return emailreg.test(email);
};

// 닉네임 형식
export const idCheck = (id) => {
  let Nickreg = /^[a-zA-Z0-9]+$/;
  return Nickreg.test(id);
};

// 비밀번호 체크
export const pwdCheck = (password_check) => {
  let pwdreg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/;
  return pwdreg.test(password_check);
};
