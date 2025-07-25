import { ID,Account,Client} from 'appwrite'
import Config from 'react-native-config'
import Utils from '../utlis/Utils';

const appwriteClient = new Client()

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;
if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
  console.error("Missing AppWrite environment variables")
}
type CreateUserAccount ={
    email: string;
    password: string;
    name: string;
}

type LoginUserAccount ={
    email: string;
    password: string;
}

class AppwriteService{
    account;
    ///Set the config
    constructor(){
        appwriteClient.setEndpoint(APPWRITE_ENDPOINT)
        console.log(APPWRITE_ENDPOINT)
        appwriteClient.setProject(APPWRITE_PROJECT_ID)
        console.log(APPWRITE_ENDPOINT)
        this.account = new Account(appwriteClient);
    }

    /// create a new record
    async createAccount({email,password,name}:CreateUserAccount) {
        try{

           const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(userAccount)
            {
                return this.loginUserAccount({email,password})
            }else
            {
                return userAccount;
            }
        }catch(error)
        {
            Utils.showSnackBar(String(error),true)
            console.log("Appwrite service :: createAccount() ::"+error)
        }
        
    }
    /// login user
    async loginUserAccount({email,password}:LoginUserAccount) {
        try{
           return await this.account.createEmailPasswordSession(
                email,
                password,
            )
        }catch(error)
        {
            Utils.showSnackBar(String(error),true)
            console.log("Appwrite service :: loginUSerAccount() ::"+error)
        }
        
    }

    async getCurrentUser(){
        try{
           return await this.account.get()
        }catch(error)
        {
            console.log("Appwrite service :: getCurrentUser() ::"+error)
        }
    }

    async logoutUser()
    {
        try{
           return await this.account.deleteSession('current')
        }catch(error)
        {
            Utils.showSnackBar(String(error),true)
            console.log("Appwrite service :: getCurrentUser() ::"+error)
        }
    }
}

export default  AppwriteService
