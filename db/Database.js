const getDepartments = () =>
    {return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM department`, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
    })
})};

module.exports = {getDepartments}