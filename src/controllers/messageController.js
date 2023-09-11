exports.create = async (req, res) => {
    res.status(200).json({status:"success", data:"Create a Message"});
};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data:"Read all Message posts"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data:"Delete a Message post"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data:"Update a Message post"});
};