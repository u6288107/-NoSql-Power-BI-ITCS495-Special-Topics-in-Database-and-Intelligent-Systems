use netflix_db

/* Query 1 */
db.Netflix.find({rating: R},{title:1,type:1,rating:1}).sort({title:1})

/* Query 2 */
db.Netflix.find({release_year: {$gte: 2010}, genres: {$regex: /^Action.*/}},{type:1, title:1, director:1, cast:1, country:1, rating:1, duration:1, genres:1, description:1})

/* Query 3 */
db.Netflix.find({
    $and: [
        {$or: [
            {rating: 'TV-14'}, 
            {rating: 'PG-13'}
            ]
        }, 
        {$or: [
            {genres: {$regex: /International.*/}},
            {title: {$regex: /^h.*/}}
            ]
        }
    ]
},
{
    type: 1, title: 1, director: 1, rating: 1, genres: 1, description: 1
}).sort({ title:-1 })

