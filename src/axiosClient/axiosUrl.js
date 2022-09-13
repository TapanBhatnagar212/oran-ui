
export const KONG_PROXY = "http://cb274bc0-0d81-4392-87fb-7966a71dd493.mock.pstmn.io" // port 32080
// export const KONG_PROXY = ":32080" // port 32080
export const NEXRAN_BASE_URL = "http://cb274bc0-0d81-4392-87fb-7966a71dd493.mock.pstmn.io" // port 8000
// export const NEXRAN_BASE_URL = ":8000" // port 8000
const fetchUrl = (url, baseUrl) => {
    return baseUrl + url;
};

export default fetchUrl;