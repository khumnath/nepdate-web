import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { BLOG_DATA, Blog } from '../../data/blogs';
import { BlogCard } from './BlogCard';

interface BlogWidgetProps {
    currentBsMonth: number;
    activeSystem: 'bs' | 'ad';
    onBlogClick: (blog: Blog) => void;
    onViewAll: () => void;
}

export const BlogWidget: React.FC<BlogWidgetProps> = ({ currentBsMonth, activeSystem, onBlogClick, onViewAll }) => {
    // 1. Filter blogs for the current month (primary)
    // tag matches string representation of month index (1-12)
    const monthKey = currentBsMonth.toString();

    // Use activeSystem to determine language/date format in future if needed
    // For now, simple console log to silence lint or just ignore
    // console.log(activeSystem); 

    let displayBlogs = BLOG_DATA.filter(blog => blog.tags.includes(monthKey));

    // 2. If filtering by month yields fewer than 12 blogs, fill with 'general' or most recent blogs
    if (displayBlogs.length < 12) {
        // STRICT FILTERING: Exclude ANY blog that is specific to a month (tags '1' to '12')
        // We only want "Generic" blogs (Vastu, Dharma, Science, etc.) to fill gaps.
        const allMonthTags = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

        let otherBlogs = BLOG_DATA.filter(blog => {
            const isMonthSpecific = blog.tags.some(t => allMonthTags.includes(t));
            const alreadyShown = displayBlogs.some(db => db.id === blog.id);
            return !isMonthSpecific && !alreadyShown;
        });

        // --- Daily Rotation Logic (Seeded Shuffle) ---
        // Use current date string as seed to ensure same order for the whole day, but different every day.
        const todayStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"

        // Simple string hash for seed
        let seed = 0;
        for (let i = 0; i < todayStr.length; i++) {
            seed = ((seed << 5) - seed) + todayStr.charCodeAt(i);
            seed |= 0; // Convert to 32bit integer
        }

        // Seeded random function
        const seededRandom = () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };

        // Fisher-Yates shuffle
        for (let i = otherBlogs.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom() * (i + 1));
            [otherBlogs[i], otherBlogs[j]] = [otherBlogs[j], otherBlogs[i]];
        }

        const needed = 12 - displayBlogs.length;
        displayBlogs = [...displayBlogs, ...otherBlogs.slice(0, needed)];
    }

    // Ensure we don't exceed 12
    displayBlogs = displayBlogs.slice(0, 12);

    if (displayBlogs.length === 0) return null;

    return (
        <div className="mt-6">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-sm">
                        <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-none">
                            धर्म र संस्कृति
                        </h2>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 block">
                            चाडपर्व, रीतिथिति र जानकारीहरू
                        </span>
                    </div>
                </div>
                {/* <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-1">
                    सबै हेर्नुहोस् <ArrowRight size={14} />
                </button> */}
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {displayBlogs.map((blog) => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                        onClick={onBlogClick}
                    />
                ))}
            </div>

            {/* Fallback/Empty State Filler (Optional - if we want to ensure footer gap is filled) */}
            {/* For now, the grid of 3 cards usually fills significant space. */}

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-indigo-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Sparkles className="text-amber-500 w-5 h-5 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        थप धार्मिक जानकारी र लेखहरूको लागि
                    </span>
                </div>
                <button
                    onClick={onViewAll}
                    className="px-6 py-2 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 text-sm font-bold rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                    धर्म र संस्कृति हेर्नुहोस्
                </button>
            </div>
        </div>
    );
};
