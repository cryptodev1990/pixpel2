export const BASE_URL: "https://api.binance.com/api/v3/klines?";
export const WS_URL: "wss://stream.binance.com:9443/ws";
export namespace condleStickDefaultConfig {
    const upColor: string;
    const downColor: string;
    const borderDownColor: string;
    const borderUpColor: string;
    const wickDownColor: string;
    const wickUpColor: string;
}
export namespace histogramDefaultConfig {
    const base: number;
    const lineWidth: number;
    namespace priceFormat {
        const type: string;
    }
    const overlay: boolean;
    namespace scaleMargins {
        const top: number;
        const bottom: number;
    }
}
export namespace defaultChartLayout {
    namespace layout {
        const backgroundColor: string;
        const textColor: string;
    }
    namespace grid {
        namespace vertLines {
            const color: string;
            const style: LineStyle;
        }
        namespace horzLines {
            const color_1: string;
            export { color_1 as color };
            const style_1: LineStyle;
            export { style_1 as style };
        }
    }
    namespace crosshair {
        const mode: CrosshairMode;
    }
    namespace priceScale {
        const borderColor: string;
    }
    namespace timeScale {
        const borderColor_1: string;
        export { borderColor_1 as borderColor };
        export const timeVisible: boolean;
        export const secondsVisible: boolean;
    }
}
import { LineStyle } from "lightweight-charts";
import { CrosshairMode } from "lightweight-charts";
