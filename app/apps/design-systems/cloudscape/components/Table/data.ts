export interface DataType {
  id: string;
  name: string;
  totalAmount?: number;
  items?: string[];
  subRows?: DataType[];
}

export const columnDefinition: any[] = [
  {
    id: 'id',
    width: 100,
    header: 'Id',
    cell: (data: any) => data.id,
    sortingField: 'id',
  },
  {
    id: 'name',
    width: 120,
    header: 'Name',
    cell: (data: any) => data.name,
    sortingField: 'name',
  },
  {
    id: 'totalAmount',
    width: 200,
    header: 'Total Amount',
    cell: (data: any) => data.totalAmount,
    sortingField: 'totalAmount',
  },
  {
    id: 'countItems',
    width: 200,
    header: '# Items',
    cell: (data: any) => data.items?.length,
  },
];

export const long: any = Array.from(Array(555).keys()).map((num) => {
  return {
    data: {
      id: `id${(num + 1).toString().padStart(6, '0')}`,
      name: `Order ${num + 1}`,
      totalAmount: Math.floor(Math.random() * 100),
    }
  }
});

export const short: any = () => {

  return {
    data: [
      {
        id: 'id0000011',
        name: 'Order 11',
        totalAmount: 5,
        items: ['item111', 'item112', 'item113'],
      },
      {
        id: 'id0000012',
        name: 'Order 12',
        totalAmount: 10,
        items: ['item121'],
      },
      {
        id: 'id0000013',
        name: 'Order 13',
        totalAmount: 30,
      },
      {
        id: 'id0000014',
        name: 'Order 14',
        totalAmount: 32,
      },
      {
        id: 'id0000015',
        name: 'Order 15',
        totalAmount: 20,
        items: ['item151', 'item152'],
      },
      {
        id: 'id0000016',
        name: 'Order 16',
        totalAmount: 10,
      },
      {
        id: 'id0000017',
        name: 'Order 17',
        totalAmount: 100,
      },
      {
        id: 'id0000018',
        name: 'Order 18',
        totalAmount: 40,
      },
      {
        id: 'id0000019',
        name: 'Order 19',
        totalAmount: 10,
      },
    ]
  }
};

