export default interface IResponse {
  status: number;
  data: { token?: string, message?: string }; 
}