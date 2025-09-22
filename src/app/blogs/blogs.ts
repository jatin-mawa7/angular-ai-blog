import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

interface Post {
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, FormsModule],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {
  posts: Post[] = [
    {
      title: 'Understanding GPT-4 Architecture',
      author: 'Shitanshu Priyadarshi',
      date: 'Aug 2025',
      description: 'An overview of GPT-4 architecture and applications.',
      image: 'https://orca.security/wp-content/uploads/2024/10/top-10-ai-model-blog.png?w=1044',
      link: './single_blogs/one.html',
    },
    {
      title: 'Understanding GPT-4 Architecture',
      author: 'Shitanshu Priyadarshi',
      date: 'Aug 2025',
      description: 'An overview of GPT-4 architecture and applications.',
      image: 'https://orca.security/wp-content/uploads/2024/10/top-10-ai-model-blog.png?w=1044',
      link: './single_blogs/one.html',
    },
    {
      title: 'Ethics in Artificial Intelligence',
      author: 'Jatin Mava',
      date: 'Jan 2025',
      description: 'Exploring ethical dilemmas in Artificial Intelligence.',
      image:
        'https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg',
      link: './single_blogs/two.html',
    },
    {
      title: 'Reinforcement Learning Simplified',
      author: 'Ishita Saraswat',
      date: 'May 2025',
      description: 'A beginner-friendly intro to reinforcement learning.',
      image:
        'https://images.ctfassets.net/lzny33ho1g45/2olcy4TVSWAjqy5dsxLNZd/09b4a18346af97076615d5f1d1407c39/best-ai-image-generator-hero.jpg',
      link: './single_blogs/three.html',
    },
    {
      title: 'AI in Robotics',
      author: 'Aritra Bhadra',
      date: 'April 2025',
      description: 'How AI is changing robotics.',
      image: 'https://online.jwu.edu/wp-content/uploads/2024/03/JWU_March_Applications_AI.jpg',
      link: './single_blogs/four.html',
    },
    {
      title: 'Natural Language Processing Trends',
      author: 'Devyanshi Mishra',
      date: 'July 2025',
      description: 'Latest trends and breakthroughs in NLP.',
      image:
        'https://www.iqraconsultancy.in/static/media/5-AI-Advancements.jpg.9b15a46c9568c7105498.jpeg',
      link: './single_blogs/five.html',
    },
    {
      title: 'Natural Language Processing Trends',
      author: 'Krishna',
      date: 'Sept 2025',
      description: 'Latest trends and breakthroughs in NLP.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbu_FzMG-zrom751B2x2iLEiVey9lZV6Va-A&s',
      link: './single_blogs/one.html',
    },
    {
      title: 'Natural Language Processing Trends',
      author: 'Sophia Zhang',
      date: '2025-09-01',
      description: 'Latest trends and breakthroughs in NLP.',
      image:
        'https://assets.everspringpartners.com/dims4/default/fb976e9/2147483647/strip/true/crop/686x360+171+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fdf%2Fee%2F106592af4d508f76b29662e456db%2Fadvanced-ai.jpg',
      link: './single_blogs/two.html',
    },
    // ...rest of posts
  ];

  postsPerPage = 4;
  currentIndex = 0;

  filteredPosts: Post[] = [...this.posts]; // copy of original for search

  get displayedPosts(): Post[] {
    // Posts to show based on currentIndex and postsPerPage
    return this.filteredPosts.slice(0, this.currentIndex + this.postsPerPage);
  }

  ngOnInit() {
    // Initialize currentIndex to postsPerPage so initial posts show
    this.currentIndex = this.postsPerPage;
  }

  seeMore() {
    this.currentIndex += this.postsPerPage;
  }

  onSearch(query: string) {
    query = query.toLowerCase();
    this.filteredPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
    );
    this.currentIndex = this.postsPerPage; // Reset pagination after search
  }

  canSeeMore(): boolean {
    return this.currentIndex < this.filteredPosts.length;
  }

  blogSubmitted = false;

  blogData = {
    title: '',
    author: '',
    mail: '',
    content: '',
    tags: '',
  };

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Blog Submitted:', this.blogData);
      this.blogSubmitted = true;
      form.resetForm();
    }
  }
}
