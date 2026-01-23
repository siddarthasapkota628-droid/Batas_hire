import React from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const HomeTemplateDetail: React.FC<{ page: any; supplemental: any }> = ({ page, supplemental }) => {
    // We can use these new fields here!
    const {
        heroBadge1,
        heroBadge2,
        heroRating,
        heroTitlePart1,
        heroTitlePart2,
        heroSubtitle,
        floatingFeatures,
        heroStats,
        journeyTitle,
        journeyDescription,
        journeyCards,
        quickToolsTitle,
        quickTools,
        trustTitle,
        trustStats,
        certificationTitle,
        badges,
        homeProductsConfig,
        homeTestimonialsConfig,
        homeKnowledgeConfig,
    } = page;

    // Slice supplemental data based on config
    const products = supplemental?.products?.slice(0, homeProductsConfig?.maxRows || 4) || [];
    const testimonials = supplemental?.testimonials?.slice(0, homeTestimonialsConfig?.maxRows || 4) || [];
    const articles = supplemental?.articles?.slice(0, homeKnowledgeConfig?.maxRows || 4) || [];

    return (
        <div className="home-template">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden bg-white">
                <div className="container relative z-10 text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                        {heroBadge1 && <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-orange-100">{heroBadge1}</span>}
                        {heroBadge2 && <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100">{heroBadge2}</span>}
                        {heroRating && <span className="bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-yellow-100 flex items-center gap-1">★ {heroRating} Rating</span>}
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-gray-900">
                        {heroTitlePart1}<br />
                        <span className="text-red-500">{heroTitlePart2}</span>
                    </h1>

                    <p className="max-w-xl mx-auto md:mx-0 text-xl text-gray-500 mb-12 leading-relaxed">
                        {heroSubtitle}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16">
                        {floatingFeatures?.map((tag: any, i: number) => (
                            <span key={i} className="flex items-center gap-2 bg-white shadow-sm border border-gray-100 px-5 py-3 rounded-2xl font-bold text-gray-700">
                                <span className="text-green-500 bg-green-50 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">✓</span> {tag.text}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
                        {heroStats?.map((stat: any, i: number) => (
                            <div key={i}>
                                <div className="text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent -z-10 opacity-50 hidden lg:block" />
            </section>

            {/* Journey Section */}
            <section className="py-32 bg-gray-50 text-center">
                <div className="container">
                    <h2 className="text-5xl font-black mb-6 text-gray-900">{journeyTitle}</h2>
                    <p className="text-xl text-gray-500 mb-20 max-w-3xl mx-auto">{journeyDescription}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {journeyCards?.map((card: any, i: number) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group text-left border border-white hover:border-red-100">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 text-3xl mb-8 group-hover:scale-110 transition-transform">
                                    {/* Icon placeholder logic could go here */}
                                    <span className="opacity-70">[{card.icon}]</span>
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-red-500 transition-colors">{card.title}</h3>
                                <p className="text-gray-500 mb-8 leading-relaxed">{card.description}</p>
                                <button className="text-red-500 font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                                    {card.linkText} <span className="text-xl">→</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products (Services) Feed */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-black mb-6 text-gray-900">{homeProductsConfig?.title}</h2>
                            <p className="text-xl text-gray-500 leading-relaxed">{homeProductsConfig?.description}</p>
                        </div>
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-500 transition-colors">
                            View All Services
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product: any, i: number) => (
                            <div key={i} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-64">
                                    {product.image && typeof product.image === 'object' && (
                                        <Media resource={product.image} fill imgClassName="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    )}
                                    <div className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 text-2xl shadow-lg">
                                        [{product.icon}]
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-2xl font-black mb-3">{product.title}</h3>
                                    <p className="text-gray-500 mb-8 line-clamp-2">{product.subtitle}</p>

                                    <div className="flex gap-4 border-t border-gray-100 pt-8">
                                        {product.stats?.slice(0, 2).map((s: any, idx: number) => (
                                            <div key={idx} className="flex-1">
                                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</div>
                                                <div className="text-lg font-black text-gray-900">{s.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Tools */}
            <section className="py-32 bg-gray-900 rounded-[4rem] mx-4 md:mx-10 my-20 overflow-hidden relative">
                <div className="container relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-20 text-white text-center">{quickToolsTitle}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {quickTools?.map((tool: any, i: number) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left group hover:bg-white/10 transition-all">
                                <div>
                                    <h3 className="text-3xl font-black mb-4 text-white group-hover:text-red-400 transition-colors">{tool.name}</h3>
                                    <p className="text-gray-400 text-lg mb-8 max-w-md">{tool.description}</p>
                                    <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1">
                                        {tool.buttonText} <span className="ml-2">→</span>
                                    </button>
                                </div>
                                <div className="text-white/20 text-9xl font-black group-hover:text-red-500/20 transition-colors">[{tool.icon}]</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 blur-[120px] rounded-full" />
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
            </section>

            {/* Trust Stats */}
            <section className="py-32 bg-white text-center">
                <div className="container">
                    <h2 className="text-5xl font-black mb-20 text-gray-900 tracking-tight">{trustTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {trustStats?.map((stat: any, i: number) => (
                            <div key={i} className="bg-white border border-gray-100 p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                <div className="text-5xl font-black mb-4 text-red-500 tracking-tighter">{stat.value}</div>
                                <div className="text-xl font-bold mb-2 text-gray-900">{stat.label}</div>
                                <div className="text-xs font-black text-gray-300 uppercase tracking-[0.2em]">{stat.subLabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-black mb-6 text-gray-900">{homeTestimonialsConfig?.title}</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">{homeTestimonialsConfig?.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((t: any, i: number) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-gray-100 relative">
                                <div className="text-yellow-400 text-xl mb-6">
                                    {'★'.repeat(t.rating || 5)}{'☆'.repeat(5 - (t.rating || 5))}
                                </div>
                                <p className="text-gray-600 text-lg mb-10 italic leading-relaxed">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-black text-xl">
                                        {t.name?.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-black text-gray-900 text-lg">{t.name}</div>
                                        <div className="text-sm text-gray-400 font-bold">{t.role} • {t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Knowledge Center */}
            <section className="py-32 bg-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-black mb-6 text-gray-900">{homeKnowledgeConfig?.title}</h2>
                            <p className="text-xl text-gray-500 leading-relaxed">{homeKnowledgeConfig?.description}</p>
                        </div>
                        <button className="text-gray-900 font-black flex items-center gap-3 group">
                            Explore Knowledge Center <span className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">→</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {articles.map((art: any, i: number) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="h-2 w-full bg-gray-100 mb-8 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-0 group-hover:w-full transition-all duration-500" />
                                </div>
                                <div className="text-xs font-black text-red-500 uppercase tracking-widest mb-4">{art.category} • {art.readTime}</div>
                                <h3 className="text-2xl font-black mb-6 text-gray-900 group-hover:text-red-500 transition-colors leading-snug">{art.title}</h3>
                                <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed">{art.excerpt}</p>
                                <div className="text-sm font-bold text-gray-400">{art.date} • By {art.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Licensed Badges */}
            <section className="py-24 border-t border-gray-100">
                <div className="container">
                    <h3 className="text-center text-sm font-black text-gray-300 uppercase tracking-[0.5em] mb-16">{certificationTitle}</h3>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
                        {badges?.map((badge: any, i: number) => (
                            <div key={i} className="flex items-center gap-5 grayscale hover:grayscale-0 transition-all cursor-default">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 text-3xl border border-gray-100">[{badge.icon}]</div>
                                <div className="text-left">
                                    <div className="font-black text-gray-900 text-base leading-none mb-1.5">{badge.title}</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{badge.subTitle}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
