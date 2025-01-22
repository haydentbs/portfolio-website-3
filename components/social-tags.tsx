"use client"

import { Github, Linkedin, FileText } from 'lucide-react'
import { FaKaggle } from 'react-icons/fa';
import { trackClick } from '@/utils/analytics';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/haydentbs', 
    color: 'bg-[#333333]',
    category: 'github_profile'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://www.linkedin.com/in/hayden-tibbals', 
    color: 'bg-[#0077B5]',
    category: 'linkedin_profile'
  },
  { 
    name: 'CV', 
    icon: FileText, 
    url: '/Tibbals_CV.pdf', 
    color: 'bg-[#4CAF50]',
    category: 'cv_download'
  },
  { 
    name: 'Kaggle', 
    icon: FaKaggle, 
    url: 'https://www.kaggle.com/haydentibbals', 
    color: 'bg-[#20BEFF]',
    category: 'kaggle_profile'
  },
]

export default function SocialTags() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick(link.name, link.url, link.category)}
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white transition-transform hover:scale-105 ${link.color}`}
        >
          <link.icon className="w-4 h-4 mr-2" />
          {link.name}
        </a>
      ))}
    </div>
  )
}

