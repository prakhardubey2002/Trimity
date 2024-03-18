import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const createTask = mutation({
    args:{
        title:v.string(),
        subtitle:v.string(),
        desc:v.string(),
        link : v.string(),
        date:v.string(),
        time:v.string(),
        email:v.string(),
    },
    handler:async (ctx,args)=>{
        await ctx.db.insert("Task",{
            Title : args.title,
            SubTitle:args.subtitle,
            Desc:args.desc,
            Link:args.link,
            Date:args.date,
            Time:args.time,
            Email:args.email,
        })
    }
})
export const CollectTask=query({
    handler: async (ctx)=>{
        return await ctx.db.query("Task").collect();
    }
})