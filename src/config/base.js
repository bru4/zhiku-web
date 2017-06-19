var baseUrl = ''

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'xxx'
}else if(process.env.NODE_ENV == 'production'){
    baseUrl = 'xxxxxxxx'
}

export { baseUrl }