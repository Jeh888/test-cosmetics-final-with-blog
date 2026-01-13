// blogs/index.js - Exports all blog posts
// Add new blogs by importing them here

import botoxGuide from './botox-guide-london';
import lipFillerAftercare from './lip-filler-aftercare';
import antiAgeingTreatments from './best-anti-ageing-treatments-2025';

// Add all blogs to this array
export const blogs = [
  botoxGuide,
  lipFillerAftercare,
  antiAgeingTreatments,
];

// Helper functions
export function getAllBlogs() {
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogBySlug(slug) {
  return blogs.find(blog => blog.slug === slug) || null;
}

export function getAllBlogSlugs() {
  return blogs.map(blog => blog.slug);
}

export function getRecentBlogs(count = 3) {
  return getAllBlogs().slice(0, count);
}

export function getBlogsByService(serviceSlug) {
  return blogs.filter(blog => 
    blog.relatedServices && blog.relatedServices.includes(serviceSlug)
  );
}

export default blogs;
