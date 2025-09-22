import { Component } from '@angular/core';
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
  imports: [CommonModule],
})

export class Categories {
  blogPosts: BlogPost[] = [
    {
      title: "Understanding Machine Learning",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQFFVtcH2pPWvA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1676957829971?e=2147483647&v=beta&t=7dLkYSRrtJml54uJdZfdTPNC4dwuMJTUfZDGWef566Y",
      category: "Machine Learning",
      author: "John Doe",
      date: "Sept 5, 2025",
      description: "An intro to how machines learn from data and make decisions.",
    },
    {
      title: "Deep Learning Explained",
      image: "https://www.mouser.in/blog/Portals/11/Dongang_Machine%20Learning_Theme%20Image-min_1.jpg",
      category: "Deep Learning",
      author: "Jane Smith",
      date: "Aug 22, 2025",
      description: "Delve into neural networks, backpropagation, and CNNs.",
    },
    {
      title: "AI in Robotics: A New Era",
      image: "https://kanerika.com/wp-content/uploads/2024/08/ai-in-robotics-1.png.webp",
      category: "Robotics",
      author: "Alan Turing",
      date: "July 30, 2025",
      description: "How AI is transforming modern robotics applications.",
    },
    {
      title: "NLP: Teaching Machines Language",
      image: "https://ik.imagekit.io/edtechdigit/usaii/content/images/how-natural-language-processing-is-powering-artificial-intelligence.jpg",
      category: "NLP",
      author: "Ada Lovelace",
      date: "Sept 2, 2025",
      description: "Explore natural language processing and its challenges.",
    },
    {
      title: "AI Ethics: What You Need to Know",
      image: "https://www.logicgate.com/wp-content/smush-webp/ensuring-ethical-and-responsible-ai-tools-and-tips-for-establishing-ai-governance-scaled-1.jpeg.webp",
      category: "AI Ethics",
      author: "Grace Hopper",
      date: "Aug 15, 2025",
      description: "Important ethical considerations in deploying AI systems.",
    },
    {
      title: "Reinforcement Learning Basics",
      image: "https://www.primotech.com/wp-content/uploads/2024/09/Reinforcement-Learning-In-AI-4.png",
      category: "Machine Learning",
      author: "Richard Sutton",
      date: "Sept 10, 2025",
      description: "Learn how agents learn to make decisions through rewards.",
    },
    {
      title: "Convolutional Neural Networks",
      image: "https://www.knowledgenile.com/wp-content/uploads/2025/02/Convolutional-Neural-Networks.jpg.webp",
      category: "Deep Learning",
      author: "Geoffrey Hinton",
      date: "Aug 28, 2025",
      description: "Understand the architecture behind image recognition.",
    },
    {
      title: "Robotics and Automation in Industry",
      image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/679a11fce0582c001c02c1eb.jpg",
      category: "Robotics",
      author: "Elon Musk",
      date: "Sept 1, 2025",
      description: "Industrial applications of robots powered by AI.",
    },
  ];

  displayedPosts: BlogPost[] = [...this.blogPosts];

  filterPosts(category: string) {
    if (category === 'All') {
      this.displayedPosts = [...this.blogPosts];
    } else {
      this.displayedPosts = this.blogPosts.filter(post => post.category === category);
    }
  }
}
