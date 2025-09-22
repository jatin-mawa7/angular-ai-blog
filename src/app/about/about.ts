import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  blogTitle = 'AI Blog Hub';
  blogDescription = 'Welcome to the AI Blog Hub, your premier destination for cutting-edge insights into artificial intelligence, machine learning, and emerging technologies. We are passionate about making AI accessible and understandable for everyone, from beginners to industry professionals.';
  
  authorTitle = 'About Our Team';
  authorDescription = 'Our team consists of AI researchers, data scientists, and technology enthusiasts who are dedicated to exploring the latest developments in artificial intelligence. We combine technical expertise with clear communication to bring you the most relevant and engaging content.';
  
  missionTitle = 'Our Mission';
  missionDescription = 'To democratize AI knowledge and foster a community where innovation meets understanding. We believe that AI should be accessible to everyone, and through our blog, we strive to bridge the gap between complex AI concepts and practical understanding.';
  
  valuesTitle = 'Our Core Values';
  values = [
    'Innovation and cutting-edge research',
    'Clear and accessible communication',
    'Community-driven learning',
    'Ethical AI practices',
    'Continuous learning and growth',
    'Transparency in AI discussions'
  ];
}
