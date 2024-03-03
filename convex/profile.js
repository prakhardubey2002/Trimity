import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const createProfile = mutation({
    args: {
        Fname: v.string(),
        Lname: v.string(),
        Mainemail: v.string(),
        Aemail: v.string(),
        gender: v.string(),
        Desc: v.string(),
        Personality: v.string(),
        Disorder: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("profile", {
            FirstName: args.Fname,
            LastName: args.Lname,
            Mainemail: args.Mainemail,
            Aemail: args.Aemail,
            gender: args.gender,
            Desc: args.Desc,
            Personality: args.Personality,
            Disorder: args.Disorder,
        })
    }
})