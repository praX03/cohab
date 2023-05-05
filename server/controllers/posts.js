import Post from "../models/Post.js";


//CREATE POST

export const createPost=async(req,res)=>{
    try{
        const{userId,description,picturePath}=req.body;
        const user=await Post.findById(userId);
        const newPost =new Post({
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            userPicturePath:user.picturePath,
            picturePath,
           likes:{},
           comments:[]

        })
        await newPost.save();
         
       const post=await Post.find();
       res.status(201).json(post);

        

    }
    catch(err){
        res.status(409).json({message:err.message});
    }
}

//READ

export const getFeedPosts=async(req,res)=>{
    try{
        const post=await Post.find();
       res.status(200).json(post);

    }

    catch(err){
        res.status(404).json({message:err.message});
    }


}
export const getUserPosts=async(req,res)=>{
    try{
        const {userId}=req.params; 
        const post=await Post.find({userId});
       res.status(200).json(post);

    }

    catch(err){
        res.status(404).json({message:err.message});
    }


}

//UPDATE
export const likePost=
    async(req,res)=>{

        try{
            const {id}=req.params;
            const {userId}=req.body;
        const post=await Post.find({id});
        const isLiked=post.likes.get(userId);

        if(isLiked){
            post.likes.delete();
        }
        else{
            post.likes.set(userId,true);
        }
        const updatedPost=await Post.findByIdAndUpdate(id,
            {likes:post.likes},
            {new:true}
            );


           res.status(200).json(updatedPost);
    
        }
      

    
        catch(err){
            res.status(404).json({message:err.message});
        }

    }
