import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { config } from '../configs/jwtConfig';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

// eslint-disable-next-line max-len
export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    // @ts-ignore
    return response.status(401).json('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, config.secrect);

    const sub = decoded as TokenPayload;
    // @ts-ignore
    request.user = {
      // @ts-ignore
      id: sub.id,
    };

    return next();
  } catch {
    // @ts-ignore
    return response.status(401).json('Invalid JWT token');
  }
}
