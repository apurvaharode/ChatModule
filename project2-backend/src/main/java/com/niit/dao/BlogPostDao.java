package com.niit.dao;
import java.util.List;

import org.hibernate.Session;

import com.niit.model.BlogComment;
import com.niit.model.BlogPost;

public interface BlogPostDao {
void saveBlogPost(BlogPost blogPost);
List<BlogPost> getAllBlogs(int approved);
BlogPost getBlogPost(int id);
void updateBlogPost(BlogPost blogPost);
List<BlogPost> getApprovalStatus(String username);
void addBlogComment(BlogComment blogComment);
List<BlogComment> getBlogComments(int blogPostId);
void updateViewedStatus(List<BlogPost> blogPosts);
}