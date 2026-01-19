import { useState, useEffect } from 'react';
import { Music, ChevronLeft, ChevronDown, BookOpen } from 'lucide-react';
import { MANTRA_DATA, STOTRA_DATA } from '../../data/static/pageContents';
import type { ContentBlock } from '../../types/types';


type TabType = 'MANTRA' | 'STOTRA';

export const MantraSection = ({ onBack }: { onBack: () => void }) => {
	const [expandedId, setExpandedId] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<TabType>('MANTRA');

	const activeData = activeTab === 'MANTRA' ? MANTRA_DATA : STOTRA_DATA;

	//  Scroll Handling
	useEffect(() => {
		if (expandedId) {
			const element = document.getElementById(`item-${expandedId}`);

			if (element) {
				setTimeout(() => {
					element.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}, 100);
			}
		}
	}, [expandedId]);

	const renderContent = (blocks: ContentBlock[]) => {
		return blocks.map((block, index) => {
			switch (block.type) {
				case 'heading':
					return (
						<h4 key={index} className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-4 mb-2 first:mt-0">
							{block.text}
						</h4>
					);
				case 'verse':
					return (
						<div key={index} className="my-3 text-center">
							<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-5 rounded-xl border border-amber-100 dark:border-gray-700 shadow-sm">
								<p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed font-serif text-center mb-3 whitespace-pre-line">
									{block.text}
								</p>
								{block.translation && (
									<p className="text-sm text-gray-600 dark:text-gray-400 italic border-t border-amber-200 dark:border-gray-700 pt-3">
										{block.translation}
									</p>
								)}
							</div>
						</div>
					);
				case 'paragraph':
					return (
						<p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-3">
							{block.text}
						</p>
					);
				case 'image':
					return (
						<figure key={index} className="my-4">
							<img src={block.src} alt={block.alt} className="w-full h-48 object-cover rounded-xl shadow-sm" />
						</figure>
					);
				default:
					return null;
			}
		});
	};

	return (
		<div className="flex flex-col h-full bg-slate-50 dark:bg-gray-900 animate-in slide-in-from-right duration-200">
			{/* App Bar */}
			<div className="bg-white dark:bg-gray-800 px-4 h-14 flex items-center gap-4 sticky top-0 z-20 shadow-sm border-b border-gray-100 dark:border-gray-700">
				<button onClick={onBack} className="p-2 -ml-2 rounded-full active:bg-gray-100 dark:active:bg-gray-700 transition-colors">
					<ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
				</button>
				<h1 className="font-semibold text-xl text-gray-800 dark:text-gray-100">मन्त्र तथा स्तोत्र</h1>
			</div>

			{/* Tab Switcher */}
			<div className="px-4 pt-4 pb-2">
				<div className="flex p-1 bg-gray-200 dark:bg-gray-800 rounded-xl">
					<button
						onClick={() => { setActiveTab('MANTRA'); setExpandedId(null); }}
						className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${activeTab === 'MANTRA'
								? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
								: 'text-gray-600 dark:text-gray-400 hover:bg-gray-300/50 dark:hover:bg-gray-700/50'
							}`}
					>
						<Music size={16} /> मन्त्र
					</button>
					<button
						onClick={() => { setActiveTab('STOTRA'); setExpandedId(null); }}
						className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all ${activeTab === 'STOTRA'
								? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
								: 'text-gray-600 dark:text-gray-400 hover:bg-gray-300/50 dark:hover:bg-gray-700/50'
							}`}
					>
						<BookOpen size={16} /> स्तोत्र
					</button>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto p-4 space-y-3">
				{activeData.map((item) => (
					<div
						key={item.id}
						id={`item-${item.id}`}
						className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-20 transition-all duration-300"
					>
						<button
							className="w-full flex items-center justify-between p-4 text-left active:bg-gray-50 dark:active:bg-gray-700/50 transition-colors"
							onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 flex-shrink-0 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
									{activeTab === 'MANTRA' ? <Music size={22} /> : <BookOpen size={22} />}
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{item.title}</h3>
									{item.subtitle && <p className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</p>}
								</div>
							</div>
							<ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedId === item.id ? 'rotate-180' : ''}`} />
						</button>
						{expandedId === item.id && (
							<div className="px-4 pb-5">
								<div className="h-px w-full bg-gray-100 dark:bg-gray-700 mb-4"></div>
								{renderContent(item.content)}
							</div>
						)}
					</div>
				))}

				<p className="text-center text-xs text-gray-400 mt-6 pb-2">
					थप सामग्री आगामी अपडेटमा थपिनेछन्।
				</p>
			</div>
		</div>
	);
};