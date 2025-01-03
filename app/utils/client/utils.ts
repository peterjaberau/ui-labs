import dayjs from "dayjs";

/**
 * noop empty function
 */
export function noop() {}

/**
 * identity return value
 * @param value {any}
 * @returns
 */
export function identity<T>(value: T): T {
  return value;
}

/**
* Format string (timestamp cannot be used as a string)
 * @param time format time
 * @param format format syntax
 * @returns
 */
export function formatDate(
  time: string | number | Date | dayjs.Dayjs | null | undefined,
  format = "YYYY-MM-DD HH:mm:ss",
) {
  return dayjs(time).format(format);
}

/**
* Generate antd file list fileList based on name
 * @param name
 * @returns
 */
export function genFileListByName(name: string) {
  if (!name) {
    return [];
  }
  return [
    {
      uid: "uid",
      name,
      status: "done",
      url: name,
      response: {
        data: {
          name,
        },
      },
    },
  ];
}

/**
* Get the file suffix name
 * @param str
 * @returns
 */
export function extname(str: string) {
  var slug = str.split(/\/|\\/).slice(-1)[0];
  var idx = slug.lastIndexOf(".");
  if (idx <= 0) return "";
  var ext = slug.slice(idx);
  return ext;
}

/**
* Whether it is an external link
 * @param link
 * @returns
 */
export function isExternalLink(str: string) {
  const linkRegex = /^(?:https?:\/\/)?[\w.-]+\.[a-z]{2,}(?:\/[\w\\.-]*)*\/?$/i;
  return linkRegex.test(str);
}
/**
 * Remove html tag
 * @param str
 * @returns
 */
export function removeHtmlTag(str: string) {
  return str.replace(/<[^>]+>/g, ""); //Remove all html tags
}
