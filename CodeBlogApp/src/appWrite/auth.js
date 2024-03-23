import config from "../config/config";
import { Client, Account, ID } from "appwrite";
export class Authservice{
    client=new Client();
    account;
constructor(){
    this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId)
    this.account=new Account(this.client)
}
  async createAccount({email,password,username}){
    try{
       const userAccount= await this.account.create(ID.unique(),email,password)
     if(userAccount){
        return this.login({email,password})
     }else{
        return userAccount
     }
    }catch(error){
        throw error;
    }
  } 
  async login({email,password}){
    try {
        return await this.account.createEmailSession(ID.unique(),email,password);
    } catch (error) {
        throw error;
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        throw error;
    }
    return null;
  }
  async logout(){
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        throw error;
    }
  }

};

const authservice=new authservice();

export default authservice
