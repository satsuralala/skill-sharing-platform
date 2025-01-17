import { postModel, userModel } from "@/models";


interface Input {
    id: string,
    userId:string
   
}

export const likePost = async (_: any, { id}: Input) => {
  try{
      const post = await postModel.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true })
      await userModel.findByIdAndUpdate(post.author, { $inc: { reputation: 10 } });
      return post
  }catch(error){
    console.log(error)
  }
};
