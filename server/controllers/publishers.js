export const fetchPublishersEs = (req, res) => {
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT * FROM publishers_es`, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchPublishersJp = (req, res) => {
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT * FROM publishers_jp`, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchBookTypes = (req, res) => {
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT * FROM book_type`, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}