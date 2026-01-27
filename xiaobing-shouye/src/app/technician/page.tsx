'use client';

import { useRef } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function TechnicianPage() {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const advantages = [
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '低门槛入驻',
      description: '无需复杂认证，简单几步即可完成注册，快速接单赚钱',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: '收益可观',
      description: '平台派单稳定，订单量大，多劳多得，收入有保障',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: '时间灵活',
      description: '自由安排工作时间，想什么时候接单就什么时候接单',
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: '安全保障',
      description: '平台担保交易，工单完成后即时结算，资金安全有保障',
    },
  ];

  const steps = [
    { step: '01', title: '扫描二维码', description: '扫描下方师傅端微信公众号二维码' },
    { step: '02', title: '关注公众号', description: '进入公众号并点击关注' },
    { step: '03', title: '点击师傅端', description: '在公众号底部菜单找到"师傅端"入口' },
    { step: '04', title: '完成注册', description: '填写基本信息，即可开始接单赚钱' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              师傅入驻
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              接单赚钱 · 时间自由 · 收益稳定
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <svg
              className="w-8 h-8 text-yellow-600 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-lg text-yellow-800 font-semibold text-center">
              需先关注公众号，通过公众号下方「师傅端」完成注册，未关注将导致完单后无法提现
            </p>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                扫码关注公众号
              </h2>
              <p className="text-lg text-gray-600">
                使用微信扫描下方二维码，立即开始接单赚钱
              </p>
            </div>

            <div ref={qrCodeRef} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-200">
              <div className="flex flex-col items-center">
                {/* QR Code */}
                <img
                  src="/assets/technician-qr.jpg"
                  alt="师傅端公众号二维码"
                  className="w-72 h-72 rounded-2xl shadow-lg object-contain border-4 border-orange-500 mb-6"
                />

                <div className="text-center space-y-2">
                  <p className="text-lg font-semibold text-gray-800">
                    微信扫描上方二维码
                  </p>
                  <p className="text-gray-600">
                    关注后点击底部菜单「师傅端」即可注册
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              为什么选择我们
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              四大优势，让您接单更轻松，收入更稳定
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              入驻流程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              简单四步，即可开始接单赚钱
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-orange-100">
                  <div className="text-5xl font-bold text-orange-600 mb-4 opacity-30">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-orange-400">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              立即入驻，开始赚钱
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              加入我们，让您的技能变现，收获更多
            </p>
            <button
              onClick={() => {
                qrCodeRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
            >
              扫码入驻
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
