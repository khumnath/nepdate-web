import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Calendar, User, Share2, Clock } from 'lucide-react';
import { Blog } from '../../data/blogs';
import { toast } from '../components/shared/toast';

interface BlogDetailPageProps {
    blog: Blog;
    onBack: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blog, onBack }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top when loaded
        window.scrollTo(0, 0);
    }, [blog]);

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: `${blog.title}\n\n${blog.excerpt}\n\nRead more on NepDate app!`,
            url: window.location.origin,
        };

        // 1. Try Native Share (Mobile)
        // Note: Requires HTTPS (Secure Context)
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                return; // Success
            } catch (err) {
                // Ignore AbortError (User cancelled share)
                if (err instanceof Error && err.name === 'AbortError') return;
                console.warn('Share API failed, trying clipboard...', err);
            }
        }

        // 2. Fallback: Clipboard API
        // Note: Also requires HTTPS in some browsers
        const textToCopy = `${shareData.title}\n\n${shareData.text}\n${shareData.url}`;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(textToCopy);
                toast.success('Blog details copied to clipboard!');
                return;
            }
        } catch (err) {
            console.warn('Clipboard API failed, trying legacy...', err);
        }

        // 3. Fallback: Legacy execCommand (works in HTTP/older browsers)
        try {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;

            // Ensure element is not visible but part of DOM
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);

            if (successful) {
                toast.success('Blog details copied to clipboard!');
            } else {
                throw new Error('execCommand failed');
            }
        } catch (err) {
            console.error('All share methods failed', err);
            toast.error('Could not share or copy link');
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Hero Header */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

                {/* Navbar Area (Absolute) */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20">
                    <button
                        onClick={onBack}
                        className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all hover:scale-105"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all hover:scale-105"
                        >
                            <Share2 size={20} />
                        </button>
                    </div>
                </div>

                {/* Title Area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
                    <div className="flex gap-2 mb-3">
                        {blog.tags.map((tag, i) => (
                            !['9', '10', '11'].includes(tag) && (
                                <span key={i} className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                                    {tag}
                                </span>
                            )
                        ))}
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 shadow-black drop-shadow-lg font-serif">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm md:text-base">
                        <div className="flex items-center gap-1.5">
                            <User size={16} />
                            <span className="font-medium">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={16} />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={16} />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <article className="max-w-3xl mx-auto px-5 md:px-0 -mt-6 relative z-10">
                <div className="bg-white dark:bg-gray-800 rounded-t-3xl shadow-xl p-6 md:p-10 min-h-[500px]">
                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                        {/* Excerpt */}
                        <p className="lead text-xl font-medium text-gray-600 dark:text-gray-200 mb-8 border-l-4 border-blue-500 pl-4 italic">
                            {blog.excerpt}
                        </p>

                        {/* Dangerous HTML Content */}
                        <div
                            ref={contentRef}
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                            className="blog-content"
                        />
                    </div>

                    {/* Footer Section of Article */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
                            यो पनि पढ्नुहोस्
                        </h4>
                        {/* Simple Related Links could go here */}
                        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center text-sm text-gray-500 dark:text-gray-400">
                            थप लेखहरू चाँडै आउँदैछन्...
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};
