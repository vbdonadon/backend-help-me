import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateAuthor(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  console.log('authHeader');
  console.log(authHeader);

  if (!authHeader) {
    return response.status(401).json({
      message: "Token is missing!"
    });
  }

  const [bearer, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "fea80f2db003d4ebc4536023814aa885") as IPayload

    request.id_author = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!"
    });
  }
}