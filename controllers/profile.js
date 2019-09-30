const handleProfile = (db) => (req, res) => {
    const { id } = req.params;
    let found = false;
    db.select('*').from('users').where({
        id: id
    })
        .then(user => {
            if (user.length) {
                res.status(200).json(user[0]);
            } else {
                res.status(400).json('Not Found');
            }
        })
        .catch(err => res.status(400).json('err getting user'))

}
module.exports = {
    handleProfile : handleProfile
}