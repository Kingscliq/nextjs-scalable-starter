export { default as Credentials } from './forgotPass-flow/credential';
export { default as NewPassword } from './forgotPass-flow/newPass';
export { default as Verification } from './forgotPass-flow/verify';
export { default as Success } from './forgotPass-flow/success';

// signup
export { default as AuthMobile } from './signup-flow/phone/index';
export { default as ConfirmMobile } from './signup-flow/phone/confirm-phone';
export { default as AuthBvn } from './signup-flow/bvn/index';
export { default as SignupCredentials } from './signup-flow/credentials';
export { default as SignupSuccess } from './signup-flow/success';
export { default as Stepper } from './signup-flow/stepper';

// merchant signup
export { default as MerchantAuthMobile } from './merchant-signup/phone/index';
export { default as MerchantConfirmMobile } from './merchant-signup/phone/confirm-phone';
export { default as MerchantAuthBvn } from './merchant-signup/bvn/index';
export { default as MerchantSignupCredentials } from './merchant-signup/credentials';
export { default as MerchantSignupSuccess } from './merchant-signup/success';
export { default as MerchantStepper } from './merchant-signup/stepper';

// welcome
export * from './welcome';
export * from './forgotPass-flow';
