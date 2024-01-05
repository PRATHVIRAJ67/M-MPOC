const UserService = require('../service/user.service');

exports.getData = async (req, res, next) => {
    try {
        console.log('in controller', req.query);
        const year = req.query?.year || null;

        const data = await UserService.getData();
        console.log('data',data)
        if (!data) {
            return res.json({ status: false, success: 'Something went wrong' })
        };

        res.json({ status: true, success: data })
    } catch (error) {
        return res.json({ status: false, success: 'Something went wrong error' })
    }
}