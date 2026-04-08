'use client';

export default function PaymentFail() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <title>支付失败 - 小兵速帮</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-red-50 text-gray-900">
        <div className="text-6xl mb-5">❌</div>
        <h2 className="text-2xl font-bold mb-3">支付失败</h2>
        <p className="text-gray-600 mb-8">
          网络异常或系统故障，请稍后重新尝试。<br />
          如有疑问请联系 <strong>小兵速帮</strong> 客服。
        </p>
        <button
          onClick={handleRetry}
          className="px-5 py-2.5 text-base bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          重新尝试
        </button>
      </div>
    </>
  );
}
