import Link from "next/link";
import getUsers from "../../../services/getUsers";

export default async function page(){
    const userList =getUsers()
    const users = await userList;
    // console.log(users);
    return(
        <div>
            <h1 className="font-semibold ">This is users </h1>

        {
            users.map((i)=>(
                <div>
                   <Link href={`/users/${i.id}`}>{i.name}</Link>
                </div>
            ))
        }

        </div>
    )
}