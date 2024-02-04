import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createTodo = mutation({
   args :{
    text:v.string(),
    logs: v.string(),
   },
    handler: async (ctx,args)=>{
        await ctx.db.insert("todos",{
            text: args.text,
            logs:args.logs,
        })
   }
});