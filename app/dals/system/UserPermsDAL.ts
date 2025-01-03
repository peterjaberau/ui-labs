import { menuDAL } from "./MenuDAL";

class UserPermsDAL {
  /**
   * Get menu based on user id (no permission)
   * @param userId user id user id
   * @returns
   */
  async getFlatMenuByUserId(userId: number) {
    const user = await menuDAL.getMenuTreeByUserId(userId);
    const menus = user?.UserRole?.map(({ roles }: any) => roles)
      ?.map((role: any) => role.MenuRole)
      ?.reduce((p: any, c: any) => p.concat(c), [])
      ?.map((m: any) => m.menus)
      .filter((m: any) => m.type !== 3);
    return [...new Set(menus)];
  }
  /**
   * Get all menus based on user
   * @param userId user id
   * @returns
   */
  async getAllFlatMenuByUserId(userId: number) {
    const user = await menuDAL.getMenuTreeByUserId(userId);
    const menus = user?.UserRole?.map(({ roles }: any) => roles)
      ?.map((role: any) => role.MenuRole)
      ?.reduce((p: any, c: any) => p.concat(c), [])
      ?.map((m: any) => m.menus);
    return [...new Set(menus)];
  }

  /**
   * Get user permissions based on user id
   * @param userId user id
   * @returns
   */
  async getUserPerms(userId: number) {
    const menus = await this.getAllFlatMenuByUserId(userId);
    return menus.filter((e: any) => e.permission).map((m: any) => m.permission);
  }
}

export const userPermsDAL = new UserPermsDAL();
