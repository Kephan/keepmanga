export const fetchCollections = (req, res) => {    
    let query = `SELECT c._id, c.titleEs, c.titleJp, c.author, c.artist, c.seriesCover, c.description, pes.name pesName, publisherEs, pjp.name pjpName, publisherJp, bt.type btType, bookType FROM collections c INNER JOIN publishers_es pes ON publisherEs = pes._id INNER JOIN publishers_jp pjp ON publisherJp = pjp._id INNER JOIN book_type bt ON bookType = bt._id`

    try {        
        req.getConnection((err, conn) => {
            conn.query(query, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchUserCollections = (req, res) => {  
    const { id } = req.params

    let query = `SELECT c._id, c.titleEs, c.titleJp, c.author, c.artist, c.seriesCover, c.description, pes.name pesName, publisherEs, pjp.name pjpName, publisherJp, bt.type btType, bookType, (SELECT user_id FROM user_collections WHERE collection_id = c._id AND user_id = ${id}) user_id FROM collections c INNER JOIN publishers_es pes ON publisherEs = pes._id INNER JOIN publishers_jp pjp ON publisherJp = pjp._id INNER JOIN book_type bt ON bookType = bt._id`

    try {        
        req.getConnection((err, conn) => {
            conn.query(query, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchFollowedCollections = (req, res) => {
    const { id } = req.params

    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT c._id, c.titleEs, c.titleJp, c.author, c.artist, c.seriesCover, c.description, pes.name pesName, publisherEs, pjp.name pjpName, publisherJp, bt.type btType, bookType, uc.user_id FROM collections c INNER JOIN publishers_es pes ON publisherEs = pes._id INNER JOIN publishers_jp pjp ON publisherJp = pjp._id INNER JOIN book_type bt ON bookType = bt._id INNER JOIN user_collections uc ON uc.collection_id = c._id AND uc.user_id = ${id}`, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addCollections = (req, res) => {
    const collection = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            INSERT INTO
             collections (titleEs, titleJp, author, artist, publisherEs, publisherJp, bookType, seriesCover, description)
            VALUES
             ('${collection.titleEs}', '${collection.titleJp}', '${collection.author}', '${collection.artist}',
              ${collection.publisherEs}, ${collection.publisherJp}, ${collection.bookType}, '${req.file ? 'images/' + req.file.filename : collection.actualCover}', '${collection.desc}')`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json({...collection, seriesCover: `images/${req.file.filename}`, _id: parseInt(collection._id)});
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editCollections = (req, res) => {
    const collection = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            UPDATE
             collections
            SET
             titleEs = '${collection.titleEs}', titleJp = '${collection.titleJp}', author = '${collection.author}', artist = '${collection.artist}',
             publisherEs = ${collection.publisherEs}, publisherJp = ${collection.publisherJp}, bookType = ${collection.bookType}, seriesCover = '${req.file ? 'images/' + req.file.filename : collection.actualCover}', description = '${collection.desc}'
            WHERE _id = ${collection._id}`, collection,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json({...collection, seriesCover: `${req.file ? 'images/' + req.file.filename : collection.actualCover}`, _id: parseInt(collection._id)});
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteCollection = (req, res) => {
    const collection = req.body
    const { id } = req.params
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            DELETE FROM
             collections
            WHERE _id = ${id}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json({message: 'Eliminado correctamente'});
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchSeries = (req, res) => {
    const { id, user } = req.params
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT *, (SELECT user_id FROM user_series WHERE vol_id = s._id AND user_id = ${user || 0}) user_id FROM series s WHERE collections_id = ${id}`, (err, rows) => {
                if (err) console.log(err)

                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const fetchAllSeries = (req, res) => {
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT * FROM series`, (err, rows) => {
                if (err) console.log(err)
                console.log(rows)
                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const editSeries = (req, res) => {
    const serie = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            UPDATE
             series
            SET
             volNumber = '${serie.volNumber}', bwPages = ${serie.bwPages}, colorPages = ${serie.colorPages}, releaseDate = '${serie.releaseDate}', price = '${serie.price}',
             volCover = '${req.file ? 'images/' + req.file.filename : serie.actualCover}'
            WHERE _id = ${serie._id}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json({...serie, volCover: `${req.file ? 'images/' + req.file.filename : serie.actualCover}`, _id: parseInt(serie._id)});
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const addSeries = (req, res) => {
    const serie = req.body
    console.log(serie)
    
        req.getConnection((err, conn) => {
            conn.query(`
            INSERT INTO
             series (collections_id, price, bwPages, colorPages, releaseDate, volCover, volNumber)
            VALUES
             (${serie.col_id}, ${serie.price}, ${serie.bwPages}, ${serie.colorPages}, '${serie.releaseDate}', '${req.file ? `images/${req.file.filename}` : serie.actualCover}', '${serie.volNumber}')`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json({...serie, volCover: `${req.file ? 'images/' + req.file.filename : serie.actualCover}`, _id: parseInt(serie._id)});
            });
        });        
    
}

export const deleteSeries = (req, res) => {
    const { id } = req.params
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            DELETE FROM
             series
            WHERE _id = ${id}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json(id);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const followCollection = (req, res) => {
    const info = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            INSERT INTO
             user_collections (collection_id, user_id)
            VALUES
             (${info.col}, ${info.user})`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json(info);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const unfollowCollection = (req, res) => {
    const info = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            DELETE FROM
             user_collections
            WHERE collection_id = ${info.col} AND user_id = ${info.user}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json(info);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const followSerie = (req, res) => {
    const info = req.body
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            INSERT INTO
             user_series (vol_id, user_id)
            VALUES
             (${info.vol}, ${info.user})`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json(info);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const unfollowSerie = (req, res) => {
    const info = req.body
    console.log(info)
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`
            DELETE FROM
             user_series
            WHERE vol_id = ${info.vol} AND user_id = ${info.user}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(201).json(info);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const fetchFollowedSeries = (req, res) => {
    const { user } = req.params
    
    try {        
        req.getConnection((err, conn) => {
            conn.query(`SELECT s.bwPages, s.collections_id, s.colorPages, s.price, s.releaseDate, us.user_id, s.volCover, s.volNumber, s._id FROM series s INNER JOIN user_series us ON s._id = us.vol_id WHERE us.user_id = ${user}`,
            (err, rows) => {
                if (err) console.log(err)
                
                res.status(200).json(rows);
            });
        });        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}