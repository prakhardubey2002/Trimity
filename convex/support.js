import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const createsupport = mutation({
    args: {
        firsttext: v.string(),
        lasttext: v.string(),
        email: v.string(),
        desc: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("Support", {
            FirstName: args.firsttext,
            LastName: args.lasttext,
            Email: args.email,
            Description: args.desc,
        });
    },
});
export const getsupport = query({
    args:{},
    handler: async (ctx,args)=>{
        return await ctx.db.query("Support").collect();
    }
})