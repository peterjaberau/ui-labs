import * as clientUtils from "~/utils/client";
import type * as rrn from "react-router";

import {
  FileUpload,
  parseFormData,
} from "@mjackson/form-data-parser";
import { storageService } from "@/services/admin/tools/StorageService";
import { joseJwt } from "@/libs/jose";

class UploadService {
  uploadMaxSize = 2 * 1024 * 1024; // 2MB
  directory = "public/uploads";
  storageDirectory = "/uploads/";

  async uploadAvatar(args: rrn.LoaderFunctionArgs) {
    const { request } = args;

    // Ensure the Content-Type is multipart/form-data
    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.includes("multipart/form-data")) {
      throw new Error("Invalid Content-Type. Must be multipart/form-data.");
    }

    const payload = await joseJwt.getTokenUserIdByArgs(args);
    const userId = payload.userId;
    if (!userId) {
      throw new Error("Not found user");
    }

    const uploadHandler = async (fileUpload: FileUpload) => {
      if (fileUpload.fieldName === "file" && fileUpload.size <= this.uploadMaxSize) {
        // FileUpload objects stream data from request.body, store them as soon as possible
        const filePath = `${this.directory}/${fileUpload.filename}`;
        await storageService.saveFile(filePath, fileUpload);
        return {
          userId,
          name: fileUpload.filename,
          fileName: fileUpload.filename,
          extName: clientUtils.extname(fileUpload.filename),
          path: this.storageDirectory + fileUpload.filename,
          size: fileUpload.size.toString(),
          type: fileUpload.type,
        };
      }
      throw new Error("Invalid file upload");
    };

    const formData = await parseFormData(request, uploadHandler);
    const file = formData.get("file");

    if (!file) {
      throw new Error("No file uploaded");
    }

    // Ensure the uploaded file data is saved and returned correctly
    const result = storageService.createByData(file);
    return result;
  }
}

export const uploadService = new UploadService();




// import * as clientUtils from "~/utils/client";
// import type * as rrn from "react-router";
//
// import {
//   unstable_composeUploadHandlers as composeUploadHandlers,
//   unstable_createFileUploadHandler as createFileUploadHandler,
//   unstable_createMemoryUploadHandler as createMemoryUploadHandler,
//   unstable_parseMultipartFormData as uparseMultipartFormData,
// } from "react-router";
//
// import { joseJwt } from "@/libs/jose";
// import { storageService } from "@/services/admin/tools/StorageService";
//
// class UploadService {
//   uploadMaxSize = 2 * 1024 * 1024; // 2MB
//   directory = "public/uploads";
//   storageDirectory = "/uploads/";
//   async uploadAvatar(args: rrn.LoaderFunctionArgs) {
//     const { uploadMaxSize, directory } = this;
//     const { request } = args;
//     const payload = await joseJwt.getTokenUserIdByArgs(args);
//     const userId = payload.userId;
//     if (!userId) {
//       throw new Error("Not found user");
//     }
//     const fileUploader = createFileUploadHandler({
//       maxPartSize: uploadMaxSize,
//       directory,
//       file: ({ filename }) => filename,
//     });
//     const memoryUploader = createMemoryUploadHandler();
//
//     const uploadHandler = await composeUploadHandlers(
//       fileUploader,
//       memoryUploader,
//     );
//     const formData = await uparseMultipartFormData(request, uploadHandler);
//     const file: any = formData.get("file");
//     const result = storageService.createByData({
//       userId,
//       name: file.name,
//       fileName: file.name,
//       extName: clientUtils.extname(file.name),
//       path: this.storageDirectory + file.name,
//       size: file.size.toString(),
//       type: file.type,
//     });
//     return result;
//   }
// }
//
// export const uploadService = new UploadService();
