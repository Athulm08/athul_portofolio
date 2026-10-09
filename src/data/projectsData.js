import dreamhomeImg from '../assets/project-dreamhome.jpg';
import agroconnectImg from '../assets/project-agroconnect.jpg';
import braillestudioImg from '../assets/project-braillestudio.jpg';

export const projectsData = [
  {
    id: 'dream-home',
    title: 'Dream Home and Rental System',
    shortDescription: 'A web application that helps users explore and purchase home plans, connect with architects or civil engineers, and access home rental services.',
    fullDescription: 'This web application helps users easily choose and purchase home plans, with options to connect directly with architects or civil engineers. Users can either buy just the plan or opt for a full construction package. The platform also supports communication with professionals, digital and courier delivery of plans, and rental services where users can request or list homes for rent. Architects can upload and manage their home plans, while listings are moderated by an admin.',
    image: dreamhomeImg,
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Browse and purchase home plans',
      'Connect with architects and civil engineers',
      'Select individual plans or full construction packages',
      'Support digital and courier delivery of plans',
      'List homes for rent or request rental properties',
      'Allow architects to upload and manage home plans',
      'Provide administrator moderation of listings'
    ],
    problemStatement: 'Finding reliable home plans and connecting with qualified architects can be challenging for homebuyers. Similarly, there is no centralized platform for home rental services that connects landlords with tenants efficiently.',
    objectives: [
      'Create a centralized platform for home plan discovery and purchase',
      'Enable direct communication between users and construction professionals',
      'Provide flexible options for plan delivery and construction packages',
      'Build a rental marketplace within the same ecosystem'
    ],
    results: [],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'agroconnect',
    title: 'AgroConnect – Farmer to Consumer Marketplace App',
    shortDescription: 'A mobile marketplace designed to connect farmers directly with consumers, reduce intermediaries, and improve price transparency in the agricultural supply chain.',
    fullDescription: 'AgroConnect is a mobile-based marketplace that directly connects farmers and consumers to eliminate intermediaries in the agricultural supply chain and improve price transparency and profits. The app, built with Flutter and Firebase, provides role-based dashboards where farmers can list and manage produce and consumers can browse, order, and track products in real time with secure authentication and push notifications. By enabling direct communication, inventory tracking, and order management, the system aims to empower farmers, offer fresh affordable produce to consumers, and create a more efficient and transparent supply chain.',
    image: agroconnectImg,
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firebase Auth', 'Cloud Firestore'],
    features: [
      'Separate farmer and consumer dashboards',
      'Farmer product listing and inventory management',
      'Product browsing and ordering',
      'Order tracking and management',
      'Firebase authentication',
      'Push notifications',
      'Direct connection between farmers and consumers'
    ],
    problemStatement: 'Farmers often receive low prices for their produce due to multiple intermediaries in the supply chain, while consumers pay inflated prices. There is a lack of direct communication channels between producers and buyers.',
    objectives: [
      'Eliminate intermediaries between farmers and consumers',
      'Improve price transparency in agricultural supply chain',
      'Provide real-time order tracking and management',
      'Enable secure authentication and push notifications'
    ],
    results: [],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: 'braillestudio',
    title: 'BrailleStudio – AI-Powered Braille-to-Language Translation',
    shortDescription: 'A web-based assistive technology platform designed to translate Braille documents into readable text and audible speech.',
    fullDescription: 'BrailleStudio is a web-based platform developed to bridge the communication gap for visually impaired individuals by automating the translation of Braille documents into readable text and audible speech. The system utilizes an OpenCV-based Computer Vision pipeline for robust dot detection from both digital and embossed images, and leverages a pretrained Flan-T5 Transformer model to provide context-aware text refinement, correcting grammatical errors and improving readability. Built with Python (FastAPI) and React, the application integrates Google Cloud APIs for multilingual translation into 11 languages and includes a Text-to-Speech (TTS) module for audio accessibility.',
    image: braillestudioImg,
    technologies: ['Python', 'FastAPI', 'React', 'OpenCV', 'Flan-T5', 'Google Cloud APIs'],
    features: [
      'Braille dot detection using computer vision',
      'Processing of digital and embossed Braille images',
      'Context-aware text refinement using Flan-T5 model',
      'Multilingual translation into 11 languages',
      'Text-to-speech functionality for accessibility'
    ],
    problemStatement: 'Visually impaired individuals face significant communication barriers when trying to share Braille documents with sighted readers. Manual Braille transcription is slow, expensive, and not widely available.',
    objectives: [
      'Automate Braille-to-text translation with high accuracy',
      'Support both digital and embossed Braille document images',
      'Provide multilingual translation capabilities',
      'Include audio accessibility through text-to-speech'
    ],
    results: [
      '93.4% character-level accuracy on real-world datasets',
      '23% improvement in readability through text refinement'
    ],
    githubUrl: null,
    liveUrl: null
  }
];
