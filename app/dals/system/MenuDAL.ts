import type { Prisma } from "@prisma/client";
import prisma from "@/libs/prisma";

export class MenuDAL {
  permMenuType = 3;
  /**
   * Get quantity
   * @returns
   */
  async getCount() {
    return await prisma.menu.count();
  }

  /**
   * Get all parameters
   */
  async getAll() {
    return await prisma.menu.findMany();
  }

  /**
   * Get menu list
   * @returns
   */
  async getList({ page, pageSize }: { page: number; pageSize: number }) {
    return await prisma.menu.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  /**
   * Get filter permission menu list
   * @returns
   */
  async getAllFilterPermMenu() {
    const { permMenuType } = this;
    return await prisma.menu.findMany({
      where: {
        type: {
          not: permMenuType,
        },
      },
    });
  }

  /**
   * getMenuTreeByUserId
   */
  async getMenuTreeByUserId(userId: number) {
    // userId -> UserRole -> roles -> MenuRole -> menus
    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        UserRole: {
          include: {
            roles: {
              include: {
                MenuRole: {
                  include: {
                    menus: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  /**
   * Create menu
   * @param data
   * @returns
   */
  async create(data: any) {
    return await prisma.menu.create({
      data,
    });
  }

  /**
   * Update menu
   * @param data
   * @returns
   */
  async update(data: any) {
    return await prisma.menu.update({
      where: {
        id: data.id as number,
      },
      data: {
        type: data.type,
        name: data.name,
        parent_menu_id: data.parent_menu_id,
        permission: data.permission,
        isLink: data.isLink,
        isShow: data.isShow,
        path: data.path,
        path_file: data.path_file,
        status: data.status,
        orderNo: data.orderNo,
      },
    });
  }

  /**
   * Delete menu based on ids
   * @param ids
   * @returns
   */
  async deleteByIds(ids: number[]) {
    return await prisma.menu.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}

export const menuDAL = new MenuDAL();
