export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-orange-50 text-gray-900">
      <div className="text-6xl mb-5">⚠️</div>
      <h2 className="text-2xl font-bold mb-3">您已取消支付</h2>
      <p className="text-gray-600 mb-8">
        订单尚未完成，如需继续，请返回 <strong>小兵速帮</strong> 重新支付。
      </p>
    </div>
  );
}

export const metadata = {
  title: '支付已取消 - 小兵速帮',
};
