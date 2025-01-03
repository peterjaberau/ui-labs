import dayjs from "dayjs";

/**
 * format string
 * @param time format time
 * @param format format syntax
 * @returns
 */
export function formatDate(time: string, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs(time).format(format);
}

export class DateUtils {
  /**
   * format string
   * @param time format time
   * @param format format syntax
   * @returns
   */
  public formatDate(time: string, format = "YYYY-MM-DD HH:mm:ss") {
    return dayjs(time).format(format);
  }
}

export const dateUtils = new DateUtils();
