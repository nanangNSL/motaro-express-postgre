const jwt  = require('jsonwebtoken');
const searchService = require("../services/searchService");
 
exports.refreshToken = async(request, response, next) => {
    try {
        const refreshToken = request.cookies.refreshToken;
        if(!refreshToken) return response.sendStatus(401);
        const data  = await searchService.searchToken(refreshToken);
        if(!data[0]) return response.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return response.sendStatus(403);
            const userId = data[0].id;
            const name = data[0].name;
            const email = data[0].email;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            response.json({ accessToken });
        });
    } catch (error) {
        next(error);
    }
}