const services = require('../services');
const PostService = new services.PostService();

class PostController {
    async addPostToTable(req, res) {
        console.log("body",req.body)
        if(req.body){
            try {
                PostService.addNewPostToTable(req.body);
                res.status(201).json({ message: 'post added' });
            } catch (err) {
                console.error(err);
            }
        }else{
            res.json({ message: 'Failed to post!!! Body undefined' });
        }
        
    }
}

module.exports = new PostController();
