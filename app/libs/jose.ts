import { type JWTPayload, SignJWT, jwtVerify } from "jose";

import { type LoaderFunctionArgs } from "react-router";

class JoseJwt {
  _secretKey: string;
  _encodedKey: Uint8Array;
  _alg = "HS256";
  _tokenExpTime = "15min";
  _refreshTokenExpTime = "7d";

  constructor() {
    this._secretKey = process.env.JWT_SECRET!;
    this._encodedKey = new TextEncoder().encode(this._secretKey);
  }

  /**
   * jose jwt token
   * @param payload
   * @param expTime
   * @returns
   */
  async encrypt(payload: any, expTime: string) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: this._alg })
      .setIssuedAt()
      .setExpirationTime(expTime)
      .sign(this._encodedKey);
  }

  /**
   * jost jwt token
   * @param token
   * @returns
   */
  async decrypt(token: string) {
    try {
      const { payload } = await jwtVerify(token, this._encodedKey, {
        algorithms: [this._alg],
      });
      return { payload };
    } catch (error) {
      console.error("❌ Failed to verify >>", error);
      return { error };
    }
  }

  /**
   * Get from token userId
   * @param args
   * @returns
   */
  async getTokenUserIdByArgs(args: LoaderFunctionArgs) {
    const token = args.request.headers.get("Authorization")?.split(" ")[1];
    type ResultType = JWTPayload & { userId: number; error: any };
    try {
      const { payload } = await jwtVerify(token!, this._encodedKey, {
        algorithms: [this._alg],
      });
      return { ...payload } as ResultType;
    } catch (error) {
      console.error("❌ Failed to verify >>", error);
      return { error } as ResultType;
    }
  }

  /**
   * Get payload from token
   * @param token
   * @returns
   */
  async getPayloadByToken(token: string) {
    try {
      const { payload } = await jwtVerify(token!, this._encodedKey, {
        algorithms: [this._alg],
      });
      return { payload };
    } catch (error) {
      console.error("❌ Failed to verify >>", error);
      return { error };
    }
  }

  /**
   * Use userId to issue token
   * @param userId
   * @returns
   */
  signToken(userId: number) {
    return this.encrypt({ userId }, this._tokenExpTime);
  }

  /**
   * Use userId to issue refresh token
   * @param userId
   * @returns
   */
  signRefreshToken(userId: number) {
    return this.encrypt({ userId }, this._refreshTokenExpTime);
  }
}

export const joseJwt = new JoseJwt();
