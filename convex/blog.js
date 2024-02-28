import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createBlog =mutation({
    args:{
        title:v.string(),
        subtitle:v.string(),
        thumbnail:v.string(),
        tag:v.string(),
        img:v.string(),
        desc:v.string(),
    },
    handler:async (ctx,args)=>{
        await ctx.db.insert("Blogs",{
            Title:args.title,
            Subtitle:args.subtitle,
            Thumbnail:args.thumbnail,
            Tag:args.tag,
            Image:args.img,
            Desc:args.desc,
        })
    }
})
export const CollectBlog=query({
    handler: async (ctx)=>{
        return await ctx.db.query("Blogs").collect();
    }
})