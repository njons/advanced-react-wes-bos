// mutations are changes to the API data, they have to mirror the schema 
// can be named so they can be run separately

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // check if they are logged in

    // in createServer.js the database has been placed in the "context" and that is how we reach it
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info)

    return item;
  }
};

module.exports = Mutations;
