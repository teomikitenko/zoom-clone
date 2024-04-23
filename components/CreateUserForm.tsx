import { PrismaClient } from "@prisma/client";
import { createUser } from "@/app/action";

const CreateUserForm = async() => {
  return (
    <form className="flex flex-col" action={createUser}>
      <input type="text" name="name" />
      <input type="text" name="email" />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default CreateUserForm;
