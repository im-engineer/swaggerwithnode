const config = {
    local : {
        db :{
            host : "localhost",
            port : 27017,
            databaseName : "siddhant",
            userName:"",
            password:""
        },
        api_port : 5001,
        client_secret_key:"thsgsjs",
        app: {
            host: "localhost",
            port: 5001 
        }
    },
    staging:{
        db :{
            host :"172.10.1.3",
            port :27017,
            databaseName :"siddhantsingh", 
            userName :"siddhantsingh",
            password :"siddhantsingh87"
        },api_port:9898,
        app: {
            host: "http://172.10.1.3", 
            port: 9898,
            name: "Swagger Implementation",
            swaggerURL: "http://172.10.1.3:9898",
            swaggerPort: "172.10.1.3:9898",
        }
    }
}

export const get = (env) => {
        return config[env]
}
export default get;
