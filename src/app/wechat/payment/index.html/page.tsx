'use client';

import { useEffect } from 'react';

export default function PaymentIndex() {
  useEffect(() => {
    // 动态加载微信JS-SDK
    const script = document.createElement('script');
    script.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      initWeChatPay();
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const getQueryParams = () => {
    const params: Record<string, string> = {};
    const search = window.location.search.substring(1);
    search.split('&').forEach((part) => {
      const [key, value] = part.split('=');
      if (key && value) {
        params[key] = decodeURIComponent(value);
      }
    });
    return params;
  };

  const initWeChatPay = () => {
    // @ts-ignore - 微信SDK全局对象
    const wx = window.wx;
    if (!wx) {
      alert('微信JS-SDK加载失败');
      return;
    }

    const query = getQueryParams();

    wx.config({
      debug: false,
      appId: query.appId,
      timestamp: parseInt(query.timeStamp || '0', 10),
      nonceStr: query.nonceStr,
      signature: query.paySign,
      jsApiList: ['chooseWXPay'],
    });

    wx.ready(() => {
      wx.chooseWXPay({
        timestamp: parseInt(query.timeStamp || '0', 10),
        nonceStr: query.nonceStr,
        package: query.package,
        signType: query.signType,
        paySign: query.paySign,
        success: () => {
          window.location.href = '/wechat/payment/success.html';
        },
        cancel: () => {
          window.location.href = '/wechat/payment/cancel.html';
        },
        fail: () => {
          window.location.href = '/wechat/payment/fail.html';
        },
      });
    });

    wx.error((res: any) => {
      alert('微信配置失败：' + res.errMsg);
    });
  };

  return (
    <>
      <title>正在发起支付 - 小兵速帮</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-blue-50 text-gray-900">
        <div className="mb-8">
          <div className="w-12 h-12 border-6 border-teal-100 border-t-green-500 rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="text-lg font-semibold mb-2.5">正在发起微信支付</h2>
        <p className="text-sm text-gray-600 mb-1.25">请勿关闭页面...</p>
        <div className="text-base text-gray-500 mt-5">商户：小兵速帮</div>
      </div>
    </>
  );
}
