exports.create = async (req, res) => {
    res.status(200).json({status:"success", data:"Create a Comment"});
};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data:"Read all Comment posts"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data:"Delete a Comment post"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data:"Update a Comment post"});
};