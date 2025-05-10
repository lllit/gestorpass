import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type ElementPageProps = {
  params: { elementId: string };
};

export default async function ElementPage({ params }: ElementPageProps) {
  const { elementId } = params;
  if (!elementId) {
    return redirect("/");
  }

  const session = await getServerSession();

  if (!session?.user?.email) {
    return redirect("/");
  }


  const element = await db.element.findUnique({
    where: { id: elementId },
  });


  if (!element) {
    return redirect("/");
  }

  return (
    <div>
      <h1>Element Page</h1>
      <div>
        <FormEditElement dataElement={element}></FormEditElement>
      </div>
    </div>
  );
}
