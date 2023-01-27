function configDB(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/mydb');
        console.log('db connected!');
    } catch (error) {
        console.log(error);
    }
}