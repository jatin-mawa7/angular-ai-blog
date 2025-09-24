import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface BlogPost {
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
  imports: [CommonModule, HttpClientModule]
})

export class Categories implements OnInit {
  blogPosts: BlogPost[] = [];
  displayedPosts: BlogPost[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    const apiUrl = 'https://dummyjson.com/c/d00b-d6bb-4282-9593';

    this.http.get<BlogPost[]>(apiUrl).subscribe({
      next: (posts) => {
        this.blogPosts = posts;
        this.displayedPosts = posts;
      },
      error: (error) => console.error('Error fetching blog posts:', error)
    });
  }

  filterPosts(category: string) {
    this.displayedPosts = category === 'All'
      ? this.blogPosts
      : this.blogPosts.filter(post => post.category === category);
  }
}
