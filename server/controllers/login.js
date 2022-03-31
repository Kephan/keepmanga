export const userRegister = (req, res) => {
    const user = req.body

    try {        
        req.getConnection((err, conn) => {
            conn.query(`INSERT INTO users (username, password) VALUES('${user.username}', '${user.password}')`, (err, rows) => {
                if (err) console.log(err)

                res.status(201).json(user);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const userLogin = (req, res) => {
    const user = req.body

    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT * FROM users WHERE username = '${user.username}' AND password = '${user.password}'`, (err, rows) => {
                if (err) console.log(err)

                res.status(201).json(rows[0]);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const userUpdate = (req, res) => {
    const user = req.body

    try {        
        req.getConnection((err, conn) => {
            conn.query(`UPDATE users SET username = '${user.username}', password = '${user.password}', budget = '${user.budget}', profile_image = '${req.file ? `profiles_pic/${req.file.filename}` : user.profile_image_actual}' WHERE _id = ${user._id}`, (err, rows) => {
                if (err) console.log(err)                

                res.status(201).json({ ...user, profile_image: `${req.file ? `profiles_pic/${req.file.filename}` : req.body.profile_image_actual}`, role: parseInt(user.role)});
            });
        });        
    } catch (error) {
        res.status(409).json({ error });
    }
}