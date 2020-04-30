type ErrorsFor<T> = {
  [K in keyof T]?: string[]
} | null

interface Shop {
  id: number;
  name: string;
  description: string;
  imgUrl?: string;
  ownerUserId?: number;
  createdAt: string;
  updatedAt: string;
}

interface PagedResources<T> {
  pageNum: number;
  pageSize: number;
  totalPage: number;
  data: T[];
}

interface Resource<T> {
  data: T
}

interface Good {
  id: number;
  name: string;
  description: string;
  details?: string;
  imgUrl: string;
  price: number;
  stock: number;
  shopId: number;
  createdAt: string;
  updatedAt: string;
}
