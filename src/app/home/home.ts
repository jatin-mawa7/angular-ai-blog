import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  name = 'Featured Blogs';
  news = 'Latest News';
  blogs = [
    {
      title: 'Understanding GPT-4 Architecture',
      image: 'https://orca.security/wp-content/uploads/2024/10/top-10-ai-model-blog.png?w=1044',
      description: 'An overview of GPT-4 architecture and applications.',
      link: 'https://example.com/ai-healthcare'
    },
    {
      title: 'Ethics in Artificial Intelligence',
      image: 'https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg',
      description: 'Exploring ethical dilemmas in Artificial Intelligence.',
      link: 'https://example.com/ai-education'
    },
    {
      title: 'Reinforcement Learning Simplified',
      image: 'https://www.iqraconsultancy.in/static/media/5-AI-Advancements.jpg.9b15a46c9568c7105498.jpeg',
      description: 'A beginner-friendly intro to reinforcement learning.',
      link: 'https://example.com/ai-finance'
    },
    {
      title: 'AI in Healthcare: Transforming Medicine',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVZ4qSTWcy72I3EdnghW7kndO3gtXxLbu2A&s',
      description: 'How AI is revolutionizing healthcare and patient care.',
      link: 'https://example.com/ai-healthcare'
    }
  ];

latestNews = [
  {
          title: "OpenAI Releases Model3.0",
          description: "The latest model brings improvements in reasoning.",
          image: "https://images.ctfassets.net/lzny33ho1g45/2olcy4TVSWAjqy5dsxLNZd/09b4a18346af97076615d5f1d1407c39/best-ai-image-generator-hero.jpg",
          link: "https://techcrunch.com/2025/01/31/openai-launches-o3-mini-its-latest-reasoning-model/"
        },
        {
          title: "AI in Education",
          description: "Schools are adopting AI to enhance personalized learning experiences.",
          image: "https://online.jwu.edu/wp-content/uploads/2024/03/JWU_March_Applications_AI.jpg",
          link: "https://www.geeksforgeeks.org/blogs/ai-in-education-personalized-learning/"
        },
        {
          title: "AI and Climate Change",
          description: "Exploring how AI helps in monitoring and combating global warming.",
          image: "https://cdn.britannica.com/47/246247-050-F1021DE9/AI-text-to-image-photo-robot-with-computer.jpg",
          link: "https://nelda.org.in/artificial-intelligence-climate-change/"
        }
      ];
}

