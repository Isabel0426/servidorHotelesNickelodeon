//IMPORTAR A MONGOOSE
import mongoose from "mongoose"


//Me conecto a la bd
export async function conectar(){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log ("exito conectandose")
    }catch(error){

        console.log("Upsss"+error)

    }
}
