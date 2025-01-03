type DebugConfig = {
  isDebug: 0 | 1;
};

export const debugConfig: DebugConfig | any = {
  isDebug: !!process.env.isDeg || 1, // closed
};
