const mockdata = require('./mock/index.json');
const mockCityData = require('./mock/city.json');

module.exports={
  devServer: {
    port: 8080,
    before(app){
	    app.get('/api/home',(req,res,next)=>{
	        res.json(mockdata);
	    })
	    app.get('/api/city',(req,res,next)=>{
	        res.json(mockCityData);
	    })
    }
  }
}