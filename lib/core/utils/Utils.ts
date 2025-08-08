
import Snackbar from 'react-native-snackbar'
class Utils{

    showSnackBar(message:string,isError?:boolean){
        Snackbar.dismiss()
        Snackbar.show({
             text: message,
             duration: Snackbar.LENGTH_SHORT,
             backgroundColor: isError != null && isError? "#EA7773": "#55efc4",
             textColor:'#FFFFFF'
        })
    }
}

export default new Utils()