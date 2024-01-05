const UserService = require('../service/user.service');

exports.getData = async (req, res, next) => {
    try {
        console.log('in controller getData==', req.query);
        const year = req.query?.year || null;

        const data = await UserService.getData();
        console.log('getData data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}

exports.centerVisualization = async (req, res, next) => {
    try {
        console.log('in controller centerVisualization==', req.query);
        const year = req.query?.year || null;

        const data = await UserService.centerVisualization();
        console.log('centerVisualization data=', data);
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' });
        };

        res.json({ status: true, success: data });
    } catch (error) {
        next(error);
    }
}