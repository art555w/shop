export interface IUser {
  returnSecureToken?: boolean,
  email: string,
  password: string
}

export interface IFbAuthResponse {
  idToken: string,
  expiresIn: string
}
