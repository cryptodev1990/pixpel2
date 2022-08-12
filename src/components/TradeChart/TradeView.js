import React, { memo, useRef, useEffect, useCallback } from 'react';
import { createChart } from 'lightweight-charts';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var TradeView = function (_a) {
    var initialChartData = _a.initialChartData, _b = _a.updatedata, updatedata = _b === void 0 ? null : _b, _c = _a.candleStickConfig, candleStickConfig = _c === void 0 ? {} : _c, _d = _a.histogramConfig, histogramConfig = _d === void 0 ? {} : _d, _e = _a.chartLayout, chartLayout = _e === void 0 ? {} : _e, _f = _a.containerStyle, containerStyle = _f === void 0 ? {
        maxWidth: '100%',
        maxHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    } : _f;
    var resizeObserver = useRef();
    var chartContainerRef = useRef();
    var chart = useRef();
    var candleSeries = useRef();
    var volumeSeries = useRef();
    var setInitialData = useCallback(function () {
        var _a, _b;
        candleSeries.current =
            (_a = chart === null || chart === void 0 ? void 0 : chart.current) === null || _a === void 0 ? void 0 : _a.addCandlestickSeries(candleStickConfig);
        candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current.setData(initialChartData);
        volumeSeries.current = chart.current.addHistogramSeries(histogramConfig);
        (_b = volumeSeries === null || volumeSeries === void 0 ? void 0 : volumeSeries.current) === null || _b === void 0 ? void 0 : _b.setData(initialChartData);
        candleSeries.current.applyOptions({
            priceFormat: {
                type: 'price',
                precision: 5,
                minMove: 0.001,
            },
        });
    }, [initialChartData, candleStickConfig, histogramConfig]);
    useEffect(function () {
        var _a, _b;
        if (updatedata) {
            (_a = candleSeries === null || candleSeries === void 0 ? void 0 : candleSeries.current) === null || _a === void 0 ? void 0 : _a.update(updatedata);
            (_b = volumeSeries === null || volumeSeries === void 0 ? void 0 : volumeSeries.current) === null || _b === void 0 ? void 0 : _b.update(updatedata);
        }
    }, [updatedata]);
    useEffect(function () {
        chart.current = createChart(chartContainerRef.current, __assign({ width: chartContainerRef.current.clientWidth, height: chartContainerRef.current.clientHeight }, chartLayout));
        setInitialData();
    }, [setInitialData, chartLayout]);
    // Resize chart on container resizes.
    useEffect(function () {
        resizeObserver.current = new ResizeObserver(function (entries) {
            var _a = entries[0].contentRect, width = _a.width, height = _a.height;
            chart.current.applyOptions({
                width: width,
                height: height,
                priceFormat: {
                    type: 'price',
                    precision: 5,
                    minMove: 0.001,
                },
            });
        });
        resizeObserver.current.observe(chartContainerRef.current);
        return function () { return resizeObserver.current.disconnect(); };
    }, []);
    return (React.createElement("div", { ref: chartContainerRef, className: "chartContainer", style: containerStyle }));
};
export default memo(TradeView);
