import {ApiResponseTypeEnum} from '../enums/api.response.type.enum';

export interface ApiResponseModel<T> {
  load: T;
  code: ApiResponseTypeEnum;
}
