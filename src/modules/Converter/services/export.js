
const mockFetchInitialData = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([
            {conversionSource:'ECB', conversionDate:'2018-3-4-12:21:04-GMT+1', currencySymbol:'CZK', currencyValue:'13.56kč'},
            {conversionSource:'NYC', conversionDate:'2019-3-4-10:36:20-GMT+1', currencySymbol:'USD', currencyValue:'30.22USD'},
            {conversionSource:'ACL', conversionDate:'2019-4-5-13:22:55-GMT+1', currencySymbol:'EUR', currencyValue:'1777.11EUR'}
        ]);
    }, 2000);
})

const mockGetNewData = (data) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            conversionSource: "mock-source",
            conversionDate:"mock-date",
            currencySymbol: data.type,
            currencyValue: data.amount
        });
    }, 1000);
})

export { 
    mockGetNewData,
    mockFetchInitialData
}

