const usersService = require('../services/userService');

exports.insert = async (request, response, next) => {
  try {
      const data = await usersService.insert(request.body);
      response.json({ data });
  } catch (error) {
    next(error);
  }
};

exports.select = async (request, response, next) => {
    try {
        let limit = parseInt(request.query.record);
        let page = parseInt(request.query.page);
        let start = 0 + (page - 1) * limit;
        let end = page * limit;
        const data = await usersService.select(
          {
            limit: limit,
            offset: start
          }
        );
        let countFiltered = usersService.count;
        let pagination = {}
        pagination.totalRow = usersService.count;
        pagination.totalPage = Math.ceil(countFiltered / limit);
        if (end  < countFiltered) {
          pagination.next = {
            page: page + 1,
            limit
          }
          
        }
        if (start < 0) {
          pagination.prev = {
            page: page - 1,
            limit
          }
        }
        response.json({ data });
    } catch (error) {
      next(error);
    }
};

exports.selectById = async (request, response, next) => {
  try {
    const data = await usersService.selectById(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.update = async (request, response, next) => {
  try {
    const data = await usersService.update(request.params.id, request.body);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};

exports.delete = async (request, response, next) => {
  try {
    const data = await usersService.delete(request.params.id);
    if (!data) { next(); } else { response.json({ data }); }
  } catch (error) {
    next(error);
  }
};