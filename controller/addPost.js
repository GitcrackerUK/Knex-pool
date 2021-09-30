const services = require('../services');
const TableService = new services.TableService();

class PostController {
    async addRow(req, res) {
        console.log("body",req.body)
        try {
            TableService.addNewRowToTable({rowName:"gender"});
            res.status(201).json({ message: 'row added' });
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = new TableController();
