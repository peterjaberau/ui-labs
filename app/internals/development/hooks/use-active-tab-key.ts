export const useActiveTabKey = (pathname?: string | any) => {

  return pathname.split('/').find(Boolean)! as any;
};
