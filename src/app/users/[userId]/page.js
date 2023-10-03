import getUsers from "../../../../services/getUsers"

export default async function page(props){
    const userList = getUsers();
    const user = await userList;
    const currentId =props.params.userId;
    const currentData =user[currentId - 1];
    console.log(user[currentId - 1]);
    return(
        <div>
            <h1>This Dinamic id page details</h1>
            <h3>ID: {currentData.id}</h3>
            <h3>Name: {currentData.username}</h3>
        </div>
    )
}

export async function generateStaticParams(){
    const userList = getUsers();
    const users = await userList;
    return users.map(user=>({
        userId:user.id.toString()
    }))
}