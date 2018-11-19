const mockdata = require('./mock/index.json');
const mockCityData = require('./mock/city.json');
const mockDerailData = require('./mock/detail.json');

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
	    app.get('/api/detail',(req,res,next)=>{
	        res.json(mockDerailData);
	    })
    }
  }
}