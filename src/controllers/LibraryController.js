const mongoose = require('mongoose')

const librarySchema = new  mongoose.Schema({
    Name: String,
    TitleImage: String,
    CreateDate: Date,
    UpdateDate: Date,
    Episode: {
        EpisodeNo: String,
        URL: []
    }
})
const LibraryCollection = mongoose.model('librarycollections', librarySchema, 'LibraryCollections')

exports.LibraryController = {
    
    GetLibrary: async (req, res) => {
        try {
            const library = await LibraryCollection.find();
            return res.status(200).json(library)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    GetlibraryByName: async (req, res) => {
        try {
            var name = req.query.name
            const library = await LibraryCollection.find({ Name: name });
            return res.status(200).json(library)
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
}

