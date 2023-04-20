import db from"../db/conn"

const petSchema = new mongoose.Schema(
   
    {
        name:{
            type: String,
            require:true
        },

        age:{
            type: String,
            require:true
        },

        weigth:{
            type: String,
            require:true
        },

        color:{
            type: String,
            require:true
        },

        images:{
            type: Array,
            require: true
        },

        available:{
            type: Boolean,
        },

        user: Object,
        adopter:Object
    },

    {timestamps: true}
)


const Pet = mongoose.model('Pet', petSchema);

export default Pet