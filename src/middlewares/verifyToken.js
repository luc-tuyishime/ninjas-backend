import status from '../config/status';
import * as helper from '../helpers';
import { Token } from '../queries';

export default async (req, res, next) => {
  const token = req.headers['access-token'] || req.params.token || null;

  if (!token) {
    return res.status(status.UNAUTHORIZED).json({ errors: { authentication: 'Please, sign-in!' } });
  }

  const decodedToken = helper.token.decode(token);

  if (decodedToken.errors || !decodedToken) {
    return res
      .status(status.UNAUTHORIZED)
      .json({ errors: { token: 'Failed to authenticate token' } });
  }

<<<<<<< HEAD
  const isLoggedout = decodedToken.id ? await Token.findOne(decodedToken.id, token) : {};
=======
<<<<<<< HEAD
  const isLoggedout = decodedToken.id ? await Token.findOne(decodedToken.id) : {};
=======
  const isLoggedout = await Token.findOne(decodedToken.id);
>>>>>>> [ft-165412939] add role base functionalities
>>>>>>> [ft-165412939] add role base functionalities

  if (!isLoggedout.errors && Object.keys(isLoggedout).length) {
    return res.status(status.UNAUTHORIZED).json({ errors: { token: 'This token is invalid' } });
  }

  req.user = decodedToken;

  return next();
};
