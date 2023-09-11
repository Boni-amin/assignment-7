exports.create = async (req, res) => {
    res.status(200).json({status:"success", data:"Create a Portfolio"});
};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data:"Read all Portfolio posts"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data:"Delete a Portfolio post"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data:"Update a Portfolio post"});
};