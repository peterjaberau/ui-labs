import crypto from "crypto";

class BcryptUtil {
/**
   * hash CIPHER CODE
   * @param password
   * @returns
   */
  hashPassword(password: string) {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
  }

  /**
   * Compare passwords
   * @param dtoPassword
   * @param dbPassword
   * @returns
   */
  comparePassword(dtoPassword: string, dbPassword: string) {
    return this.hashPassword(dtoPassword) === dbPassword;
  }
}

export const bcryptUtil = new BcryptUtil();
