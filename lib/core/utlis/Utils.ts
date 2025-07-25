
import Snackbar from 'react-native-snackbar'
class Utils{

    showSnackBar(message:string,isError?:boolean){
        Snackbar.dismiss()
        Snackbar.show({
             text: message,
             duration: Snackbar.LENGTH_SHORT,
            textColor: isError != null && isError? "#EA7773": "#55efc4"
        })
    }
}

export default new Utils()
