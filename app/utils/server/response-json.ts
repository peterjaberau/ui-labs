import { from, iif, lastValueFrom, of, switchMap } from "rxjs";

import type { Observable } from "rxjs";

enum ResCode {
  success,
  fail,
}

enum ResMessage {
  succes = "success",
  fail = "fail",
}

enum InnerMessage {
  PresentationMode = "PresentationMode: Demo",
  UnAuth = "Unauthorized",
  Unsupport = "Unsupport",
}

export class Rps {
  /**
   * Response JSON Success
   * @param data
   * @param message
   * @returns
   */
  rsj(data: any, message?: string, options?: any) {
    return new Response(
      JSON.stringify({
        code: ResCode.success,
        message: message ?? ResMessage.succes,
        data,
      }),
      options,
    );
  }

  /**
   * Response JSON failed
   * @param data
   * @param message
   * @param options
   * @returns
   */
  rfj(data?: any, message?: string, options?: any) {
    return new Response(
      JSON.stringify({
        code: ResCode.fail,
        message: message ?? ResMessage.fail,
        data: data ?? null,
      }),
    );
  }
}

export const rps = new Rps();

/**
 * Response JSON Success
 * @param data
 * @param message
 * @returns
 */
export const rsj = (data: any, message?: string, options?: any) => {
  return new Response(
    JSON.stringify({
      code: ResCode.success,
      message: message ?? ResMessage.succes,
      data,
    }),
    options,
  );
};

/**
 * Response JSON failed
 * @param data
 * @param message
 * @param options
 * @returns
 */
export const rfj = (data?: any, message?: string, options?: any) => {
  return new Response(
    JSON.stringify({
      code: ResCode.fail,
      message: message ?? ResMessage.fail,
      data: data ?? null,
    }),
  );
};

/**
 * Respond with more data (Observable)
 * @param data
 * @returns
 */
export const respByData$ = (data: any | null) => {
  return from(
    iif(
      () => data !== null,
      of(() => rsj(data, "Created successfully")),
      of(() => rfj({}, "Creation failed")),
    ),
  );
};

/**
 * Respond with more data(Observable)
 * @param data
 * @returns
 */
export const resp$ = async (data$: Observable<any>) => {
  const res$ = data$.pipe(
    switchMap((data) =>
      iif(
        () => {
          return data !== null;
        },
        of(() => rsj(data)),
        of(() => rfj({})),
      ),
    ),
  );

  const res = await lastValueFrom(res$);
  return res();
};

/**
 * Respond with more data
 * @param data
 * @returns
 */
export const resp = async (data: any | null) => {
  const res$ = of(data).pipe(
    switchMap((data) =>
      iif(
        () => {
          return data !== null;
        },
        of(() => rsj(data)),
        of(() => rfj({})),
      ),
    ),
  );

  const res = await lastValueFrom(res$);
  return res();
};

/**
 * FUNCTION RESPONSE
 * @param data
 * @returns
 */
export const respFn$ = async (resultFn$: Observable<any>) => {
  const resultFn = await lastValueFrom(resultFn$);
  return resultFn();
};

/**
 * RESPONSIVE STYLE PATTERN
 * @returns
 */
export const respPresentationModeJson = () => {
  return Response.json({
    code: ResCode.fail,
    message: InnerMessage.PresentationMode,
    data: {},
  });
};

/**
 * Response is not authorized
 * @returns
 */
export const respUnAuthJson = () => {
  return Response.json({
    code: ResCode.fail,
    message: InnerMessage.UnAuth,
    data: {},
  });
};

/**
 * Response not supported
 * @returns
 */
export const respUnSupportJson = () => {
  return Response.json({
    code: ResCode.fail,
    message: InnerMessage.Unsupport,
    data: {},
  });
};

export const HigherOrderCreateRespWithTime =
  (data: any, startTimeStamp?: number, code?: boolean, message?: string) =>
  () => {
    const idata: any = {
      code: code ?? 0,
      data,
      message: message ?? "success",
    };
    if (startTimeStamp) {
      data.time = Date.now() - startTimeStamp;
    }
    return idata;
  };
