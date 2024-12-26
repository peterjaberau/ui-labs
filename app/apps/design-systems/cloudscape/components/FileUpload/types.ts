export interface FileMetadata {
  /**
   * File name.
   */
  name: string;
  /**
   * A DOMString representing the MIME type of the content that will be put into the file.
   */
  type?: string;
  /**
   * File size in bytes.
   */
  size?: number;
  /**
   * Last modified.
   */
  lastModified?: number;
}

export type FileType = File | FileMetadata;
