// queries are retrieval of the API data
const { forwardTo } = require('prisma-binding')

const Query = {
  items: forwardTo('db')
  // // if your queries are the same as the schema.graphql 
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }

};

module.exports = Query;
