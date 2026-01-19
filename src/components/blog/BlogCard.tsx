import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { Blog, nepdateLogo } from '../../data/blogs';


interface BlogCardProps {
  blog: Blog;
  onClick: (blog: Blog) => void;
  compact?: boolean;
  onTagClick?: (tag: string) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onClick, compact = false, onTagClick }) => {
  const isDefault = blog.image === nepdateLogo;

  return (
    <div
      onClick={() => onClick(blog)}
      className={`
                group bg-white dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer
                border border-gray-100 dark:border-gray-700
                shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                flex flex-col h-full
            `}
    >
      {/* Image Section */}
      <div className={`relative overflow-hidden ${compact ? 'h-32' : 'h-48'} bg-gray-200 dark:bg-gray-700`}>
        <img
          src={blog.image}
          alt={blog.title}
          className={`w-full h-full transition-transform duration-700 ${isDefault
            ? 'object-contain p-8 bg-white dark:bg-gray-800' // Added padding and background for logo
            : 'object-cover group-hover:scale-110'
            }`}
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent ${isDefault ? 'opacity-30' : 'opacity-60'}`} />

        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {blog.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                onTagClick?.(tag);
              }}
              className="text-[10px] uppercase font-bold text-white bg-blue-600/90 px-2 py-1 rounded-md backdrop-blur-sm hover:bg-blue-700 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 space-x-2">
          <span className="font-medium text-blue-600 dark:text-blue-400">{blog.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
        </div>

        <h3 className={`font-bold text-gray-800 dark:text-gray-100 leading-tight mb-2 line-clamp-2 ${compact ? 'text-base' : 'text-lg'}`}>
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 flex-1">
          {blog.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <span className="text-xs font-semibold uppercase tracking-wide">Read Article</span>
          <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
