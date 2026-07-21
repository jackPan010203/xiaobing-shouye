import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function AboutPage() {
  const values = [
    {
      title: '专业',
      description: '拥有专业的团队和丰富的行业经验，为客户提供专业的服务',
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: '安全',
      description: '采用先进的安全技术，确保客户数据和业务安全',
      icon: (
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: '高效',
      description: '智能化流程设计，快速响应需求，提供高效服务',
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: '创新',
      description: '持续创新，不断优化服务，为客户创造更大价值',
      icon: (
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ];

  const milestones = [
    { year: '2016', title: '【初创启航】', description: '品牌正式成立，聚焦本地居家安装维修服务，搭建核心运营团队，确立标准化服务流程与服务规范' },
    { year: '2018', title: '【区域扩张】', description: '完成多省市服务网点布局，线下合作师傅突破 1 万 +，实现区域化规模化服务交付，服务口碑稳步积累' },
    { year: '2020', title: '【数字化升级】', description: '上线线上服务平台与智能派单系统，实现师傅资质线上审核、工单全程溯源，服务效率与管控能力双提升' },
    { year: '2021', title: '【服务升级】', description: '完善师傅分级考核与培训体系，上线售后专属回访机制，客户服务满意度大幅提升' },
    { year: '2022', title: '【全国布局】', description: '完成全国主要城市服务网络全覆盖，正式跻身全国性第三方服务平台行列，累计服务家庭超百万户' },
    { year: '2023', title: '【品类拓展】', description: '新增全品类居家生活安装维修服务，实现家庭服务场景全覆盖，服务边界持续延伸' },
    { year: '2024', title: '【规模跃升】', description: '线下合作专业师傅突破 10 万 +，升级智能调度系统，实现全国工单高效匹配与响应' },
    { year: '2025', title: '【生态深耕】', description: '持续优化平台服务生态，拓展家庭全场景上门服务品类，深化 "线上高效对接 + 线下专业落地" 的服务模式' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 pt-32 pb-20">
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
              关于我们
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              专业服务 · 安全可靠 · 高效便捷
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              小兵速帮是第三方上门安装维修服务平台，面向线上商家、家庭用户提供一站式上门安装维修服务。经过多年深耕发展，平台集结大量持证线下服务师傅，搭建起多城市覆盖的完善服务网络体系。我们始终秉持 “专业服务、安全可靠、高效便捷” 的服务理念，为广大客户提供标准化上门安装、维修及售后保障全流程服务。依托规范化服务流程与持证专业师傅团队，持续优化上门服务全流程，不断简化报修、派单、售后环节。未来，小兵速帮将坚守服务初心、持续迭代创新，不断升级服务标准与数字化调度体系，为客户打造省心、透明、有保障的上门服务体验，助力本地生活服务行业高质量发展。
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">7+</div>
                    <div className="text-gray-600">年行业经验</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-600">服务客户</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                    <div className="text-gray-600">客户满意度</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">7×24</div>
                    <div className="text-gray-600">小时服务</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              核心价值观
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们的理念和价值观指引着我们的每一个决定和行动
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 text-green-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              回顾我们的发展历程，每一个脚印都见证着我们的成长
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-green-100">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              联系我们
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              如果您有任何问题或合作意向，欢迎随时与我们联系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-white font-semibold mb-1">邮箱</p>
              <p className="text-green-100 text-sm">124682379@qq.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p className="text-white font-semibold mb-1">电话</p>
              <p className="text-green-100 text-sm">19847960455</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="text-white font-semibold mb-1">服务热线</p>
              <p className="text-green-100 text-sm">400-001-9693</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <svg
                className="w-10 h-10 mx-auto mb-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-white font-semibold mb-1">地址</p>
              <p className="text-green-100 text-sm">包头市昆区黄河大街</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
