export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 text-gray-900">
      <div className="text-6xl mb-5">✅</div>
      <h2 className="text-2xl font-bold mb-3">支付成功</h2>
      <p className="text-gray-600 mb-8">
        感谢您使用 <strong>小兵速帮</strong> 服务！
      </p>
    </div>
  );
}

export const metadata = {
  title: '支付成功 - 小兵速帮',
};
