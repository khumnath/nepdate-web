import { BlogImages } from '../assets/blogImages';
import { Blog } from '../types/types';

export const nepdateLogo = BlogImages.nepdateLogo;
export type { Blog }; // Re-export for backward compatibility

// All month posts
import { baisakhPosts } from './posts/baisakh';
import { jesthaPosts } from './posts/jestha';
import { asharPosts } from './posts/ashar';
import { shrawanPosts } from './posts/shrawan';
import { bhadraPosts } from './posts/bhadra';
import { ashwinPosts } from './posts/ashwin';
import { kartikPosts } from './posts/kartik';
import { mangsirPosts } from './posts/mangsir';
import { poushPosts } from './posts/poush';
import { maghPosts } from './posts/magh';
import { falgunPosts } from './posts/falgun';
import { chaitraPosts } from './posts/chaitra';
import { generalPosts } from './posts/general';

export const BLOG_DATA: Blog[] = [
  ...baisakhPosts,
  ...jesthaPosts,
  ...asharPosts,
  ...shrawanPosts,
  ...bhadraPosts,
  ...ashwinPosts,
  ...kartikPosts,
  ...mangsirPosts,
  ...poushPosts,
  ...maghPosts,
  ...falgunPosts,
  ...chaitraPosts,
  ...generalPosts
];
