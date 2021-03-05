import axios from "axios";

import {axiosURL} from "../config/axios";

const GetTransactions = (pair, token, limit, offset, starting, sortBy) => {
    let req = '/transactions';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {
                    'token': token,
                    'pair': pair,
                    'limit': limit,
                    'offset': offset,
                    'starting': starting,
                    'sortBy': sortBy
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetUserBalance = (token, user) => {
    let req = '/balance';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {
                    'token': token,
                    'user': user,
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetUserTransactions = (user, pair, token, limit, offset) => {
    let req = '/usertransactions';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {
                    'token': token,
                    'user': user,
                    'pair': pair,
                    'limit': limit,
                    'offset': offset
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetNetChartData = (time, pair, token, min, max) => {
    let req = '/netchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetVolumeChartData = (time, pair, token, min, max) => {
    let req = '/volchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetBuyChartData = (time, pair, token, min, max) => {
    let req = '/buychart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetSellChartData = (time, pair, token, min, max) => {
    let req = '/sellchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

// const GetUserChartData = (user, time, pair, token, min, max) => {
//     let req=  '/getchart' ;

//     return new Promise((resolve, reject) => {
//         axiosURL
//             .get(req,{ params : {
//                     'token': token,
//                     'pair': pair,
//                     'time': time,
//                     'min': min,
//                     'max': max,
//                     'user': user
//                 }
//             })

//             .then((res) => {
//                 let result = res.data;
//                 resolve(result);
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     });
// };
const GetUserNetChartData = (user, time, pair, token, min, max) => {
    let req = '/usernetchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max,
                    'user': user
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetUserVolumeChartData = (user, time, pair, token, min, max) => {
    let req = '/uservolchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max,
                    'user': user
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetUserBuyChartData = (user, time, pair, token, min, max) => {
    let req = '/userbuychart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max,
                    'user': user
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GetUserSellChartData = (user, time, pair, token, min, max) => {
    let req = '/usersellchart';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {

                    'time': time,
                    'token': token,
                    'pair': pair,
                    'min': min,
                    'max': max,
                    'user': user
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const GetCount = (pair, token, starting) => {
    let req = '/count';

    return new Promise((resolve, reject) => {
        axiosURL
            .get(req, {
                params: {
                    'token': token,
                    'pair': pair,
                    'starting': starting
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const GetUserTxCount = (pair, token, user) => {
  let req = '/usertxcount';
  console.log(pair,token,user)
  return new Promise((resolve, reject) => {
      axiosURL
          .get(req, {
              params: {
                  'token': token,
                  'pair': pair,
                  'user': user
              }
          })

          .then((res) => {
              let result = res.data;
              resolve(result);
          })
          .catch((err) => {
              reject(err);
          });
  });
};


const GetPrice = async (time, token) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${token}/market_chart/range`, {
            params: {
                from: parseInt(time) - 60,
                to: parseInt(time) + 60,
                vs_currency: 'usd'
            }
        })
        return response.data.prices.length > 0 ? response.data.prices[0][1] : 0
    } catch (error) {
        console.log(error)
    }
}

const GetSignals = (pair, token, starting, threshold,limit,page) => {
    let req=  '/signals' ;
    return new Promise((resolve, reject) => {
        axiosURL
            .get(req,{ params : {
                    'token': token,
                    'pair': pair,
                    'starting': starting,
                    'threshold': threshold,
                    'limit': limit,
                    'offset': page
                }
            })

            .then((res) => {
                let result = res.data;
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const GetSignalsCount = (pair, token, starting, threshold) => {
  let req=  '/signalscount' ;

  return new Promise((resolve, reject) => {
      axiosURL
          .get(req,{ params : {
                  'token': token,
                  'pair': pair,
                  'starting': starting,
                  'threshold': threshold
              }
          })

          .then((res) => {
              let result = res.data;
              resolve(result);
          })
          .catch((err) => {
              reject(err);
          });
  });
};
export {
    GetCount,
    GetTransactions,
    GetUserBalance,
    GetUserTransactions,
    GetNetChartData,
    GetVolumeChartData,
    GetBuyChartData,
    GetSellChartData,
    GetPrice,
    GetUserBuyChartData,
    GetUserNetChartData,
    GetUserSellChartData,
    GetUserVolumeChartData,
    GetUserTxCount,
    GetSignals,
    GetSignalsCount
};
