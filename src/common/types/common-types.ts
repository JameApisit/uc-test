export interface BaseData {
  id: number;
  name: string;
}

export interface BaseMultipleData {
  id: number;
  nameLocal: string;
  nameEn: string;
}

export interface SingleParam {
  id: number;
}

export interface SearchQueryParams {
  search?: string;
}

export interface Pagination {
  totalPage: number;
  limit: number;
  total: number;
}

export interface PaginationQueryParams {
  search?: string;
  page: string;
  limit: string;
}

export interface PaginationSQLParams {
  offset: number;
  limit: number;
}

export type PaginationSearchSQLParams = PaginationSQLParams & {
  search: string;
};
