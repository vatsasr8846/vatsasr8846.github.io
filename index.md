---
layout: "default"
title: "📈 PriceAction-EngulfingZone-EA - Automated price action trading for gold"
description: "Trade XAUUSD on the M5 timeframe with this MQL5 Expert Advisor based on pure price action and engulfing zone retests."
---
# 📈 PriceAction-EngulfingZone-EA - Automated price action trading for gold

[![Download PriceAction-EngulfingZone-EA](https://img.shields.io/badge/Download-Release-blue)](https://github.com/vatsasr8846/PriceAction-EngulfingZone-EA)

This software runs on the MetaTrader 5 platform. It trades gold against the US dollar on the 5-minute timeframe. The strategy relies on price action and engulfing patterns to find entry points. It avoids indicators, repainting, and the Martingale strategy.

## 🛠 Prerequisites

You need the following items to run this trading bot:

*   A Windows computer or a Virtual Private Server (VPS).
*   MetaTrader 5 installed on your computer.
*   A trading account with a broker that offers XAUUSD.
*   Basic knowledge of how to log in to your trading account.

## 📥 How to download the software

Follow these steps to obtain the program files:

1. Visit the [official repository page](https://github.com/vatsasr8846/PriceAction-EngulfingZone-EA).
2. Click the green "Code" button.
3. Select "Download ZIP" from the menu.
4. Save the file to your computer.
5. Right-click the folder and select "Extract All" to see the files inside.

The main file you need has the .ex5 extension. This is the compiled robot file for MetaTrader 5.

## ⚙️ Installation steps

MetaTrader 5 requires you to place the file in a specific folder to recognize it as an expert advisor. Follow these steps carefully:

1. Open MetaTrader 5.
2. Click "File" in the top menu bar.
3. Select "Open Data Folder." A file window will appear.
4. Open the "MQL5" folder.
5. Open the "Experts" folder.
6. Drag the .ex5 file from your downloaded folder into this "Experts" folder.
7. Close the data folder window.
8. Go back to MetaTrader 5.
9. Right-click the "Expert Advisors" section in the Navigator window on the left.
10. Click "Refresh." The file will now appear in your list.

## 🚀 Setting up the robot

To start the software, perform these actions:

1. Open a chart for XAUUSD.
2. Set the timeframe to M5.
3. Find your robot in the "Navigator" panel under "Expert Advisors."
4. Drag the robot onto the chart.
5. A settings window will appear. 
6. Check the box labeled "Allow algorithmic trading" in the "Common" tab.
7. Click "OK."
8. Ensure the "Algo Trading" button at the top of your MetaTrader window is green.

## 🔍 Strategy details

The robot looks for engulfing candles on the 5-minute chart. An engulfing pattern happens when a candle completely covers the body of the previous candle. This suggests a shift in market momentum. The system identifies these zones as potential supply or demand areas. 

When price returns to these zones, the robot prepares to enter a trade. It does not use indicators like Moving Averages or RSI. It reads the raw price movement. Because it ignores indicators, it avoids the lag common in many other systems.

## 🛡 Risk management

This robot manages trades without Martingale. Martingale involves increasing position sizes after losses, which can risk your entire account. This robot uses fixed or calculated risk per trade. 

We recommend testing this strategy on a demo account first. A demo account allows you to see how the robot handles market volatility without using real money. Observe the robot for at least one or two weeks on a demo account before you decide to run it on a live account.

## 🔧 Troubleshooting

If the robot does not open trades, check these items:

*   **Algo Trading Button:** Is the button at the top of the MetaTrader window green? If it is red, the robot cannot trade.
*   **Permissions:** Did you check "Allow algorithmic trading" in the settings window when you attached the robot to the chart?
*   **Timeframe:** Is your chart set to the M5 timeframe? The robot is designed specifically for this timeframe.
*   **Log Files:** Right-click the chart, select "Expert Advisor," and choose "Log." This file shows why the robot might not be opening trades.

## 📋 System Requirements

*   **Operating System:** Windows 10 or 11.
*   **RAM:** 4GB minimum.
*   **Internet:** Stable connection to ensure trade execution.
*   **Platform:** MetaTrader 5 terminal provided by your broker.

Keywords: algorithmic-trading, engulfing-pattern, expert-advisor, forex, gold-trading, metatrader5, mql5, mt5-ea, price-action, supply-demand-zones, trading-bot, trading-strategy, xauusd