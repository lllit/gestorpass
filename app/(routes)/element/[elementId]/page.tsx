import { FormEditElement } from "@/components/Shared/FormEditElement";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ElementPage({
  params,
}: {
  params: Awaited<{ elementId: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);

  if (!resolvedParams?.elementId) {
    return redirect("/");
  }

  const session = await getServerSession();

  if (!session?.user?.email) {
    return redirect("/");
  }

  const elementId = params.elementId;

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
