import { Request as ExpressRequest } from "express";

export type Request<Params, Body, QueryParams> = ExpressRequest<
  Params,
  {},
  Body,
  QueryParams
>;

export interface AuthRequest<Params, Body, QueryParams>
  extends Request<Params, Body, QueryParams> {
  userInfo: AuthUserInfo;
}

export interface AuthUserInfo {
  id: number;
  name: string;
}
