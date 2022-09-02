const searchService = require("../services/searchService");

exports.getData = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await searchService.searchAllRecipe({
      search
    });
    const totalPage = Math.ceil(totalRows.length / limit);
    const result = await searchService.searchAllRecipe({
      search,
      offset: offset,
      limit: limit
    } );
    res.json({
      result: result,
      page: page,
      limit: limit,
      totalRows: totalRows.length,
      totalPage: totalPage
    })
  };