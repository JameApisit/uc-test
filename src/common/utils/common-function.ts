import { PaginationQueryParams, PaginationSQLParams } from "..";

export const calculateOffsetLimitPagination = (
  params: PaginationQueryParams
): PaginationSQLParams => {
  const limit = parseInt(params.limit);
  const offset = (parseInt(params.page) - 1) * limit;
  return {
    offset,
    limit,
  };
};

export const calculateTotalPagePagination = (
  total: number,
  limit: number
): number => {
  return Math.ceil(total / limit);
};

export const generateCodeByYear = (prefix: string, count: number): string => {
  const lastedFormat = (count + 1).toString().padStart(6, "0");
  const generateCode = prefix + new Date().getFullYear() + lastedFormat;
  return generateCode;
};
