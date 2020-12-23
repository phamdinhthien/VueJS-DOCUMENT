var APIConfig = {
    development: 'https://jsonplaceholder.typicode.com',
    production: 'local:8081'
}

export default APIConfig[process.env.NODE_ENV];