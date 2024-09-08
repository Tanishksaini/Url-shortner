import supabase from "./supabase";
export async function login({eamil,passwrod}) {
   const [data,err]= await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if(err){
        throw new Error(err.message)
    }
    return data;
}