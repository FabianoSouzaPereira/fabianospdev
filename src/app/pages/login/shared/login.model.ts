import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Login extends BaseResourceModel {

  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public password?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): Login {
    return Object.assign(new Login(), jsonData);
  }
}
