exports.create = async (req, res) => {
    res.status(200).json({status:"success", data:"Create a Product"});
};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data:"Read all Product posts"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data:"Delete a Product post"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data:"Update a Product post"});
};