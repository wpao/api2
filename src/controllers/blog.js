const BlogPost = require('../models/blog')

exports.getAllBlogPost = (req, res, next) => {
    // const result = {
    //     message: 'data all',
    //     data: {
    //         uid: 1,
    //         name: 'brendan',
    //         hoby: 'games'
    //     }
    // }
    // res.json(result)
    const currentPage = parseInt(req.query.page) || 1
    const perPage = parseInt(req.query.perPage) || 5
    let totalItems

    BlogPost.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return BlogPost.find()
                .skip((currentPage - 1) * perPage)
                .limit(perPage)
        })
        .then(result => {
            res.json({
                message: 'Data Blog Post Berhasil dipanggil',
                data: result,
                total_data: totalItems,
                per_page: perPage,
                current_page: currentPage
            })
        })
        .catch(err => {
            next(err)
        })
}