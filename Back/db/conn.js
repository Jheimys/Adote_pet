import mongoose from "mongoose"

/* async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/adotepet')
    console.log('Conectou ao mongoose!')
}

main().catch(err => console.log(err)) */

async function main() {
    'mongodb://127.0.0.1:27017/adotepet',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    () => {
      console.log('Connected to MongoDB');
    }
}

main().catch(err => console.log(err))

export default mongoose