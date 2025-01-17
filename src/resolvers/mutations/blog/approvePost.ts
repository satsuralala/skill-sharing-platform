import { GraphQLError } from "graphql";
import { postModel, userModel } from "@/models";


interface Input {
   id:string
   userId:string
}
export const approvePost = async (_: any, {id,userId}: Input) => {
  const user=await userModel.findById(userId);
  if(user.role==='admin'){
    const post = await postModel.findByIdAndUpdate({id},{status:"APPROVED"})
    return post
  }else{
    throw new GraphQLError("User must be admin to approve the post");
  }
};
