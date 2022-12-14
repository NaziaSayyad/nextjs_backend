import {useRouter} from "next/router";

export  default function laptop({user}) {
    const {query} = useRouter();
    return(
        <div>
            <h1>  product page </h1>
            <div>
                <p> Title : {user.name}</p>
                <p> Price : {user.email} </p>
                <p> Price : {user.username} </p>
            </div>
        </div>
    )
}
export const getServerSideProps = async (context) =>{
    const {id} = context.query;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json());
    return {
        props :{
            user: res,
        }
    }


}