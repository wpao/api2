exports.datas = (req, res, next) => {
    const result = {
        message: 'data all',
        data: {
            uid: 1,
            name: 'brendan',
            hoby: 'games'
        }
    }
    res.json(result)
}