var baseUrl = ''

// 本地跟线上的变量设置
if (process.env.NODE_ENV == 'development') {
    baseUrl = ''
}else if(process.env.NODE_ENV == 'production'){
    baseUrl = ''
}

export { baseUrl }