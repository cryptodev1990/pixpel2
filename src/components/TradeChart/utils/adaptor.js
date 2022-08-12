export var candleStickAdaptor = function (data) {
    var openTime = data[0], open = data[1], high = data[2], low = data[3], close = data[4], volume = data[5], closeTime = data[6], quoteAssetVolume = data[7], numberOfTrades = data[8], takerBuyBaseAssetVolume = data[9], takerBuyQuotessetVolume = data[10], ignore = data[11];
    return {
        time: openTime / 1000,
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        close: parseFloat(close),
        value: parseFloat(volume),
        color: open < close ? "#2EBD85" : "#F6465D",
        // closeTime,
        // quoteAssetVolume,
        // numberOfTrades,
        // takerBuyBaseAssetVolume,
        // takerBuyQuotessetVolume,
        // ignore,
    };
};
export var candleSocketAdaptor = function (data) {
    var _a = data.k, T = _a.T, o = _a.o, c = _a.c, h = _a.h, l = _a.l, v = _a.v, V = _a.V;
    return {
        open: parseFloat(o),
        high: parseFloat(h),
        low: parseFloat(l),
        close: parseFloat(c),
        time: T / 1000,
        value: (parseFloat(v) + parseFloat(V)) / 2,
        color: o < c ? "#2EBD85" : "#F6465D",
    };
};
