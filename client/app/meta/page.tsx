export default function Meta(){
    return(
        <div>
            <h1>Generate MetaData in Next js </h1>
        </div>
    )
  
}

 export async function generateMetadata() {
   return {
     title: "User page tittle",
     description:"User-Page"
   }
 }