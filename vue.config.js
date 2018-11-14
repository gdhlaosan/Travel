const mockdata = require('./mock/index.json');

module.exports={
  devServer: {
    port: 8080,
    before(app){
      app.get('/home/api',(req,res,next)=>{
        res.json(mockdata);
      })
    }
  }
}