import { candleStickAdaptor } from "./adaptor";
export var parseCandleStickData = function (candleArray) {
    if (candleArray === void 0) { candleArray = []; }
    var transformedData = candleArray.reduce(function (accu, curr) {
        var candle = candleStickAdaptor(curr);
        accu.push(candle);
        return accu;
    }, []);
    return transformedData;
};
