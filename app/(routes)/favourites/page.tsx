import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { DataTableItems } from "@/components/Shared/DataTableItems";


export default async function FavouritesPage(){
  const session = await getServerSession();
  if(!session || !session.user?.email){
    return redirect("/")
  } 
  const user = await db.user.findUnique({
    where: {
      email: session?.user?.email,

    },
    include: {
      elements:{
        where:{
          isFavourite:true,
        },
        orderBy:{
          createdAt: "desc",
        }
      }
    }

  })

  if(!user || !user.elements){
    redirect("/");
    
  }
  

  return (
    <div>
      <h1>Lista de favoritos</h1>
      <DataTableItems elements={user.elements}></DataTableItems>
    </div>
  )
}

